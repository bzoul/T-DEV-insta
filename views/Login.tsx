import React from 'react'
import { View, StyleSheet, ImageBackground, Text, Button } from 'react-native'
import LogButton from '../components/buttons/LogButton'
import LogInput from "../components/inputs/LogInput"

interface State{
    navigation: any
}

export class LogIn extends React.Component<State>{
    constructor(props:State) {
        super(props);
        this.state = {
        };
    }

    async Login(){
        console.log("login")
    };

    render() {
        const image = { uri: "https://cdn.discordapp.com/attachments/786976841851732038/830091403409358888/dzqdzqdzqd.png" };
        return (
            <View style={styles.main_container}>
                <ImageBackground source={image} style={styles.image}>
                    <Text style={styles.title}>Taking pictures is your talent, Saving them as they are is ours</Text>
                    <View style={styles.snd_container}>
                        <LogInput />
                        <LogButton title="SIGN IN" backgroundColor="#ed1f5d" onPress={() => this.Login} />
                        <View style={styles.register}>
                            <Text>First time with us?</Text>
                            <LogButton title="SIGN UP" onPress={() => this.props.navigation.navigate("Register")}/>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

export default LogIn;

const styles = StyleSheet.create({
    main_container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: 'white',
    },
    image: {
        width: '100%',
        flex: 1,
        resizeMode: 'stretch',
        justifyContent: "center",
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        color: "white",
        borderColor: "white",
        textAlign: "center",
        margin: "5%"
    },
    snd_container: {
        width: "80%",
        backgroundColor: 'white',
        borderWidth: 2,
        padding: 20,
        borderColor: 'grey',
        borderRadius: 5,
    },
    register: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})
