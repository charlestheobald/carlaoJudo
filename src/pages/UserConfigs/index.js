import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Picker } from 'react-native'

import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles'
import { theme } from '../../global/theme'
import { updateAluno } from '../../services/AlunoService'
import { format } from "date-fns";
import { UsuarioContext } from '../../contexts/usuario/UsuarioContext'
import { StandardButton } from '../../components/StandardButton'
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from 'react-native-masked-text'

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
    nome: 'OUTRO',
    id: 'OUTRO'
  }
]
const listaFaixas = [
  {
    nome: 'Informe sua faixa', id: '0'
  },
  {
    nome: 'BRANCA',
    id: 'BRANCA'
  },
  {
    nome: 'CINZA',
    id: 'CINZA'
  },
  {
    nome: 'AZUL',
    id: 'AZUL'
  },
  {
    nome: 'AMARELA',
    id: 'AMARELA'
  },
  {
    nome: 'LARANJA',
    id: 'LARANJA'
  },
  {
    nome: 'VERDE',
    id: 'VERDE'
  },
  {
    nome: 'ROXA',
    id: 'ROXA'
  },
  {
    nome: 'MARROM',
    id: 'MARROM'
  },
  {
    nome: 'PRETA',
    id: 'PRETA'
  },
]
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




export const UserConfigs = () => {

  const pattern = "yyyy-MM-dd";

  const { isAdmin, user, setUser } = useContext(UsuarioContext)

  const navigation = useNavigation();



  const [localTreino, setLocalTreino] = useState(user.localTreino)
  const [nomeAluno, setNomeAluno] = useState(user.nome);
  const [peso, setPeso] = useState(user.peso);
  const [altura, setAltura] = useState(user.altura);
  const [faixa, setFaixa] = useState(user.faixa);
  const [FJERJ, setFJERJ] = useState(user.fjerj);
  const [CBJ_ZEMPO, setCBJ_ZEMPO] = useState(user.cbjZempo);
  const [RG, setRG] = useState(user.rg);
  const [CPF, setCPF] = useState(user.cpf);
  const [telefone, setTelefone] = useState(user.telefone);
  const [email, setEmail] = useState(user.email);
  const [horaAula, setHoraAula] = useState(user.horarioAula);
  const [pagamento, setPagamento] = useState(user.pagamento);
  const [usuario, setUsuario] = useState(user.usuario);

  const [dataUltimoExame, setDataUltimoExame] = useState(new Date());




  const alunoVO = {
    altura: Number(altura),
    cbjZempo: CBJ_ZEMPO,
    cep: user.endereco.cep,
    complemento: user.endereco.complemento,
    cpf: CPF,
    dataCadastro: user.dataCadastro,
    dataIngresso: user.dataIngresso,
    dataNascimento: user.dataNascimento,
    dataUltimoExame: user.dataUltimoExame,
    email: email,
    faixa: faixa,
    fjerj: FJERJ,
    foto: user.foto,
    horarioAula: horaAula,
    localTreino: localTreino,
    nome: nomeAluno,
    nomeResponsavel: user.nomeResponsavel,
    numero: user.endereco.numero,
    pagamento: pagamento,
    peso: Number(peso),
    rg: RG,
    senha: user.senha,
    sexo: user.sexo,
    telefone: telefone,
    telefoneResponsavel: user.telefoneResponsavel,
    usuario: usuario,

  }

  const handleGoBack = () => {
    navigation.goBack()
  }

  const handleEmptyAltura = () => {
    if (altura === null || altura === 0)
      return alert("O campo altura é obrigatório")
  }
  const handleEmptyEmail = () => {
    if (email === null)
      return alert("O campo email é obrigatório")
  }
  const handleEmptyNome = () => {
    if (nomeAluno === null)
      return alert("O campo nome é obrigatório")
  }


  const handleEmptyPeso = () => {
    if (peso === null || peso === 0)
      return alert("Campo peso é obrigatório")
  }

  const handleEmptyTelefone = () => {
    if (telefone === null)
      return alert("Campo telefone é obrigatório")
  }

  const handleEmptyUsuario = () => {
    if (usuario === null)
      return alert("Campo usuário é obrigatório")
  }

  const handleUpdateAluno = () => {
    console.log(alunoVO)
    updateAluno(user.usuario, alunoVO).then((res) => {
      console.log(res);
      alert('suuuucesso')
      setUser(res)
      navigation.navigate('Ranking')
    }).catch((e) => alert(e))

  }




  return (
    <>
      <View style={styles.containerHeader}>
        <View style={{ paddingLeft: '5%', marginRight: '-9%' }}>
          <TouchableOpacity style={styles.back}
            onPress={handleGoBack}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.image} source={require('../../assets/Image/logo2.png')} />
        </View>

      </View>
      <View>
        {
          isAdmin &&

          <View style={styles.content}>
            <Text>Admin</Text>
          </View>

        }

      </View>

      <View style={styles.container}>


        <ScrollView style={{ width: '100%' }}>

          {
            !isAdmin &&

            <View style={styles.content}>

              <View style={styles.containerUserInfo}>

                <Text style={styles.textInput}>Local de treino *</Text>
                <View style={[styles.input, { justifyContent: 'center' }]}>
                  <Picker
                    selectedValue={localTreino}
                    onValueChange={(itemValue, itemIndex) => setLocalTreino(itemValue)}
                  >
                    {listaLocais.map((local) => (
                      <Picker.Item label={local.nome} value={local.id} key={local.id} />
                    ))}
                  </Picker>
                </View>

                <Text style={styles.textInput}>Nome *</Text>
                <TextInput style={styles.input}
                  placeholder={nomeAluno}
                  autoCorrect={false}
                  value={nomeAluno}

                  autoCapitalize='words'
                  onChangeText={(text) => setNomeAluno(text)}
                  onBlur={() => handleEmptyNome()}

                />

                <Text style={styles.textInput}>Peso *</Text>
                <TextInput style={styles.input}

                  placeholder={peso.toString()}
                  value={peso}
                  keyboardType='numeric'
                  autoCorrect={false}
                  onChangeText={(text) => setPeso(text)}
                  onBlur={() => handleEmptyPeso()}
                />

                <Text style={styles.textInput}>Altura*</Text>
                <TextInput style={styles.input}

                  placeholder={altura.toString()}
                  value={altura}
                  keyboardType="numeric"
                  autoCorrect={false}
                  onChangeText={(text) => setAltura(text)}
                  onBlur={() => handleEmptyAltura()}
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
                  placeholder={FJERJ?.toString()}
                  value={FJERJ}
                  keyboardType="numeric"
                  autoCorrect={false}
                  onChangeText={(text) => setFJERJ(text)}
                />

                <Text style={styles.textInput}>CBJ/ZEMPO</Text>
                <TextInput style={styles.input}
                  placeholder={CBJ_ZEMPO?.toString()}
                  value={CBJ_ZEMPO}
                  autoCapitalize='characters'
                  autoCorrect={false}
                  onChangeText={(text) => setCBJ_ZEMPO(text)}
                />


                <Text style={styles.textInput}>RG</Text>
                <TextInput style={styles.input}
                  placeholder={RG?.toString()}
                  value={RG}
                  autoCorrect={false}
                  onChangeText={(text) => setRG(text)}
                />

                <Text style={styles.textInput}>CPF</Text>
                <TextInput style={styles.input}
                  placeholder={CPF?.toString()}
                  value={CPF}
                  keyboardType="numeric"
                  autoCorrect={false}
                  onChangeText={(text) => setCPF(text)}
                />

                <Text style={styles.textInput}>Telefone *</Text>
                <TextInput style={styles.input}
                  placeholder={telefone.toString()}
                  value={telefone}
                  keyboardType="numeric"
                  autoCorrect={false}
                  onChangeText={(text) => setTelefone(text)}
                  onBlur={() => handleEmptyTelefone()}
                />


                <>
                  <Text style={styles.textInput}>E-mail*</Text>
                  <TextInput style={styles.input}
                    //placeholder={email.toString()}
                    value={email}
                    keyboardType="email-address"
                    autoCompleteType='email'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(text) => setEmail(text)}
                    onBlur={() => handleEmptyEmail()}
                  />
                </>



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


                <Text style={styles.textInput}>Nome de usuario *</Text>
                <TextInput style={styles.input}
                  //placeholder={usuario.toString()}
                  defaultValue={usuario}
                  autoCorrect={false}
                  onChangeText={(text) => setUsuario(text)}
                  onBlur={() => handleEmptyUsuario()}
                />
              </View>

              <View style={styles.containerEditProfileButton}>
                <StandardButton
                  label='Editar Perfil'
                  textColor={theme.colors.highlight}
                  bgColor={theme.colors.secondary10}
                  font={theme.fonts.text400}
                  onPress={() => handleUpdateAluno()}
                  widthProp='100%'

                />
              </View>
            </View>
          }

        </ScrollView>
      </View>
    </>
  )
}

