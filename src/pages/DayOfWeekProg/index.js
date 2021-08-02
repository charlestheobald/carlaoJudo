
import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text

} from 'react-native';


import { styles } from './styles';
import { UsuarioContext } from '../../contexts/usuario/UsuarioContext';


import { Header } from '../../components/Header';
import { WeekDayItem } from '../../components/Calendar/WeekDayItem';


export const DayOfWeekProg = () => {
  const { isAdmin, dayOfWeek } = useContext(UsuarioContext)

  const mocked = [
    {
      perido: [8, 10],
      titulo: 'Aula Konnen'
    },
  ]
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <ScrollView style={{ marginBottom: '28%' }}>

          <WeekDayItem
            label='Treino'
            period={[8, 9]}
            local='Konnen'
            description='Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec nec libero ligula.
             Morbi eget'
          />
          <WeekDayItem
            label='Treino'
            period={[8, 9]}
            local='Konnen'
            description='Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec nec libero ligula.
             Morbi eget'
          />
          <WeekDayItem
            label='Treino'
            period={[8, 9]}
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

