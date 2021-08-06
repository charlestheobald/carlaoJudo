
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header } from '../../components/Header';
import { theme } from '../../global/theme';
import { styles } from './styles';
import { UsuarioContext } from '../../contexts/usuario/UsuarioContext';

import { getPagamentos, countAluno, getAluno } from '../../services/AlunoService';

import { StackedBarChart } from 'react-native-svg-charts';

export const Pagamentos = () => {
  const { fullData } = useContext(UsuarioContext)


  const [pix, setPix] = useState(null)
  const [boleto, setBoleto] = useState(null)
  const [debito, setDebito] = useState(null)
  const [credito, setCredito] = useState(null)
  const [transferencia, setTransferencia] = useState(null)
  const [especie, setEspecie] = useState(null)

  const calcPags = () => {
    getAluno().then((res) => {
      
      let num = res.data.length();
      console.log(num);
      setPix(res.data.filter(filterByPIX).length() * 100 / res.data.length())
      
    }).catch((e) => alert(e.message))
    

    //console.log('log pagamentos ' + res)
    // setPix(res.data.filter(filterByPIX).count() * 100 / res.data.count())
    // setBoleto(res.data.filter(filterByBoleto).count() * 100 / res.data.count())
    // setDebito(res.data.filter(filterByDebito).count() * 100 / res.data.count())
    // setCredito(res.data.filter(filterByCredito).count() * 100 / res.data.count())
    // setEspecie(res.data.filter(filterByEspecie).count() * 100 / res.data.count())
    // setTransferencia(res.data.filter(filterByTransferencia).count() * 100 / res.data.count())
  }





  function filterByPIX(value) {
    return value.pagamento === 'PIX'
  }
  function filterByBoleto(value) {
    return value.pagamento === 'BOLETO'
  }
  function filterByEspecie(value) {
    return value.pagamento === 'ESPECIE'
  }
  function filterByCredito(value) {
    return value.pagamento === 'CREDITO'
  }
  function filterByDebito(value) {
    return value.pagamento === 'DEBITO'
  }
  function filterByTransferencia(value) {
    return value.pagamento === 'TRANSFERENCIA'
  }



  // useEffect(() => {

  //   const dataPix = fullData.filter(filterByPIX)
  //   setPix(dataPix.length())

  // })


  const data = [
    {
      tipoPagamento: 'TRANFERÊNCIA',
      total: 3040,
    },
    {
      tipoPagamento: 'PIX',
      total: 1600,
    },
    {
      tipoPagamento: 'DÉBITO',
      total: 640,
    },
    {
      tipoPagamento: 'CRÉDITO',
      total: 3020,
    },
    {
      tipoPagamento: 'BOLETO',
      total: 2000,
    },
    {
      tipoPagamento: 'ESPÉCIE',
      total: 320,
    },
  ];

  const colors = [theme.colors.primary30];
  const keys = ['total'];

  return (
    <>
      <View style={styles.container}>
      
    <Header />
      </View>
      <View style={styles.containerBar}>
        <View style={styles.containerText}>
          <Text style={styles.title}>RELATÓRIO DE TIPO DE PAGAMENTO</Text>
          <Text style={styles.type}>TRANFERÊNCIA</Text>
          <Text style={styles.type}>PIX</Text>
          <Text style={styles.type}>DÉBITO</Text>
          <Text style={styles.type}>CRÉDITO</Text>
          <Text style={styles.type}>BOLETO</Text>
          <Text style={styles.type}>ESPÉCIE</Text>
        </View>
        <View style={styles.containerValues}>
          <Text style={styles.values}>12%</Text>
          <Text style={styles.values}>12%</Text>
          <Text style={styles.values}>12%</Text>
          <Text style={styles.values}>12%</Text>
          <Text style={styles.values}>12%</Text>
          <Text style={styles.values}>12%</Text>
        </View>
        <View style={styles.bar}>
          <StackedBarChart
            style={styles.bar}
            keys={keys}
            colors={colors}
            data={data}
            horizontal
          />
        </View>
      </View >

    </>



  );

}
