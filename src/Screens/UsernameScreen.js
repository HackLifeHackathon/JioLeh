import React, {useState} from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

// Might need keyboard


export default function SelectGameScreen({ route, navigation }) {
    const { userid, games } = route.params;    
    
    const [username, setUsername]= useState('')

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{zIndex: 2}} onPress={() => navigation.goBack()}>
                <FontAwesome5 name="chevron-left" size={25} style={styles.chevron}/>
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.header}>My Username</Text>
                <TextInput
                style={styles.input}
                placeholder=" Enter Username"
                onChangeText={(value) => setUsername(value)}
                >
                </TextInput>
                <Text style={styles.headerTwo}>This is the name that others will see.
                Feel free to use a nickname or your first name!</Text>
                <TouchableOpacity style={styles.buttonInverted} onPress={() => checkUsernameAndGo(userid, games, username, navigation)}>
                    <Text style={styles.invertedText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function checkUsernameAndGo(userid, games, username, navigation) {
    if (username.length == 0) {
        Alert.alert('Hi There!', 'Please enter a valid username', {Text: 'Ok'})
    } else {
        navigation.navigate('SelectGender', { userid: userid, games: games, username: username })
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a8c961',
    },
    chevron: {
        top: 70,
        paddingLeft: 30,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      
    },
    input: {
        top: 120,
        height: 45,
        width: 300,
        marginTop: 12,
        marginBottom: 20,
        backgroundColor: 'white',
        borderBottomColor: '#424242',
        borderBottomWidth: 2,
        fontSize: 18,
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
        margin: 20,
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