import { StyleSheet } from 'react-native';
const logo = require('./assets/talk_buddy_logo.png')

const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'var(--background-color)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerTransparent: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        color: 'var(--primary-text-color)',
        backgroundColor: 'var(--text-input-color)',
        borderRadius: 10,
        width: '80%',
        padding: 7,
        paddingLeft: 13,
        fontFamily: 'var(--sans-font)',
        fontWeight: 'semi-bold',
        marginTop: 10,
    },
    errorButton : {
        backgroundColor: 'var(--error-back-color)',
    },
    errorButtonText : {
        color: 'var(--error-text-color)',
    },
    backgroundImage : {
        backgroundImage : `url(${logo})`,
        background: 'rgb(253,51,51)',
        background: 'var(--background-color)',
        backgroundRepeat : 'no-repeat',
        backgroundPosition: 'center',
        filter : 'blur(1px)',
        width : '100vw',
        height : '100vh',
        position : 'absolute',
        top: 0,
        left: 0,
    },
    icon : {
        color: 'var(--icon-color)'
    },
    iconContainer: {
        fontSize: 23
    }
});

export { globalStyle };