
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



import { StandardButton } from '../../../components/StandardButton';

const Tab = createBottomTabNavigator()

export const Activities = () => {

  return (

    <View style={styles.background}>

      <View style={styles.containerHeader}>
        <Image style={styles.image} source={require('../../../assets/Image/logo2.png')} />
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

export function Tabs() {

  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: '#694fad', bottom: 30, height: 60 }}

  >
    <Tab.Screen name="PreRegister" component={PreRegister} />
    <Tab.Screen name="Activities" component={Activities} />
  </Tab.Navigator>
}

export default Activities;