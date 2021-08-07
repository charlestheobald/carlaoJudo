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

  const listaFaixas = [
    {
      nome: 'Informe sua faixa', id: '0'
    },
    {
      nome: 'BRANCA',
      id: 'BRANCA'
    },
    {
      nome: 'BRANCA PONTA CINZA',
      id: 'BRANCA_PONTA_CINZA'
    },
    {
      nome: 'CINZA',
      id: 'CINZA'
    },
    {
      nome: 'CINZA PONTA AZUL',
      id: 'CINZA_PONTA_AZUL'
    },
    {
      nome: 'AZUL',
      id: 'AZUL'
    },
    {
      nome: 'AZUL PONTA AMARELA',
      id: 'AZUL_PONTA_AMARELA'
    },
    {
      nome: 'AMARELA',
      id: 'AMARELA'
    },
    {
      nome: 'AMARELA PONTA LARANJA',
      id: 'AMARELA'
    },
    {
      nome: 'LARANJA',
      id: 'LARANJA'
    },
    {
      nome: 'LARANJA PONTA VERDE',
      id: 'LARANJA_PONTA_VERDE'
    },
    {
      nome: 'VERDE',
      id: 'VERDE'
    },
    {
      nome: 'ROXA',
      id: 'ROXA'
    },
    {
      nome: 'MARROM',
      id: 'MARROM'
    },
    {
      nome: 'PRETA 1º DAN',
      id: 'PRETA_1_DAN'
    },
    {
      nome: 'PRETA 2º DAN',
      id: 'PRETA_2_DAN'
    },
    {
      nome: 'PRETA 3º DAN',
      id: 'PRETA_3_DAN'
    },
    {
      nome: 'PRETA 4º DAN',
      id: 'PRETA_4_DAN'
    },
    {
      nome: 'PRETA 5º DAN',
      id: 'PRETA_5_DAN'
    },
    {
      nome: 'VERMELHA BRANCO 6º DAN',
      id: 'VERMELHA_BRANCO_6_DAN'
    },
    {
      nome: 'VERMELHA BRANCO 7º DAN',
      id: 'VERMELHA_BRANCO_7_DAN'
    },
    {
      nome: 'VERMELHA BRANCO 8º DAN',
      id: 'VERMELHA_BRANCO_8_DAN'
    },
    {
      nome: 'VERMELHA 9º DAN',
      id: 'VERMELHA_9_DAN'
    },
    {
      nome: 'VERMELHA 10º DAN',
      id: 'VERMELHA_10_DAN'
    },

  ]

  const { aluno } = useContext(UsuarioContext)

  const navigation = useNavigation();

  const [pontuacao, setPontuacao] = useState(aluno.pontuacao);
  const [status, setStatus] = useState(aluno.status);
  const [faixa, setFaixa] = useState(aluno.faixa);

  const alunoUpdateVO = {
    pontuacao: pontuacao,
    status: status,
    faixa: faixa
  }

  const handleGoBack = () => {
    navigation.goBack()
  }

  const handleEmptyPontuacao = () => {
    if (pontuacao === null)
      return alert("O campo pontuação não pode ficar vazio")
  }

  const handleUpdateStatus = () => {
    updateStatus(aluno.id, alunoUpdateVO).then((res) => {
      alert('sucesso')
      navigation.navigate('Ranking')
    }).catch((e) => alert(e.response.messsage))

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

        <Text style={styles.textInput}>Status*</Text>
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

        <Text style={styles.textInput}>Faixa*</Text>
        <View style={[styles.input, { justifyContent: 'center' }]}>
          <Picker
            selectedValue={faixa}
            onValueChange={(itemValue, itemIndex) => setFaixa(itemValue)}
          >
            {listaFaixa.map((faixa) => (
              <Picker.Item label={faixa.nome} value={faixa.id} key={faixa.id} />
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

