import React from 'react'
import { StyleSheet, StatusBar } from "react-native";
import { theme } from '../../global/theme'

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

  back: {

    marginLeft: '5%',
    alignSelf: 'center'
  },

  image: {
    alignItems: 'center',
    marginLeft: '21.5%',

    width: 133,
    height: 53,
  },

  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

  },

  containerText: {

    backgroundColor: theme.colors.primary20,
    width: '70%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15
  },

  contentButton: {
    alignItems: 'center',
    marginVertical: 10,
    width: '100%'
  },

  text: {
    fontFamily: theme.fonts.text500,
    fontSize: 20,
    textAlign: 'center'
  },

  textButton: {
    fontFamily: theme.fonts.text500,
    fontSize: 16,
  },
  textInput: {
    alignSelf: 'flex-start',
    marginLeft: '8%',
    marginBottom: 5,
  },

  input: {
    backgroundColor: theme.colors.primary20,

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

})
