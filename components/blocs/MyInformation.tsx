import React from 'react'
import {Text, TextInput, View , StyleSheet } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import RNPickerSelect from 'react-native-picker-select';

const LogInput = () => {
    return (
        <View style={styles.crea_container}>
            <TextInput
                style={[styles.input_text, styles.width]}
                placeholder="Username"
                placeholderTextColor='grey'
                />
                <TextInput
                style={[styles.input_text, styles.width]}
                placeholder="@ email"
                placeholderTextColor='grey'
                />
                <TextInput
                style={[styles.input_text, styles.width]}
                placeholder="Password"
                placeholderTextColor='grey'
                />
                <TextInput
                style={[styles.input_text, styles.width]}
                placeholder="Password"
                placeholderTextColor='grey'
                caretHidden={true}
                />
        </View>
    );
    }

const styles = StyleSheet.create ({
    crea_container: {
        width:"100%",
        justifyContent:'center',
        alignItems:'center'
    },
    input_text: {
        height:40,
        borderWidth:2,
        marginBottom:10,
        borderColor: 'grey',
        backgroundColor:'white',
        borderRadius: 5
    },
    width: {
        width:"100%"
    }

})

export default LogInput;