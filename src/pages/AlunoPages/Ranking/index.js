
import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Button,
  TextInput,
  Text,
  Animated,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Modal

} from 'react-native';


import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../../global/theme';
import { getAluno } from '../../../services/AlunoService/'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import { UsuarioContext } from '../../../contexts/usuario/UsuarioContext';
import { Header } from '../../../components/Header';
import { RankedStudent } from '../../../components/RankedStudent';
import { StandardButton } from '../../../components/StandardButton';
import { ModalView } from '../../../components/ModalView';

export const Ranking = () => {

  const [listaAlunos, setListaAlunos] = useState([])
  const [queryParam, setQueryParam] = useState("GERAL")
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [filterQuery, setFilterQuery] = useState([200, 0])

  const { isAdmin, nomeContexto, fullData } = useContext(UsuarioContext)

  const navigation = useNavigation();

  function isTheFuckingOne(value) {
    return value.classe === queryParam
  }

  useEffect(() => {
    if (queryParam != 'GERAL') {
      setListaAlunos(
        fullData.filter(isTheFuckingOne).sort((a, b) => {
          if (a.pontuacao < b.pontuacao) {
            return 1;
          }
          if (a.pontuacao > b.pontuacao) {
            return -1;
          }
        }))
    }
    else {
      setListaAlunos(
        fullData.sort((a, b) => {
          if (a.pontuacao < b.pontuacao) {
            return 1;
          }
          if (a.pontuacao > b.pontuacao) {
            return -1;
          }
        }))
    }
  }, [queryParam])


  // function filterParam(nomeClasse) {
  //   if (nomeCLasse === 'all') {

  //     return (aluno.classe === 'SUB-5' ||
  //       aluno.classe === 'SUB-7' ||
  //       aluno.classe === 'SUB-9' ||
  //       aluno.classe === 'SUB-11' ||
  //       aluno.classe === 'SUB-13' ||
  //       aluno.classe === 'SUB-15' ||
  //       aluno.classe === 'SUB-18' ||
  //       aluno.classe === 'SUB-21' ||

  //      );

  //   }

  // }

  const handleFilterQuery = (param) => {
    setQueryParam(param)
    setIsModalVisible(false)
  }

  const handleNavigationConfigs = () => {
    navigation.navigate('UserConfigs')
  }


  return (

    <View style={styles.background}>

      <Header handleNavigationModal={handleNavigationConfigs} />
      <View style={styles.content}>

        <View style={styles.headerRanked}>
          <Text style={styles.textRanking}>Ranking</Text>

          <TouchableOpacity style={styles.iconFilter}
            onPress={() => setIsModalVisible(true)}
          >
            <Ionicons name="options" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.containerTituloRanked}>
          <View >
            <Text style={styles.textTitulo}>Rank</Text>
          </View>
          <View>
            <Text style={styles.textTitulo2}>Nome aluno</Text>
          </View>
          <View style={{ flex: 1, marginLeft: '35%' }}>
            <AntDesign style={styles.trophy} name="Trophy" size={24} color="black" />
          </View>
        </View>

        <ScrollView style={{ paddingLeft: '10%', width: '110%' }}>
          {listaAlunos &&

            listaAlunos.map((aluno, index) => (

              <RankedStudent key={aluno.id} rank={index + 1} name={aluno.nome} points={aluno.pontuacao} />
            ))
          }


        </ScrollView>
      </View>
      <ModalView isVisible={isModalVisible} handleClose={() => setIsModalVisible(false)} filterParam={handleFilterQuery} />


    </View>

  )
}


