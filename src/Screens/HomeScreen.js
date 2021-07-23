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
                onPress={() => setSelectLobby(!selectLobby)}>
                    <Text style={selectLobby ? styles.buttonText : styles.invertedText}>Game Lobbies</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={selectGamers ? styles.button : styles.buttonInverted}
                onPress={() => setSelectGamers(!selectGamers)}>
                    <Text style={selectGamers ? styles.buttonText : styles.invertedText}>Gamers Connected</Text>
                </TouchableOpacity>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a8c961',
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
    },
    buttonText: {
        alignSelf: 'center',
        color: '#a8c961',
        fontSize: 16,
    },
    button: {
        paddingVertical: 15,
        width: 320,
        borderRadius: 25,
        backgroundColor: 'black',
        marginBottom: 20,
        marginVertical: 10,
    },
    buttonInverted: {
        paddingVertical: 15,
        width: 320,
        borderRadius: 25,
        backgroundColor: '#a8c961',
        borderColor: 'black',
        borderWidth: 2,
        marginVertical: 10,
    },
  });