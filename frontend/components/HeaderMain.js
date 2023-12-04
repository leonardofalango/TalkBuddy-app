import { AppBarComponent } from "./Appbar"
import { MySearchBar } from "./SearchBar"
import { StyleSheet, Text, TouchableOpacity } from "react-native-web"
import { globalStyle } from "../globalStyle"

import { View } from 'react-native';

const HeaderMain = (props) => {
    

    return (
        <View style={{backgroundColor: 'var(--background-color)'}}>
        <View style={styles.header}>
            <AppBarComponent title='Talk-Buddy' />
            <MySearchBar />
        </View>
        <TouchableOpacity onPress={() => props.showDialog()}>
            <Text style={globalStyle.icon}>
                Iniciar uma nova conversa
            </Text>
        </TouchableOpacity>
        </View>
    )
}

export { HeaderMain }

const styles = StyleSheet.create({
    header : {
        height: 250,
        gap: 10,
        paddingHorizontal : 13,
    }
})