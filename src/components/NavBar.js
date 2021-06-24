import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const NavBar = ({title}) => {
    return (
        <View style={styles.navbar}>
           <Text style = {styles.text}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#000',
        paddingBottom: 8
    },
    text: {
        color: '#fff',
        fontSize: 30
    }
});