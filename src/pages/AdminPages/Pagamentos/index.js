
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header } from '../../../components/Header';
import { theme } from '../../../global/theme';
import { styles } from './styles';
import { UsuarioContext } from '../../../contexts/usuario/UsuarioContext';

import { getPagamentos, countAluno, getAluno } from '../../../services/AlunoService';

import { StackedBarChart } from 'react-native-svg-charts';

export const Pagamentos = () => {
  const { fullData } = useContext(UsuarioContext)


  const [pix, setPix] = useState(0)
  const [boleto, setBoleto] = useState(0)
  const [debito, setDebito] = useState(0)
  const [credito, setCredito] = useState(0)
  const [transferencia, setTransferencia] = useState(0)
  const [especie, setEspecie] = useState(0)
  const [total, setTotal] = useState(0)

  const calcPags = () => {
    getAluno().then((res) => {

      let num = res.data.length;
      console.log(num);
      setPix(res.data.filter(filterByPIX).length * 100 / res.data.length)

    }).catch((e) => alert(e.message))


    // console.log('log pagamentos ' + res)
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


    getAluno().then((res) => {

      let num = res.length;
      console.log(Math.trunc(pix));
      setPix(res.filter(filterByPIX).length * 100 / res.length)
      setBoleto(res.filter(filterByBoleto).length * 100 / res.length)
      setDebito(res.filter(filterByDebito).length * 100 / res.length)
      setCredito(res.filter(filterByCredito).length * 100 / res.length)
      setEspecie(res.filter(filterByEspecie).length * 100 / res.length)
      setTransferencia(res.filter(filterByTransferencia).length * 100 / res.length)
      setTotal(res.length)

    }).catch((e) => alert(e.message))


  }, [])


  const data = [
    {
      tipoPagamento: 'TRANFERÊNCIA',
      total: transferencia,
    },
    {
      tipoPagamento: 'PIX',
      total: pix,
    },
    {
      tipoPagamento: 'DÉBITO',
      total: debito,
    },
    {
      tipoPagamento: 'CRÉDITO',
      total: credito,
    },
    {
      tipoPagamento: 'BOLETO',
      total: boleto,
    },
    {
      tipoPagamento: 'ESPÉCIE',
      total: especie,
    },
  ];

  const colors = [theme.colors.secondary20];
  const keys = ['total'];

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>RELATÓRIO DE TIPO DE PAGAMENTO</Text>
            <Text style={styles.subTitle}>TOTAL DE ALUNOS: {total}</Text>
          </View>

          <View style={styles.containerBar}>
            <View style={styles.containerTexts}>
              <Text style={styles.type}>TRANFERÊNCIA</Text>
              <Text style={styles.type}>PIX</Text>
              <Text style={styles.type}>DÉBITO</Text>
              <Text style={styles.type}>CRÉDITO</Text>
              <Text style={styles.type}>BOLETO</Text>
              <Text style={styles.type}>ESPÉCIE</Text>
            </View>
            <View style={styles.containerValues}>
              <Text style={styles.values}>{Math.round(transferencia)} %</Text>
              <Text style={styles.values}>{Math.round(pix)} %</Text>
              <Text style={styles.values}>{Math.round(debito)} %</Text>
              <Text style={styles.values}>{Math.round(credito)} %</Text>
              <Text style={styles.values}>{Math.round(boleto)} %</Text>
              <Text style={styles.values}>{Math.round(especie)} %</Text>
            </View>
            <View>
              <StackedBarChart
                style={styles.bar}
                keys={keys}
                colors={colors}
                data={data}
                horizontal
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
