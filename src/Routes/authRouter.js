import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/theme'

import { Login } from '../pages/Login';
import { ForgotKeyword } from '../pages/forgotKeyword';
import { PreRegister } from '../pages/AlunoPages/PreRegister'
import { Register } from '../pages/AlunoPages/Register'
import { ParentsRegister } from '../pages/AlunoPages/ParentsRegister'
import { Activities } from '../pages/AlunoPages/Activities'
import { Ranking } from '../pages/AlunoPages/Ranking'
import { Calendar } from '../pages/AlunoPages/Calendar';
import { MonthCalendar } from '../pages/AlunoPages/MonthCalendar';
import { WeekCalendar } from '../pages/AlunoPages/WeekCalendar';
import { DayOfWeekProg } from '../pages/DayOfWeekProg';




const CalendarRoutes = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="Calendar"
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.primary10
        },
      }}
    >

<<<<<<< HEAD
      <Screen
=======
       <Screen
>>>>>>> 2ab5ee395a9e108a1255ba74269f87e143fa68a8
        name="Calendar"
        component={Calendar}
      />
      <Screen
        name="MonthCalendar"
        component={MonthCalendar}
<<<<<<< HEAD
      />
=======
      /> 
>>>>>>> 2ab5ee395a9e108a1255ba74269f87e143fa68a8
      <Screen
        name="WeekCalendar"
        component={WeekCalendar}
      /> 
      <Screen
        name="DayOfWeekProg"
        component={DayOfWeekProg}
      />

    </Navigator>
  );
}

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
<<<<<<< HEAD
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
=======
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
>>>>>>> 2ab5ee395a9e108a1255ba74269f87e143fa68a8
      <Tab.Screen
        name="Calendario"
        component={CalendarRoutes}
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


