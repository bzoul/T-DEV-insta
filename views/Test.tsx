
import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {NativeModules} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import './AppareilPhoto'

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            torchon : null
        };
    }
    getSize = async () => {
        const dirs = RNFetchBlob.fs.dirs
        const file_path = dirs.DocumentDir + "/base64.jpg";
        RNFetchBlob.fs.stat(file_path)
            .then((stats) => {
                console.log("compress  ");
                console.log(stats.size)
            })
            .catch((err) => {})
    }
    getSizee = async () => {
        RNFetchBlob.fs.stat(global.origin)
            .then((stats) => {
                console.log("origins  ");
                console.log(stats.size)
            })
            .catch((err) => {})
    }
    getData = async () => {
        const dirs = RNFetchBlob.fs.dirs
        const file_path = dirs.DocumentDir + "/base64.png";
        try{
            await RNFetchBlob.fs.readFile(file_path, 'base64')
            .then((data) => {
                // console.log('salut');
                
                return(data);
            })
            .catch((error) => {
                console.log("fetch blob "+error);
            });
        } catch {
            console.log ('erreur');
        }
    };
        
    
    render() {
    const encodedBase64 = global.test;
    this.getData();
    this.getSize();
    this.getSizee();
    // console.log("origins "+global.origin)
    var base64Icon = `data:image/png;base64,${encodedBase64}`;

    return (
        <View style={styles.container}>
            <Image style={{width: 350, height: 300,  borderWidth: 1, borderColor: 'red'}} source={{uri: base64Icon}} />
            <Image style={{width: 350, height: 300,  borderWidth: 1, borderColor: 'red'}} source={{uri: global.origin}} />
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