
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

import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from '@expo/vector-icons';
import { Camera } from 'expo-camera';

import { styles } from './styles';
import { theme } from '../../global/theme';

import { addAluno } from '../../services/AlunoService';

import { StandardButton } from '../../components/StandardButton';


export const Activities = () => {

  return (

    <View style={styles.background}>

      <View style={styles.containerHeader}>
        <Image style={styles.image} source={require('../../assets/Image/logo2.png')} />
        <TouchableOpacity style={styles.config}>
          <AntDesign name="setting" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>

        <View style={styles.contentButton}>
          <StandardButton style={styles.textButton}
            label='Caça-Palavras'
            textColor={theme.colors.highlight}
            bgColor={theme.colors.secondary10}
            font={theme.fonts.text300}
            onPress={() => { }}
            widthProp='90%'
          />
        </View>

        <View style={styles.contentButton}>
          <StandardButton style={styles.textButton}
            label='Caça-Palavras'
            textColor={theme.colors.highlight}
            bgColor={theme.colors.secondary10}
            font={theme.fonts.text300}
            onPress={() => { }}
            widthProp='90%'
          />
        </View>

        <View style={styles.contentButton}>
          <StandardButton style={styles.textButton}
            label='Caça-Palavras'
            textColor={theme.colors.highlight}
            bgColor={theme.colors.secondary10}
            font={theme.fonts.text300}
            onPress={() => { }}
            widthProp='90%'
          />
        </View>

        <View style={styles.contentButton}>
          <StandardButton style={styles.textButton}
            label='Caça-Palavras'
            textColor={theme.colors.highlight}
            bgColor={theme.colors.secondary10}
            font={theme.fonts.text300}
            onPress={() => { }}
            widthProp='90%'
          />
        </View>

        <View style={styles.contentButton}>
          <StandardButton style={styles.textButton}
            label='Caça-Palavras'
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

export default Activities;