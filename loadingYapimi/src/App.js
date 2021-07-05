import React from "react";
import {View, Text, ActivityIndicator} from "react-native";
import {styles} from "./style";

const App = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={48} color="#fff"/>
            <Text style={styles.textStyle}>Sayfa yükleniyor. Lütfen bekleyiniz...</Text>
        </View>
    );
}   

export default App;