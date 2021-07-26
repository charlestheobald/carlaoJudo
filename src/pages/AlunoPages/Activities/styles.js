import React from 'react'
import { StyleSheet, StatusBar } from "react-native";
import { theme } from '../../../global/theme'

export const styles = StyleSheet.create({

  background: {
    flex: 1,
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary10,

  },

  containerHeader: {

    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',

  },

  config: {
    marginLeft: '50%',
    alignSelf: 'center'
  },

  image: {
    alignItems: 'center',
    marginLeft: '5%',
    width: 133,
    height: 53,
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
