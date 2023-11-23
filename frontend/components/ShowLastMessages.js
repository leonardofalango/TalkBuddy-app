import { Surface } from "react-native-paper";
import { StyleSheet, View } from "react-native-web";
import { ReceivedMessage } from "./ReceivedMessage";
import { SentMessage } from "./SentMessage";

const ShowLastMessages = (props) => {
    
    return (
        <View style={styles.content}>
        <Surface  style={styles.container} elevation={4}>
            <ReceivedMessage content={'flais flins flus'}/>
            <SentMessage content={'flais flins flus'}/>
        </Surface >
        </View>
    );
};

export { ShowLastMessages }


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'var(--background-color)',
        height: '50vh',
        width: '80vw',
        borderRadius: 7
    },
    content: {
        justifyContent: 'center',
        paddingHorizontal: 13,
        alignItems: 'center',
    },
    
})