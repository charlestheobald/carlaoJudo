import React, { useContext } from 'react';
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
import { NavigationContainer } from "@react-navigation/native";
import { AuthRouter } from './src/Routes/authRouter'

import { Router } from './src/Routes/router';
import { UsuarioProvider } from './src/contexts/usuario/UsuarioContext';
import { Register } from './src/pages/AlunoPages/Register'
import { UsuarioContext } from './src/contexts/usuario/UsuarioContext';
import { ParentProvider } from './src/contexts/alunos/ParentContext';
import { decode, encode } from 'base-64'
// import { Container } from './styles'; 

import { Header } from './src/components/Header'

import { UserConfigs } from './src/pages/UserConfigs';
import { Ranking } from './src/pages/AlunoPages/Ranking';




const App = () => {


  if (!global.btoa) { global.btoa = encode }

  if (!global.atob) { global.atob = decode }



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
    <ParentProvider>
      <UsuarioProvider>
        <NavigationContainer>
          <AuthRouter />
        </NavigationContainer>
      </UsuarioProvider>
    </ParentProvider>




  )
}

export default App;