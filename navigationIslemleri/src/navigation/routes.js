import React from "react";
import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
                
                <Stack.Screen name="About" component={About} options={{
                    title: "About Us",
                    headerStyle: {
                        backgroundColor: "#f00"
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontSize: 24
                    } 
                }}/>

                <Stack.Screen name="Contact" component={Contact} options={{
                    title: "Contact",
                    headerStyle: {
                        backgroundColor: "#0f0"
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontSize: 24
                    } 
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;