import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const NavBar = ({title}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.Text}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#000',
        paddingBottom: 10
    },
    Text: {
        color: '#FFD700',
        fontSize: 20
    }
})