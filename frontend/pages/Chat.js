import { useState } from 'react'
import { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native-web'
import { ChatHeader } from '../components/ChatHeader'
import { MessageService } from '../services/MessageService'

import { ReceivedMessage } from '../components/ReceivedMessage'
import { SentMessage } from '../components/SentMessage'
import { useSelector } from 'react-redux'
import { UserService } from '../services/UserService'
import { KeyboardInput } from '../components/KeyBoardInput'
import { ActivityIndicator } from 'react-native-paper'

const Chat = ({route, navigation}) => {
    const [chat, setChat] = useState({})

    const { token, userId } = useSelector(store => store.auth);

    const [contactName, setContactName] = useState('')

    const { chatId, contactId } = route.params

    const [hasNewMessage, setHasNewMessage] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const getChat = async () => {
        const chat = await MessageService.getMessages(token, chatId)
        setChat(chat.data)
    }

    useEffect(() => {
        async function getContact() {
            const u = await UserService.findUser(token, contactId);
            setContactName(u.data.name);
        }
        getContact()
    }, [])

    const renderMessage = (item) => {
        if (item.senderId == userId) {
            return (
                <SentMessage
                    content={item.message}
                />
            )
        }
        else {
            return (
                <ReceivedMessage
                    content={item.message}
                />
            )
        }
    }

    useEffect(() => { getChat() }, [])
    useEffect(() => {
        getChat()
    }, [hasNewMessage])

    return(
        <>
            <ChatHeader
                contactName={contactName}
            />

            <FlatList
                data={chat}
                renderItem={({item}) => renderMessage(item)}
                keyExtractor={item => item.id}
            />

            <ActivityIndicator animating={isLoading} />

            <KeyboardInput idChat={chatId}
                newMessage={setHasNewMessage}
                msgFlag={hasNewMessage}
                isLoading={setIsLoading}
            />
        </>
    )
}

export { Chat }

const syles = StyleSheet.create({
    
})