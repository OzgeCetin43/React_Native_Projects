import React, {useState} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles"

const App = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View style={styles.container}>
           <TouchableOpacity style={styles.incrementBtn} onPress={() => {setCounter(counter+1)}} activeOpacity={0.7}>
               <Text style={styles.textStyle}>+</Text>
           </TouchableOpacity>
           <Text style={{color: "#fff", fontSize: 30}}>{counter}</Text>
           <TouchableOpacity style={styles.decrementBtn} onPress={() => {setCounter(counter-1)}} activeOpacity={0.7}>
               <Text style={styles.textStyle}>-</Text>
           </TouchableOpacity>
        </View>
    );
}

export default App;