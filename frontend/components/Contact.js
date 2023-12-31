import { StyleSheet, Text, View, Image } from 'react-native';
const defaultImage = require('../assets/talk_buddy_logo.png')
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DoneIcon from '@mui/icons-material/Done';
import { useSelector } from 'react-redux';
import { UserService } from '../services/UserService';
import { useEffect, useState } from 'react';

const ContactComponent = ({props}) => {

    const { token, userId } = useSelector(store => store.auth);

    const otherUser = props.usersId[0] == userId? props.usersId[1] : props.usersId[0]

    const [contactName, setContactName] = useState('')

    const iconCheck = () => {
        if(props.isYourMessage){
            if(props.isRead){
                return (
                    <DoneAllIcon style={ styles.icon } />
                )
            }else{
                return (
                    <DoneIcon style={ styles.icon } />
                )
            }
        }
    }

    const unreadMessagesRender = () => {
        if(props.unreadMessages > 0){
            return(
                <View style={styles.unreadMessages}>
                    <Text style={styles.unreadMessagesText}>
                        {props.unreadMessages}
                    </Text>
                </View>
            )
        }
    }

    useEffect(() => {
        async function getContact() {
            const u = await UserService.findUser(token, otherUser);
            setContactName(u.data.name);
        }
        getContact()
    }, [])

    return (
        <View style={styles.container}>
            <Image source={
                props.image? props.image : defaultImage
            } style={styles.image} />

            <View style={styles.containerCenter}>
                <Text style={styles.username}
                    numberOfLines={1}
                >
                    {contactName}
                </Text>
                <View style={ styles.row }>
                    { iconCheck() }
                    <Text style={styles.lastMessage} numberOfLines={2}>
                        {props.lastMessage}
                    </Text>
                </View>
            </View>
                

            <View style={styles.time}>
                <Text style={[
                    props.isRead? styles.timeTextRead : styles.timeText,
                ]}>
                    {props.lastmessageTime}
                </Text>
                { unreadMessagesRender() }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 95,
        paddingVertical: 10,
        paddingRight: 10,
        overflow: 'hidden',
    },

    containerCenter: {
        justifyContent: 'center',
        width: '60%',
    },
    contactName: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'var(--primary-text-color)',
    },

    timeText: {
        color: 'var(--primary-system-color)',
    },
    timeTextRead: {
        color: 'var(--secondary-text-color)',
    },
    time: {
        alignItems: 'flex-end',
        gap: 10,
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 50,
        resizeMode: 'cover',
        marginHorizontal: 10,
    },
    unreadMessages: {
        backgroundColor: 'var(--primary-system-color)',
        borderRadius: 50,
        width: 31,
        height: 31,
        justifyContent: 'center',
        alignItems: 'center'
    },
    unreadMessagesText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFFFFF',
        // cut off the text if it doesn't fit in one line
        flexShrink: 1,
    },
    lastMessage : {
        paddingTop: 5,
        lineHeight: '1.2rem',
        color: 'var(--secondary-text-color)',
        fontSize: 15,
    },
    row: {
        flexDirection: 'row',
        gap: 5
    },
    icon: {
        color: 'var(--text-input-color)'
    },
    username : {
        overflow: 'hidden',
        display: 'web-kit-box',
        lineClamp: '1'
    }
})

export default ContactComponent;