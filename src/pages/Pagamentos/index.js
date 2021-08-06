import React, { useEffect, useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../components/Header';
import { theme } from '../../global/theme';
import { styles } from './styles';
import { UsuarioContext } from '../../contexts/usuario/UsuarioContext';

import { getPagamentos, countAluno } from '../../services/AlunoService';

import { StackedBarChart } from 'react-native-svg-charts';

export const Pagamentos = () => {
  const { fullData } = useContext(UsuarioContext)


  const [pix, setPix] = useState(null)
  const [boleto, setBoleto] = useState(null)
  const [debito, setDebito] = useState(null)
  const [credito, setCredito] = useState(null)
  const [transferencia, setTransferencia] = useState(null)
  const [especie, setEspecie] = useState(null)





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
        <View style={styles.content}>

          <View style={styles.containerPagamento}>
            <Text>Pagamentos por PIX: {pix} %</Text>
            <Text>Pagamentos por boleto: {boleto} %</Text>

            <Text>Pagamentos em dinheiro: {debito} %</Text>
            <Text>Pagamentos por cartão de crédito: {credito} %</Text>
            <Text>Pagamentos por cartão de débito: {debito} %</Text>
            <Text>Pagamentos por transferência: {transferencia} %</Text>
          </View>

        </View>

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
