
import React from 'react';
import {View, TextInput, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {NativeModules} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import LogButton from '../components/buttons/LogButton';
import './AppareilPhoto'
export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            name : 'null'
        };
    }

    handleName(text){
        this.setState({name: text} )
        // console.log(this.state.name)
    }

    validateImage(){
        var photoName=this.state.name
        console.log(photoName)
        this.saveBase64Image(photoName);
        this.props.navigation.navigate("My_photos")  
    }

    saveBase64Image(name){
        const dirs = RNFetchBlob.fs.dirs
        const file_path = dirs.CacheDir + `/${name}.jpg`
        RNFetchBlob.fs.createFile(file_path, global.test, 'base64')
            .then((res)=>{
                console.log('test save '+res);
                console.log('save');
            })
            .catch((error) => {
                console.log("fetch blob "+error);
            });
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
            <Image style={{width: "100%", height: '85%',  borderWidth: 1, borderColor: 'red'}} source={{uri: base64Icon}} />
            <View style={styles.bot_container}>
            <TextInput
            style={styles.input_text}
            onChangeText={text => this.handleName(text)}
            placeholder=" @ email"
            placeholderTextColor='grey'
            color='black'
            />
                <LogButton title="VALIDE" backgroundColor="green" Press={() => this.validateImage()}/>
                <LogButton title="SUPPRIMER" backgroundColor="red" Press={() => this.props.navigation.navigate("AppareilPhoto")}/>

            </View>
            
        </View>
    );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    input_text: {
        width:'45%',
        height:40,
        borderWidth:2,
        marginBottom:25,
        marginTop:25,
        borderColor: 'grey',
        backgroundColor:'white',
        borderRadius: 10
    },
    bot_container: {
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'space-between',

        // justifyContent:'center',
        // alignItems:'center'
    }
  })