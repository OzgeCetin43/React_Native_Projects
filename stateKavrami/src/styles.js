import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2e2e2e",
        justifyContent: "center",
        alignItems: "center"
    }, 
    
    textStyle: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold"
    },

    incrementBtn: {
        width: 50,
        height: 50,
        padding: 10,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0ff",
        marginBottom: 10
    },  

    decrementBtn: {
        width: 50,
        height: 50,
        padding: 10,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff0",
        marginTop: 10
    }, 

});