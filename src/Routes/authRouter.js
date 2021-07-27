import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import { Login } from '../pages/Login';
import { ForgotKeyword } from '../pages/forgotKeyword';
import { PreRegister } from '../pages/AlunoPages/PreRegister'
import { Register } from '../pages/AlunoPages/Register'
import { ParentsRegister } from '../pages/AlunoPages/ParentsRegister'
import { Activities } from '../pages/AlunoPages/Activities'
import { Ranking } from '../pages/AlunoPages/Ranking'
import { Calendar } from '../pages/AlunoPages/Calendar';
import { theme } from '../global/theme'

export const AuthRouter = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator tabBarOptions={{
      style: {
        height: 60,
        backgroundColor: theme.colors.primary10,
        borderTopWidth: 0,
      },
      tabStyle: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconStyle: {
        flex: 0,
        width: 20,
        height: 20,
      },
      labelStyle: {
        fontFamily: theme.fonts.text400,
        fontSize: 11,
        marginTop: 5,
      },
      inactiveTintColor: 'black',
      activeTintColor: theme.colors.secondary20,
    }}
    >

      <Tab.Screen
        name="Atividades"
        component={Activities}
        options={{
          tabBarIcon: ({ size, focused }) =>
            <AntDesign
              name="edit"
              size={size}
              color={focused ? theme.colors.secondary20 : "black"} />

        }}
      />

      <Tab.Screen
        name="Ranking"
        component={Ranking}
        options={{
          tabBarIcon: ({ size, focused }) =>
            <MaterialCommunityIcons
              name="podium-gold"
              size={size}
              color={focused ? theme.colors.secondary20 : "black"} />

        }}
      />
      <Tab.Screen
        name="Calendario"
        component={Calendar}
        options={{
          tabBarIcon: ({ size, focused }) =>
            <AntDesign
              name="calendar"
              size={size}
              color={focused ? theme.colors.secondary20 : "black"} />

        }}
      />
    </Tab.Navigator>
  )
}


