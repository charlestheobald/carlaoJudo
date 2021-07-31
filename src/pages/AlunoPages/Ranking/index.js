
import React, { useState, useEffect } from 'react';
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

import { Header } from '../../../components/Header'
import { RankedStudent } from '../../../components/RankedStudent';
import { Ionicons } from '@expo/vector-icons';
import { StandardButton } from '../../../components/StandardButton';
import { ModalView } from '../../../components/ModalView';

export const Ranking = () => {

  const [listaAlunos, setListaAlunos] = useState([])
  const [queryData, setQueryData] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [filterQuery, setFilterQuery] = useState([200, 0])



  useEffect(() => {
    getAluno().then((res) => {
      setListaAlunos(
        res.sort((a, b) => {
          if (a.pontuacao < b.pontuacao) {
            return 1;
          }
          if (a.pontuacao > b.pontuacao) {
            return -1;
          }
        }))
    }).catch((err) => {
      console.error("Ops, ocorreu um erro " + err)
    }, [])

  })






  const handleFilterQuery = (menorQue, maiorQue) => {
    console.log(listaAlunos)
    setFilterQuery([menorQue, maiorQue])
    setIsModalVisible(false)
  }



  return (

    <View style={styles.background}>

      <Header />
      <View style={styles.content}>

        <View style={styles.headerRanked}>
          <Text style={styles.textRanking}>Ranking</Text>

          <TouchableOpacity style={styles.iconFilter}
            onPress={() => setIsModalVisible(true)}
          >
            <Ionicons name="options" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.tituloRanked}>
          <Text style={styles.textTitulo}>Rank</Text>
          <Text style={styles.textTitulo2}>Nome aluno</Text>
          <AntDesign style={styles.trophy} name="Trophy" size={24} color="black" />
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


