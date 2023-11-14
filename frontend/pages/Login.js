import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import DarkTheme from '../components/DarkTheme';
import { useState } from 'react';

import { globalStyle } from '../globalStyle';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        console.log('login')
    }

    return (
        <>
        <View style={ globalStyle.backgroundImage }>
        </View>

        <View style={ globalStyle.containerTransparent }>
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


            <TouchableOpacity style={styles.button}
                onPress={ login }    
            >Login</TouchableOpacity>

            <TouchableOpacity style={styles.forgotPassword}
                onPress={() => navigation.navigate('forgotPassword')}    
            >Forgot Password?</TouchableOpacity>
            
            <TouchableOpacity style={styles.register}
                onPress={() => navigation.navigate('cadastro')}
            ><Text style={styles.textButton}>Register</Text></TouchableOpacity>
        
        </View>
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
    },
    errorMessage : {
        color: 'var(--error-color)',
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