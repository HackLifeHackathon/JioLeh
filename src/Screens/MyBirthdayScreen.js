import React, { useState } from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, Button, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function MyBirthdayScreen({ route, navigation }) {
    const { userid, games, username, gender } = route.params;

    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };

    const showDatepicker = () => {
        showMode('date');
      };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{zIndex: 2}} onPress={() => navigation.goBack()}>
                <FontAwesome5 name="chevron-left" size={25} style={styles.chevron}/>
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.header}>My Birthday is...</Text>
                <View style={styles.buttonContainer}>
                    <View>
                        <Button onPress={showDatepicker} title="Show date picker!" />
                    </View>
                    {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="spinner"
                        onChange={onChange}
                        />
                    )}
                </View>
                <TouchableOpacity style={styles.buttonInverted} onPress={() => calculateAgeAndGo(navigation, userid, games, username, gender, date)}>
                    <Text style={styles.invertedText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function calculateAgeAndGo(navigation, userid, games, username, gender, bday) {
    var inputYear  = bday.getFullYear();
    var currentYear = new Date().getFullYear();
    var userAge = currentYear - inputYear;

    if (userAge <= 0) {
        Alert.alert("Hold Up!", "Are you even born yet?")
    } else if (userAge <= 3) {
        Alert.alert("Young One", "Please focus on studying!")
    } else if (userAge > 80) {
        Alert.alert("Hey!", "Are you sure?")
    } else {
        navigation.navigate('PlayingDays', { userid: userid, games: games, username: username, gender: gender, userAge: userAge})
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
        fontFamily: 'RopaSans',
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
        backgroundColor: '#a8c961',
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 600,
    },
  });