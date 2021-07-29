
import React, { useRef } from 'react';
import { View, TouchableOpacity, Image, Text, Pressable, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

export const Header = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (



    <View style={styles.container}>
      <View >
        <Image style={styles.logo} source={require('../../assets/Image/logo2.png')} />
      </View>

      <View style={styles.rightSide}>

        <TouchableOpacity style={styles.button}>
          <View>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert();
                setModalVisible(!modalVisible);
              }}>
              <View>
                <View style={styles.ModalView}>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.FieldsModal}>Nome</Text>
                    <Text style={styles.FieldsModal}>Idade</Text>
                    <Text style={styles.FieldsModal}>Classe</Text>
                    <Text style={styles.FieldsModal}>Faixa</Text>
                    <Text style={styles.FieldsModal}>Último Exame</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable
              onPress={() => setModalVisible(true)}>
              <View style={styles.avatar}></View>
            </Pressable>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <AntDesign name="setting" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View >


  )
}

