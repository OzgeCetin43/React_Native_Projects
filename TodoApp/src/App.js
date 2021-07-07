import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Entypo"
import { styles } from "./styles";

const App = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const addTodo = () => {
        let todos = todoList;
        todos.push({
            title: todo,
            complete: false
        });

        setTodoList(todos);
        setTodo("");
    }

    const changeComplete = (index) => {
        let todos = [];

        todoList.map((todoItem, i) => {
            index == i ? todos.push({title: todoItem.title, complete: !todoItem.complete}) : todos.push(todoItem);
        })

        setTodoList(todos);
    }

    const deleteTodo = (index) => {
        let todos = [];

        todoList.map((todoItem, i) => {
            index != i ? todos.push(todoItem) : "";
        });

        setTodoList(todos);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.line1}></View>
                <Text style={styles.headerTitle}>My <Text style={{ color: "#61DAFB", fontSize: 35 }}>Todo</Text> App</Text>
                <View style={styles.line2}></View>
            </View>

            <View style={styles.listArea}>
                <TextInput style={styles.userInput} onChangeText={(value) => { setTodo(value) }} value={todo} />
                <Text style={styles.textStyle}>My <Text style={{fontSize: 30, color: "#FFF"}}>Todos</Text></Text>
                <ScrollView>
                    {
                        todoList.map((element, index) => (
                            <TouchableOpacity key={index.toString()} style={{
                                width: "100%",
                                borderWidth: 1,
                                borderColor: element.complete ? "#0f0" : "#f00",
                                marginVertical: 10,
                                borderRadius: 5,
                                padding: 20,
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }} onPress={() => changeComplete(index)} onLongPress={() => deleteTodo(index)}> 
                                <Text style={styles.todo}>{element.title}</Text>
                                <Icon size={18} name={element.complete ? "check" : "cross"} style={styles.todoIcon}/>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>

            <TouchableOpacity style={styles.addTodoArea} activeOpacity={0.8} onPress={() => addTodo()}>
                <Icon name="add-to-list" size={32} color="#20232A" />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default App;