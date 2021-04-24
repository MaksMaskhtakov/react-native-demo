import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavBar } from './src/components/NavBar';
import { AddTodo } from './src/components/AddTodo';
import { Todo } from './src/components/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title
      }
    ]);
  };
  return (
    <View>
      <NavBar title = 'Todo App' />
      <StatusBar style="auto" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>
        <View>
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
