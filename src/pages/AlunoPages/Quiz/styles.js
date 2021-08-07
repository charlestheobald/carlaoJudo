import React from 'react'
import { StyleSheet, StatusBar } from "react-native";
import { theme } from '../../../global/theme'

export const styles = StyleSheet.create({

  Container: {
    alignItems: 'center',
    marginTop: '50%',
    justifyContent: 'center',
    backgroundColor: '#fc1e29',
    marginHorizontal: '5%',
    borderRadius: 15,
    height: '55%',
  },

  App: {
    width: '100%',
    paddingVertical: '8%',
    justifyContent: 'space-evenly',
  },

  ScoreSection: {
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  QuestionSection: {
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },

  QuestionCount: {
    marginBottom: 20,
    alignItems: 'center',
  },

  CountText: {
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  QuestionText: {
    alignItems: 'center',
    margin: '2%',
    marginHorizontal: '5%',
    fontSize: 18,
    fontWeight: 'bold',
  },

  ResultText: {
    marginTop: '3%',
    marginHorizontal: '5%',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  AnswerSection: {
    width: '85%',
    marginHorizontal: '5%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  Button: {
    width: '100%',
    backgroundColor: '#eae5e5',
    borderRadius: 5,
    margin: '2%',
    padding: '5%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  OptionText: {
    fontSize: 18,
  },

})