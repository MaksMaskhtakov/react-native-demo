import React from "react";
import { View, StyleSheet } from "react-native";

export const Appcard = props => (
    <View style={{ ...styles.default, ...props.style}}>{props.children}</View>

);

const styles = StyleSheet.create ({
    default: {
        padding: 25,
        borderWidth: 3,
        borderColor: "#000",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "#000",
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: { width: 2, height: 2},
        elevation: 10,
        backgroundColor: "#aaa",
        borderRadius: 8
    }
});