
import React, { useState, useEffect } from 'react';
import {
  View,
  Button,
  TextInput,
  Text,
  Animated,
  Keyboard,
  ScrollView,
  TouchableOpacity
} from 'react-native';


import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../../global/theme';
import { getAluno } from '../../../services/AlunoService/'

import { Header } from '../../../components/Header'
import { RankedStudent } from '../../../components/RankedStudent';
import { Ionicons } from '@expo/vector-icons';
import { StandardButton } from '../../../components/StandardButton';

export const Ranking = () => {

  const [listaAlunos, setListaAlunos] = useState([])


  // useEffect(() => {
  //   getAluno().then((res) => {
  //     setListaAlunos(res)
  //     console.log(res)

  //     var preOrder = res
  //     preOrder.sort((a, b) => {
  //       if (a.pontuacao < b.pontuacao) {
  //         return 1;
  //       }
  //       if (a.pontuacao > b.pontuacao) {
  //         return -1;
  //       }
  //       return 0;
  //     });
  //     setListaAlunos(preOrder)

  //   }).catch((err) => {
  //     console.error("Ops, ocorreu um erro " + err)
  //   }, [])
  // })

  useEffect(() => {
    var items = [
      { name: 'Edward', value: 21 },
      { name: 'Sharpe', value: 37 },
      { name: 'And', value: 45 },
      { name: 'The', value: -12 },
      { name: 'Magnetic', value: 1 },
      { name: 'Zeros', value: 37 }
    ];
    items.sort((a, b) => {
      if (a.value < b.value) {
        return 1;
      }
      if (a.value > b.value) {
        return -1;
      }
      return 0;
    });
    setListaAlunos(items)
  }, [])


  return (

    <View style={styles.background}>

      <Header />
      <View style={styles.content}>

        <View style={styles.headerRanked}>
          <Text style={styles.textRanking}>Ranking</Text>
          <TouchableOpacity style={styles.iconFilter}>
            <Ionicons name="options" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.tituloRanked}>
          <Text style={styles.textTitulo}>Rank</Text>
          <Text style={styles.textTitulo}>Nome aluno</Text>
          <AntDesign style={styles.trophy} name="Trophy" size={24} color="black" />
        </View>

        <ScrollView style={{ paddingLeft: '10%', width: '110%' }}>


          {/* {listaAlunos ? listaAlunos.map((aluno) => (


          <View key={aluno.name} style={styles.listContent}>

          </View>


        )) : <Text>falha ao carregar ranking</Text>} */}
          <RankedStudent rank={1} name='Charles the Guy' points='20.555' />
          <RankedStudent rank={2} name='Augusto César' points='20.555' />
          <RankedStudent rank={3} name='Ricardo das Candonga' points='20.555' />
          <RankedStudent rank={4} name='Alex o Leão' points='20.555' />
          <RankedStudent rank={5} name='Alok' points='20.555' />
          <RankedStudent rank={6} name='Christiano Gabigol' points='20.555' />
        </ScrollView>
      </View>


    </View>

  )
}


