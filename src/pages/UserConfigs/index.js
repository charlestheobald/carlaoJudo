import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Picker } from 'react-native'

import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles'
import { theme } from '../../global/theme'

import { UsuarioContext } from '../../contexts/usuario/UsuarioContext'
import { StandardButton } from '../../components/StandardButton'
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

  const [checkSenha, setCheckSenha] = useState(null)

  const { isAdmin, user, setUser } = useContext(UsuarioContext)

  const [usuario, setUsuario] = useState(user)

  const handleGoBack = () => {
    navigation.goBack()
  }
  const handleAmptyAltura = () => {
    if (usuario.altura === null || usuario.altura === 0)
      return alert("O campo altura é obrigatório")
  }
  const handleAmptyEmail = () => {
    if (usuario.email === null)
      return alert("O campo email é obrigatório")
  }
  const handleAmptyNome = () => {
    if (usuario.nome === null)
      return alert("O campo nome é obrigatório")
  }


  const handleAmptyPeso = () => {
    if (usuario.peso === null || usuario.peso === 0)
      return alert("Campo peso é obrigatório")
  }

  const handleAmptySenha = () => {
    if (usuario.senha === null)
      return alert("Campo senha é obrigatório")
  }

  const handleAmptyTelefone = () => {
    if (usuario.telefone === null)
      return alert("Campo telefone é obrigatório")
  }

  const handleAmptyUsuario = () => {
    if (usuario.usuario === null)
      return alert("Campo usuário é obrigatório")
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
                    selectedValue={usuario.localidade}
                    onValueChange={(itemValue, itemIndex) => setUsuario({ ...usuario, localTreino: itemValue })}
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
                  defaultValue={usuario.nome}

                  autoCapitalize='words'
                  onChangeText={(text) => setUsuario({ ...usuario, nome: text })}
                  onBlur={() => handleAmptyNome()}

                />

                <Text style={styles.textInput}>Peso *</Text>
                <TextInput style={styles.input}
                  placeholder="Informe seu Peso"
                  keyboardType="numeric"
                  autoCorrect={false}
                  onChangeText={(text) => setUsuario({ ...usuario, peso: text })}
                  onBlur={() => handleAmptyPeso()}
                />

                <Text style={styles.textInput}>Altura (cm)*</Text>
                <TextInput style={styles.input}
                  placeholder={'Altura em centimetros'}
                  keyboardType="numeric"
                  autoCorrect={false}
                  onChangeText={(text) => setUsuario({ ...usuario, altura: text })}
                  onBlur={() => handleAmptyAltura()}
                />

                <Text style={styles.textInput}>Faixa *</Text>
                <View style={[styles.input, { justifyContent: 'center' }]}>
                  <Picker
                    selectedValue={usuario.faixa}
                    onValueChange={(itemValue, itemIndex) => setUsuario({ ...usuario, faixa: itemValue })}
                  >
                    {listaFaixas.map((faixa) => (
                      <Picker.Item label={faixa.nome} value={faixa.id} key={faixa.id} />
                    ))}
                  </Picker>
                </View>


                <Text style={styles.textInput}>FJERJ</Text>
                <TextInput style={styles.input}

                  defaultValue={usuario.fjerj}
                  placeholder="Informe seu registro FJERJ"
                  keyboardType="numeric"
                  autoCorrect={false}
                  onChangeText={(text) => setUsuario({ ...usuario, fjerj: text })}
                />

                <Text style={styles.textInput}>CBJ-ZEMPO</Text>
                <TextInput style={styles.input}
                  defaultValue={usuario.cbjZempo}
                  autoCapitalize='characters'
                  placeholder="Informe seu registro CBJ-ZEMPO"
                  autoCorrect={false}
                  onChangeText={(text) => setUsuario({ ...usuario, cbjZempo: text })}
                />


                <Text style={styles.textInput}>RG</Text>
                <TextInput style={styles.input}
                  defaultValue={usuario.rg}
                  placeholder="Informe seu RG"
                  autoCorrect={false}
                  onChangeText={(text) => setUsuario({ ...usuario, rg: text })}
                />

                <Text style={styles.textInput}>CPF</Text>
                <TextInput style={styles.input}
                  defaultValue={usuario.cpf}
                  placeholder="Informe seu CPF"
                  keyboardType="numeric"
                  autoCorrect={false}
                  onChangeText={(text) => setUsuario({ ...usuario, cpf: text })}
                />

                <Text style={styles.textInput}>Telefone *</Text>
                <TextInput style={styles.input}
                  placeholder="Informe seu telefone"
                  keyboardType="numeric"
                  defaultValue={usuario.telefone}
                  autoCorrect={false}
                  onChangeText={(text) => setUsuario({ ...usuario, telefone: text })}
                  onBlur={() => handleAmptyTelefone()}
                />

                {!usuario.emailResponsavel &&
                  <>
                    <Text style={styles.textInput}>E-mail *</Text>
                    <TextInput style={styles.input}
                      placeholder="Informe seu e-mail"
                      keyboardType="email-address"
                      autoCompleteType='email'
                      autoCapitalize='none'
                      autoCorrect={false}
                      defaultValue={usuario.email}
                      onChangeText={(text) => setUsuario({ ...usuario, email: text })}
                      onBlur={() => handleAmptyEmail()}
                    />
                  </>
                }


                <Text style={styles.textInput}>Horário de aula *</Text>
                <View style={[styles.input, { justifyContent: 'center' }]}>
                  <Picker
                    selectedValue={usuario.horaAula}
                    onValueChange={(itemValue, itemIndex) => setUsuario({ ...usuario, horarioAula: itemValue })}
                  >
                    {listaHorarios.map((horario) => (
                      <Picker.Item label={horario.nome} value={horario.id} key={horario.id} />
                    ))}
                  </Picker>
                </View>

                <Text style={styles.textInput}>Forma de pagamento *</Text>
                <View style={[styles.input, { justifyContent: 'center' }]}>
                  <Picker
                    selectedValue={usuario.pagamento}
                    onValueChange={(itemValue, itemIndex) => setUsuario({ ...usuario, pagamento: itemValue })}
                  >
                    {listaPagamentos.map((value) => (
                      <Picker.Item label={value.nome} value={value.id} key={value.id} />
                    ))}
                  </Picker>
                </View>


                <Text style={styles.textInput}>Nome de usuario *</Text>
                <TextInput style={styles.input}
                  placeholder="Informe um novo nome de usuario"
                  autoCorrect={false}
                  onChangeText={(text) => setUsuario({ ...usuario, usuario: text })}
                  onBlur={() => handleAmptyUsuario()}
                />

                <Text style={styles.textInput}>Senha *</Text>
                <TextInput style={styles.input}
                  placeholder="Informe sua senha"
                  autoCorrect={false}
                  autoCapitalize='none'
                  secureTextEntry={true}
                  onChangeText={(text) => setUsuario({ ...usuario, senha: text })}
                  onBlur={() => handleAmptySenha()}
                />
                <Text style={styles.textInput}>Repetir senha *</Text>
                <TextInput style={styles.input}
                  placeholder="Repita a Senha"
                  secureTextEntry={true}
                  autoCorrect={false}
                  autoCapitalize='none'
                  onChangeText={(text) => setCheckSenha(text)}
                />

              </View>

              <View style={styles.containerEditProfileButton}>
                <StandardButton
                  label='Editar Perfil'
                  textColor={theme.colors.highlight}
                  bgColor={theme.colors.secondary10}
                  font={theme.fonts.text400}
                  onPress={() => { }}
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

