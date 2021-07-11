import React from 'react'
import { View, StyleSheet, ImageBackground, Text, Touchable } from 'react-native'
import LogButton from '../components/buttons/LogButton'
import MyInformation from "../components/blocs/MyInformation"
import { TouchableOpacity } from 'react-native-gesture-handler'

interface State{
    navigation: any
}

export class Register extends React.Component<State>{
    constructor(props:State) {
        super(props);
        this.state = {
        };
    }

    async Login() {
        console.log("login")
    };

    render() {
        const image = { uri: "https://cdn.discordapp.com/attachments/786976841851732038/830091403409358888/dzqdzqdzqd.png" };
        return (
            <View style={styles.main_container}>
                <ImageBackground source={image} style={styles.image}>
                    <View style={styles.snd_container}>
                        <MyInformation />
                        <LogButton title="REGISTER" backgroundColor="#ed1f5d" />
                    </View>
                </ImageBackground>
                <TouchableOpacity style={styles.backward} onPress={() => this.props.navigation.navigate("Login")}>
                    <Text> backward</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Register;

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
        },
        title: {
            fontSize: 25,
            color: "white",
            borderColor: "white",
            alignContent: "center",
            justifyContent: "center",
            textAlign: "center",
            margin: "5%"
        },
        snd_container: {
            backgroundColor: 'white',
            margin: 20,
            padding: 30,
            borderWidth: 2,
            borderColor: 'grey',
            borderRadius: 5
        },
        backward: {
            bottom: 30,
            left: 30
        }
    })


