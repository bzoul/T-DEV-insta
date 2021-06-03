import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Albums = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>
                Albums screen
            </Text>
        </View>
    );
}

export default Albums;

const styles = StyleSheet.create({
    container:{
        flex:1, 
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#8fcbbc'
    },
});