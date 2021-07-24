import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>JioLeh</Text>
            <Image style={styles.image} source={require('../../assets/brawlstar.png')}>
            </Image>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateAccount')}>
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonInverted}>
                <Text style={styles.invertedText}>Sign In</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#c7a0cc',
      alignItems: 'center',
      
    },
    header: {
      fontFamily: 'RopaSans',
      fontSize: 50,
      fontWeight: 'bold',
      marginBottom: '10%',
      marginTop: '27%',
      color: 'black'
    },
    image: {
        height: '83%',
        resizeMode: 'contain',
        top: 0
    },
    buttonContainer: {
        flexDirection: 'column',
        position: 'absolute',
        bottom: '13%',
    },
    invertedText: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 16,
        fontFamily: 'RopaSans',
    },
    buttonText: {
        alignSelf: 'center',
        color: '#feda00',
        fontSize: 16,
        fontFamily: 'RopaSans',
    },
    button: {
        paddingVertical: 15,
        borderRadius: 25,
        backgroundColor: 'black',
        borderWidth: 2,
        marginBottom: 15,
        width: 320,
    },
    buttonInverted: {
        paddingVertical: 15,
        borderRadius: 25,
        backgroundColor: '#feda00',
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 15,
        width: 320,
        
    },
  });