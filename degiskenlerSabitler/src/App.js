import React from "react";
import {View, Text} from "react-native";
import {styles} from "./styles"

const App = () => {
    let sayi = Math.round(Math.random()*10);
    
    const factoriel = (value) => {
        let result = 1;

        for(let i = 1; i <= value; i++)
            result *= i;

        return result;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{sayi}! = {factoriel(sayi)}</Text>
        </View>
    );
}

export default App;