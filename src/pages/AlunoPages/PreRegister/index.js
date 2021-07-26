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

import { StandardButton } from '../../../components/StandardButton';

import { styles } from './styles';

import { theme } from '../../../global/theme';


export const PreRegister = () => {

  return (

    <View style={styles.background}>

      <View style={styles.containerHeader}>
        <TouchableOpacity style={styles.back}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Image style={styles.image} source={require('../../../assets/Image/logo2.png')} />
      </View>

      <View style={styles.container}>

        <View style={styles.containerText}>
          <Text style={styles.text}>Você é maior de 18 anos?</Text>
        </View>


        <View style={styles.contentButton}>
          <StandardButton style={styles.textButton}
            label='Sim'
            textColor={theme.colors.highlight}
            bgColor={theme.colors.secondary10}
            font={theme.fonts.text300}
            onPress={() => { }}
          />
        </View>

        <View style={styles.contentButton}>
          <StandardButton style={styles.textButton}
            label='Não'
            textColor={theme.colors.highlight}
            bgColor={theme.colors.secondary10}
            font={theme.fonts.text300}
            onPress={() => { }}
          />
        </View>


      </View>



    </View>

  )
}

export default PreRegister;