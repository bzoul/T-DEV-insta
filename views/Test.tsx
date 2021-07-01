import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {NativeModules} from 'react-native';

var HelloWorld = NativeModules.HelloWorld;
export default class Test extends React.Component {
    
    async sayHiFromJava() {
        HelloWorld.sayHi( (err) => {console.log(err)}, (msg) => {console.log(msg)} );
    }
    
    render() {
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={ this.sayHiFromJava }>
                <Text>Invoke native Java code</Text>
            </TouchableOpacity>
        </View>
    );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  })