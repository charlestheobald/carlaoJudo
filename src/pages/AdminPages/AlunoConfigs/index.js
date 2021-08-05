import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Picker } from 'react-native'

import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles'
import { theme } from '../../../global/theme';
import { updateStatus } from '../../../services/AlunoService'
import { UsuarioContext } from '../../../contexts/usuario/UsuarioContext';
import { StandardButton } from '../../../components/StandardButton';
import { useNavigation } from "@react-navigation/native";


export const AlunoConfigs = ({ idAluno }) => {

  const pattern = "yyyy-MM-dd";

  const listaStatus = [
    {
      nome: "PENDENTE",
      id: "PENDENTE"
    },
    {
      nome: "ATIVO",
      id: "ATIVO"
    },
    {
      nome: "INATIVO",
      id: "INATIVO"
    }
  ]

  const { isAdmin, user, setUser } = useContext(UsuarioContext)

  const navigation = useNavigation();



  const [pontuacao, setPontuacao] = useState(user.pontuacao)
  const [status, setStatus] = useState(user.status);

  if (isAdmin) {

  } else {
    const alunoUdpateVO = {
      pontuacao: pontuacao,
      status: status
    }
  }

  const handleGoBack = () => {
    navigation.goBack()
  }

  const handleEmptyPontuacao = () => {
    if (pontuacao === null)
      return alert("O campo pontuação é obrigatório")
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

  const handleUpdateStatus = () => {
    console.log(alunoVO)
    updateStatus(idAluno, alunoUdpateVO).then((res) => {
      console.log(res);
      alert('suuuucesso')
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
          <Image style={styles.image} source={require('../../../assets/Image/logo2.png')} />
        </View>

      </View>
      <View>
        <View style={styles.content}>
          <Text>Admin</Text>
        </View>

        <Text style={styles.textInput}>Status *</Text>
        <View style={[styles.input, { justifyContent: 'center' }]}>
          <Picker
            selectedValue={status}
            onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
          >
            {listaStatus.map((status) => (
              <Picker.Item label={status.nome} value={status.id} key={status.id} />
            ))}
          </Picker>
        </View>

        <Text style={styles.textInput}>Pontuação*</Text>
        <TextInput style={styles.input}

          placeholder={pontuacao?.toString()}
          value={pontuacao}
          keyboardType="numeric"
          autoCorrect={false}
          onChangeText={(text) => setPontuacao(text)}
          onBlur={() => handleEmptyPontuacao()}
        />
      </View>

      <View style={styles.containerEditProfileButton}>
        <StandardButton
          label='Editar Aluno'
          textColor={theme.colors.highlight}
          bgColor={theme.colors.secondary10}
          font={theme.fonts.text400}
          onPress={() => handleUpdateStatus()}
          widthProp='100%'

        />
      </View>

      {/* <View style={styles.container}>


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


            </View>
          }

        </ScrollView>
      </View> */}
    </>
  )
}

