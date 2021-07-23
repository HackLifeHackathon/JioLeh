import React, {useState} from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function GameLobbyScreen({ navigation }) {

    gameArr = ['Valorant', 'Csgo', 'Dota 2', 'Minecraft',
                'Maplesea', 'Among Us', 'League of Legends'];
    buttonArr = [];

    for (var game of gameArr) {
        buttonArr.push (
            <TouchableOpacity
                name={game} 
                style={styles.button}
                onPress={()=> navigation.navigate('GameDetail')}>
                    <Text style={styles.buttonText}>{game}</Text>
        </TouchableOpacity>
        ) 
        
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{zIndex: 2}} onPress={() => navigation.goBack()}>
                <FontAwesome5 name="chevron-left" size={25} style={styles.chevron}/>
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.header}>Game Lobby</Text>
                <View style={styles.buttonContainer}>
                {buttonArr}
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a8c961',
    },
    chevron: {
        top: 70,
        paddingLeft: 30,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
    },
    header: {
        fontFamily: 'Monaco',
        fontSize: 25,
        top: 80,
    },
    buttonContainer: {
        flexDirection: 'column',
        position: 'absolute',
        bottom: 100,
    },
    invertedText: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 16,
    },
    buttonText: {
        alignSelf: 'center',
        color: '#a8c961',
        fontSize: 16,
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        backgroundColor: 'black',
        borderWidth: 2,
        marginBottom: 15,
    },
    buttonInverted: {
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        backgroundColor: '#a8c961',
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 15,
    },
  });