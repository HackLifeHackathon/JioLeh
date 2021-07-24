import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'
import {
    StyleSheet, View, TextInput, TouchableOpacity, Text,
  } from 'react-native'

export default function CreateAccountScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                value={email}
              >
              </TextInput>
              <Text style={styles.name}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder=" Enter Password"
                value={password}
                >
              </TextInput>
              <Text style={styles.name}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                placeholder=" Re-enter Password"
                value={password}
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
  backgroundColor: '#b6a2db',
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
  fontFamily: 'RopaSans',
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
  paddingLeft: 15,
  fontFamily: 'RopaSans',
  
},
form: {
  marginTop: 30,
},
name: {
  fontSize: 20,
  fontFamily: 'RopaSans',
},
buttonInverted: {
  paddingVertical: 15,
  //paddingHorizontal: 120,
  width: 320,
  borderRadius: 25,
  backgroundColor: '#ffaa2b',
  borderColor: '#ffaa2b',
  borderWidth: 2,
  marginTop: 150,
},
invertedText: {
  alignSelf: 'center',
  color: 'black',
  fontSize: 16,
  fontFamily: 'RopaSans',
},
});