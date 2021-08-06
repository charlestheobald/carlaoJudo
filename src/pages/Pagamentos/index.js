import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../components/Header';

import { styles } from './styles';

import { getPagamentos, countAluno } from '../../services/AlunoService';

export const Pagamentos = () => {

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
  useEffect(() => {
    console.log("LOG1------" + countAluno()).then((res) => {
      console.log('log pagamentos ' + res)
      // setPix(res.data.filter(filterByPIX).count() * 100 / res.data.count())
      // setBoleto(res.data.filter(filterByBoleto).count() * 100 / res.data.count())
      // setDebito(res.data.filter(filterByDebito).count() * 100 / res.data.count())
      // setCredito(res.data.filter(filterByCredito).count() * 100 / res.data.count())
      // setEspecie(res.data.filter(filterByEspecie).count() * 100 / res.data.count())
      // setTransferencia(res.data.filter(filterByTransferencia).count() * 100 / res.data.count())

    }).catch((err) => {
      console.alert("Ops, ocorreu um erro " + err)
    })

  }, [])


  return (
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


  );

}
