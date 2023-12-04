import { ArrowRight, ArrowRightAlt } from "@mui/icons-material";
import { useState } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper"
import { useSelector } from "react-redux";
import { MessageService } from "../services/MessageService";

const KeyboardInput = (props) => {
    const { token, userId } = useSelector(store => store.auth);
    const [ txt, setTxt ] = useState('');

    const onClickHandler = async () => {
        
        props.isLoading(true)
        const isMessageSend = await MessageService.publishMessage(token, props.idChat, userId, txt)
        props.newMessage(!props.msgFlag);
        setTxt('')
        props.isLoading(false)
    }

    return(
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between'
        }}>
            <TextInput placeholder="Digite sua mensagem..."
                value={txt}
                onChangeText={(e) => setTxt(e)}
                style={{
                    width: '95%'
                }}
            />
            <TouchableOpacity onPress={onClickHandler}>
                <ArrowRight />
            </TouchableOpacity>
        </View>
    )
}

export { KeyboardInput }