
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
  Modal,
  FlatList,
  Alert
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

  const { isAdmin, nomeContexto, fullData, setFullData } = useContext(UsuarioContext)

  const navigation = useNavigation();

  function filterFunction(value) {
    return value.classe === queryParam
  }

  useEffect(() => {
    if (queryParam != 'GERAL') {
      setListaAlunos(
        fullData.filter(filterFunction).sort((a, b) => {
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
    if(isAdmin){
      navigation.navigate('AlunoConfigs')
    }else{
    navigation.navigate('UserConfigs')
    }
  }

  const handleRefresh = () => {
    getAluno().then((res) => {
      setFullData(res)
    }).catch((error) => {
      Alert.alert(
        'Erro!',
        `Alguma coisa ruim aconteceu! ${error.response}`,
        [{ text: 'ok' }])
    })


    if (queryParam != 'GERAL') {
      setListaAlunos(
        fullData.filter(filterFunction).sort((a, b) => {
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
        })
      )
    }
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

        {
          isAdmin &&

          <FlatList style={{ paddingLeft: '10%', width: '110%' }}
            data={listaAlunos}
            refreshing={false}
            onRefresh={handleRefresh}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item: aluno, index }) => {


              return (
                <TouchableOpacity onPress={handleNavigationConfigs}>
                  <RankedStudent key={index} rank={index + 1} name={aluno.nome} idAluno={aluno.id} points={aluno.pontuacao} />
                </TouchableOpacity>
              )
            }
            }
          />
        }
        {
          !isAdmin &&

          <FlatList style={{ paddingLeft: '10%', width: '110%' }}
            data={listaAlunos}
            refreshing={false}
            onRefresh={handleRefresh}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item: aluno, index }) => {
              return (
                  <RankedStudent key={index} rank={index + 1} name={aluno.nome} points={aluno.pontuacao} />
              )
            }
            }
          />
        }
      </View>
      <ModalView isVisible={isModalVisible} handleClose={() => setIsModalVisible(false)} filterParam={handleFilterQuery} />
    </View>

  )
}


