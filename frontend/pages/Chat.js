import { useState } from 'react'
import { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native-web'
import { ChatHeader } from '../components/ChatHeader'
import { ChatService } from '../services/ChatService'

import { ReceivedMessage } from '../components/ReceivedMessage'
import { SentMessage } from '../components/SentMessage'
import { useSelector } from 'react-redux'

const Chat = (props) => {
    const { idUser } = useSelector(store => store.auth)

    const [chat, setChat] = useState({})

    const getChat = async () => {
        const chat = await ChatService.getChat(props.idChat, 'token')
        setChat(chat)
        console.log(chat)
    }

    const renderMessage = (item) => {
        if (item.senderId == idUser) {
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

    return(
        <>
            <ChatHeader
                contactName={chat.contactName}
            />

            <FlatList
                data={chat.messages}
                renderItem={({item}) => renderMessage(item)}
                keyExtractor={item => item.id}
            />
        </>
    )
}

export { Chat }

const syles = StyleSheet.create({
    
})