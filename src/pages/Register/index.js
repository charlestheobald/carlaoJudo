import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Animated,
  Keyboard,
  StatusBar,
  ScrollView,
  StyleSheet
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";

import { StandardButton } from '../../components/StandardButton';

import { styles } from './styles';

import { theme } from '../../global/theme';

const goHome = () => {
  return null
}

export const Register = () => {
  const [dataNascimento, setDataNascimento] = useState(new Date());
  const [showBorn, setShowBorn] = useState(false);

  const showDatePickerBorn = () => {
    setShowBorn(true);
  };
  const handleBornDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dataNascimento;
    setDataNascimento(currentDate);
    setShowBorn(false);
  };
  function dataFormatada(incomeDate) {
    const dataF = new Date(incomeDate);
    const data = dataF;
    const dia = data.getDate().toString();
    const diaF = dia.length == 1 ? "0" + dia : dia;
    const mes = (data.getMonth() + 1).toString();
    const mesF = mes.length == 1 ? "0" + mes : mes;
    const anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  }

  return (
    <View style={styles.background}>

      <View style={styles.containerHeader}>
        <TouchableOpacity style={styles.back}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Image style={styles.image} source={require('../../assets/Image/logo2.png')} />
      </View>

      <ScrollView style={styles.scrollContainer}>
        <KeyboardAvoidingView >

          <View style={styles.container}>

            <View style={styles.photo}>
              <AntDesign name="adduser" size={84} color='#FFFF' />
              <Text style={styles.TextPhoto}>{` Clique para inserir 
     uma imagem`}</Text>
            </View>

            <TextInput style={styles.input}
              placeholder="Localidade"
              autoCorrect={false}
              onChangeText={() => { }}
            />

            <TextInput style={styles.input}
              placeholder="Nome"
              autoCorrect={false}
              onChangeText={() => { }}
            />

            <TextInput style={styles.input}
              placeholder="Sexo"
              autoCorrect={false}
              onChangeText={() => { }}
            />

            <View style={styles.input}>
              <TouchableOpacity onPress={showDatePickerBorn}>
                <Text>{dataFormatada(dataNascimento)}</Text>
              </TouchableOpacity>
            </View>
            {showBorn && (
              <DateTimePicker
                value={dataNascimento}
                mode="date"
                display="default"
                onChange={handleBornDateChange}
              />
            )}

            <TextInput style={styles.input}
              placeholder="Classe"
              autoCorrect={false}
              onChangeText={() => { }}
            />

            <TextInput style={styles.input}
              placeholder="Peso"
              autoCorrect={false}
              onChangeText={() => { }}
            />

            <TextInput style={styles.input}
              placeholder="Categoria"
              autoCorrect={false}
              onChangeText={() => { }}
            />
            <TextInput style={styles.input}
              placeholder="FJERJ"
              autoCorrect={false}
              onChangeText={() => { }}
            />
            <TextInput style={styles.input}
              placeholder="CBJ-ZEMPO"
              autoCorrect={false}
              onChangeText={() => { }}
            />
            <TextInput style={styles.input}
              placeholder="Faixa"
              autoCorrect={false}
              onChangeText={() => { }}
            />
            <TextInput style={styles.input}
              placeholder="Data do último exame"
              autoCorrect={false}
              onChangeText={() => { }}
            />
            <TextInput style={styles.input}
              placeholder="CPF"
              autoCorrect={false}
              onChangeText={() => { }}
            />
            <TextInput style={styles.input}
              placeholder="ID"
              autoCorrect={false}
              onChangeText={() => { }}
            />
            <TextInput style={styles.input}
              placeholder="Telefone residêncial"
              autoCorrect={false}
              onChangeText={() => { }}
            />
            <TextInput style={styles.input}
              placeholder="Telefone Celular"
              autoCorrect={false}
              onChangeText={() => { }}
            />
            <TextInput style={styles.input}
              placeholder="E-mail"
              autoCorrect={false}
              onChangeText={() => { }}
            />
            <TextInput style={styles.input}
              placeholder="Horario de aula"
              autoCorrect={false}
              onChangeText={() => { }}
            />
            <TextInput style={styles.input}
              placeholder="CEP"
              autoCorrect={false}
              onChangeText={() => { }}
            />
            <TextInput style={styles.input}
              placeholder="Logradouro"
              autoCorrect={false}
              onChangeText={() => { }}
            />
            <TextInput style={styles.input}
              placeholder="Numero"
              autoCorrect={false}
              onChangeText={() => { }}
            />
            <TextInput style={styles.input}
              placeholder="Cidade"
              autoCorrect={false}
              onChangeText={() => { }}
            />
            <TextInput style={styles.input}
              placeholder="Senha"
              autoCorrect={false}
              onChangeText={() => { }}
            />
            <TextInput style={styles.input}
              placeholder="Repetir Senha"
              autoCorrect={false}
              onChangeText={() => { }}
            />
            <View style={styles.buttonSave}>
              <StandardButton
                label='Salvar'
                textColor={theme.colors.highlight}
                bgColor={theme.colors.secondary10}
                font={theme.fonts.text300}
                onPress={() => { }}
              />
            </View>


          </View>


        </KeyboardAvoidingView >
      </ScrollView>
    </View>

  )
}

