import axios from 'axios'
const baseUrl = 'http://localhost:8080/chats'

class ChatService
{

    static async createChat(token, userId1, userId2) {
        return await axios.post(`${baseUrl}/createChat`, {
            userId1,
            userId2
        }, {
            headers: {
                "Authorization": 'Bearer ' + token
            }
        })
    }

    static async findChat(token, userId1, userId2) {
        return await axios.get(`${baseUrl}/find/${userId1}/${userId2}`, {}, {
            headers: {
                "Authorization": 'Bearer ' + token
            }
        })
    }

    static async getChats(token, userId) {
        console.log(`${baseUrl}/${userId}`)
        return await axios.get(`${baseUrl}/${userId}`, {
            headers: {
                "Authorization": 'Bearer ' + token
            }
        })
    }
}

export { ChatService }