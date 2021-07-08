import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions, Text, ScrollView } from 'react-native';
import ToolBar from '../components/blocs/ToolBar'
import HeaderBlock from '../components/blocs/Header'

let pictures = require('../assets/pictures.json');
let { width: screenWidth } = Dimensions.get('window')

export class Photo_Selected_Shared extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
            <View style={styles.image_container}>
                    <Image
                        source={require('../assets/pictures_test/grandteletub.jpg')}
                        style={styles.image} resizeMode={'contain'} />
                </View>
                <TouchableOpacity style={styles.backward}>
                    <Image
                    source={require('../assets/icons/backward_icon.png')}
                    style={styles.image_backward}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_infos}>
                    <Image source={require('../assets/icons/detail_icon.png')} style={styles.image_button} />
                    <Text style={{ fontSize: 15, color: 'black' }}> Détails </Text>
                </TouchableOpacity>
                </>
        );
    }
}
export default Photo_Selected_Shared;

const styles = StyleSheet.create({
    image_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
    },
    image_backward: {
        height: 40,
        width: 40
    },    
    backward:{
        position:'absolute',
        left: 30,
        top: 30,
        backgroundColor:'white',
        borderRadius: 20,
        padding:5
    },
    button_infos: {
        position: 'absolute',
        bottom: 60,
        left:'40%',
        flexDirection: "row",
        backgroundColor:'white',
        borderRadius: 20,
        padding:5
    },
    image_button: {
        height: 20,
        width: 20
    },
});