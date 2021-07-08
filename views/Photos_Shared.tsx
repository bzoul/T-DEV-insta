import React from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions, Text, ScrollView } from 'react-native';
import ToolBar from '../components/blocs/ToolBar'
import HeaderBlock from '../components/blocs/Header'

interface State { // Added this interface for props

  }

let pictures = require('../assets/pictures.json');
let { width: screenWidth, height: ScreenHeight } = Dimensions.get('window')

export class Photos_Shared extends React.Component<{},State> {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    renderImages = item => {

        return (

            <View style={{ alignItems: "baseline", paddingTop: 10, paddingRight:10 }}>
                <Image source={{ uri: item.item.path }} style={{
                    width: (screenWidth - 20) / 3,
                    height: (screenWidth - 20) / 3,
                }} />
            </View>


        )
    }

    render() {
        return (
            <ScrollView contentContainerStyle={{paddingBottom: 50}}>
                <HeaderBlock />
                <Text style={styles.title}>Photos partagées avec moi</Text>
                <View style={styles.photo_container}>
                    <FlatList
                        horizontal={false}
                        numColumns={3}
                        data={pictures[1]}
                        renderItem={this.renderImages}
                        keyExtractor={(item, index) => index.toString()}
                    >
                    </FlatList>
                </View>
            </ScrollView>
        );
    }
}
export default Photos_Shared;

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
        height: ScreenHeight
    },
    photo_container_shared: {
        position: 'relative',
        top: 140
    },
    title: {
        position: 'relative',
        top: 20,
        left: 20,
        fontSize: 16
    },
    title2: {
        position: 'relative',
        top: 100,
        left: 20,
        fontSize: 16
    },
    button_more: {

    }

});