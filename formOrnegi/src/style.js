import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

    title: {
        color: "#1A237E",
        fontSize: 43,
        fontWeight: "bold",
        textShadowColor: "#7986CB",
        textShadowOffset: {width: 0, height: -5},
        textShadowRadius: 25,
        padding: 15
    },

    inputStyle: {
        borderWidth: 2,
        borderColor: "#1A237E",
        borderRadius: 10,
        width: "100%",
        marginVertical: 10,
        padding: 10,
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: "#FFF",
        backgroundColor: "#1A237E"
    },

    loginBtn: {
        backgroundColor: "#212121",
        width: "100%",
        padding: 15,
        borderRadius: 10
    },

    loginText: {
        color: "#FFF",
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold"
    }
});