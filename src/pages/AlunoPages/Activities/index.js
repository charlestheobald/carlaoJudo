
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
  StyleSheet,
  Linking
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import { useNavigation } from "@react-navigation/native";

import { styles } from './styles';
import { theme } from '../../../global/theme';

import { PreRegister } from '../../AlunoPages/PreRegister'
import { Header } from '../../../components/Header'


import { StandardButton } from '../../../components/StandardButton';

export const Activities = () => {
  const navigation = useNavigation();
  const handleNavigationConfigs = () => {
    navigation.navigate('UserConfigs')
  }

  const goQuiz = () => {
    navigation.navigate('Quiz')
  }

  return (

    <View style={styles.background}>
      <Header handleNavigationModal={handleNavigationConfigs} />

      <View style={styles.container}>

        <View style={styles.contentButton}>
          <StandardButton style={styles.textButton}
            label='Judô Brasileiro, jogos Olímpicos'
            textColor={theme.colors.highlight}
            bgColor={theme.colors.secondary10}
            font={theme.fonts.text300}
            onPress={() => Linking.openURL('https://cbj.com.br/painel/arquivos/documentos_oficiais/arquivo_cbj_223502210721.pdf')}
            widthProp='90%'
          />
        </View>

        <View style={styles.contentButton}>
          <StandardButton style={styles.textButton}
            label='História do Judo'
            textColor={theme.colors.highlight}
            bgColor={theme.colors.secondary10}
            font={theme.fonts.text300}
            onPress={() => Linking.openURL('https://cbj.com.br/historia_do_judo/')}
            widthProp='90%'
          />
        </View>

        <View style={styles.contentButton}>
          <StandardButton style={styles.textButton}
            label='Quiz'
            textColor={theme.colors.highlight}
            bgColor={theme.colors.secondary10}
            font={theme.fonts.text300}
            onPress={() => goQuiz()}
            widthProp='90%'
          />
        </View>




      </View>
    </View>

  )
}

