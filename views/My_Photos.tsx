import React from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions, Text, ScrollView } from 'react-native';
import HeaderBlock from '../components/blocs/Header'
import BottomBar from '../components/blocs/BottomBar'

let pictures = require('../assets/pictures.json');
let { width: screenWidth, height: ScreenHeight } = Dimensions.get('window')

export class My_Photos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderImages = item => {
        return (
            <View style={{ alignItems: "baseline", paddingTop: 10, paddingRight: 10 }}>
                <Image source={{ uri: item.item.path }} style={{
                    height: (screenWidth - 20) / 3,
                    width: (screenWidth - 20) / 3,
                }} />
            </View>
        )
    }
    render() {
        return (
            <>
                <ScrollView contentContainerStyle={{paddingBottom: 50}}>
                    <HeaderBlock />
                    <Text style={styles.title}>Mes photos</Text>
                    <View style={styles.photo_container}>
                        <FlatList
                            horizontal={false}
                            numColumns={3}
                            data={pictures[0]}
                            renderItem={this.renderImages}
                            keyExtractor={(item, index) => index.toString()}
                        >
                        </FlatList>
                    </View>
                </ScrollView>
                <BottomBar/>
                </>
        );
    }
}
export default My_Photos;

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