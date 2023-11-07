
import CryptoJS from "react-native-crypto-js";
import axios from 'axios'

class Service
{
    static login = async (data) => {
       return { token: 'logged' }
    }
}

export { Service }