import React, { ReactNode } from "react";
import { Text, View, Modal, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { StandardButton } from '../../components/StandardButton'

import { styles } from "./styles";



export function ModalEvent({ isVisible, handleClose }) {


  return (
    <Modal animationType="slide" visible={isVisible} transparent={true} >
      <View style={styles.overlay}>

        <View style={styles.container}>
          <View style={styles.header}>

            <View style={styles.containerTextHeader}>
              <Text style={styles.textHeader}>Adicione um evento</Text>
            </View>
            <View style={styles.containerCloseButton}>
              <TouchableOpacity
                onPress={handleClose}
              >
                <FontAwesome name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={{ marginBottom: '10%', width: '100%' }}>

            <View style={styles.content}>
              <View style={styles.contentColumn}>

                <Text style={styles.inputText}>Evento:</Text>
                <TextInput style={styles.input}
                  placeholder={"Ex: Campeonato Nacional"} />

                <Text style={styles.inputText}>Horário do evento</Text>
                <TextInput style={styles.input}
                  placeholder="Ex: 8:30 as 9:00"
                />

                <Text style={styles.inputText}>Descrição do Evento</Text>
                <TextInput style={styles.inputDescription} />

                <Text style={styles.inputText}>Pontuação do Evento</Text>
                <TextInput style={styles.input}
                  placeholder="ex: 200" />

                <TouchableOpacity style={styles.buttonSave}>
                  <Text style={styles.textButton}>Salvar Evento</Text>
                </TouchableOpacity>


              </View>

            </View>
          </ScrollView>
        </View>

      </View>

    </Modal >
  );
}
