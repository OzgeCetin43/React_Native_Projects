import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#25277a",
    },

    headerText: {
        color: "#fff",
        marginLeft: 10,
        fontSize: 20
    },

    headerIcon: {
        width: 35,
        height: 35,
        marginRight: 10
    },  

    main: {
        flex: 9,
        flexDirection: "row",
    },

    side: {
        flex: 2,
        backgroundColor: "#7172a5"
    },  

    sideText: {
        fontSize: 18,
        color: "#fff",
        margin: 10
    },

    content: {
        flex: 5,
        backgroundColor: "#bcbcbc",
    },

    contentHeader: {
        fontSize: 24,
        color: "#2e2e2e",
        textAlign: "center",
        fontWeight: "bold"
    },

    contentImage: {
        width: "90%",
        alignSelf: "center",
        marginTop: 10
    },

    contentText: {
        padding: 10,
        textAlign: "justify",
        lineHeight: 25,
        color: "#2e2e2e"
    },

    footer: {
        flex: 1,
        backgroundColor: "#92364e",
        alignItems: "center",
        justifyContent: "center"
    },

    footerText: {
        fontWeight: "bold",
        color: "#fff"
    }
});