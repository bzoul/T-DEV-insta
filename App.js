import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './views/Login'
import Register from "./views/Register"
import ToolBar from './components/blocs/ToolBar'
import {NavigationContainer} from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
        <ToolBar>

        </ToolBar>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
