import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './views/Login'
import Register from "./views/Register"
import ToolBar from './components/blocs/ToolBar'
import {NavigationContainer} from '@react-navigation/native'
import Photo from './components/blocs/PhotoBloc'

export default function App() {
  return (
    <View >
      <Photo></Photo>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
