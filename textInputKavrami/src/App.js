import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import {styles} from "./styles"

const App = () => { 
    const [number, setNumber] = useState('');
    const [result, setResult] = useState('');

    return (
        <View style={styles.container}>
            <TextInput value={number} style={styles.inputStyle} onChangeText={value => {setNumber(value); setResult('')}}/>
            <TouchableOpacity onPress={() => {
                let x = 1;
                for(let i = 1; i <= number; i++) 
                    x *= i;

                setResult(x);
            }}>
                <Text style={styles.btn}>Hesapla</Text>
            </TouchableOpacity>

            <Text>{result != '' ? number + "! = " + result : ""}</Text>
        </View>
    );
}

export default App;