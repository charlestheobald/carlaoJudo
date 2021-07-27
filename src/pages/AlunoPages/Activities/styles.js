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


  config: {
    marginLeft: '50%',
    alignSelf: 'center'
  },

  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

  },

  contentButton: {
    alignItems: 'center',
    marginVertical: 10,
    width: '100%'
  },

})
