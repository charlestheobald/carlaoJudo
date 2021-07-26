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



import { Routes } from './src/Routes/';
import { UsuarioProvider } from './src/contexts/usuario/UsuarioContext';

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
    <UsuarioProvider>
      <Routes />
    </UsuarioProvider>

    // <Activities />
    //<Login />
    //<PreRegister />


    //<ForgotKeyword />



  )
}

export default App;