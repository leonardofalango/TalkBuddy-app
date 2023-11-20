
import Aes from 'react-native-aes-crypto'
import axios from 'axios'

class LoginService
{
    static login = async (data) => {
        // encrypting with aes
        try {
            // const dataAes = (text, key) => {
            //     return Aes.randomKey(16).then(iv => {
            //         return Aes.encrypt(text, key, iv, 'aes-256-cbc').then(cipher => ({
            //             cipher,
            //             iv,
            //         }))
            //     })
            // }
            // console.log(dataAes);
    
            const dataAes = data

            const response = await axios.post("http://localhost:8080/user/login", dataAes)
            return response.data;
        } catch (error) {
            throw error;
        }

    }

    static register = async (data) => {
        try {
            const response = await axios.post("http://localhost:8080/user/register", data)

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