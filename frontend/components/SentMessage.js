import { Text } from "react-native-paper"
import { StyleSheet, View } from "react-native-web"

const SentMessage = (props) => {

    return(
        <View style={styles.divMessage}>
            <Text style={{ fontSize: 16, color: "#FFF", }}>{props.content}</Text>
            <View style={styles.rightArrow}></View>
            <View style={styles.rightArrowOverlap}></View>
        </View>
    )
}

export { SentMessage }


const styles = StyleSheet.create({
    rightArrow: {
      position: "absolute",
      backgroundColor: "#0078fe",
      //backgroundColor:"red",
      width: 20,
      height: 25,
      bottom: 0,
      borderBottomLeftRadius: 25,
      right: -10
    },
    
    rightArrowOverlap: {
      position: "absolute",
      backgroundColor: "var(--background-color)",
      //backgroundColor:"green",
      width: 20,
      height: 35,
      bottom: -6,
      borderBottomLeftRadius: 18,
      right: -20
    
    },
    divMessage: {
        backgroundColor: "#0078fe",
        padding:10,
        marginLeft: '45%',
        borderRadius: 5,
        marginTop: 5,
        marginRight: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-end',
        
        borderRadius: 20,
        marginRight: 20
    }
    })