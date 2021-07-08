import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './views/Login';
import Register from './views/Register';
import Photo from './views/AppareilPhoto'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer >
        <Stack.Navigator 
          screenOptions={{
            headerShown: false
        }}>
          <Stack.Screen
            name="Photo"
            component={Photo}
          />
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Register"
            component={Register}
          />
        </Stack.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
