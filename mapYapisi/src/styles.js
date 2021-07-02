import {StyleSheet} from "react-native";
import {colors} from "./color"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,
    },

    titleStyle: {
        fontSize: 40,
        color: colors.titleColor,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20
    },

    todoItemStyle: {
        borderColor: colors.borderColor,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        margin: 10
    },

    completedItemStyle: {
        fontSize: 18,
        textAlign: "center",
        backgroundColor: colors.completedColor,
        color: "#fff"
    },

    notCompletedItemStyle: {
        fontSize: 18,
        textAlign: "center",
        backgroundColor: colors.notcompletedColor,
        color: "#fff"
    }
});