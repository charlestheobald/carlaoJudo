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
  StyleSheet
} from 'react-native';

import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from '@expo/vector-icons';
import { Camera } from 'expo-camera';

import { styles } from './styles';
import { theme } from '../../global/theme';

import { addAluno } from '../../services/AlunoService';

import { StandardButton } from '../../components/StandardButton';

export const Register = () => {
  const [fotoAluno, setFotoAluno] = useState(null)
  const [showBorn, setShowBorn] = useState(false);
  const [showJudoDate, setShowJudoDate] = useState(false);
  const [showExameDate, setShowExameDate] = useState(false);


  const [localidade, setLocalidade] = useState("");
  const [nomeAluno, setNomeAluno] = useState("");
  const [dataInicioJudo, setDataInicioJudo] = useState(new Date())
  const [sexo, setSexo] = useState("");
  const [dataNascimento, setDataNascimento] = useState(new Date());
  const [peso, setPeso] = useState("");
  const [faixa, setFaixa] = useState("");
  const [FJERJ, setFJERJ] = useState("");
  const [CBJ_ZEMPO, setCBJ_ZEMPO] = useState("");
  const [dataUltimoExame, setDataUltimoExame] = useState(new Date());
  const [CPF, setCPF] = useState("");
  const [telResidencial, setTelResidencial] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [horaAula, setHoraAula] = useState("");
  const [CEP, setCEP] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numeroLogradouro, setNumeroLogradouro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");
  const [senha, setSenha] = useState("");
  const [checkSenha, setCheckSenha] = useState("");





  const showDatePickerBorn = () => {
    setShowBorn(true);
  };

  const handleBornDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dataNascimento;
    setDataNascimento(currentDate);
    setShowBorn(false);
  };

  const showDatePickerJudo = () => {
    setShowJudoDate(true);
  };

  const handleJudoDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dataInicioJudo;
    setDataInicioJudo(currentDate);
    setShowJudoDate(false);
  };

  const showDatePickerExame = () => {
    setShowExameDate(true);
  }
  const handleExameDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dataUltimoExame;
    setDataUltimoExame(currentDate);
    setShowExameDate(false);
  };

  function dataFormatada(incomeDate) {
    const dataF = new Date(incomeDate);
    const data = dataF;
    const dia = data.getDate().toString();
    const diaF = dia.length == 1 ? "0" + dia : dia;
    const mes = (data.getMonth() + 1).toString();
    const mesF = mes.length == 1 ? "0" + mes : mes;
    const anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  }

  const fotoDB = <Image style={styles.fotoAluno} source={fotoAluno} />
  const standardPhoto = <AntDesign name="adduser" size={84} color='#FFFF' />
  // const [hasPermission, setHasPermission] = useState(null);
  // const [type, setType] = useState(Camera.Constants.Type.back);

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestPermissionsAsync();
  //     setHasPermission(status === 'granted');
  //   })();
  // }, []);

  // if (hasPermission === null) {
  //   return <View />;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  function handleAddAluno() {
    addAluno(incomeData)
      .then((d) => {
        alert("Aluno registrado com sucesso!");
      })
      .catch((error) => alert(error));
  }

  //funcao de debug
  // function printTest(text) {
  //   setLocalidade(text)
  //   console.log(localidade)
  // }

  return (
    <View style={styles.background}>

      <View style={styles.containerHeader}>
        <TouchableOpacity style={styles.back}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Image style={styles.image} source={require('../../assets/Image/logo2.png')} />
      </View>

      <ScrollView style={styles.scrollContainer}>
        <KeyboardAvoidingView >

          <View style={styles.container}>

            {/* <Camera style={styles.camera} type={type}> */}
            <View style={styles.photo}>
              <TouchableOpacity style={{ alignItems: 'center' }}
              // onPress={() => {
              //   setType(
              //     type === Camera.Constants.Type.back
              //       ? Camera.Constants.Type.front
              //       : Camera.Constants.Type.back
              //   );
              // }}

              >

                {fotoAluno ? fotoDB : standardPhoto}
                <Text style={styles.TextPhoto} > {`Clique para inserir 
    uma imagem`}</Text>
              </TouchableOpacity>
            </View>
            {/* </Camera> */}


            <Text style={styles.textInput}>Localidade</Text>
            <TextInput style={styles.input}
              placeholder="Informe seu local de treino"
              autoCorrect={false}
              onChangeText={(text) => setLocalidade(text)}
            />
            <Text style={styles.textInput}>Nome</Text>
            <TextInput style={styles.input}
              placeholder="Informe seu nome"
              autoCorrect={false}
              onChangeText={(text) => setNomeAluno(text)}
            />

            <Text style={styles.textInput}>Data de inicio no judô</Text>
            <View style={styles.input}>
              <TouchableOpacity onPress={showDatePickerJudo}>
                <Text>{dataFormatada(dataInicioJudo)}</Text>
              </TouchableOpacity>
            </View>
            {showJudoDate && (
              <DateTimePicker
                value={dataInicioJudo}
                mode="date"
                display="default"
                onChange={handleJudoDateChange}
              />
            )}

            <Text style={styles.textInput}>Sexo</Text>
            <TextInput style={styles.input}
              placeholder="Informe seu sexo"
              autoCorrect={false}
              onChangeText={(text) => setSexo(text)}
            />
            <Text style={styles.textInput}>Data de nascimento</Text>
            <View style={styles.input}>
              <TouchableOpacity onPress={showDatePickerBorn}>
                <Text>{dataFormatada(dataNascimento)}</Text>
              </TouchableOpacity>
            </View>
            {showBorn && (
              <DateTimePicker
                value={dataNascimento}
                mode="date"
                display="default"
                onChange={handleBornDateChange}
              />
            )}


            <Text style={styles.textInput}>Peso</Text>
            <TextInput style={styles.input}
              placeholder="Informe seu Peso"
              keyboardType="numeric"
              autoCorrect={false}
              onChangeText={(text) => setPeso(text)}
            />

            <Text style={styles.textInput}>Faixa</Text>
            <TextInput style={styles.input}
              placeholder="Informe sua faixa"
              autoCorrect={false}
              onChangeText={(text) => setFaixa(text)}
            />

            <Text style={styles.textInput}>FJERJ</Text>
            <TextInput style={styles.input}
              placeholder="Informe seu registro FJERJ"
              autoCorrect={false}
              onChangeText={(text) => setFJERJ(text)}
            />
            <Text style={styles.textInput}>CBJ-ZEMPO</Text>
            <TextInput style={styles.input}
              placeholder="Informe seu registro CBJ-ZEMPO"
              autoCorrect={false}
              onChangeText={(text) => setCBJ_ZEMPO(text)}
            />
            <Text style={styles.textInput}>Data do último exame</Text>
            <View style={styles.input}>
              <TouchableOpacity onPress={showDatePickerExame}>
                <Text>{dataFormatada(dataUltimoExame)}</Text>
              </TouchableOpacity>
            </View>
            {showExameDate && (
              <DateTimePicker
                value={dataUltimoExame}
                mode="date"
                display="default"
                onChange={handleExameDateChange}
              />
            )}
            <Text style={styles.textInput}>CPF</Text>
            <TextInput style={styles.input}
              placeholder="Informe seu CPF"
              keyboardType="numeric"
              autoCorrect={false}
              onChangeText={(text) => setCPF(text)}
            />

            <Text style={styles.textInput}>Telefone residêncial</Text>
            <TextInput style={styles.input}
              placeholder="Informe seu telefone residêncial"
              keyboardType="numeric"
              autoCorrect={false}
              onChangeText={(text) => setTelResidencial(text)}
            />
            <Text style={styles.textInput}>Telefone Celular</Text>
            <TextInput style={styles.input}
              placeholder="Informe seu telefone Celular"
              keyboardType="numeric"
              autoCorrect={false}
              onChangeText={(text) => setCelular(text)}
            />
            <Text style={styles.textInput}>E-mail</Text>
            <TextInput style={styles.input}
              placeholder="Informe seu e-mail"
              autoCorrect={false}
              onChangeText={(text) => setEmail(text)}
            />
            <Text style={styles.textInput}>Horário de aula</Text>
            <TextInput style={styles.input}
              placeholder="Informe seu horario de aula"
              keyboardType="numeric"
              autoCorrect={false}
              onChangeText={(text) => setHoraAula(text)}
            />
            <Text style={styles.textInput}>CEP</Text>
            <TextInput style={styles.input}
              placeholder="Informe seu CEP"
              keyboardType="numeric"
              autoCorrect={false}
              onChangeText={() => setCEP(text)}
            />
            <Text style={styles.textInput}>Logradouro</Text>
            <TextInput style={styles.input}
              placeholder="Informe seu logradouro"
              autoCorrect={false}
              onChangeText={(text) => setLogradouro(text)}
            />
            <Text style={styles.textInput}>Número</Text>
            <TextInput style={styles.input}
              placeholder="Informe o numero no logradouro"
              autoCorrect={false}
              onChangeText={(text) => setNumeroLogradouro(text)}
            />
            <Text style={styles.textInput}>Complemento</Text>
            <TextInput style={styles.input}
              placeholder="Informe complemento"
              autoCorrect={false}
              onChangeText={(text) => setComplemento(text)}
            />

            <Text style={styles.textInput}>Cidade</Text>
            <TextInput style={styles.input}
              placeholder="Informe sua cidade"
              autoCorrect={false}
              onChangeText={(text) => setCidade(text)}
            />

            <Text style={styles.textInput}>Senha</Text>
            <TextInput style={styles.input}
              placeholder="Informe sua senha"
              autoCorrect={false}
              onChangeText={(text) => setSenha(text)}
            />
            <Text style={styles.textInput}>Repetir senha</Text>
            <TextInput style={styles.input}
              placeholder="Repita a Senha"
              autoCorrect={false}
              onChangeText={(text) => setCheckSenha(text)}
            />

            <View style={styles.buttonSave}>
              <StandardButton
                label='Salvar'
                textColor={theme.colors.highlight}
                bgColor={theme.colors.secondary10}
                font={theme.fonts.text300}
                onPress={() => { }}
              />
            </View>


          </View>


        </KeyboardAvoidingView >
      </ScrollView>
    </View >

  )
}

