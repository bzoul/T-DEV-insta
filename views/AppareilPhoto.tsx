import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const AppareilPhoto = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>
                AppareilPhoto screen
            </Text>
        </View>
    );
}

export default AppareilPhoto;

const styles = StyleSheet.create({
    container:{
        flex:1, 
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#8fcbbc'
    },
});