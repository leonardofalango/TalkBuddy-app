import { StyleSheet } from 'react-native';

const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'var(--background-color)',
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
    textButton : {
        color: 'var(--primary-text-button-color)',
    }
});

export { globalStyle };