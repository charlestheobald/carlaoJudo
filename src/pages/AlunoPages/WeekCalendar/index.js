
import React, { useState, useContext } from 'react';
import {
  View,
  ScrollView,

} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { styles } from './styles';
import { UsuarioContext } from '../../../contexts/usuario/UsuarioContext';



import { Header } from '../../../components/Header'
import { WeekCalendarItem } from '../../../components/Calendar/WeekCalendarItem';



export const WeekCalendar = () => {
  const { isAdmin, setDayOfWeek } = useContext(UsuarioContext)
  const navigation = useNavigation();

  const handleDom = () => {
    setDayOfWeek(0)
    navigation.navigate('DayOfWeekProg')
  }
  const handleSeg = () => {
    setDayOfWeek(1)
    navigation.navigate('DayOfWeekProg')
  }
  const handleTer = () => {
    setDayOfWeek(2)
    navigation.navigate('DayOfWeekProg')
  }
  const handleQua = () => {
    setDayOfWeek(3)
    navigation.navigate('DayOfWeekProg')
  }
  const handleQui = () => {
    setDayOfWeek(4)
    navigation.navigate('DayOfWeekProg')
  }
  const handleSex = () => {
    setDayOfWeek(5)
    navigation.navigate('DayOfWeekProg')
  }
  const handleSab = () => {
    setDayOfWeek(6)
    navigation.navigate('DayOfWeekProg')
  }

  const handleNavigationConfigs = () => {
    navigation.navigate('UserConfigs')
  }

  return (

    <View style={styles.container}>
      <Header handleNavigationModal={handleNavigationConfigs} />

      <View style={styles.content}>
        <ScrollView style={styles.ScrollView}>
          <WeekCalendarItem day='DOM' handlePress={handleDom} />
          <WeekCalendarItem day='SEG' handlePress={handleSeg} />
          <WeekCalendarItem day='TER' handlePress={handleTer} />
          <WeekCalendarItem day='QUA' handlePress={handleQua} />
          <WeekCalendarItem day='QUI' handlePress={handleQui} />
          <WeekCalendarItem day='SEX' handlePress={handleSex} />
          <WeekCalendarItem day='SAB' handlePress={handleSab} />
        </ScrollView>
      </View>
    </View >

  )
}

