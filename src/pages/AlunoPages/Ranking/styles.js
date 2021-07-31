import React from 'react'
import { StyleSheet, StatusBar } from "react-native";
import { theme } from '../../../global/theme'

export const styles = StyleSheet.create({

  background: {
    flex: 1,
    backgroundColor: theme.colors.primary10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

  },
  headerRanked: {

    backgroundColor: theme.colors.primary10,
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',

  },
  textRanking: {
    flex: 1,
    fontFamily: theme.fonts.titleLale400,
    fontSize: 36,
    marginLeft: 20,
  },
  iconFilter: {

    marginRight: 35
  },
  textTitulo: {
    fontSize: 18,
    fontFamily: theme.fonts.text500,
    marginLeft: 15,
  },

  textTitulo2: {
    fontSize: 18,
    fontFamily: theme.fonts.text500,
    marginRight: 130,
  },


  tituloRanked: {

    height: 50,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',

  },

  trophy: {
    marginRight: 22,
  },

})



