import {StyleSheet} from "react-native";
import {colors} from "./colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor
    },

    header: {
        backgroundColor: colors.headerBg,
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },

    listArea: {
        flex: 9,
        padding: 20
    },

    addTodoArea: {
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        backgroundColor: colors.blue,
        position: "absolute",
        bottom: 20,
        right: 20
    },

    headerTitle: {
        color: colors.white,
        fontSize: 25,
        textAlign: "center",
        padding: 10,
        fontWeight: "500"
    },

    line1: {
        width: 100,
        height: 3,
        backgroundColor: colors.white,
        position: "relative",
        left: 40
    },

    line2: {
        width: 100,
        height: 3,
        backgroundColor: colors.blue,
        position: "relative",
        left: -45
    },
    
    textStyle: {
        color: colors.blue,
        textAlign: "center",
        fontSize: 25,
        marginBottom: 20
    },

    userInput: {
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 5,
        marginVertical: 20,
        color: colors.white,
        fontSize: 20,
        textAlign: "center"
    },

    todo: {
        color: colors.white,
        fontSize: 18
    },

    todoIcon: {
        fontSize: 25, 
        color: colors.white
    }
});