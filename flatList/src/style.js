import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        color: "darkorange",
        fontSize: 32,
        fontWeight: "bold"
    },

    separator: {
        width: "75%",
        height: 3,
        backgroundColor: "#212121",
        alignSelf: "center",
        margin: 10
    },

    list: {
        width: "100%",
        marginTop: 20
    }
});