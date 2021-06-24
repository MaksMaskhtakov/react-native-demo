import React from "react";
import {Text,View, StyleSheet, TouchableOpacity, Touchable } from "react-native";

export const Todo = ({ todo, onRemove, onOpen }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => onOpen(todo.id)}
            onLongPress={onRemove.bind(null, todo.id)}
        >
          <View style={styles.todo}>
            <Text>{todo.title}</Text>
          </View>
         
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 5,
        marginBottom: 15
    }
});