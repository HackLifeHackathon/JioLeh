import React, {Component, useState} from 'react';
import SelectGameScreen from './src/Screens/SelectGameScreen';
import SelectGenderScreen from './src/Screens/SelectGenderScreen';
import CreateAccountScreen from './src/Screens/CreateAccountScreen';
import WelcomeScreen from './src/Screens/WelcomeScreen';
import UsernameScreen from './src/Screens/UsernameScreen';
import MyBirthdayScreen from './src/Screens/MyBirthdayScreen';
import PlayingDaysScreen from './src/Screens/PlayingDaysScreen';
import GameLobbyScreen from './src/Screens/gameLobby/GameLobbyScreen';
import GameDetailScreen from './src/Screens/gameLobby/GameDetailScreen';
import GamersConnectedScreen from './src/Screens/GamersConnected';
import SideMenu from './src/components/SideMenu'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import LoginScreen from './src/Screens/LoginScreen';
import WelcomeScreen_0 from './src/Screens/WelcomeScreen_0';

import * as Font from 'expo-font'
import MessagingScreen from './src/Screens/gameLobby/MessagingScreen';

import firebase from 'firebase/app';
import firebaseConfig from "./config/firebaseConfig";
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

export default function App() {
  const [isDoneLoading, setDoneLoading] = useState(false)
  const Stack = createStackNavigator();

  const onFinishLoading = () => {
    setDoneLoading(true)
  }

  if (!isDoneLoading) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onFinish={onFinishLoading}
        onError={handleLoadingError}
      />
    )
  }

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
        <Stack.Screen name="Welcome_0" component={WelcomeScreen_0} />
        <Stack.Screen name="Username" component={UsernameScreen} />
        <Stack.Screen name="PlayingDays" component={PlayingDaysScreen} />
        <Stack.Screen name="MyBirthday" component={MyBirthdayScreen} />
        <Stack.Screen name="HomeScreen" component={SideMenu} />
        <Stack.Screen name="GameLobby" component={GameLobbyScreen} />
        <Stack.Screen name="GameDetail" component={GameDetailScreen} />
        <Stack.Screen name="GamersConnected" component={GamersConnectedScreen} />
        <Stack.Screen name="Messages" component={MessagingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      RopaSans: require('./assets/fonts/RopaSans-Regular.ttf'),
    }),
  ])
}

function handleLoadingError(error) {
  console.warn(error)
}
