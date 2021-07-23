import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            style={styles.chevron}
            onPress={() => navigation.openDrawer()}>
                <FontAwesome5 name="align-justify" size={25} />
            </TouchableOpacity>
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
        paddingHorizontal: 60,
        borderRadius: 25,
        backgroundColor: 'black',
        marginBottom: 20,
    },
    buttonInverted: {
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 25,
        backgroundColor: '#a8c961',
        borderColor: 'black',
        borderWidth: 2,
    },
  });