import React, {useState} from 'react';
import { FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SelectGameScreen({ navigation }) {
    const [selectMale, setSelectMale] = useState(false)
    const [selectFemale, setSelectFemale] = useState(false)
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{zIndex: 2}} onPress={() => navigation.goBack()}>
            <FontAwesome5 name="chevron-left" size={25} style={styles.chevron}/>
            </TouchableOpacity>
            <View style={{ alignItems: 'center'}}>
            <Text style={styles.header}>I am a...</Text>
            <View style={styles.buttonContainer}>
            <TouchableOpacity
            style={selectMale ? styles.button : styles.buttonInverted}
            onPress={() => setSelectMale(!selectMale)}
            disabled={selectFemale}>
                <Text style={selectMale ? styles.buttonText : styles.invertedText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={selectFemale ? styles.button : styles.buttonInverted}
            onPress={() => setSelectFemale(!selectFemale)}
            disabled={selectMale}>
                <Text style={selectFemale ? styles.buttonText : styles.invertedText}>Female</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity
            style={styles.continue}
            onPress={() => navigation.navigate('MyBirthday')}>
                  <Text style={styles.invertedText}>Continue</Text>
              </TouchableOpacity>
              </View>
        </View>
    )
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
    header: {
        fontFamily: 'Monaco',
        fontSize: 35,
        top: 100,
    },
    buttonContainer: {
        flexDirection: 'column',
        marginTop: 200, 
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
       // paddingHorizontal: 130,
        borderRadius: 25,
        backgroundColor: 'black',
        marginVertical: 15,
        width: 320,
    },
    buttonInverted: {
        paddingVertical: 15,
        width: 320,
        borderRadius: 25,
        backgroundColor: '#a8c961',
        borderColor: 'black',
        borderWidth: 2,
        marginVertical: 15,
    },
    invertedText: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 16,
    },
    continue: {
        paddingVertical: 15,
        width: 320,
        borderRadius: 25,
        backgroundColor: '#a8c961',
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 300,
    }
  });