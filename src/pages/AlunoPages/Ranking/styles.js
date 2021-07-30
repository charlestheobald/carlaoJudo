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
    flex: 1,
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
    fontSize: 16,
    fontFamily: theme.fonts.text500,
    marginLeft: 30,
  },


  tituloRanked: {
    backgroundColor: theme.colors.secondary20,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',

  },

  trophy: {
    marginRight: 30,

  },

})



