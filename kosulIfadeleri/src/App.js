import React from "react";
import {View, Text} from "react-native"
import {styles} from "./styles"

const App = () => {
    let number = Math.floor(Math.random()*100);

    const oddOrEven = (value) => {
        return value + (value % 2 == 1 ? " tek sayıdır." : " çift sayıdır.");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{oddOrEven(number)}</Text>
        </View>
    );
};

export default App;