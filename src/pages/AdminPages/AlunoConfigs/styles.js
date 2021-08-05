import React from 'react'
import { StyleSheet, StatusBar } from "react-native";
import { back } from 'react-native/Libraries/Animated/src/Easing';
import { theme } from '../../../global/theme'

export const styles = StyleSheet.create({
  //=========================================Geral==================================================
  containerHeader: {

    width: '100%',
    height: 70,
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 0,
    flexDirection: 'row',
    alignItems: 'center',


  },

  containerUserInfo: {
    width: '100%',
    alignItems: 'center',
  },

  back: {

    //marginLeft: '5%',
    alignSelf: 'center'
  },

  image: {

    alignSelf: 'center',

  },


  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  //===========================================Aluno===================================================

  containerEditProfileButton: {
    width: '60%'

  },

  input: {
    backgroundColor: theme.colors.primary20,
    fontFamily: theme.fonts.text400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 25 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 8,
    height: 45,
    width: '90%',
    fontSize: 16,
    fontFamily: theme.fonts.text400,
    borderRadius: 8,
    marginBottom: 15,
    padding: 10

  },
  textInput: {
    fontFamily: theme.fonts.text400,
    alignSelf: 'flex-start',
    marginLeft: '8%',
    marginBottom: 5,

  },



  //==========================================Admin=====================================================
})
