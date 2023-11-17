import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import DarkTheme from '../components/DarkTheme';

import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import { globalStyle } from '../globalStyle';
import { LoginService } from '../services/LoginService';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const login = () => {
        const data = { email, password };
        console.log(data)

        LoginService.login(data)
            .then((response) => {
                console.log(response);
                navigation.navigate('main');
            })

            .catch((error) => {
                setShowError(true);
                console.log(error);
                switch (error.status) {
                    case 400:
                        setErrorMessage('Invalid email or password!');
                        break;
                    case 500:
                        setErrorMessage('Server error!');
                        break;
                    default:
                        setErrorMessage('Unknown error!');
                        break;
                }
            });
    }

    const error = () => {
        if (showError) {
            return (
                <TouchableOpacity style={globalStyle.errorButton} onPress={ () => setShowError(false)}>
                <Text style={globalStyle.errorButtonText}>{errorMessage}</Text>
                </TouchableOpacity>
            )
        }
        return(
            <></>
        );
    }

    return (
        <>
        <LinearGradient
            // Background Linear Gradient
            colors={['var(--background-color)', 'var(--background-color)', 'var(--primary-app-color)']}
            style={globalStyle.containerTransparent}
        >
            <DarkTheme shown={true} />

            { error() }

            <TextInput style={globalStyle.textInput}
                placeholder='Email or Number'
                placeholderTextColor='var(--secondary-text-color)'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            ></TextInput>

            <TextInput style={globalStyle.textInput}
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor='var(--secondary-text-color)'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            ></TextInput>


            <TouchableOpacity style={styles.button}
                onPress={ login }    
            >
                <>Login</>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotPassword}
                onPress={() => navigation.navigate('forgotPassword')}    
            >
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.register}
                onPress={() => navigation.navigate('cadastro')}
            >
                <Text style={styles.textButton}>Register</Text>
            </TouchableOpacity>
        </LinearGradient>
        </>
        )
}

const styles = StyleSheet.create({
    text: {
        color: 'var(--primary-text-color)',
    },
    
    forgotPassword: {
        color: 'var(--primary-system-color)',
        marginTop: 7,
        fontFamily: 'var(--sans-font)',
        fontSize: 16,
        height: 15
    },
    register: {
        color: 'var(--secondary-text-color)',
        borderRadius: 10,
        padding: 7,
        fontFamily: 'var(--sans-font)',
        marginTop: 10,
    },
    textButton : {
        color: 'var(--primary-text-color)',
    },
    button : {
        color: 'white',
        backgroundColor: 'var(--primary-system-color)',
        borderRadius: 10,
        padding: 7,
        marginTop: 10,
        fontFamily: 'var(--sans-font)',
        width: "80%",
        textAlign: 'center',
    }
});