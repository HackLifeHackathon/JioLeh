import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable'
import ProfileCard from './ProfileCard'
import Modal from './Modal'

let imageRef = null
export default function GamersConnected({ navigation }) {
    const [progress, setProgress] = useState(0)
    const[sentRequest, setSentRequest] = useState(false)
    
    const users = [{ name: 'Leon', birthday: '12 January 1999', image: require('../../../assets/Leon.png'),
    dates: 'Mon  Fri  Sat', games:['Valorant', 'DOTA 2', 'Among Us']},
    { name: 'Bee', birthday: '18 March 1995', image: require('../../../assets/Bee.png'),
    dates: 'Fri  Sat', games:['Valorant', 'Minecraft']},
    { name: 'Tara', birthday: '05 December 2000', image: require('../../../assets/Tara.png'),
    dates: 'Tues  Sat  Sun', games:['DOTA 2', 'Minecraft']},
    { name: 'Jessie', birthday: '23 December 2000', image: require('../../../assets/Jessie.png'),
    dates: 'Wed  Sat  Sun', games:['Among Us', 'Minecraft', 'MapleSea']}]

    const pressNext = () => {
      showNextContent()
    }

    const showNextContent = () => {
      setProgress(progress + 1)
      imageRef.bounceInRight(0, 0)
    }

    const onPressConnect = () => {
       setSentRequest(true)
    }

    const onPressOk = () => {
      setSentRequest(false)
      showNextContent()
    }

    return (
        <View style={styles.container}>
          <TouchableOpacity 
            style={styles.chevron}
            onPress={() => navigation.openDrawer()}>
            <FontAwesome5 name="align-justify" size={25} />
          </TouchableOpacity>
          <Animatable.View
            ref={(ref) => {
              imageRef = ref
            }}
          >
            <ProfileCard
            data={users[progress]}/>
         </Animatable.View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonSelect} onPress={() => onPressConnect()}>
            <FontAwesome5 name="chevron-left" size={25} color='black'/>
                <Text style={{ fontSize: 20, marginLeft: 10 }}>CONNECT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSelect}  onPress={() => pressNext()}>
                <Text style={{ fontSize: 20, marginRight: 10 }}>NEXT</Text>
                <FontAwesome5 name="chevron-right" size={25} color='black'/>
            </TouchableOpacity>
            </View>
            <Modal
            title=" Friend Request Sent!"
            message="Great, your request has been sent. You will be notified when your request has been accepted."
            showModal={sentRequest}
            onCloseModal={() => setSentRequest(false)}
            onYes={() => onPressOk()}
        />
        </View>
    )
}

export const GameToken = ({ name }) => (
    <View style={styles.gameToken}>
        <Text>{name}</Text>
    </View>
)
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a8c961',
      //justifyContent: 'center',
    },
    chevron: {
        top: 70,
        paddingLeft: 30,
        zIndex: 2,
    },
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
      },
      line:{
        marginVertical: 15,
        fontSize: 16,
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