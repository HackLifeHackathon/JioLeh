import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import ModalAlert from './ModalAlert'
import { FontAwesome5 } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    flex: 0,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    color: '#a8c961',
    fontWeight: 'bold',
    fontFamily: 'RopaSans',
  },
  messageContainer: {
    marginVertical: 25,
  },
  message: {
    fontSize: 18,
    fontFamily: 'RopaSans',
  },
  closeButton: {
    position: 'absolute',
    zIndex: 4,
    top: 0,
  },
  actionContainer: {
    flexDirection: 'row',
  },
  touchableIconClose: {
    marginLeft: 8,
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
})

export default function ModalBasic({
  title, message, showModal, onYes, onCloseModal,
}) {
  return (
    <ModalAlert
      style={styles.container}
      isVisible={showModal}
      onRequestClose={onCloseModal}
    >
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title} adjustsFontSizeToFit numberOfLines={1}>{title}</Text>
          <TouchableOpacity
            onPress={onCloseModal}
            style={styles.touchableIconClose}
          >
            {/* <IconClose /> */}
            <FontAwesome5 name="times" size={20} color="#4f4e4d"/>
          </TouchableOpacity>
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity
          onPress={onYes}
          style={[styles.buttonInverted, { marginRight: 6 }]}
        >
          <Text style={{ alignSelf: 'center' }}>OK</Text>
        </TouchableOpacity>
      </View>
    </ModalAlert>
  )
}
