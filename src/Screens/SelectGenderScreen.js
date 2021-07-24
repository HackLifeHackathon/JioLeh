import React, {useState} from 'react';
import { FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SelectGenderScreen({ navigation }) {
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
      backgroundColor: '#b6a2db',
    },
    chevron: {
        top: 70,
        paddingLeft: 30,
    },
    header: {
        fontFamily: 'RopaSans',
        fontSize: 35,
        top: 100,
    },
    buttonContainer: {
        flexDirection: 'column',
        marginTop: 200, 
    },
    buttonText: {
        alignSelf: 'center',
        color: '#b6a2db',
        fontSize: 16,
        fontFamily: 'RopaSans',
    },
    button: {
        paddingVertical: 15,

        borderRadius: 25,
        backgroundColor: 'black',
        marginVertical: 15,
        borderWidth: 2,
        width: 320,
    },
    buttonInverted: {
        paddingVertical: 15,
        width: 320,
        borderRadius: 25,
        backgroundColor: '#b6a2db',
        borderColor: 'black',
        borderWidth: 2,
        marginVertical: 15,
    },
    invertedText: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 16,
        fontFamily: 'RopaSans',
    },
    continue: {
        marginTop: '10%',
        paddingVertical: 15,
        width: 320,
        borderRadius: 25,
        backgroundColor: '#ffaa2b',
        borderColor: '#ffaa2b',
        borderWidth: 2,
        marginTop: '70%',
    }
  });