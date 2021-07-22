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



export const ParentsRegister = () => {
  return (
    <View style={styles.background}>

      <View style={styles.containerHeader}>
        <TouchableOpacity style={styles.back}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Image style={styles.image} source={require('../../assets/Image/logo2.png')} />
      </View>

      <View style={styles.container}>

        <Text style={styles.textInput}>Nome do Responsável</Text>
        <TextInput style={styles.input}
          placeholder="Informe o nome do responsável"
          autoCorrect={false}
          onChangeText={() => { }}
        />
        <Text style={styles.textInput}>Telefone do Responsável</Text>
        <TextInput style={styles.input}
          placeholder="Informe o telefone do responsável"
          keyboardType="numeric"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <View style={styles.contentButton}>
          <StandardButton style={styles.textButton}
            label='Salvar'
            textColor={theme.colors.highlight}
            bgColor={theme.colors.secondary10}
            font={theme.fonts.text300}
            onPress={() => { }}
            widthProp='90%'
          />
        </View>
      </View>
    </View>
  )
}


