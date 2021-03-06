import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen'
import GamersConnected from '../Screens/GamersConnected'
import GameLobby from '../Screens/gameLobby/GameLobbyScreen'

const Drawer = createDrawerNavigator();

export default function SideMenu({route}) {
    const { userid } = route.params;
    console.log("home screen: " + userid)
    return (
          <Drawer.Navigator
          initialRouteName="Home"
          drawerContentOptions={{
            activeBackgroundColor: '#ddd8e3',
            activeTintColor: 'black',
            itemStyle: { marginVertical: 20 },
          }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Game Lobby" component={GameLobby} />
            <Drawer.Screen name="Gamers Connected" component={GamersConnected} />
            <Drawer.Screen name="Profile" component={HomeScreen} />
            <Drawer.Screen name="Settings" component={HomeScreen} />
            {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
          </Drawer.Navigator>
      );
    }