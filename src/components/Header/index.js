
import React, { useRef } from 'react';
import { View, TouchableOpacity, Image, Text, Pressable, Modal, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';


export const Header = ({ isVisible, handleNavigationModal }) => {



  const [modalVisible, setModalVisible] = React.useState(false);

  const handleClose = () => {
    setModalVisible(false)
  }

  const handleNavClose = () => {
    handleNavigationModal()
    setModalVisible(false)
  }

  return (



    <View style={styles.container}>
      <View >
        <Image style={styles.logo} source={require('../../assets/Image/logo2.png')} />
      </View>

      <View style={styles.rightSide}>


        <View>
          <Modal animationType="slide" visible={modalVisible} transparent={true} >
            <View style={styles.overlay}>

              <View style={styles.ModalView}>
                <TouchableOpacity onPress={handleClose}>
                  <FontAwesome name="close" size={24} color="black" />
                </TouchableOpacity>
                <Button title='Press'
                  onPress={handleNavClose}
                />

              </View>
            </View>
          </Modal>


          <TouchableOpacity
            onPress={() => setModalVisible(true)}>
            <View style={styles.avatar}></View>
          </TouchableOpacity>
        </View>


        <TouchableOpacity style={styles.button}

        >
          <AntDesign name="setting" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View >


  )
}

