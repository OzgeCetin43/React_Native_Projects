import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "../styles";

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
             <Text style={{color: "#212121"}}>Home Page</Text>
             <TouchableOpacity onPress={() => navigation.navigate("About")}>
                 <Text style={{color: "#f00"}}>About Us</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
                 <Text style={{color: "#0f0"}}>Contact Us</Text>
             </TouchableOpacity>
        </View>
    );
}

export default Home;