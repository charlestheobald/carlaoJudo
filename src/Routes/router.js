import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/theme';

import { getAluno } from '../services/AlunoService/'
import { NavigationContainer } from '@react-navigation/native';
import { Login } from '../pages/Login';
import { ForgotKeyword } from '../pages/forgotKeyword';
import { PreRegister } from '../pages/AlunoPages/PreRegister'
import { Register } from '../pages/AlunoPages/Register'
import { ParentsRegister } from '../pages/AlunoPages/ParentsRegister'
import { Activities } from '../pages/AlunoPages/Activities'
import { AuthRouter } from './authRouter';


export const Router = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (

    <Navigator
      initialRouteName="Login"
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
        name='AuthRouter'
        component={AuthRouter}
      />
    </Navigator>

  )
}