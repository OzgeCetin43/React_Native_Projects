import React from "react";
import {SafeAreaView, ScrollView, View, Text, TouchableOpacity} from "react-native";
import { styles } from "./styles";

const App = () => {
    let todoList = [];

    const generateRandomComplete = () => {
        let number = Math.round(Math.random() * 100);

        return number % 2 == 0 ? true : false;
    }

    const generateRandomTodo = () => {
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let todo = [];

        for(let i = 0; i < 10; i++) {
            todo.push(characters.charAt(Math.round(Math.random() * characters.length)));
        }

        return todo.join("");
    }

    for(let i = 0; i < 20; i++) {
        todoList.push({todoName: generateRandomTodo(), complete: generateRandomComplete()});
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{flex: 1}}>
                <View>
                    <Text style={styles.titleStyle}>My Todo List</Text>
                    {
                        todoList.map((todo, index) => (
                            <TouchableOpacity style={styles.todoItemStyle} activeOpacity={0.7} key={index.toString()}>
                                <Text style={styles.todoItemTextStyle, todo.complete ? styles.completedItemStyle : styles.notCompletedItemStyle}>{todo.todoName}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default App;