import React from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal'

const ModalAlert = (props) => {
  const {
    children, style, isVisible = false, onRequestClose = () => {
    }, onModalHide, wrapperStyle,
  } = props
  return (
    <Modal
      {...props}
      style={wrapperStyle}
      hasBackdrop
      isVisible={isVisible}
      backdropOpacity={0.6}
      backdropColor="#000"
      onBackdropPress={onRequestClose}
      onBackButtonPress={onRequestClose}
      onModalHide={onModalHide}
      overlay
    >
      <View style={[{ backgroundColor: 'white', paddingVertical: 8, maxHeight: 300 }, style]}>
        {children}
      </View>
    </Modal>
  )
}

export default ModalAlert
