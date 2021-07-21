import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/stack";
import { Login } from './pages/Login'


const { Navigator, Screen } = = createBottomTabNavigator();

export default Routes = () => {
  return (

    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          style: {
            height: 60,
            backgroundColor: colors.primary,
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
            fontFamily: 'roboto_400',
            fontSize: 11,
            marginTop: 5,
          },
          inactiveTintColor: colors.black,
          activeTintColor: colors.purple,
        }}
      >
        <Screen
          name="Seguindo"
          component={Following}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <Ionicons
                  name="md-heart"
                  size={size}
                  color={focused ? colors.purple : colors.black}
                />
              );
            },
          }}
        />
        <Screen
          name="Descubra"
          component={Descubra}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <MaterialCommunityIcons
                  name="compass-outline"
                  size={size}
                  color={focused ? colors.purple : colors.black}
                />
              );
            },
          }}
        />
        <Screen
          name="Procurar"
          component={ComingSoon}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <Ionicons
                  name="md-browsers"
                  size={size}
                  color={focused ? colors.purple : colors.black}
                />
              );
            },
          }}
        />

      </Navigator>
    </NavigationContainer>
  );
}
