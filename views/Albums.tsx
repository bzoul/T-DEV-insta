import React from 'react';
import Header from 'native-base';
import Body from 'native-base';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import HeaderBlock from '../components/blocs/Header'

let albums = require('../assets/albums.json');
let { width: screenWidth } = Dimensions.get('window')

interface State { // Added this interface for props
    My_albums: [{
        nom: ""
        firstPhoto: ""
        numberOfPhoto: ""
    }]
    Shared_albums: [{
        nom: ""
        firstPhoto: ""
        owner: ""
    }]
}


export class Albums extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
            My_albums: [{
                nom: "",
                firstPhoto: "",
                numberOfPhoto: ""
            }],
            Shared_albums: [{
                nom: "",
                firstPhoto: "",
                owner: ""
            }]
        }
    }

    UNSAFE_componentWillMount() {
        let myAlbums = [], sharedAlbums = []
        albums[0].map((album) => {
            console.log("name")
            console.log(album.name)
            console.log("path first photo")
            console.log(album.photos[0].path)
            console.log("nombre de photo")
            console.log(album.photos.length +1)
            let A = {
                nom: album.name,
                firstPhoto: album.photos[0].path,
                numberOfPhoto: album.photos.length +1
            }
            myAlbums.push(A)
        })
        albums[1].map((album) => { 
            let A = {
                nom: album.name,
                firstPhoto: album.photos[0].path,
                owner: album.photos.length +1
            }
            sharedAlbums.push(A)
        })

        this.setState({
            My_albums: myAlbums,
            Shared_albums: sharedAlbums
        })
    }

    renderImages = item => {
        return (
            <Text>{item.item.owner}</Text>
        ) 
    }
    render() {
        const { Shared_albums, My_albums } = this.state
        return (
            <View>
                <HeaderBlock />
                <View style={styles.photo_container}>
                    <Text style={styles.title}>Mes albums</Text>

                    <ScrollView horizontal>
                        {My_albums.map((album) => (
                            <Image source={{ uri: album.firstPhoto }} style={{
                                height: (screenWidth-20) / 3,
                                width: (screenWidth-20) / 3,
                            }} />
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.photo_container_shared}>
                    <Text style={styles.title}>Albums partagés avec moi</Text>

                    <ScrollView horizontal>
                        {Shared_albums.map((album) => (
                            <Image source={{ uri: album.firstPhoto }} style={{
                                height: screenWidth / 3,
                                width: screenWidth / 3,
                            }} />
                        ))}
                    </ScrollView>
                </View>
            </View>
        );
    }

}

export default Albums;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
    photo_container: {
        position: 'relative',
        top: 55,
        alignContent: 'center'
    },
    title: {
        position: 'relative',
        fontSize: 16,
        left: 20,
        top: -20
    },
    photo_container_shared: {
        position: 'relative',
        top: 110
    },
});
