import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import styled from 'styled-components/native';

import { theme } from '../../global/theme'

const Container = styled.View`
    margin-horizontal:20px;
    width: 90%;
    alignItems: center;
	justifyContent: center;
`;

const Input = styled.TextInput`
    background-color: ${theme.colors.primary10};
    shadow-color: ${theme.colors.text};
    shadow-offset: { width: 0, height: 25 };
    shadow-opacity: 0.07;
    shadowRadius: 8;
    elevation: 8;
    width: 90%;
    font-size: 16px;
    font-family: ${theme.fonts.text400};
    border-radius: 8px;
    marginVertical:10px;
    padding: 10px

`;

export const InputData = ({ placeHolder }) => {

    return (
        <Container>
            <Input
                placeholder={placeHolder}
                autoCorrect={false}
                onChangeText={() => { }}
            />
        </Container>
    )
}