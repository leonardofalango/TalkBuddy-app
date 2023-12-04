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
}

export { UserService }