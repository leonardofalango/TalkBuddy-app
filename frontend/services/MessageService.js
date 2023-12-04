import axios from 'axios'
const baseUrl = 'http://localhost:8080/msg'

class MessageService {
    static getMessages = async (token, idChat) => {
        return axios.get(`${baseUrl}/${idChat}`,{
            headers: {
                "Authorization": 'Bearer ' + token
            }
        })
    }

    static publishMessage = async (token, idChat, senderId, msg) => {
        return axios.post(`${baseUrl}/${idChat}`, {
            senderId : senderId,
            message : msg
        }, {
            headers: {
                "Authorization": 'Bearer ' + token
            } 
        })
    }
}

export { MessageService }