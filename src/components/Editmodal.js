import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Alert} from "react-native";

export const EditModal = ({ onCancel, onSave}) => {
    const [title, setTitle] = useState(value);
    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert("ERR!",`длинна составляет ${title.trim().length}`)
        } else {
            onSave(title);
        }
    };
    return (
        <Modal visible={visible} animationType="slide" transparent={false}>
            <View style={styles.wrap}>
                <TextInput 
                value={title} 
                onChangeText={setTitle} 
                style={styles.input} 
                placeholder="enter name" 
                maxLength={64}
                />
                <View style={styles.buttons}>
                   <Button title="Canel" color="#000" onPress={onCancel} />
                   <Button title="Save" onPress={saveHandler} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        padding: 10,
        borderBottomColor: "#000",
        borderBottomWidth: 2,
        width: "80%"
    },
    buttons: {
        width: "100%",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    }
});