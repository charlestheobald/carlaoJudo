import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Animated,
  Keyboard
} from 'react-native';

import { styles } from './styles';

import { theme } from '../../global/theme';

import { ActionButton } from '../../components/ActionButton';

const goHome = () => {
  return null
}

export const Login = () => {

  const [logo] = useState(new Animated.ValueXY({ x: 184, y: 270 }));

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
        toValue: 184,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 270,
        duration: 100,
        useNativeDriver: false
      }),
    ]).start();
  };

  return (

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
        <View style={styles.InputContainer}>
          <TextInput style={styles.input}
            placeholder="Email"
            autoCorrect={false}
            onChangeText={() => { }}
          />

          <TextInput style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={() => { }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ActionButton
            color={theme.colors.secondary20}
            title='Entrar'
            textColor={theme.colors.highlight}
            handleAction={goHome} />
        </View>
      </View>

      <View style={styles.containerPassword} >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ForgotKeyword")}
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
  )
}

