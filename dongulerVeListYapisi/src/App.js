
import React from "react";
import {View, Text} from "react-native";
import { styles } from "./styles";

const App = () => {
    let numberList = [];

    for(let i = 0; i < 10; i++) {
        numberList.push(Math.round(Math.random() * 100));
    }

    /* for ile liste elemanlarını konsolda bastırmak için */

    for(let i = 0; i < numberList.length; i++) {
        console.log(numberList[i]);
    }

    console.log("******************");

    /* foreach ile liste elemanlarını konsolda bastırmak için */

    numberList.forEach(number => {
        console.log(number);
    });

    console.log("******************");

    /* Map ile liste elemanlarını konsolda bastırmak için */

    numberList.map(number => {
        console.log(number);
    });

    return (
        <View style={styles.container}>
            {
                numberList.map((num, index) => (
                    <Text key={index.toString()} style={styles.textStyle}>{num}</Text>
                ))
            }
        </View>
    );
}

export default App;