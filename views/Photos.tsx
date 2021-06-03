import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Photos = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>
                Photos screen
            </Text>
        </View>
    );
}

export default Photos;

const styles = StyleSheet.create({
    container:{
        flex:1, 
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#8fcbbc'
    },
});