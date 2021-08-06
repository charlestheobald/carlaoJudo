import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header } from '../../components/Header';

import { styles } from './styles';

import { getPagamentos, countAluno, getAluno } from '../../services/AlunoService';

import { StackedBarChart } from 'react-native-svg-charts';

export const Pagamentos = () => {

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

  useEffect(() => {


  }, [])




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

  const colors = ['#0ff'];
  const keys = ['total'];

  return (

    <View style={styles.container}>

      <Header />
      <View style={styles.content}>

        <View style={styles.containerPagamento}>
          <Text>Pagamentos por PIX: {pix} %</Text>
          <Text>Pagamentos por boleto: {boleto} %</Text>
          <Text>Pagamentos em dinheiro: {especie} %</Text>
          <Text>Pagamentos por cartão de crédito: {credito} %</Text>
          <Text>Pagamentos por cartão de débito: {debito} %</Text>
          <Text>Pagamentos por transferência: {transferencia} %</Text>
        </View>
        <TouchableOpacity onPress={() => { calcPags() }}>
          <Text>Calcular</Text>
        </TouchableOpacity>
   

      <View style={styles.containerBar}>
        <Text style={styles.title}>RELATÓRIO DE TIPO DE PAGAMENTO</Text>
        <StackedBarChart
          style={styles.bar}
          keys={keys}
          colors={colors}
          data={data}
          contentInset={{ top: 30, bottom: 30 }}
          horizontal>
          <View style={styles.typePayment}>
            <Text style={{ marginBottom: '9%' }}>TRANFERÊNCIA</Text>
            <Text style={styles.values}>12%</Text>
            <Text style={styles.type}>PIX</Text>
            <Text style={styles.values}>12%</Text>
            <Text style={styles.type}>DÉBITO</Text>
            <Text style={styles.values}>12%</Text>
            <Text style={styles.type}>
              CRÉDITO
            </Text>
            <Text style={styles.values}>12%</Text>
            <Text style={styles.type}>BOLETO</Text>
            <Text style={styles.values}>12%</Text>
            <Text style={styles.type}>ESPÉCIE</Text>
            <Text style={styles.values}>12%</Text>
          </View>
        </StackedBarChart>
      </View>

    </View>


  );

}
