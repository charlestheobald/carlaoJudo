
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
import { WeekCalendarItem } from '../../../components/Calendar/WeekCalendarItem';
import { StandardButton } from '../../../components/StandardButton';



export const Calendar = () => {

  const handleNavigationConfigs = () => {
    navigation.navigate('UserConfigs')
  }
  const goPagamentos = () => {
    navigation.navigate('Pagamentos')
  }
  return (

    <View style={styles.container}>

      <Header handleNavigationModal={handleNavigationConfigs} handleNavigationPagamentos={goPagamentos} />


      <WeekCalendarItem style={{ flex: 1, flexDirection: 'row', width: '100%' }} />

    </View >

  )
}

