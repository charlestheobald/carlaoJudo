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
// import { MonthCalendar } from '../pages/AlunoPages/MonthCalendar';
// import { WeekCalendar } from '../pages/AlunoPages/WeekCalendar';
// import { DayOfWeekProg } from '../pages/DayOfWeekProg';
import { UserConfigs } from '../pages/UserConfigs';
import { Quiz } from '../pages/AlunoPages/Quiz';
import { Pagamentos } from '../pages/AdminPages/Pagamentos';
import { AlunoConfigs } from '../pages/AdminPages/AlunoConfigs';

const RankingRoutes = () => {

  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="Ranking"
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.primary10
        },
      }}
    >

      <Screen
        name="Ranking"
        component={Ranking}
      />
      <Screen
        name="UserConfigs"
        component={UserConfigs}
      />
      <Screen
        name="Pagamentos"
        component={Pagamentos}
      />
      <Screen
        name="AlunoConfigs"
        component={AlunoConfigs}
      />


    </Navigator>
  );
}
const ActivitiesRoutes = () => {

  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="Atividades"
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.primary10
        },
      }}
    >

      <Screen
        name="Atividades"
        component={Activities}
      />
      <Screen
        name="Quiz"
        component={Quiz}
      />
      <Screen
        name="UserConfigs"
        component={UserConfigs}
      />
      <Screen
        name="Pagamentos"
        component={Pagamentos}
      />


    </Navigator>
  );
}

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

      <Screen
        name="Calendar"
        component={Calendar}
      />
      {/* <Screen
        name="MonthCalendar"
        component={MonthCalendar}
      />
      <Screen
        name="WeekCalendar"
        component={WeekCalendar}
      />
      <Screen
        name="DayOfWeekProg"
        component={DayOfWeekProg}
      /> */}
      <Screen
        name="UserConfigs"
        component={UserConfigs}
      />
      <Screen
        name="Pagamentos"
        component={Pagamentos}
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
        component={RankingRoutes}
        options={{
          tabBarIcon: ({ size, focused }) =>
            <MaterialCommunityIcons
              name="podium-gold"
              size={size}
              color={focused ? theme.colors.secondary20 : "black"} />

        }}
      />
      <Tab.Screen
        name="Atividades"
        component={ActivitiesRoutes}
        options={{
          tabBarIcon: ({ size, focused }) =>
            <AntDesign
              name="edit"
              size={size}
              color={focused ? theme.colors.secondary20 : "black"} />

        }}
      />
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


