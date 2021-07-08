import { Left } from 'native-base';
import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';

let { width: screenWidth } = Dimensions.get('window')

const BottomBar = () => {
    return (
        <View>
            <View style={styles.barre}>

                <Image source={require('../../assets/icons/photo_icon.png')}
                    resizeMode='contain'
                    style={{
                        position: 'absolute',
                        width: 30,
                        height: 30,
                        left: 50,
                        bottom: 30
                        //tintColor: focused ? '#e32f45' : '#748c94'
                    }}
                />
                <Text
                    style={{
                        //color: focused ? '#e32f45' : '#748c94',
                        position: 'absolute',
                        fontSize: 10,
                        left: 45,
                        bottom: 20
                    }}>
                    PHOTOS
                </Text>
                <View style={styles.AppareilPhoto}>
                    <Image
                        source={require('../../assets/icons/appareilphoto_icon.png')}
                        resizeMode='contain'
                        style={{
                            position:'absolute',
                            left:20,
                            bottom:20,
                            width: 30,
                            height: 30,
                            tintColor: '#fff'

                        }}
                    />
                </View>
                <Image source={require('../../assets/icons/album_icon.png')}
                    resizeMode='contain'
                    style={{
                        position: 'absolute',
                        width: 30,
                        height: 30,
                        right: 50,
                        bottom: 30
                        //tintColor: focused ? '#e32f45' : '#748c94'
                    }}
                />
                <Text
                    style={{
                        //color: focused ? '#e32f45' : '#748c94',
                        position: 'absolute',
                        fontSize: 10,
                        right: 45,
                        bottom: 20
                    }}>
                    ALBUMS
                </Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    barre: {
        borderRadius: 30,
        position: 'absolute',
        bottom: -180,
        left: 20,
        backgroundColor: '#8fcbbc',
        height: 80,
        width: screenWidth - 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    AppareilPhoto: {
        position: 'absolute',
        bottom: 30,
        left: 150,
        borderRadius: 35,
        height: 70,
        width: 70,
        backgroundColor: '#e32f45'
    }
})
export default BottomBar;