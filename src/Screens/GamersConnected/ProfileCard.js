import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function ProfileCard({ data }) {
    const {name, birthday, image, games, dates } = data
    return (
        <View style={styles.profile}>
        <View style={styles.imageCard}>
        <Image style={styles.image} source={image} />
        </View>
        <View style={styles.information}>
            <View style={{ flexDirection: 'row'}}>
            <Text style={styles.name}>{name}</Text>
            <FontAwesome5 name="grin-wink" size={25} color='#eb8f34'/>
            </View>
            <Text style={styles.line}>{`Birthday: ${birthday}`}</Text>
            <View style={{ flexDirection: 'row'}}>
            <FontAwesome5 name="calendar-alt" size={25} color='#eb8f34'/>
            <Text style={{ marginTop: 5, marginLeft: 10 }}>{dates}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 20}}>
            { games.map((item) => <GameToken name={item} />)}
            </View>
        </View>
    </View>
    )
}

export const GameToken = ({ name }) => (
    <View style={styles.gameToken}>
        <Text>{name}</Text>
    </View>
)

const styles = StyleSheet.create({
      buttonContainer: {
          flexDirection: 'row',
          alignSelf: 'center',
          position: 'absolute',
          bottom: 100,
          justifyContent: 'space-between',
          width: 350,
      },
      button: {
          paddingVertical: 15,
          width: 320,
          borderRadius: 25,
          backgroundColor: 'black',
          marginBottom: 20,
          marginVertical: 10,
      },
      buttonInverted: {
          paddingVertical: 15,
          width: 320,
          borderRadius: 25,
          backgroundColor: '#a8c961',
          borderColor: 'black',
          borderWidth: 2,
          marginVertical: 10,
      },
      imageCard: {
          height: 350,
          width: 350,
          paddingHorizontal: 8,
          // marginHorizontal: Spacing.h.xl,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          justifyContent: 'center',
          alignSelf: 'center',
        },
        image: {
          height: 300,
          resizeMode: 'contain',
          alignSelf: 'center',
        },
        profile: {
          marginTop: 100,
        },
        information: {
          paddingLeft: 15,
          alignSelf: 'center',
          backgroundColor: 'white',
          width: 350,
        },
        name: {
          fontSize: 20,
          fontWeight: 'bold',
          marginRight: 10,
          fontFamily: 'RopaSans',
        },
        line:{
          marginVertical: 15,
          fontSize: 16,
          fontFamily: 'RopaSans',
        },
        gameToken:{
          padding: 10,
          borderColor: '#e3714b',
          borderWidth: 2,
          borderRadius: 20,
          marginRight: 10,
        },
        buttonSelect: {
            flexDirection: 'row',
            padding: 18,
            //borderWidth: 2,
            borderRadius: 15,
            backgroundColor: 'white',
            shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }
  });