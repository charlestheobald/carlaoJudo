import React, { ReactNode, useState } from "react";
import { Text, View, Modal, TouchableOpacity, ScrollView, TextInput, Alert } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { StandardButton } from '../../components/StandardButton'
import { styles } from "./styles";
import { addEvento } from "../../services/AlunoService";
import { useNavigation } from "@react-navigation/native";

export function ModalEvent({ isVisible, handleClose }) {
  const navigation = useNavigation();

  const [nome, setNome] = useState(null)
  const [horario, setHorario] = useState(null)
  const [descricao, setDescricao] = useState(null)
  const [pontuacao, setPontuacao] = useState(null)

  const handleAddEvento = () => {
    const eventoVO = {
      //anexo: anexo,
      data: new Date(),
      nome: nome,
      hora: horario,
      descricao: descricao,
      pontuacao: pontuacao,
    }
    addEvento(eventoVO)
      .then((res) => {
        console.log(res.data)
        alert("Sucesso")
        navigation.reset({
          index: 0,
          routes: [{ name: "Calendar" }]
        });
      })
      .catch((e) => Alert.alert(
        "Erro!",
        `${e}`,
        [{ text: "ok" }]
      )
      );

  }

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

          <View style={styles.content}>
            <ScrollView style={{ marginBottom: '10%', width: '100%' }}>

              <View style={styles.contentColumn}>

                <Text style={styles.inputText}>Evento:</Text>
                <TextInput style={styles.input}
                  placeholder={"Ex: Campeonato Nacional"}
                  autoCorrect={false}
                  onChangeText={(text) => setNome(text)}

                />

                <Text style={styles.inputText}>Horário do evento</Text>
                <TextInput style={styles.input}
                  placeholder="Ex: 8:30h as 9:00h"
                  autoCorrect={false}
                  onChangeText={(text) => setHorario(text)}

                />

                <Text style={styles.inputText}>Descrição do Evento</Text>
                <TextInput style={styles.inputDescription}
                  placeholder="Ex: 8:30h as 9:00h"
                  autoCorrect={false}
                  onChangeText={(text) => setDescricao(text)}
                />

                <Text style={styles.inputText}>Pontuação do Evento</Text>
                <TextInput style={styles.input}
                  placeholder="ex: 200"
                  autoCorrect={false}
                  onChangeText={(text) => setPontuacao(text)}
                />

                <TouchableOpacity style={styles.buttonSave} onPress={handleAddEvento}>
                  <Text style={styles.textButton}>Salvar Evento</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </Modal >
  );
}
