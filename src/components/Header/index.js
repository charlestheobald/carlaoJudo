
import React, { useRef, useContext, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text, Pressable, Modal, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { UsuarioContext } from '../../contexts/usuario/UsuarioContext'

export const Header = ({ isVisible, handleNavigationModal, handleNavigationPagamentos }) => {



  const [modalVisible, setModalVisible] = React.useState(false);

  const handleClose = () => {
    setModalVisible(false)
  }

  const handleNavClose = () => {
    handleNavigationModal()
    setModalVisible(false)
  }

  const { isAdmin, user } = useContext(UsuarioContext)

  // const [nome, setNome] = useEffect(user.nome)
  // const [idade, setIdade] = useEffect(user.dataNasc)
  // const [classe, setClasse] = useEffect(user.classe)
  // const [faixa, setFaixa] = useEffect(user.faixa)
  // const [categoria, setCategoria] = useEffect(user.categoria)

  // function calcAge(dataNasc) {
  //   var dif = Date.now() - dataNasc.getTime();
  //   var idade = new Date(dif);

  //   return Math.abs(idade.getUTCFullYear() - 1970);
  // }



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


                <Text style={styles.textModal}>Nome:</Text>
                <Text style={styles.textModal}>Idade:</Text>
                <Text style={styles.textModal}>Classe:</Text>
                <Text style={styles.textModal}>Faixa:</Text>
                <Text style={styles.textModal}>Categoria:</Text>


                <TouchableOpacity
                  style={styles.buttonModal}
                  onPress={handleNavClose}>
                  <Text> Alterar cadastro</Text>
                </TouchableOpacity>

              </View>
            </View>
          </Modal>


          <TouchableOpacity
            onPress={() => setModalVisible(true)}>
            <View style={styles.avatar}></View>
          </TouchableOpacity>
        </View>

        {isAdmin &&

          <TouchableOpacity style={styles.button}
            onPress={handleNavigationPagamentos}
          >
            <MaterialCommunityIcons name="clipboard-text-outline" size={34} color="black" />
          </TouchableOpacity>

        }
      </View>
    </View >


  )
}

