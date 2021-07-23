import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Animated,
  Keyboard,
  StatusBar,
  ScrollView
} from 'react-native';

import { ForgotKeyword } from '../../pages/forgotKeyword'

import { styles } from './styles';

import { theme } from '../../global/theme';

const goHome = () => {
  return null
}

export const Login = () => {

  const [logo] = useState(new Animated.ValueXY({ x: 143, y: 210 }));

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

  });

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 68,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 100,
        duration: 100,
        useNativeDriver: false
      }),
    ]).start()
  };

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 143,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 210,
        duration: 100,
        useNativeDriver: false
      }),
    ]).start();
  };

  return (

    <ScrollView style={styles.scrollContainer}>
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.logo}>
          <Animated.Image
            style={{
              width: logo.x,
              height: logo.y,
            }}
            source={require('../../assets/Image/logo.png')} />
        </View>
        <View style={styles.container}>

          <TextInput style={styles.input}
            placeholder="Email"
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={() => { }}
          />

          <TextInput style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={() => { }}
          />

          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.textLogin}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonPassword}>
            <Text style={styles.textPassword}> Esqueci minha senha. </Text>
          </TouchableOpacity>



        </View>
        <View style={styles.containerRegister} >
          <Text style={styles.text1Register}>Não tem uma conta? </Text>
          <TouchableOpacity>
            <Text style={styles.text2Register}> Cadastre-se.</Text>
          </TouchableOpacity>
        </View>


      </KeyboardAvoidingView >
    </ScrollView>


  )
}

