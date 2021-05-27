import React from 'react'
import {TextInput, View, StyleSheet } from 'react-native'

const LogInput = () => {
    return (
        <View>
            <TextInput
            style={styles.input_text}
            placeholder=" @ email"
            placeholderTextColor='grey'
            />
            <TextInput
            style={styles.input_text}
            placeholder=" Password"
            placeholderTextColor='grey'
            />    
        </View>
    );
    }

const styles = StyleSheet.create ({
    input_text: {
        width:'100%',
        borderWidth:2,
        marginTop:15,
        borderColor: 'grey',
        backgroundColor:'white',
        borderRadius: 5
    },
})

export default LogInput;