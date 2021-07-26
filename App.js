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
    <ParentProvider>
      <UsuarioProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </UsuarioProvider>
    </ParentProvider>
  )
}

export default App;