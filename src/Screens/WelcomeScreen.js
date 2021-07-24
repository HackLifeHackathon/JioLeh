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
      backgroundColor: '#b6a2db',
      
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
        fontFamily: 'RopaSans',
        fontSize: 35,
        top: 100,
    },
    headerTwo: {
        fontFamily: 'RopaSans',
        fontSize: 20,
        top: 105,
        marginBottom: 10,
        color: '#4c4157'
    },
    ruleContainer: {
        top: 110,
        marginHorizontal: 25,
        marginVertical: 15
    },
    check: {
        padding: 10,
        color: '#ed9a00'
    },
    ruleHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: '2%'
    },
    ruleTitle: {
        fontFamily: 'RopaSans',
        fontSize: 25,
    },
    ruleDetail: {
        fontFamily: 'RopaSans',
        fontSize: 18,
        color: '#4c4157'
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
        fontFamily: 'RopaSans',
    },
    buttonText: {
        alignSelf: 'center',
        color: '#a8c961',
        fontSize: 16,
        fontFamily: 'RopaSans',
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
        width: 320,
        borderRadius: 25,
        backgroundColor: '#ffaa2b',
        borderColor: '#ffaa2b',
        borderWidth: 2,
        top: 200,
        width: 320,
    },
  });