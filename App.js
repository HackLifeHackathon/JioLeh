import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/Screens/LoginScreen';
import SelectGameScreen from './src/Screens/SelectGameScreen';
import SelectGenderScreen from './src/Screens/SelectGenderScreen';
import CreateAccountScreen from './src/Screens/CreateAccountScreen';
import WelcomeScreen from './src/Screens/WelcomeScreen';
import UsernameScreen from './src/Screens/UsernameScreen';
import MyBirthdayScreen from './src/Screens/MyBirthdayScreen';
import PlayingDaysScreen from './src/Screens/PlayingDaysScreen';
import SideMenu from './src/components/SideMenu'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import firebase from 'firebase/app';
import firebaseConfig from "./config/firebaseConfig";
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="FirstScreen" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="SelectGame" component={SelectGameScreen} />
        <Stack.Screen name="SelectGender" component={SelectGenderScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Username" component={UsernameScreen} />
        <Stack.Screen name="PlayingDays" component={PlayingDaysScreen} />
        <Stack.Screen name="MyBirthday" component={MyBirthdayScreen} />
        <Stack.Screen name="HomeScreen" component={SideMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
