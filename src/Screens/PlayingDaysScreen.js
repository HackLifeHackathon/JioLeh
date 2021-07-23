import React, {useState} from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PlayingDayScreen({ navigation }) {

    const [selectMonday, setSelectMonday]= useState(false)
    const [selectTuesday, setSelectTuesday] = useState(false)
    const [selectWednesday, setSelectWednesday] = useState(false)
    const [selectThursday, setSelectThursday] = useState(false)
    const [selectFriday, setSelectFriday] = useState(false)
    const [selectSaturday, setSelectSaturday] = useState(false)
    const [selectSunday, setSelectSunday] = useState(false)

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{zIndex: 2}} onPress={() => navigation.goBack()}>
                <FontAwesome5 name="chevron-left" size={25} style={styles.chevron}/>
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.header}>I usually play on</Text>
                <View style={styles.buttonContainer}>
                <TouchableOpacity 
                style={selectMonday ? styles.button : styles.buttonInverted}
                onPress={() => setSelectMonday(!selectMonday)}
                >
                    <Text style={selectMonday ? styles.buttonText : styles.invertedText}>Monday</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={selectTuesday ? styles.button : styles.buttonInverted}
                onPress={() => setSelectTuesday(!selectTuesday)}>
                    <Text style={selectTuesday ? styles.buttonText : styles.invertedText}>Tuesday</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={selectWednesday ? styles.button : styles.buttonInverted}
                onPress={() => setSelectWednesday(!selectWednesday)}>
                    <Text style={selectWednesday ? styles.buttonText : styles.invertedText}>Wednesday</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={selectThursday ? styles.button : styles.buttonInverted}
                onPress={() => setSelectThursday(!selectThursday)}>
                    <Text style={selectThursday ? styles.buttonText : styles.invertedText}>Thursday</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={selectFriday ? styles.button : styles.buttonInverted}
                onPress={() => setSelectFriday(!selectFriday)}>
                    <Text style={selectFriday ? styles.buttonText : styles.invertedText}>Friday</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={selectSaturday ? styles.button : styles.buttonInverted}
                onPress={() => setSelectSaturday(!selectSaturday)}>
                    <Text style={selectSaturday ? styles.buttonText : styles.invertedText}>Saturday</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={selectSunday ? styles.button : styles.buttonInverted}
                onPress={() => setSelectSunday(!selectSunday)}>
                    <Text style={selectSunday ? styles.buttonText : styles.invertedText}>Sunday</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonInverted} onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={styles.invertedText}>Continue</Text>
                </TouchableOpacity>
                </View>
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
    content: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        fontFamily: 'Monaco',
        fontSize: 25,
        top: 90,
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
        borderWidth: 2,
        marginBottom: 15,
    },
    buttonInverted: {
        paddingVertical: 15,
        borderRadius: 25,
        backgroundColor: '#a8c961',
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 15,
        width: 320,
    },
  });