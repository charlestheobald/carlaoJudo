import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Picker } from 'react-native'

import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles'
import { theme } from '../../../global/theme';
import { updateStatus } from '../../../services/AlunoService'
import { UsuarioContext } from '../../../contexts/usuario/UsuarioContext';
import { StandardButton } from '../../../components/StandardButton';
import { useNavigation } from "@react-navigation/native";

export const AlunoConfigs = () => {

  const pattern = "yyyy-MM-dd";



  const listaStatus = [
    {
      nome: "PENDENTE",
      id: "PENDENTE"
    },
    {
      nome: "ATIVO",
      id: "ATIVO"
    },
    {
      nome: "INATIVO",
      id: "INATIVO"
    }
  ]

  const { aluno } = useContext(UsuarioContext)

  const navigation = useNavigation();

  const [pontuacao, setPontuacao] = useState(aluno.pontuacao)
  const [status, setStatus] = useState(aluno.status);

  const alunoUpdateVO = {
    pontuacao: pontuacao,
    status: status
  }

  const handleGoBack = () => {
    navigation.goBack()
  }

  const handleEmptyPontuacao = () => {
    if (pontuacao === null)
      return alert("O campo pontuação não pode ficar vazio")
  }

  const handleUpdateStatus = () => {
    console.log('---------Status ' + alunoUpdateVO.status)
    console.log('---------Pontuacao ' + alunoUpdateVO.pontuacao)
    console.log('---------Aluno ' + aluno.id);
    updateStatus(aluno.id, alunoUpdateVO).then((res) => {
      console.log(res);
      alert('suuuucesso')
      navigation.navigate('Ranking')
    }).catch((e) => alert(e))

  }

  return (
    <>
      <View style={styles.containerHeader}>
        <View style={{ paddingLeft: '5%', marginRight: '-9%' }}>
          <TouchableOpacity style={styles.back}
            onPress={handleGoBack}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.image} source={require('../../../assets/Image/logo2.png')} />
        </View>

      </View>
      <View style={styles.containerUserInfo}>

        <Text style={styles.textInput}>Status *</Text>
        <View style={[styles.input, { justifyContent: 'center' }]}>
          <Picker
            selectedValue={status}
            onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
          >
            {listaStatus.map((status) => (
              <Picker.Item label={status.nome} value={status.id} key={status.id} />
            ))}
          </Picker>
        </View>

        <Text style={styles.textInput}>Pontuação*</Text>
        <TextInput style={styles.input}

          placeholder={pontuacao?.toString()}
          value={pontuacao}
          keyboardType="numeric"
          autoCorrect={false}
          onChangeText={(text) => setPontuacao(text)}
          onBlur={() => handleEmptyPontuacao()}
        />
        <View style={styles.containerEditProfileButton}>
          <StandardButton
            label='Editar Aluno'
            textColor={theme.colors.highlight}
            bgColor={theme.colors.secondary10}
            font={theme.fonts.text400}
            onPress={() => handleUpdateStatus()}
            widthProp='100%'

          />
        </View>
      </View>

    </>
  )
}

