
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
import { useNavigation } from "@react-navigation/native";

import { styles } from './styles';
import { theme } from '../../../global/theme';

import { PreRegister } from '../../AlunoPages/PreRegister'
import { Header } from '../../../components/Header'



import { StandardButton } from '../../../components/StandardButton';




export const MonthCalendar = () => {

  const navigation = useNavigation();

  const handleNavigationConfigs = () => {
    navigation.navigate('UserConfigs')
  }

  return (

    <View style={styles.container}>
      <Header handleNavigationModal={handleNavigationConfigs} />
      <View style={styles.content}>
        <Text>Month calendar</Text>
      </View>
    </View >

  )
}

