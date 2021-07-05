import React, {useState} from "react";
import {ImageBackground, TextInput, Text, TouchableOpacity} from "react-native";
import {styles} from "./style"

const App = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateUser = () => {
        console.log("hi");
        if(email != "" && password != "") 
            alert("Lütfen bekleyin. Giriş yapılıyor...");

        else if(email != "" && password == "") 
            alert("Lütfen şifrenizi girin.");

        else if(email == "" && password != "") 
            alert("Lütfen emalinizi girin.");
        
        else 
            alert("Lütfen emalinizi ve şifrenizi girin.");
    }
    return (
        <ImageBackground source={require('./images/bg.jpg')} style={styles.container}>
            <Text style={styles.title}>Food Delivery App</Text>
            <TextInput placeholder="Email:" placeholderTextColor="#FFF" style={styles.inputStyle} value={email} onChangeText={value => setEmail(value)}/>
            <TextInput secureTextEntry placeholder="Password:" placeholderTextColor="#FFF" style={styles.inputStyle} value={password} onChangeText={value => setPassword(value)}/>
        
            <TouchableOpacity style={styles.loginBtn} activeOpacity={0.9} onPress={validateUser}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

export default App;