import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import DarkTheme from '../components/DarkTheme';
import { Checkbox } from 'react-native-paper';



import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import { globalStyle } from '../globalStyle';
import { LoginService } from '../services/LoginService';
import { authSlice } from '../redux/authSlice';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isPass, setIsPass] = useState(false);

    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();
    const { setAuth } = authSlice.actions;

    const login = async () => {
        const data = { email, password };

        LoginService.login(data)
            .then((response) => {
                console.log(response)

                if (response.status == 200) {
                    dispatch(setAuth({token:response.token, userId: response.userId}));

                   navigation.navigate('main-page');
                }

                setErrorMessage('Invalid email or password!');
                setShowError(true);
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
            { error() }

            <TextInput type='outlined' style={globalStyle.textInput}
                placeholder='example@email.com'
                placeholderTextColor='var(--secondary-text-color)'
                textColor='var(--primary-text-color)'
                label='Email or Number'
                maxLenght={80}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            ></TextInput>

            <TextInput type='outlined' style={globalStyle.textInput}
                placeholder='*******'
                label='Password'
                secureTextEntry={!isPass}
                placeholderTextColor='var(--secondary-text-color)'
                textColor='var(--primary-text-color)'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            ></TextInput>

            <View style={styles.checkbox}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Checkbox
                        status={isPass ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setIsPass(!isPass);
                        }}
                        color='#FF00FF'
                        
                    />
                    <Text style={globalStyle.text}>
                        Show password
                    </Text>
                </View>

                <TouchableOpacity style={styles.forgotPassword}
                    onPress={() => navigation.navigate('forgotPassword')}    
                    >
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button}
                onPress={ login }    
            >
                <Text style={styles.loginText}>Login</Text>
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
        fontFamily: 'var(--sans-font)',
        fontSize: 15,
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
        backgroundColor: 'var(--primary-app-color)',
        borderRadius: 10,
        padding: 7,
        marginTop: 15,
        fontFamily: 'var(--sans-font)',
        width: "80%",
        textAlign: 'center',
    },
    checkbox : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 7
    },
    loginText: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center'
    }
});