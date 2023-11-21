
import Aes from 'react-native-aes-crypto'
import axios from 'axios'

class LoginService
{
    static login = async (data) => {
        try {
            const response = await axios.post("http://localhost:8080/user/login", data)
            return response.data;
        } catch (error) {
            throw error;
        }

    }

    static register = async (data) => {
        try {
            const response = await axios.post("http://localhost:8080/user/register", data,{
                headers:{
                    'Access-Control-Allow-Origin':"*",
                }
            })

            switch (response.status) {
                case 200:
                    return response.data;
                case 400:
                    throw new Error("Invalid credentials");
                default:
                    throw new Error("Something went wrong");
            }
        } catch (error) {
            throw error;
        }
    }
}

export { LoginService }