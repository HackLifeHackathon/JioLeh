import React from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import {
    StyleSheet, View, TextInput, TouchableOpacity, Text,
  } from 'react-native'

export default function CreateAccountScreen({ navigation }) {
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5 name="chevron-left" size={25} style={styles.chevron}/>
            </TouchableOpacity>
            <View style={styles.header}>
            <Text style={styles.title}>Registration</Text>
            <View style={styles.form}>
              <Text style={styles.name}>Email Address</Text>
              <TextInput
                style={styles.input}
                placeholder=" Enter Email"
              >
              </TextInput>
              <Text style={styles.name}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder=" Enter Password"
                >
              </TextInput>
              <Text style={styles.name}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                placeholder=" Re-enter Password"
                >
              </TextInput>
              </View>
              <TouchableOpacity style={styles.buttonInverted} onPress={() => navigation.navigate('SelectGame')}>
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
        justifyContent: 'center',
        alignItems: 'center',
        top: 120,
    },
    title: {
        fontSize: 35,
      },
    input: {
        height: 45,
        width: 300,
        marginTop: 12,
        marginBottom: 20,
        backgroundColor: 'white',
        borderBottomColor: '#424242',
        borderBottomWidth: 2,
        fontSize: 18,
      },
    form: {
        marginTop: 30,
    },
    name: {
        fontSize: 20,
    },
    buttonInverted: {
        paddingVertical: 15,
        paddingHorizontal: 120,
        borderRadius: 25,
        backgroundColor: '#a8c961',
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 250,
    },
    invertedText: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 16,
    },
  });