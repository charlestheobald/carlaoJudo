
import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text

} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { styles } from './styles';
import { UsuarioContext } from '../../contexts/usuario/UsuarioContext';


import { Header } from '../../components/Header';
import { WeekDayItem } from '../../components/Calendar/WeekDayItem';


export const DayOfWeekProg = () => {
  const { isAdmin, dayOfWeek } = useContext(UsuarioContext)

  const navigation = useNavigation();
  const handleNavigationConfigs = () => {
    navigation.navigate('UserConfigs')
  }

  const mocked = [
    {
      perido: [8, 10],
      titulo: 'Aula Konnen'
    },
  ]
  return (
    <View style={styles.container}>
      <Header handleNavigationModal={handleNavigationConfigs} />
      <View style={styles.content}>
        <ScrollView style={{ marginBottom: '28%' }}>

          <WeekDayItem
            label='Treino'
            period={[10, 15, 16, 30]}
            local='Konnen'
            description='Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec nec libero ligula.
             Morbi eget'
          />
          <WeekDayItem
            label='Treino'
            period={[10, 15, 16, 30]}
            local='Konnen'
            description='Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec nec libero ligula.
             Morbi eget'
          />
          <WeekDayItem
            label='Treino'
            period={[10, 15, 16, 30]}
            local='Konnen'
            description='Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec nec libero ligula.
             Morbi eget'
          />
        </ScrollView>
      </View>
    </View >


  )
}

