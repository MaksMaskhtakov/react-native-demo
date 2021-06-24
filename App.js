import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { NavBar } from "./src/components/NavBar";
import { MainScreen } from "./src/screens/Mainscreens";
import { TodoScreen } from "./src/screens/Todoscreens";

export default function App(onRemove){
  const[todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    {id: "1", title: "Завтра выходной"},
    {id: "2", title: "Хочу поспать"},
    {id: "3", title: "Яблочный сок купить..."}
  ]);

  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ]);
  };
  const removeTodo = id => {
    const todo = todos.find(t => t.id === id);
    Alert.alert(
      "Drop element",
      `Are you sure that you want to delete ${todo.title}`,
    [
      {
        text: "Canel",
        style: "cancel"
      },
      {
        text: "Delete",
        onPress: () => {
        setTodoId(null)
        setTodos(prev => prev.filter(todo => todo.id !== id)); }
      }
    ],
    { cancelable: false}
    );
  };
  
  
  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    /> 
  );

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId);
    content = (
      <TodoScreen
        goBack= {() =>{
          setTodoId(null);
        }}
        todo={selectedTodo}
      />
    )
  }
  return (
    <View style= {styles.se}>
     <NavBar title="notepadApp" /> 
     <View style= {styles.container}>{content}</View>
  </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    height: 700,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  se: {
    backgroundColor: '#aaa'
  }
});
