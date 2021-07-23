import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen'
import GamersConnected from '../Screens/GamersConnected'

const Drawer = createDrawerNavigator();

export default function SideMenu({route}) {
    return (
          <Drawer.Navigator
          initialRouteName="Home"
          drawerContentOptions={{
            activeBackgroundColor: '#f5ee89',
            activeTintColor: 'black',
            itemStyle: { marginVertical: 20 },
          }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Game Lobbies" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={HomeScreen} />
            <Drawer.Screen name="Gamers Connected" component={GamersConnected} />
            <Drawer.Screen name="Settings" component={HomeScreen} />
            {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
          </Drawer.Navigator>
      );
    }