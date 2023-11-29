import axios from 'axios'
import { AsyncStorage } from 'react-native'

class ChatService
{
    // static token = AsyncStorage.getItem('token');
    static getChat(chatID) {
        // Just for testing
        const chat = {
            id: 1,
            contactName: 'A Vida 🌷💓💍',
            messages: [
                {
                    id: 1,
                    isMine: 0,
                    message: 'BOOOOMMMM DIA MINHA VIDAAAA',
                    timestamp: '15:45'
                },
                {
                    id: 2,
                    isMine: 1,
                    message: 'EU TE AMO EU TE AMO EU TE AMO',
                    timestamp: '15:46'
                },
                {
                    id: 3,
                    isMine: 1,
                    message: 'EU TE AMOOOOOOOOOOOOOOOOO!'
                },
            ]
                
        }
        return chat


        return axios.post('/api/chat/' + chatID, {}, {
            headers: {
                token: 'bearer ' + token
            }
        })
    }

    static getChats(token) {
        return axios.post('/api/chat', {}, {
            headers: {
                token: 'bearer ' + token
            }
        })
    }
}

export { ChatService }