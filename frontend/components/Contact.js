import { StyleSheet, Text, View, Image } from 'react-native';

const ContactComponent = ({props}) => {
    
    const iconCheck = () => {
        if(props.isYourMessage){
            if(props.isRead){
                return (
                    // <Image source={require('../assets/icons/check-double.png')} style={styles.checkIcon} />
                    <></>
                )
            }else{
                return (
                    // <Image source={require('../assets/icons/check.png')} style={styles.checkIcon} />
                    <></>
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

    return (
        <View style={styles.container}>
            <Image source={props.image} style={styles.image} />

            <View style={styles.containerCenter}>
                { iconCheck() }
                <Text style={styles.contactName}>
                    {props.name? props.name : props.number}
                </Text>
                <Text style={styles.lastMessage} numberOfLines={2}>
                    {props.lastMessage}
                </Text>
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
        color: 'var(--primart-text-color)',
    },

    timeText: {
        color: 'var(--primary-system-color)',
    },
    timeTextRead: {
        color: 'var(--text-input-color)',
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
        color: 'var(--text-input-color)',
        fontSize: 15,
    }
})

export default ContactComponent;