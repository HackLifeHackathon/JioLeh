import React from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CreateAccountScreen() {
    return (
        <View style={styles.container}>
            <FontAwesome5 name="chevron-left" />
            <Text style={styles.header}>Create Account</Text>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
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
  });