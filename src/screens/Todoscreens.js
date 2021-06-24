import React, { useState } from "react";
import { StyleSheet, View, Text, Button} from "react-native";
import { Appcard } from "../components/ui/Appcard";

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
    const [modal, setModal] = useState(false);

    return (
        <View>
            <Appcard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title="edit" color='black'/>
            </Appcard>
            <View style={styles.buttons}>
                <View style= {styles.button}>
                    <Button title="back" color="#000" onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button
                       title= "Delete"
                       color= "#000"
                       onPress={() => onRemove(todo.id)}
                    />
                </View>
            </View>   
        </View>
    );
};

const styles = StyleSheet.create({
   buttons: {
       flexDirection: "row",
       justifyContent: "space-between"
    },
    card: {
       marginBottom: 20,
       padding: 5
    },
    button: {
      width: '30%'
    },
       title: {
       fontSize: 20
    }
});