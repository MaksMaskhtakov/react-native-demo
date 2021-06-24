import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from "react-native";

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState ("");

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue("");
        }   else {
            Alert.alert('Give name');
        }
    };

    return (
        <View style={styles.block}>
            <TextInput
             style={styles.input} 
             onChangeText={setValue}
             value={value}
             placeholder="Text"
             />
            <Button title="     ADD     " onPress= {pressHandler} color='#000' />
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    input: {
        width: '80%',
        padding: 8,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#',

    }

});