import { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { globalStyle } from '../globalStyle';

export default function Cadastro({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const register = () => {
        console.log("Registering...")
        checkPassword();
    }

    const checkPassword = () => {
        if (password === confirmPassword) {
            return true;
        } else {
            console.log("Passwords not equal!")
            setErrorMessage('Passwords must be equal!')
            return false;
        }
    }

    const error = () => {
        if (errorMessage !== '') {
            return (
                <TouchableOpacity style={globalStyle.errorButton}
                    onPress={() => setErrorMessage('')}
                >
                    <Text style={globalStyle.errorButtonText}>{errorMessage}</Text>
                </TouchableOpacity>
            )
        }
    }

    const [errorMessage, setErrorMessage] = useState('');

    return (
        <View style={globalStyle.container}>
            {
                error()
            }

            <TouchableOpacity style={globalStyle.backButton}
                onPress={() => navigation.navigate('login')}
            ><Text style={globalStyle.textButton}>Back</Text></TouchableOpacity>
            
            <TextInput style={globalStyle.textInput}
                placeholder='Email'
                placeholderTextColor='var(--secondary-text-color)'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            ></TextInput>

            <TextInput style={globalStyle.textInput}
                placeholder='Number'
                placeholderTextColor='var(--secondary-text-color)'
                onChange={(e) => setNumber(e.target.value)}
                value={number}
            ></TextInput>

            <TextInput style={globalStyle.textInput}
                placeholder='Name or Username'
                placeholderTextColor='var(--secondary-text-color)'
                onChange={(e) => setName(e.target.value)}
                value={name}
            ></TextInput>

            <TextInput style={globalStyle.textInput}
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor='var(--secondary-text-color)'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            ></TextInput>
            <TextInput style={globalStyle.textInput}
                placeholder='Confirm Password'
                secureTextEntry={true}
                placeholderTextColor='var(--secondary-text-color)'
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
            ></TextInput>

            <TouchableOpacity style={styles.registerButton}
                onPress={register}
            ><Text style={globalStyle.textButton}>Register</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    registerButton : {
        backgroundColor: 'var(--primary-app-color)',
        borderRadius: 10,
        padding: 7,
        fontFamily: 'var(--sans-font)',
        color: 'var(--primary-text-color)',
        marginTop: 10,
    },
    textButton : {
        color: 'var(--primary-text-button-color)',
    }
})
