import { View, StyleSheet, useState, requireNativeComponent} from 'react-native';
const { Service } = require('../services/Service')
import { RNCamera } from 'react-native-camera';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>

        <RNCamera
            ref={ref => {
                this.camera = ref;
            }}
            style={ styles.preview }
            type={ RNCamera.Constants.Type.back }
            flashMode={ RNCamera.Constants.FlashMode.on }
            androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
                console.log(barcodes);
            }}
        />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },   
});