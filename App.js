import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { NavBar } from "./src/components/NavBar";
import { MainScreen } from "./src/screens/Mainscreens";
import { TodoScreen } from "./src/screens/Todoscreens";

export default function App(onRemove){
  const[todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    {id: "1", title: "Сегодня контрольная"},
    {id: "2", title: "Сходить за хлебом после учебы"},
    {id: "3", title: "Нужно подготовиться к поездке"}
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
      "Удаление элемента",
      `Вы уверенны, что хотите удалить ${todo.title}`,
    [
      {
        text: "Отмена",
        style: "cancel"
      },
      {
        text: "Удалить",
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
     <NavBar title="Todo App" /> 
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
    backgroundColor: '#FFFACD'
  }
});
