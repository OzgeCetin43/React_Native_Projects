import React from "react";
import {View, Text} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {styles} from "./style";

const App = () => {
    return (
        <View style={styles.container}>
            <Icon name="check" size={48} color="#0f0"/>
            <Text style={styles.textStyle}>Paket Yükleme Başarılı</Text>
        </View>
    );
}

export default App;