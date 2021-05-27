import React from 'react'
import {View , StyleSheet, ImageBackground, Text } from 'react-native'
import LogButton from '../components/buttons/LogButton'
import LogInput from "../components/inputs/LogInput"

const LogIn = () => {
    const image = {uri :"https://cdn.discordapp.com/attachments/786976841851732038/830091403409358888/dzqdzqdzqd.png"};
    return (
        <View style={styles.main_container}>
            <ImageBackground source={image} style={styles.image}>
                <Text style={styles.title}>Taking picture is tour talent, Saving them as they are is ours</Text>
                <View style={styles.snd_container}>
                    <LogInput/>
                    <LogButton title="SING IN" backgroundColor="#ed1f5d"/>
                    <View style={styles.register}>
                        <Text>First time with us?</Text>
                        <LogButton title="SING UP" backgroundColor="#ed1f5d"/>
                    </View>
                </View>
            </ImageBackground>
        </View>
       );
    }

const styles = StyleSheet.create ({
    main_container: {
        width:'100%',
        height:'100%',
        display:'flex',
        backgroundColor:'white',
    },
    image:{
        width:'100%',
        flex:1,
        resizeMode:'stretch',
        justifyContent:"center",
        alignItems: 'center',
    },
    title:{
        fontSize:25,
        color:"white",
        borderColor:"white",
        textAlign:"center",
        margin:"5%"
    },
    snd_container: {
        width: "80%",
        backgroundColor:'white',
        borderWidth: 2,
        padding: 20,
        borderColor: 'grey',
        borderRadius: 5,
    },
    register: {        
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})
export default LogIn;