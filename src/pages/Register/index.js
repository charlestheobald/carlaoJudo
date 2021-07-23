import React, { useState, useEffect, useRef, useContext } from 'react';
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
  StyleSheet,
  Platform,
  Picker
} from 'react-native';


import * as ImagePicker from 'expo-image-picker';

import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from '@expo/vector-icons';
import { Camera } from 'expo-camera';

import { styles } from './styles';
import { theme } from '../../global/theme';

import { addAluno } from '../../services/AlunoService';

import { StandardButton } from '../../components/StandardButton';
import { ParentContext } from '../../contexts/alunos/ParentContext';

export const Register = () => {


  const { telResponsavel, nomeResponsavel } = useContext(ParentContext)

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
  const [pagamento, setPagamento] = useState("");
  const [senha, setSenha] = useState("");
  const [checkSenha, setCheckSenha] = useState("");




  const showDatePickerBorn = () => {
    setShowBorn(Platform.OS === 'ios' || true);
  };

  const handleBornDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dataNascimento;
    setDataNascimento(currentDate);
    setShowBorn(false);
  };

  const showDatePickerJudo = () => {
    setShowJudoDate(Platform.OS === 'ios' || true);
  };

  const handleJudoDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dataInicioJudo;
    setDataInicioJudo(currentDate);
    setShowJudoDate(false);
  };

  const showDatePickerExame = () => {
    setShowExameDate(Platform.OS === 'ios' || true);
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



  function handleAddAluno() {
    addAluno(incomeData)
      .then((d) => {
        alert("Aluno registrado com sucesso!");

      })
      .catch((error) => alert(error));
  }

  const isIos = Platform.OS === 'ios';

  const listaFaixas = [
    {
      nome: 'Informe sua faixa', id: '0'
    },
    {
      nome: 'Branca',
      id: '1'
    },
    {
      nome: 'Amarela',
      id: '2'
    }
  ];
  const listaLocais = [
    {
      nome: 'Informe o local de treino',
      id: '0'
    },
    {
      nome: 'Konnen',
      id: '1'
    },
    {
      nome: 'Itaipava',
      id: '2'
    }
  ]
  const listaSexo = [
    {
      nome: 'Informe seu sexo',
      id: '0'
    },
    {
      nome: 'Feminino',
      id: '1'
    },
    {
      nome: 'Masculino',
      id: '2'
    }
  ]
  const listaPagamentos = [
    {
      nome: 'Informe a opção de pagamento',
      id: '0'
    },
    {
      nome: 'Dinheiro',
      id: '1'
    },
    {
      nome: 'Cartão(crédito)',
      id: '2'
    },
    {
      nome: 'Cartão(débito)',
      id: '3'
    },
    {
      nome: 'Cartão(débito-automático)',
      id: '4'
    },
    {
      nome: 'Boleto',
      id: '5'
    },
    {
      nome: 'Cheque',
      id: '6'
    },
  ]
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Desculpe, é necessário autorizar o acesso à galeria para realizar o cadastro');
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }

  };


  return (
    <View style={styles.background}>

      <View style={styles.containerHeader}>
        <View style={{ flex: 1, left: '-35%' }}>
          <TouchableOpacity style={styles.back}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.image} source={require('../../assets/Image/logo2.png')} />
        </View>
        <View style={{ flex: 1 }}></View>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <KeyboardAvoidingView >

          <View style={styles.container}>
            {!image ? <View style={styles.photo}>
              <TouchableOpacity style={{ alignItems: 'center' }}
                onPress={pickImage}
              >
                <AntDesign name="adduser" size={84} color='#FFFF' />
                <Text style={styles.TextPhoto} > {`Clique para inserir 
    uma imagem`}</Text>
              </TouchableOpacity>
            </View>
              :
              <TouchableOpacity onPress={pickImage}>
                <Image source={{ uri: image }} style={{ marginTop: 10, width: 150, height: 150, borderRadius: 100, }} />
              </TouchableOpacity>
            }




            <Text style={styles.textInput}>Local de treino</Text>
            <View style={[styles.input, { justifyContent: 'center' }]}>
              <Picker
                selectedValue={localidade}
                onValueChange={(itemValue, itemIndex) => setLocalidade(itemValue)}
              >
                {listaLocais.map((local) => (
                  <Picker.Item label={local.nome} value={local.id} key={local.id} />
                ))}
              </Picker>
            </View>
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
                minimumDate={new Date(1920, 0, 1)}
                maximumDate={new Date()}
                style={{ width: isIos ? '100%' : 0, marginLeft: isIos ? '10%' : 0 }}
                value={dataInicioJudo}
                mode="date"
                display="default"
                onChange={handleJudoDateChange}
              />
            )}


            <Text style={styles.textInput}>Sexo</Text>
            <View style={[styles.input, { justifyContent: 'center' }]}>
              <Picker
                selectedValue={sexo}
                onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
              >
                {listaSexo.map((sexo) => (
                  <Picker.Item label={sexo.nome} value={sexo.id} key={sexo.id} />
                ))}
              </Picker>
            </View>
            <Text style={styles.textInput}>Data de nascimento</Text>
            <View style={styles.input}>
              <TouchableOpacity onPress={showDatePickerBorn}>
                <Text>{dataFormatada(dataNascimento)}</Text>
              </TouchableOpacity>
            </View>
            {showBorn && (
              <DateTimePicker
                minimumDate={new Date(1920, 0, 1)}
                maximumDate={new Date()}
                style={{ width: isIos ? '100%' : 0, marginLeft: isIos ? '10%' : 0 }}
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
            <View style={[styles.input, { justifyContent: 'center' }]}>
              <Picker
                selectedValue={faixa}
                onValueChange={(itemValue, itemIndex) => setFaixa(itemValue)}
              >
                {listaFaixas.map((faixa) => (
                  <Picker.Item label={faixa.nome} value={faixa.id} key={faixa.id} />
                ))}
              </Picker>
            </View>


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
                minimumDate={new Date(1920, 0, 1)}
                maximumDate={new Date()}
                style={{ width: isIos ? '100%' : 0, marginLeft: isIos ? '10%' : 0 }}
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
              keyboardType="email-address"
              autoCompleteType='email'
              autoCapitalize='none'
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
            <Text style={styles.textInput}>Forma de pagamento</Text>
            <View style={[styles.input, { justifyContent: 'center' }]}>
              <Picker
                selectedValue={sexo}
                onValueChange={(itemValue, itemIndex) => setPagamento(itemValue)}
              >
                {listaPagamentos.map((value) => (
                  <Picker.Item label={value.nome} value={value.id} key={value.id} />
                ))}
              </Picker>
            </View>

            <Text style={styles.textInput}>Senha</Text>
            <TextInput style={styles.input}
              placeholder="Informe sua senha"
              autoCorrect={false}
              autoCapitalize='none'
              secureTextEntry={true}
              onChangeText={(text) => setSenha(text)}
            />
            <Text style={styles.textInput}>Repetir senha</Text>
            <TextInput style={styles.input}
              placeholder="Repita a Senha"
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={(text) => setCheckSenha(text)}
            />

            <View style={styles.buttonSave}>
              <StandardButton
                label='Salvar'
                textColor={theme.colors.highlight}
                bgColor={theme.colors.secondary10}
                font={theme.fonts.text300}


              />
            </View>
          </View>
        </KeyboardAvoidingView >
      </ScrollView>
    </View >

  )
}

