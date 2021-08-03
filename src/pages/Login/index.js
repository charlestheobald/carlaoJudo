import React, { useState, useEffect, useContext } from 'react';
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
import { useNavigation } from "@react-navigation/native";

import { styles } from './styles';
import { theme } from '../../global/theme';
import { getAluno } from '../../services/AlunoService/'
import { UsuarioContext } from '../../contexts/usuario/UsuarioContext';
import { ForgotKeyword } from '../../pages/forgotKeyword'


export const Login = () => {
  const { setIsAdmin, setNomeContexto, setFullData, setUsernameContexto, setSenhaContexto } = useContext(UsuarioContext)
  const navigation = useNavigation();

  const [logo] = useState(new Animated.ValueXY({ x: 143, y: 210 }));
  const [senha, setSenha] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("");

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
  const [listaAlunos, setListaAlunos] = useState([])

  useEffect(() => {
    getAluno().then((res) => {

      setFullData(res)
      setListaAlunos(res)
    }).catch((err) => {
      console.error("Ops, ocorreu um erro " + err)
    })
  }, [])


  const loginHandler = () => {

    var isTheOne = false;
    listaAlunos.forEach((aluno) => {
      if (aluno.senha === senha & aluno.usuario === nomeUsuario) {
        setNomeContexto(aluno.nome);
        setSenhaContexto(aluno.senha);
        setUsernameContexto(aluno.usuario);
        // setImagemContexto(aluno.Imagem)
        isTheOne = true
        navigation.reset({
          index: 0,
          routes: [{ name: "AuthRouter" }]
        });

      }
    });
    if (nomeUsuario === 'adm' & senha === 'adm') {
      setNomeContexto('Carlão');
      setIsAdmin(true)
      isTheOne = true;
      navigation.reset({
        index: 0,
        routes: [{ name: "AuthRouter" }]
      });
    }
    if (isTheOne === false) {
      return alert("Usuario ou senha inválidos")
    }


  }
  const forgotKeyHandler = () => {
    navigation.navigate("ForgotKeyword")
  }
  const preRegisterHandler = () => {
    navigation.navigate("PreRegister")
  }




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
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={(e) => setNomeUsuario(e)}
          />

          <TextInput style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry={true}
            onChangeText={(e) => setSenha(e)}
          />

          <TouchableOpacity style={styles.buttonLogin}
            onPress={loginHandler}
          >
            <Text style={styles.textLogin}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonPassword}
            onPress={forgotKeyHandler}
          >
            <Text style={styles.textPassword}> Esqueci minha senha. </Text>
          </TouchableOpacity>



        </View>
        <View style={styles.containerRegister} >
          <Text style={styles.text1Register}>Não tem uma conta?</Text>
          <TouchableOpacity onPress={preRegisterHandler}>
            <Text style={styles.text2Register}> Cadastre-se.</Text>
          </TouchableOpacity>
        </View>


      </KeyboardAvoidingView >
    </ScrollView>


  )
}

