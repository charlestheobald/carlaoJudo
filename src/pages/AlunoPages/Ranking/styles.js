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

})
