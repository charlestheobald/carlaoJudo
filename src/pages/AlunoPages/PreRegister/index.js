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

import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";

import { StandardButton } from '../../../components/StandardButton';
import { styles } from './styles';
import { theme } from '../../../global/theme';

import { Register } from '../Register';


export const PreRegister = () => {
  const navigation = useNavigation();
  const handleRegister = () => {
    navigation.navigate("Register")
  }

  const handleParents = () => {
    navigation.navigate("ParentsRegister")
  }
  const handleGoBack = () => {
    navigation.goBack()
  }
  return (

    <View style={styles.background}>

      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={handleGoBack}
          style={styles.back}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Image style={styles.image} source={require('../../../assets/Image/logo2.png')} />
      </View>

      <View style={styles.container}>

        <View style={styles.containerText}>
          <Text style={styles.text}>Você é maior de 18 anos?</Text>
        </View>


        <View style={styles.contentButton}>
          <StandardButton
            onPress={handleRegister}
            style={styles.textButton}
            label='Sim'
            textColor={theme.colors.highlight}
            bgColor={theme.colors.secondary10}
            font={theme.fonts.text300}


          />
        </View>

        <View style={styles.contentButton}>
          <StandardButton style={styles.textButton}
            label='Não'
            textColor={theme.colors.highlight}
            bgColor={theme.colors.secondary10}
            font={theme.fonts.text300}
            onPress={handleParents}
          />
        </View>



      </View>



    </View>

  )
}

export default PreRegister;