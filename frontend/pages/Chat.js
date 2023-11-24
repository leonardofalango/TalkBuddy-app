import { useState } from 'react'
import { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native-web'
import { ChatHeader } from '../components/ChatHeader'
import ContactComponent from '../components/Contact'
import { ChatService } from '../services/ChatService'

import { ReceivedMessage } from '../components/ReceivedMessage'
import { SentMessage } from '../components/SentMessage'

const Chat = () => {
    const [chat, setChat] = useState({})

    const getChat = async () => {
        const chat = await ChatService.getChat(1, 'token')
        setChat(chat)
        console.log(chat)
    }

    const renderMessage = (item) => {
        if (item.isMine) {
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