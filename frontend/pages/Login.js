import DarkTheme from '../components/DarkTheme';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import { globalStyle } from '../globalStyle';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <View style={globalStyle.container}>
            <DarkTheme shown={true} />

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

            <TouchableOpacity style={styles.forgotPassword}
                onPress={() => navigation.navigate('forgotPassword')}    
            >Forgot Password?</TouchableOpacity>
            
           <TouchableOpacity style={styles.register}
                onPress={() => navigation.navigate('cadastro')}
            ><Text style={styles.textButton}>Register</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'var(--primary-text-color)',
    },
    
    forgotPassword: {
        color: 'var(--primary-app-color)',
        marginTop: 10,
        fontFamily: 'var(--sans-font)',
    },
    register: {
        color: 'var(--secondary-text-color)',
        borderRadius: 10,
        padding: 7,
        fontFamily: 'var(--sans-font)',
        textDecorationLine: 'underline',
    },
    errorMessage : {
        color: 'var(--error-color)',
    },
    textButton : {
        color: 'var(--primary-text-color)',
    }
});