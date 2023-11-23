import { AppBarComponent } from "./Appbar"
import { MySearchBar } from "./SearchBar"
import { View } from 'react-native'
import { StyleSheet, Text, TouchableOpacity } from "react-native-web"
import { globalStyle } from "../globalStyle"


const HeaderMain = () => {
    return (
        <View style={{backgroundColor: 'var(--background-color)'}}>
        <View style={styles.header}>
            <AppBarComponent title='Talk-Buddy' />
            <MySearchBar />
        </View>
        <TouchableOpacity>
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