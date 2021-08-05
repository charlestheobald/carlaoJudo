import React, { useState, useEffect, useContext } from 'react';
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
import { useNavigation } from "@react-navigation/native";

import { StandardButton } from '../../../components/StandardButton';
import { ParentContext } from '../../../contexts/alunos/ParentContext';

import { styles } from './styles';

import { theme } from '../../../global/theme';



export const ParentsRegister = () => {

  const [emailRes, setEmailRes] = useState(null)
  const [telRes, setTelRes] = useState(null)
  const [nomeRes, setNomeRes] = useState(null)

  const { setNomeResponsavel, setTelResponsavel, setEmailResponsavel, telResponsavel, nomeResponsavel, emailResponsavel } = useContext(ParentContext)


  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  }
  const handleSaveParent = () => {
    if (nomeRes === null || nomeRes === "")
      return alert('O nome do responsável deve ser preenchido')
    if (emailRes === null || emailRes === "")
      return alert('O email do responsável deve ser preenchido')
    if (telRes === null || telRes === "")
      return alert('O telefone do responsável deve ser preenchido por números')
    else {
      setEmailResponsavel(emailRes)
      setTelResponsavel(telRes)
      setNomeResponsavel(nomeRes)
      navigation.navigate("Register")

    }
  }

  const handleEmptyName = () => {

    if (nomeRes === null || nomeRes === "")
      return alert('O nome do responsável deve ser preenchido')
  }
  const handleEmptyEmail = () => {
    if (emailRes === null || emailRes === "")
      return alert('O email do responsável deve ser preenchido')
  }
  const handleEmptyTel = () => {
    if (telRes === null || telRes === "")
      return alert('O telefone do responsável deve ser preenchido por números')
  }


  return (
    <View style={styles.background}>

      <View style={styles.containerHeader}>
        <TouchableOpacity style={styles.back}
          onPress={handleGoBack}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Image style={styles.image} source={require('../../../assets/Image/logo2.png')} />
      </View>

      <View style={styles.container}>

        <Text style={styles.textInput}>Nome do Responsável</Text>
        <TextInput style={styles.input}
          placeholder="Informe o nome do responsável"
          autoCorrect={false}
          onChangeText={(text) => setNomeRes(text)}
          onBlur={handleEmptyName}
        />
        <Text style={styles.textInput}>E-mail do Responsavel</Text>
        <TextInput style={styles.input}
          placeholder="Informe o e-mail do responsável"
          autoCorrect={false}
          onChangeText={(text) => setEmailRes()}
          onBlur={handleEmptyEmail}
        />
        <Text style={styles.textInput}>Telefone do Responsável</Text>
        <TextInput style={styles.input}
          placeholder="Informe o telefone do responsável"
          keyboardType="numeric"
          autoCorrect={false}
          onChangeText={() => setTelRes()}
          onBlur={handleEmptyTel}
        />

        <View style={styles.contentButton}>
          <StandardButton style={styles.textButton}
            label='Salvar'
            textColor={theme.colors.highlight}
            bgColor={theme.colors.secondary10}
            font={theme.fonts.text300}
            onPress={handleSaveParent}
            widthProp='90%'
          />
        </View>
      </View>
    </View>
  )
}


