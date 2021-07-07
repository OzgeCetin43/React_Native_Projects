import React from 'react';
import {SafeAreaView, FlatList, Text, View, TouchableOpacity} from "react-native";
import {styles} from "./style";

const App = () => {
    let todos = [];

    const ItemSeparatorComponent = () => {
        return (
            <View style={styles.separator}></View>
        );
    }

    const RenderItem = ({item, index}) => {
        return (
            <TouchableOpacity>
                <Text style={{color: "#212121", textAlign: "center"}}>{item}</Text>
            </TouchableOpacity>
        );
    }

    const generateRandomTodoName = ()  => {
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let todoName=[];

        for(let i = 0; i < 10; i++) {
            let index = Math.round(Math.random()*characters.length);

            todoName.push(characters.charAt(index));
        }

        return todoName.join("");
    }

    for(let i = 0; i < 100; i++) {
        todos.push(generateRandomTodoName());
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Flat List Example</Text>

            <FlatList style={styles.list} data={todos} ItemSeparatorComponent={ItemSeparatorComponent} renderItem={RenderItem} keyExtractor={(item, index) => index.toString()}/>
        </SafeAreaView>
    );
}

export default App;