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




import { styles } from './styles';

import { theme } from '../../global/theme';


const goHome = () => {
  return null
}

export const ForgotKeyword = () => {

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
            autoCorrect={false}
            onChangeText={() => { }}
          />

          <TextInput style={styles.input}
            placeholder="Nova Senha"
            autoCorrect={false}
            onChangeText={() => { }}
          />
          <TextInput style={styles.input}
            placeholder="Repita a nova senha"
            autoCorrect={false}
            onChangeText={() => { }}
          />
          <TextInput style={styles.input}
            placeholder="Palavra de segurança"
            autoCorrect={false}
            onChangeText={() => { }}
          />
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.textLogin}>Alterar senha</Text>
          </TouchableOpacity>
        </View>



      </KeyboardAvoidingView >
    </ScrollView>


  )
}
