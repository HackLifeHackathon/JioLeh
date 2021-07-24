import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({ navigation }) {
    const [selectLobby, setSelectLobby] = useState(false)
    const [selectGamers, setSelectGamers] = useState(false)
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            style={styles.chevron}
            onPress={() => navigation.openDrawer()}>
                <FontAwesome5 name="align-justify" size={25} />
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
            <TouchableOpacity 
                style={selectLobby ? styles.button : styles.buttonInverted}
                onPress={() => { 
                    setSelectLobby(!selectLobby)
                    navigation.navigate('GameLobby')}}>
                    <Text style={selectLobby ? styles.buttonText : styles.invertedText}>Game Lobbies</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={selectGamers ? styles.button : styles.buttonInverted}
                onPress={() => { 
                    setSelectGamers(!selectGamers)
                    navigation.navigate('GamersConnected')
                    }}>
                    <Text style={selectGamers ? styles.buttonText : styles.invertedText}>Gamers Connected</Text>
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
    chevron: {
        top: 70,
        paddingLeft: 30,
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
  });