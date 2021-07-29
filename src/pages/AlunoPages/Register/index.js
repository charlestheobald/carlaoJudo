import React, { useState, useEffect, useRef, useContext } from 'react';
import { TextInputMask } from 'react-native-masked-text'

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
  Picker,
  Button
} from 'react-native';

import * as yup from 'yup';


import axios from 'axios';

import * as ImagePicker from 'expo-image-picker';

import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from '@expo/vector-icons';

import { format } from "date-fns";

import { styles } from './styles';
import { theme } from '../../../global/theme';

import { addAluno } from '../../../services/AlunoService';
import { countAluno } from '../../../services/AlunoService';

import { StandardButton } from '../../../components/StandardButton';
import { ParentContext } from '../../../contexts/alunos/ParentContext';

import { useNavigation } from "@react-navigation/native";

export const Register = () => {
  const navigation = useNavigation();

  const { telResponsavel, nomeResponsavel, emailResponsavel, setEmailResponsavel, setTelResponsavel, setNomeResponsavel } = useContext(ParentContext)

  const [fotoAluno, setFotoAluno] = useState(null)
  const [showBorn, setShowBorn] = useState(false);
  const [showJudoDate, setShowJudoDate] = useState(false);
  const [showExameDate, setShowExameDate] = useState(false);

  const [localidade, setLocalidade] = useState(null);
  const [nomeAluno, setNomeAluno] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [sexo, setSexo] = useState(null);
  const [dataInicioJudo, setDataInicioJudo] = useState(new Date());
  const [dataNascimento, setDataNascimento] = useState(new Date());
  const [dataUltimoExame, setDataUltimoExame] = useState(new Date());
  const [dataCadastro, setDataCadastro] = useState(new Date());
  const [peso, setPeso] = useState(null);
  const [altura, setAltura] = useState(null);
  const [faixa, setFaixa] = useState(null);
  const [FJERJ, setFJERJ] = useState(null);
  const [CBJ_ZEMPO, setCBJ_ZEMPO] = useState(null);
  const [RG, setRG] = useState(null);
  const [CPF, setCPF] = useState(null);
  const [telResidencial, setTelResidencial] = useState(null);
  const [celular, setCelular] = useState(null);
  const [email, setEmail] = useState(null);
  const [horaAula, setHoraAula] = useState(null);
  const [CEP, setCEP] = useState("");
  const [logradouro, setLogradouro] = useState(null);
  const [numeroLogradouro, setNumeroLogradouro] = useState(null);
  const [complemento, setComplemento] = useState(null);
  const [cidade, setCidade] = useState(null);
  const [pagamento, setPagamento] = useState(null);
  const [senha, setSenha] = useState(null);
  const [checkSenha, setCheckSenha] = useState(null);
  const [palavraChave, setPalavraChave] = useState(null);
  const [image, setImage] = useState(null);

  const isIos = Platform.OS === 'ios';





  const listaHorarios = [
    {
      nome: 'Informe seu horário de aula', id: '0'
    },
    {
      nome: '08:00', id: '08:00'
    },
    {
      nome: '09:00', id: '09:00'
    },
    {
      nome: '10:00', id: '10:00'
    },
    {
      nome: '13:00', id: '13:00'
    },
    {
      nome: '15:00', id: '15:00'
    },

  ];
  const listaFaixas = [
    {
      nome: 'Informe sua faixa', id: '0'
    },
    {
      nome: 'BRANCA',
      id: 'BRANCA'
    },
    {
      nome: 'AMARELA',
      id: 'AMARELA'
    }
  ];
  const listaLocais = [
    {
      nome: 'Informe o local de treino',
      id: '0'
    },
    {
      nome: 'KONNEN',
      id: 'KONNEN'
    },
    {
      nome: 'ITAIPAVA',
      id: 'ITAIPAVA'
    }
  ]
  const listaSexo = [
    {
      nome: 'Informe seu sexo',
      id: '0'
    },
    {
      nome: 'FEMININO',
      id: 'FEMININO'
    },
    {
      nome: 'MASCULINO',
      id: 'MASCULINO'
    }
  ]
  const listaPagamentos = [
    {
      nome: 'Informe a opção de pagamento',
      id: '0'
    },
    {
      nome: 'CREDITO',
      id: 'CREDITO'
    },
    {
      nome: 'DEBITO',
      id: 'DEBITO'
    },
    {
      nome: 'TRANSFERENCIA',
      id: 'TRANSFERENCIA'
    },
    {
      nome: 'PIX',
      id: 'PIX'
    },
    {
      nome: 'BOLETO',
      id: 'BOLETO'
    },
  ]
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


  const pattern = "yyyy-MM-dd";

  const alunoSchema = yup.object().shape({
    altura: yup
      .number()
      .required(),
    cbjZempo: yup
      .string()
      .required(),
    cep: yup
      .string()
      .required(),
    complemento: yup
      .string()
      .required(),
    cpf: yup
      .string()
      .required(),
    dataCadastro: yup
      .string()
      .required(),
    dataIngresso: yup
      .string()
      .required(),
    dataNascimento: yup
      .string()
      .required(),
    dataUltimoExame: yup
      .string(),
    email: yup
      .string()
      .required(),
    faixa: yup
      .string()
      .required(),
    fjerj: yup
      .string()
      .required(),
    horarioAula: yup
      .string()
      .required(),
    localTreino: yup
      .string()
      .required(),
    nome: yup
      .string()
      .required(),
    nomeResponsavel: yup
      .string()
      .required(),
    numero: yup
      .number()
      .required(),
    pagamento: yup
      .string()
      .required(),
    palavraChave: yup
      .string()
      .required(),
    peso: yup
      .number()
      .required(),
    rg: yup
      .string()
      .required(),
    senha: yup
      .string()
      .required(),
    sexo: yup
      .string()
      .required(),
    telefone: yup
      .string()
      .required(),
    telefoneResponsavel: yup
      .string()
      .required()

  })
  const alunoVO = {
    altura: parseFloat(altura),
    cbjZempo: CBJ_ZEMPO,
    cep: CEP,
    complemento: complemento,
    cpf: CPF,
    dataCadastro: format(dataCadastro, pattern),
    dataIngresso: format(dataInicioJudo, pattern),
    dataNascimento: format(dataNascimento, pattern),
    dataUltimoExame: dataUltimoExame === dataCadastro ? null : format(dataUltimoExame, pattern),
    email: email,
    faixa: faixa,
    fjerj: FJERJ,
    horarioAula: horaAula,
    localTreino: localidade,
    nome: nomeAluno,
    nomeResponsavel: nomeResponsavel,
    numero: parseFloat(numeroLogradouro),
    pagamento: pagamento,
    palavraChave: palavraChave,
    peso: parseFloat(peso),
    rg: RG,
    senha: senha,
    sexo: sexo,
    telefone: telResidencial,
    telefoneResponsavel: telResponsavel,
    usuario: usuario
  }




  const handleAddAluno = () => {
    console.log(alunoVO)
    var validated = new Boolean
    alunoSchema.isValid(alunoVO)
      .then(valid => {
        validated = valid
      }).catch((e) => alert(e, "Repita o cadastro"))
    if (validated === true & senha === checkSenha) {
      addAluno(alunoVO)
        .then((res) => {
          alert("Sucesso")
        })
        .catch((e) => alert("Erro ao cadastrar aluno", e))
    }
    else return alert("Há erros no seu cadastro, talvez os campos de senha não combinem")

  }


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
    //  let result = 
    await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
      exif: true,
      base64: true
    }).then(img => {
      setImage(img.base64)
    }).catch(error => {
      console.log("erro ao salvar imagem")
    });
    // if (!result.cancelled) {
    //   setImage(result.uri);
    // }

  };
  const handleGoBack = () => {
    navigation.goBack()
  }




  var decodedImage = `data:image/png;base64,${image}`;

  const handleViaCep = () => {

    axios.get(`https://viacep.com.br/ws/${CEP}/json`).then((res) =>
      //console.log(res.data.localidade)
      setLogradouro(res.data.logradouro),
      setCidade(res.data.localidade)
    ).catch((e) => console.log(e + " CEP inválido"))
  }




  return (
    <View style={styles.background}>

      <View style={styles.containerHeader}>
        <View style={{ flex: 1, left: '-35%' }}>
          <TouchableOpacity style={styles.back}
            onPress={handleGoBack}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.image} source={require('../../../assets/Image/logo2.png')} />
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

                <Image source={{ uri: decodedImage }} style={{ marginTop: 10, width: 150, height: 150, borderRadius: 100, }} />
              </TouchableOpacity>
            }



            <Text style={styles.textAlert}>Os campos com ' * ' são obrigatorios</Text>
            <Text style={styles.textInput}>Local de treino *</Text>
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
            <Text style={styles.textInput}>Nome *</Text>
            <TextInput style={styles.input}
              placeholder="Informe seu nome"
              autoCorrect={false}
              onChangeText={(text) => setNomeAluno(text)}
            />

            <Text style={styles.textInput}>Data de inicio no judô *</Text>
            <View style={styles.input}>
              <TouchableOpacity onPress={showDatePickerJudo}>
                <Text>{dataInicioJudo ? dataFormatada(dataInicioJudo) : ""}</Text>
              </TouchableOpacity>
            </View>
            {showJudoDate && (
              <DateTimePicker
                minimumDate={new Date(1920, 0, 1)}
                maximumDate={new Date()}
                style={{ width: isIos ? '100%' : 0, marginLeft: isIos ? '10%' : 0 }}
                value={dataInicioJudo ? dataInicioJudo : new Date()}
                mode="date"
                display="default"
                onChange={handleJudoDateChange}
              />
            )}


            <Text style={styles.textInput}>Sexo *</Text>
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
            <Text style={styles.textInput}>Data de nascimento *</Text>
            <View style={styles.input}>
              <TouchableOpacity onPress={showDatePickerBorn}>
                <Text>{dataNascimento ? dataFormatada(dataNascimento) : ""}</Text>
              </TouchableOpacity>
            </View>
            {showBorn && (
              <DateTimePicker
                minimumDate={new Date(1920, 0, 1)}
                maximumDate={new Date()}
                style={{ width: isIos ? '100%' : 0, marginLeft: isIos ? '10%' : 0 }}
                value={dataNascimento ? dataNascimento : new Date()}
                mode="date"
                display="default"
                onChange={handleBornDateChange}
              />
            )}


            <Text style={styles.textInput}>Peso *</Text>
            <TextInput style={styles.input}
              placeholder="Informe seu Peso"
              keyboardType="numeric"
              autoCorrect={false}
              onChangeText={(text) => setPeso(text)}
            />

            <Text style={styles.textInput}>Altura *</Text>
            <TextInputMask style={styles.input}
              type={'custom'}
              options={{
                mask: '9.99'
              }}
              value={altura}
              placeholder="Informe sua altura"
              keyboardType="numeric"
              autoCorrect={false}
              onChangeText={(text) => setAltura(text)}
            />

            <Text style={styles.textInput}>Faixa *</Text>
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
                <Text>{dataUltimoExame ? dataFormatada(dataUltimoExame) : ""}</Text>
              </TouchableOpacity>
            </View>
            {showExameDate && (
              <DateTimePicker
                minimumDate={new Date(1920, 0, 1)}
                maximumDate={new Date()}
                style={{ width: isIos ? '100%' : 0, marginLeft: isIos ? '10%' : 0 }}
                value={dataUltimoExame ? dataUltimoExame : new Date()}
                mode="date"
                display="default"
                onChange={handleExameDateChange}
              />
            )}

            <Text style={styles.textInput}>RG</Text>
            <TextInputMask style={styles.input}
              type={'custom'}
              options={{
                mask: '99.999.999-9'
              }}
              value={RG}
              placeholder="Informe seu RG"
              autoCorrect={false}
              onChangeText={(text) => setRG(text)}
            />

            <Text style={styles.textInput}>CPF</Text>
            <TextInputMask style={styles.input}
              type={'cpf'}
              value={CPF}
              placeholder="Informe seu CPF"
              keyboardType="numeric"
              autoCorrect={false}
              onChangeText={(text) => setCPF(text)}
            />

            <Text style={styles.textInput}>Telefone *</Text>
            <TextInputMask style={styles.input}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
              }}
              value={telResidencial}
              type={'cel-phone'}
              placeholder="Informe seu telefone"
              keyboardType="numeric"
              autoCorrect={false}
              onChangeText={(text) => setTelResidencial(text)}
            />

            {!emailResponsavel &&
              <>
                <Text style={styles.textInput}>E-mail *</Text>
                <TextInput style={styles.input}
                  placeholder="Informe seu e-mail"
                  keyboardType="email-address"
                  autoCompleteType='email'
                  autoCapitalize='none'
                  autoCorrect={false}
                  onChangeText={(text) => setEmail(text)}
                />
              </>
            }


            <Text style={styles.textInput}>Horário de aula *</Text>
            <View style={[styles.input, { justifyContent: 'center' }]}>
              <Picker
                selectedValue={horaAula}
                onValueChange={(itemValue, itemIndex) => setHoraAula(itemValue)}
              >
                {listaHorarios.map((horario) => (
                  <Picker.Item label={horario.nome} value={horario.id} key={horario.id} />
                ))}
              </Picker>
            </View>
            <Text style={styles.textInput}>CEP *</Text>
            <TextInput style={styles.input}
              placeholder="Informe seu CEP"
              keyboardType="numeric"
              autoCorrect={false}
              onChangeText={(text) => setCEP(text)}
              onBlur={() => handleViaCep()}
            />
            <Text style={styles.textInput}>Logradouro</Text>
            <TextInput style={styles.input}
              editable={false}
              value={logradouro}
              placeholder="Informe seu logradouro"
              autoCorrect={false}
              onChangeText={(text) => setLogradouro(text)}
            />

            <Text style={styles.textInput}>Número *</Text>
            <TextInput style={styles.input}
              placeholder="Informe o numero no logradouro"
              keyboardType="numeric"
              autoCorrect={false}
              onChangeText={(text) => setNumeroLogradouro(text)}
            />
            <Text style={styles.textInput}>Complemento</Text>
            <TextInput style={styles.input}
              placeholder="Informe complemento"
              autoCorrect={false}
              onChangeText={(text) => setComplemento(text)}
            />

            <Text style={styles.textInput}>Cidade *</Text>
            <TextInput style={styles.input}
              editable={false}
              value={cidade}
              placeholder="Informe sua cidade"
              autoCorrect={false}
              onChangeText={(text) => setCidade(text)}
            />
            <Text style={styles.textInput}>Forma de pagamento *</Text>
            <View style={[styles.input, { justifyContent: 'center' }]}>
              <Picker
                selectedValue={pagamento}
                onValueChange={(itemValue, itemIndex) => setPagamento(itemValue)}
              >
                {listaPagamentos.map((value) => (
                  <Picker.Item label={value.nome} value={value.id} key={value.id} />
                ))}
              </Picker>
            </View>

            <Text style={styles.textInput}>Palavra Chave *</Text>
            <TextInput style={styles.input}
              placeholder="Palavra secreta para recuperar senha"
              autoCorrect={false}
              onChangeText={(text) => setPalavraChave(text)}
            />
            <Text style={styles.textInput}>Nome de usuario *</Text>
            <TextInput style={styles.input}
              placeholder="Informe um novo nome de usuario"
              autoCorrect={false}
              onChangeText={(text) => setUsuario(text)}
            />

            <Text style={styles.textInput}>Senha *</Text>
            <TextInput style={styles.input}
              placeholder="Informe sua senha"
              autoCorrect={false}
              autoCapitalize='none'
              secureTextEntry={true}
              onChangeText={(text) => setSenha(text)}
            />
            <Text style={styles.textInput}>Repetir senha *</Text>
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
                onPress={() => handleAddAluno()}


              />
            </View>
          </View>
        </KeyboardAvoidingView >
      </ScrollView>
    </View >

  )
}

