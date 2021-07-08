import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Login from './views/Login';
import Register from './views/Register';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Albums from './views/Albums';
import Photo_Selected_Perso from './views/Photo_Selected_Perso';
import Tabs from './components/blocs/ToolBar';
import Photos_Shared from './views/Photos_Shared';
import My_Photos from './views/My_Photos';
import Photos from './views/Photos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Photos" component={Photos} />
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
