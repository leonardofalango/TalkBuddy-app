import axios from 'axios'
const baseUrl = 'http://localhost:8080/user'

class UserService {
    static findUser = async (token, idUser) => {
        return await axios.get(
            `${baseUrl}/${idUser}`,{
            headers: {
                "Authorization": 'Bearer ' + token
            }}
        )
    }

    static findUserByEmail = async (token, email) => {
        return await axios.get(
            `${baseUrl}/username/${email}`,{
            headers: {
                "Authorization": 'Bearer ' + token
            }}
        )
    }
}

export { UserService }