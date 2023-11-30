import defaultImage from '../assets/talk_buddy_logo.png'
import SettingsIcon from '@mui/icons-material/Settings';
import { StyleSheet, TouchableOpacity, View } from "react-native-web"
import { Surface, Text } from "react-native-paper"
import { Image } from "react-native"
import { useNavigation } from '@react-navigation/native';

const ChatHeader = (props) => {
    const navigation = useNavigation();
    
    return(
        <>
        <Surface style={styles.container} elevation={1}>
            <TouchableOpacity
                onPress={() => navigation.navigate('main-page')}
            >
            <Image source={
                props.image? props.image : defaultImage
            } style={styles.image} />
            </TouchableOpacity>

            <View style={styles.containerCenter}>
                <Text style={styles.contactName}>{props.contactName}</Text>
            </View>

            <TouchableOpacity style={styles.options}>
                <SettingsIcon />
            </TouchableOpacity>
        </Surface>
        </>
    )
}

export { ChatHeader }

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        backgroundColor: 'var(--background-color)',
        borderBottomWidth: 1,
        borderBottomColor: 'var(--primary-app-color)',
        paddingVertical: 10,
        paddingRight: 13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 50,
        resizeMode: 'cover',
        marginHorizontal: 10,
    },
    containerCenter: {
        justifyContent: 'center',
        width: '60%',
    },
    contactName : {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'var(--primary-text-color)',
    }
})	