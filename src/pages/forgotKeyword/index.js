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
  ScrollView,
  Picker
} from 'react-native';


import { esqueciMinhaSenha, recuperarSenha } from '../../services/AlunoService';

import { styles } from './styles';

import { theme } from '../../global/theme';


const goHome = () => {
  return null
}



export const ForgotKeyword = () => {

  const [logo] = useState(new Animated.ValueXY({ x: 143, y: 210 }));
  const [username, setUsername] = useState(null)
  const [token, setToken] = useState(null)
  const [senha, setSenha] = useState(null)
  const [checkSenha, setCheckSenha] = useState(null)


  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

  });

  const enviarCodigo = () => {
    esqueciMinhaSenha(username).then((res) => {
      console.log("FOOOOOOOOOOOOOOOOI");
      alert('Email enviado, verifique sua caixa de entrada e insira o código recebido no campo "Token"')
    }).catch((e) => 'Algo deu errado no envio do e-mail! por favor repita o processo')
  }

  const alterarSenha = () => {
    recuperarSenha(token, username, senha).then((res) => {
      console.log("FOOOOOOI");
      alert('Sua senha foi alterada, já pode realizar o login!')
    }).catch((e) => 'Algo deu errado na recuperação de senha! por favor repita o processo')
  }

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
            placeholder="Usuário"
            autoCorrect={false}
            onChangeText={(text) => setUsername(text)}
          />
          <TouchableOpacity style={styles.buttonCode}
            onPress={enviarCodigo}>
            <Text style={styles.textCode}>Insira seu ID Usuario e clique aqui para</Text>
            <Text style={styles.textCode}> enviar código de segurança para seu E-mail</Text>
          </TouchableOpacity>

          <TextInput style={styles.input}
            placeholder="Token recebido por e-mail"
            autoCorrect={false}

            onChangeText={(text) => setToken(text)}
          />
          <TextInput style={styles.input}
            placeholder="Nova senha"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(text) => setSenha(text)}
          />
          <TextInput style={styles.input}
            placeholder="Repita a nova senha"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(text) => setCheckSenha(text)}
          />

          <TouchableOpacity style={styles.buttonLogin} onPress={alterarSenha}>
            <Text style={styles.textLogin}>Alterar senha</Text>
          </TouchableOpacity>
        </View>



      </KeyboardAvoidingView >
    </ScrollView>


  )
}
