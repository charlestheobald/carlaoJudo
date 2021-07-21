import React from 'react';
import { View, StatusBar } from 'react-native';
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Lalezar_400Regular } from '@expo-google-fonts/lalezar';

import { Register } from './src/pages/Register'
import { Login } from './src/pages/Login';
import { ForgotKeyword } from './src/pages/forgotKeyword';
import Routes from './src/router'

// import { Container } from './styles'; 

const App = () => {

  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Lalezar_400Regular
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <Register />

    </>
    //<ForgotKeyword />

  )
}

export default App;