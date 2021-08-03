
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from '@expo/vector-icons';
import { Camera } from 'expo-camera';

import { styles } from './styles';
import { theme } from '../../../global/theme';

import { PreRegister } from '../../AlunoPages/PreRegister'
import { Header } from '../../../components/Header'



import { StandardButton } from '../../../components/StandardButton';



export const Calendar = () => {
  const navigation = useNavigation();
  const goMonthCalendar = () => {
    navigation.navigate("MonthCalendar")
  }
  const goWeekCalendar = () => {
    navigation.navigate("WeekCalendar")
  }

  const handleNavigationConfigs = () => {
    navigation.navigate('UserConfigs')
  }
  return (

    <View style={styles.container}>
      <Header handleNavigationModal={handleNavigationConfigs} />
      <View style={styles.content}>
        <View style={styles.contentButton}>
          <StandardButton style={styles.textButton}
            label='Calendário mensal'
            textColor={theme.colors.highlight}
            bgColor={theme.colors.secondary10}
            font={theme.fonts.text300}
            onPress={() => goMonthCalendar()}
            widthProp='90%'
          />
        </View>

        <View style={styles.contentButton}>
          <StandardButton style={styles.textButton}
            label='Calendário semanal'
            textColor={theme.colors.highlight}
            bgColor={theme.colors.secondary10}
            font={theme.fonts.text300}
            onPress={() => goWeekCalendar()}
            widthProp='90%'
          />
        </View>
      </View>
    </View >

  )
}

