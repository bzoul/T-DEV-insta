import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Login from './views/Login';
import Register from './views/Register';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Albums from './views/Albums';
import Photo_Selected_Perso from './views/Photo_Selected_Perso';
import ToolBar  from './components/blocs/ToolBar';
import Photos_Shared from './views/Photos_Shared';
import My_Photos from './views/My_Photos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Albums" component={Albums} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
