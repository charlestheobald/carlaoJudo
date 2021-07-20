import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Button,
  Animated,
  Keyboard
} from 'react-native';
import styled from 'styled-components/native';


import { theme } from '../../global/theme';
import { ActionButton } from '../../components/ActionButton';
import { InputData } from '../../components/InputData';


const goHome = () => {
  return null
}

const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.primary10};
		alignItems: center;
		justifyContent: center;
    `;


const ContainerLogo = styled.View`

`;
const Content = styled.View`
	;
		width: 100%;
		alignItems: center;
		justifyContent: center;
		
		bottom:-30


`;
const ContainerInput = styled.View`
	background-color: ${theme.colors.primary30}
	alignItems: center;
	justifyContent: center;
	padding-top: 12px;
	width: 70%;
	borderRadius:20px
	bottom:-10


`;
const ContainerButton = styled.View`
		marginVertical: 20px;


`;
const TextInfoContainer = styled.View`
	marginTop:10px;
	bottom:-20px
`;

export const ForgotKeyword = () => {
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
    <Container>
      <ContainerLogo>
        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y,
          }}
          source={require('../../assets/Image/logo.png')} />
      </ContainerLogo>

      <TextInfoContainer>
        <Text style={{ fontFamily: theme.fonts.text500, fontSize: 14 }}>Informe os dados necessários para recuperar sua senha</Text>
      </TextInfoContainer>
      <Content>

        <ContainerInput>
          <InputData placeHolder='Email' />
          <InputData placeHolder='Nova senha' />
          <InputData placeHolder='Repetir nova senha' />
          <InputData placeHolder='palavra de segurança' />
          <ContainerButton>
            <ActionButton
              color={theme.colors.secondary20}
              title='Alterar Senha'
              textColor={theme.colors.highlight}
            />
          </ContainerButton>
        </ContainerInput>


      </Content>
    </Container>

  );


}