import React from 'react'
import { StyleSheet, StatusBar } from "react-native";
import { theme } from '../../../global/theme'

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: theme.colors.primary10,
    width: '100%',


  },
  content: {
    flex: 1,
    justifyContent: 'center',

    width: '100%',
    marginTop: 20,
    marginLeft: '10%'

  },
  ScrollView: {

    width: '100%',

  },

  contentButton: {
    alignItems: 'center',
    marginVertical: 10,
    width: '100%'
  },

})
