import React from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{zIndex: 2}} onPress={() => navigation.goBack()}>
                <FontAwesome5 name="chevron-left" size={25} style={styles.chevron}/>
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.header}>Welcome to JioLeh</Text>
                <Text style={styles.headerTwo}>Please follow these house rules.</Text>
                <View style={styles.ruleContainer}>
                    <View style={styles.ruleHeader}>
                        <FontAwesome5 name="check" size={25} style={styles.check}/>
                        <Text style={styles.ruleTitle}>Be friendly</Text>
                    </View>
                    <Text style={styles.ruleDetail}>This is a place where you find like-minded people to play games with, not enemies.</Text>
                    <View style={styles.ruleHeader}>
                        <FontAwesome5 name="check" size={25} style={styles.check}/>
                        <Text style={styles.ruleTitle}>Stay Safe</Text>
                    </View>
                    <Text style={styles.ruleDetail}>Don't give out personal information too easily. Beware of scammers and bullies.</Text>

                    <View style={styles.ruleHeader}>
                        <FontAwesome5 name="check" size={25} style={styles.check}/>
                        <Text style={styles.ruleTitle}>Be Honest</Text>
                    </View>
                    <Text style={styles.ruleDetail}>Make sure the information you have provided is as accurate as possible to make matching more precise</Text>

                    <View style={styles.ruleHeader}>
                        <FontAwesome5 name="check" size={25} style={styles.check}/>
                        <Text style={styles.ruleTitle}>Get rid of toxicity</Text>
                    </View>
                    <Text style={styles.ruleDetail}>Always report bad bahaviours.</Text>
                </View>
                <TouchableOpacity style={styles.buttonInverted} onPress={() => navigation.navigate('Username')}>
                    <Text style={styles.invertedText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      backgroundColor: '#a8c961',
      
    },
    chevron: {
        top: 70,
        paddingLeft: 30,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
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
        marginBottom: 10,
    },
    ruleContainer: {
        top: 110,
        margin: 15,
    },
    check: {
        padding: 10,
    },
    ruleHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    ruleTitle: {
        fontFamily: 'Monaco',
        fontSize: 20,
    },
    ruleDetail: {
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