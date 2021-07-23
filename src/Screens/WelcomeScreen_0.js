import React from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen_0({ route, navigation }) {
    const { userid } = route.params;
    // console.log(userid)
    // console.log(games)
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{zIndex: 2}} onPress={() => navigation.goBack()}>
                <FontAwesome5 name="chevron-left" size={25} style={styles.chevron}/>
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.header}>Creating Your Account!</Text>
                <View style={styles.ruleHeader}>
                    <FontAwesome5 name="check" size={25} style={styles.check}/>
                    <Text style={styles.ruleTitle}>Please Be Honest</Text>
                </View>
                <Text style={styles.ruleDetail}>Make sure the information you have provided is as accurate as possible to make matching more precise</Text>

                <TouchableOpacity style={styles.buttonInverted} onPress={() => navigation.navigate('SelectGame', {userid: userid})}>
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
        fontFamily: 'RopaSans',
        fontSize: 25,
        top: 100,
    },
    headerTwo: {
        fontFamily: 'RopaSans',
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
        fontFamily: 'RopaSans',
        fontSize: 20,
    },
    ruleDetail: {
        fontFamily: 'RopaSans',
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
        //paddingHorizontal: 40,
        borderRadius: 25,
        backgroundColor: '#a8c961',
        borderColor: 'black',
        borderWidth: 2,
        top: 200,
        width: 320,
    },
  });