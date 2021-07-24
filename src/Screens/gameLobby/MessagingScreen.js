import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function MessagingScreen({ navigation }) {
    const friends = [{ name: 'Beezz', chat: 'Hey on for tonight?', time: '3 min', image: require('../../../assets/boy1.png')}, 
   { name: 'Jessie', chat: 'Cant make it Bro, see you online on fri', time: '2 hrs', image: require('../../../assets/girl1.png')},
   { name: 'Tara21', chat: 'Hello nice to meet you too!', time: '4 hrs', image: require('../../../assets/girl2.png')}]
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
            <TouchableOpacity 
            style={styles.chevron}
            onPress={() => navigation.goBack()}>
                <FontAwesome5 name="chevron-left" size={25} />
            </TouchableOpacity>
            <Text style={styles.title}>ChatRoom</Text>
            </View>
            <View style={styles.chats}>
                { friends.map((pal) => <ChatGroup name={pal.name} chat={pal.chat} time={pal.time} image={pal.image}/>)}
            </View>
        </View>
    )
}

const ChatGroup = ({name, chat, time, image}) => (
    <View style={styles.chatHolder}>
        <Image style={styles.image} source={image}/>
        <View style={{ flexDirection: 'column', marginLeft: 15}}>
        <View style={{ flexDirection: 'row'}}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.time}>{time}</Text>
        </View>
        <Text style={styles.message}>{chat}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#feda00',
      //justifyContent: 'center',
    },
    title: {
        fontFamily: 'RopaSans',
        fontSize: 30,
        marginLeft: 40,
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
    chat: {
        padding: 12,
        borderRadius: 30,
        backgroundColor: 'white',
    },
    chats: {
        backgroundColor: 'white',
        flex: 1,
        padding: 20,
        borderRadius: 40,
    },
    topBar: {
        flexDirection: 'row',
        top: 70,
        paddingHorizontal: 30,
        height: 120,
    },
    chatHolder: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    image: {
        height: 60,
        width: 60,
        resizeMode: 'contain',
        padding: 30,
        borderRadius: 30,
        backgroundColor: '#b6a2db',
    },
    name: {
        fontFamily: 'RopaSans',
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 8,
      },
    message: {
        fontFamily: 'RopaSans',
        fontSize: 17,
      },
      time: {
        fontFamily: 'RopaSans',
        fontSize: 17,
        right: -150,
        color: '#89878a',
      },
  });