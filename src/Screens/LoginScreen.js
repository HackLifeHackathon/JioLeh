import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>JioLeh</Text>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateAccount')}>
                <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonInverted}>
                <Text style={styles.invertedText}>SIGN IN</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a8c961',
      alignItems: 'center',
      //justifyContent: 'center',
    },
    header: {
      fontFamily: 'Monaco',
      fontSize: 25,
      top: 150,
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
        //paddingHorizontal: 40,
        borderRadius: 25,
        backgroundColor: 'black',
        borderWidth: 2,
        marginBottom: 15,
        width: 320,
    },
    buttonInverted: {
        paddingVertical: 15,
        //paddingHorizontal: 40,
        borderRadius: 25,
        backgroundColor: '#a8c961',
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 15,
        width: 320,
    },
  });