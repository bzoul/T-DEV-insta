
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AppRegistry, Button, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import BottomBar from '../components/blocs/BottomBar'
import RNFetchBlob from 'rn-fetch-blob';
import {NativeModules} from 'react-native';
global.test= 'truc';
global.origin = 'null';
var RNImgToBase64 = NativeModules.RNImgToBase64;

interface State { // Added this interface for props
    torchon : RNCamera
  }
  
interface Props {
    navigation: any
}

export class AppareilPhoto extends React.Component<{},State, Props>{
    constructor(props:State) {
        super(props);
        this.state = {
            torchon : RNCamera.Constants.FlashMode.off
        };
    }
    saveBase64Image(base64){
        const dirs = RNFetchBlob.fs.dirs
        const file_path = dirs.DocumentDir + "/base64.jpg"
        RNFetchBlob.fs.unlink(file_path);
        RNFetchBlob.fs.createFile(file_path, base64, 'base64')
            .then((res)=>{
                console.log('test save '+res);
                console.log('save');
            })
            .catch((error) => {
                console.log("fetch blob "+error);
            });
    }
    storeBase64Picture = async (value) => {
        try {
          await AsyncStorage.setItem('Photo', value)
        //   console.log(this.state.token);
        } catch (e) {
            console.log('store '+e);
        }
    }
    async takePicture(camera) {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        //  eslint-disable-next-line
        console.log(data.uri);
    };
    
    async toggleTorch() {
        let tstate = this.state.torchon;
        if (tstate == RNCamera.Constants.FlashMode.off) {
            tstate = RNCamera.Constants.FlashMode.on;
        } else {
            tstate = RNCamera.Constants.FlashMode.off;
        }
        this.setState({ torchon: tstate })
    }
    
    render() {
        const {torchon} =  this.state;

        return (
            <View style={styles.container}>
                <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                >
                    {({ camera, status }) => {
                        if (status !== 'READY') return (
                            < View
                                style={{
                                    flex: 1,
                                    backgroundColor: 'lightgreen',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text>Waiting</Text>
                            </View>
                        );
                        return (
                            <>
                                <TouchableOpacity style={styles.flash} onPress={() => this.toggleTorch()}>
                                    {this.state.torchon == RNCamera.Constants.FlashMode.off?  
                                    <Image style = {styles.flashlite} source = {require('../assets/icons/flash_off_icon.png')}/> : 
                                    <Image style = {styles.flashlite} source = {require('../assets/icons/flash_on_icon.png')}/>}
                                </TouchableOpacity>

                                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                                        <Text style={{ fontSize: 15 }}> SNAP </Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        );
                    }}
                </RNCamera>
                <BottomBar navigation={this.props.navigation}/>
            </View >
        );
    }
}

export default AppareilPhoto;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
        marginBottom: 120
    },
    flash: {
        flex: 0,
        borderRadius: 5,
        padding: 5,
        alignSelf: 'center',
        position:"absolute",
        top:20,
        right:20
    },
    flashlite:{
        width:50, 
        height:50, 
    }

});