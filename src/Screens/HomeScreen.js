import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
            <TouchableOpacity 
            onPress={() => navigation.openDrawer()}>
                <FontAwesome5 name="align-justify" size={25} />
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.chat}
            onPress={() => navigation.navigate('Messages')}>
                <FontAwesome5 style={styles.comment} name="comments" size={25} />
            </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity 
                style={styles.buttonInverted}
                onPress={() => navigation.navigate('GameLobby')}>
                    <Text style={styles.invertedText}>Game Lobbies</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.buttonInverted}
                onPress={() => navigation.navigate('GamersConnected')}>
                    <Text style={styles.invertedText}>Gamers Connected</Text>
                </TouchableOpacity>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b6a2db',
      //justifyContent: 'center',
    },
    header: {
      fontFamily: 'Monaco',
      fontSize: 25,
      top: 150,
    },
    buttonContainer: {
        flexDirection: 'column',
        alignSelf: 'center',
        top: 200,
        // bottom: 100,
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
        width: 320,
        borderRadius: 25,
        backgroundColor: 'black',
        marginVertical: 10,
        borderWidth: 2,
    },
    buttonInverted: {
        paddingVertical: 15,
        width: 320,
        borderRadius: 25,
        backgroundColor: '#b6a2db',
        borderColor: 'black',
        borderWidth: 2,
        marginVertical: 10,
    },
    chat: {
        marginBottom: 20,
        padding: 10,
        borderRadius: 30,
        backgroundColor: 'white',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 70,
        paddingHorizontal: 30,
    },
  });