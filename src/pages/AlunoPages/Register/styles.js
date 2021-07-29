import { theme } from '../../../global/theme'
import { StyleSheet, StatusBar } from 'react-native'


export const styles = StyleSheet.create({

  scrollContainer: {
    flex: 1,
    width: '100%',

  },

  background: {
    flex: 1,
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary10,
    width: '100%'
  },

  containerHeader: {

    width: '100%',
    height: 70,
    flexDirection: 'row',
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
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },

  photo: {
    backgroundColor: theme.colors.secondary20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 10,
  },

  TextPhoto: {
    fontFamily: theme.fonts.text400,
    justifyContent: 'center',
    color: theme.colors.primary10
  },
  textAlert: {
    alignSelf: 'flex-start',
    marginLeft: '8%',
    marginBottom: 5,
    fontSize: 12,
    marginTop: 20,
    marginBottom: 20,
    fontFamily: theme.fonts.text400,
    color: theme.colors.secondary30
  },

  textInput: {
    fontFamily: theme.fonts.text400,
    alignSelf: 'flex-start',
    marginLeft: '8%',
    marginBottom: 5,
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

  buttonSave: {
    marginTop: 15,
    marginBottom: 30
  }
})
