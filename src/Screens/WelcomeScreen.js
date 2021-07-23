import React from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesome5 name="chevron-left" size={25} style={styles.chevron}/>
            </TouchableOpacity>
            <Text style={styles.header}>Welcome to JioLeh</Text>
            <Text style={styles.headerTwo}>Please follow these house rules.</Text>
            <View style={styles.ruleContainer}>
                <View style={styles.ruleHeader}>
                    <FontAwesome5 name="check" size={25} style={styles.check}/>
                    <Text style={styles.ruleTitle}>Be friendly</Text>
                </View>
                <Text style={styles.ruleDetail}>This is a place where you find like-minded 
                people to play games with, not enemies.</Text>
                <View style={styles.ruleHeader}>
                    <FontAwesome5 name="check" size={25} style={styles.check}/>
                    <Text style={styles.ruleTitle}>Be friendly</Text>
                </View>
                <Text style={styles.ruleDetail}>This is a place where you find like-minded 
                people to play games with, not enemies.</Text>

                <View style={styles.ruleHeader}>
                    <FontAwesome5 name="check" size={25} style={styles.check}/>
                    <Text style={styles.ruleTitle}>Be friendly</Text>
                </View>
                <Text style={styles.ruleDetail}>This is a place where you find like-minded 
                people to play games with, not enemies.</Text>

                <View style={styles.ruleHeader}>
                    <FontAwesome5 name="check" size={25} style={styles.check}/>
                    <Text style={styles.ruleTitle}>Be friendly</Text>
                </View>
                <Text style={styles.ruleDetail}>This is a place where you find like-minded 
                people to play games with, not enemies.</Text>
            </View>
            <TouchableOpacity style={styles.buttonInverted}>
                <Text style={styles.invertedText}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      backgroundColor: '#a8c961',
      alignItems: 'center',
      //justifyContent: 'center',
    },
    chevron: {
        top: 70,
        paddingLeft: 30,
    },
    header: {
        fontFamily: 'Monaco',
        fontSize: 25,
        top: 100,
    },
    headerTwo: {
        fontFamily: 'Monaco',
        fontSize: 20,
        top: 105,
    },
    ruleContainer: {
        top: 110,
    },
    ruleHeader: {
        flexDirection: 'row',
    },
    ruleTitle: {
        fontFamily: 'Monaco',
        fontSize: 20,
    },
    ruleTitle: {
        fontFamily: 'Monaco',
        fontSize: 18,
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
        marginBottom: 20,
    },
    buttonInverted: {
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        backgroundColor: '#a8c961',
        borderColor: 'black',
        borderWidth: 2,
        top: 200,
    },
  });