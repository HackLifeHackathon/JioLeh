import React, {useState} from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function GameLobbyScreen({ navigation }) {

    gameArr = ['Valorant', 'Csgo', 'Dota 2', 'Minecraft',
                'Maplesea', 'Among Us', 'League of Legends'];
    buttonArr = [];


    for (let i = 0; i < gameArr.length; i++) {
        buttonArr.push (
            <TouchableOpacity 
             
                style={styles.button}
                onPress={()=> 
                navigation.navigate('GameDetail', {
                    selectedGame: gameArr[i]
                })}>
                    <Text style={styles.buttonText}>{gameArr[i]}</Text>
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
      backgroundColor: '#b6a2db',
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
        fontFamily: 'RopaSans',
        fontSize: 35,
        top: 80,
    },
    buttonContainer: {
        flexDirection: 'column',
        position: 'absolute',
        bottom: 130,
    },
    invertedText: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 16,
        fontFamily: 'RopaSans',
    },
    buttonText: {
        alignSelf: 'center',
        color: '#b6a2db',
        fontSize: 16,
        fontFamily: 'RopaSans',
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        backgroundColor: 'black',
        borderWidth: 2,
        marginBottom: 15,
        width: 320
    },
    buttonInverted: {
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        backgroundColor: '#b6a2db',
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 15,
        width: 320
    },
  });