import React, { ReactNode } from "react";
import { Text, View, Modal, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


import { styles } from "./styles";



export function ModalView({ isVisible, filterParam, handleClose }) {

  const handleFilterParam = (menorQue, maiorQue) => {
    filterParam(menorQue, maiorQue)
  }
  // SUB_5, 
  // SUB_7, 
  // SUB_9, 
  // SUB_11, 
  // SUB_13, 
  // SUB_15, 
  // SUB_18, 
  // SUB_21,
  // SENIOR_BRANCA_AMARELA,
  // SENIOR_LARANJA_VERDE,
  // SENIOR_BRANCA_VERDE, 
  // SENIOR_ROXA_PRETA,
  // VETERANO_1,
  // VETERANO_2,
  // VETERANO_3,
  // VETERANO_4,
  // VETERANO_5,
  // VETERANO_6,
  // VETERANO_7,
  // VETERANO_8,
  // VETERANO_9,
  // VETERANO_10,
  // VETERANO_11;


  return (
    <Modal animationType="slide" visible={isVisible} transparent={true} >
      <View style={styles.overlay}>

        <View style={styles.container}>
          <View style={styles.header}>

            <View style={styles.containerTextHeader}>
              <Text style={styles.textHeader}>Selecione o tipo do Ranking</Text>
            </View>
            <View style={styles.containerCloseButton}>
              <TouchableOpacity
                onPress={handleClose}
              >
                <FontAwesome name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={{ marginBottom: '10%' }}>

            <View style={styles.content}>
              <View style={styles.contentColumn}>

                <Text>Evento:</Text>
                <TextInput style={styles.filterButton} />

                <Text>Horário do evento</Text>
                <TextInput
                  placeholder="Ex: 8:30 as 9:00"
                />

                <Text>Descrição do Evento</Text>
                <TextInput />

                <Text>Pontuação do Evento</Text>
                <TextInput
                  placeholder="ex: 200 pts" />


              </View>

            </View>
          </ScrollView>
        </View>

      </View>

    </Modal >
  );
}
