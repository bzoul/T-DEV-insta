import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {NativeModules} from 'react-native';

var HelloWorld = NativeModules.HelloWorld;
var RNImgToBase64 = NativeModules.RNImgToBase64;
export default class Test extends React.Component {
    
    async test(){
        var truc = RNImgToBase64.getBase64String();
        console.log(truc)
    }

    async sayHiFromJava() {
        HelloWorld.sayHi( (err) => {console.log(err)}, (msg) => {console.log(msg)} );
    }
    
    render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={ this.sayHiFromJava }>
                <Text>Invoke native Java code</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ this.test }>
                <Text>test bitmap</Text>
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