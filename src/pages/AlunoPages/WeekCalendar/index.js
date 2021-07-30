
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

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from '@expo/vector-icons';
import { Camera } from 'expo-camera';

import { styles } from './styles';
import { theme } from '../../../global/theme';

import { PreRegister } from '../../AlunoPages/PreRegister'
import { Header } from '../../../components/Header'



import { StandardButton } from '../../../components/StandardButton';


const goMensalCalendar = () => {

}

export const WeekCalendar = () => {

  return (

    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text>Week calendar</Text>
      </View>
    </View >

  )
}
