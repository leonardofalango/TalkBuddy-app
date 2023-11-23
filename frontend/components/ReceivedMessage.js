import { Text } from "react-native-paper"
import { StyleSheet, View } from "react-native-web"

const ReceivedMessage = (props) => {

    return(
        <View style={styles.received} >
            <Text style={{ fontSize: 16, color: "#000",justifyContent:"center" }}>
                {props.content}  
            </Text>
            <View style={styles.leftArrow}>
            </View>
            <View style={styles.leftArrowOverlap}></View>
        </View>
    )
}

export { ReceivedMessage }

const styles = StyleSheet.create({   
    /*Arrow head for recevied messages*/
    leftArrow: {
        position: "absolute",
        backgroundColor: "#dedede",
        //backgroundColor:"red",
        width: 20,
        height: 25,
        bottom: 0,
        borderBottomRightRadius: 25,
        left: -10
    },
    
    leftArrowOverlap: {
        position: "absolute",
        backgroundColor: "var(--background-color)",
        //backgroundColor:"green",
        width: 20,
        height: 35,
        bottom: -6,
        borderBottomRightRadius: 18,
        left: -20
    
    },
    received: {
        backgroundColor: "#dedede",
        padding:10,
        borderRadius: 5,
        marginTop: 5,
        marginLeft: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-start',
        //maxWidth: 500,
        //padding: 14,
        
        //alignItems:"center",
        borderRadius: 20,
    }
    })