import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './views/Login'
import Register from "./views/Register"
import ToolBar from './components/blocs/ToolBar'
import {NavigationContainer} from '@react-navigation/native'

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Login/>*/}
      {/*<Register/>*/}
      <NavigationContainer>
        <ToolBar>

        </ToolBar>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
