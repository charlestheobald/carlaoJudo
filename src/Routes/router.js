import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from '../global/theme';

import { getAluno } from '../services/AlunoService/'

import { Login } from '../pages/Login';
import { ForgotKeyword } from '../pages/forgotKeyword';
import { PreRegister } from '../pages/AlunoPages/PreRegister'
import { Register } from '../pages/AlunoPages/Register'
import { ParentsRegister } from '../pages/AlunoPages/ParentsRegister'
import { Activities } from '../pages/AlunoPages/Activities'



const { Navigator, Screen } = createStackNavigator();


export const Router = () => {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.primary10
        },
      }}
    >
      <Screen
        name="Login"
        component={Login}
      />
      <Screen
        name="ForgotKeyword"
        component={ForgotKeyword}
      />

      <Screen
        name='PreRegister'
        component={PreRegister}
      />
      <Screen
        name='ParentsRegister'
        component={ParentsRegister}
      />
      <Screen
        name='Register'
        component={Register}
      />
      <Screen
        name='Activities'
        component={Activities}
      />

    </Navigator>

  )
}

