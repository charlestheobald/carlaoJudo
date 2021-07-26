import React from 'react';
import { View } from 'react-native';

import { Login } from '../pages/Login';
import { ForgotKeyword } from '../pages/forgotKeyword';
import { PreRegister } from '../pages/AlunoPages/PreRegister'
import { Register } from '../pages/AlunoPages/Register'
import { ParentsRegister } from '../pages/AlunoPages/ParentsRegister'
import { Activities } from '../pages/AlunoPages/Activities'
import { Ranking } from '../pages/AlunoPages/Ranking'
import { Calendar } from '../pages/AlunoPages/Calendar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export const AuthRouter = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Atividades" component={Activities} />
      <Tab.Screen name="Ranking" component={Ranking} />
      <Tab.Screen name="Calendario" component={Calendar} />
    </Tab.Navigator>
  )
}

