import { theme } from '../../global/theme'
import { StyleSheet, StatusBar } from 'react-native'


export const styles = StyleSheet.create({

  scrollContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 0
  },

  background: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary10,
  },

  logo: {

    flex: 1,
    justifyContent: 'center',
    width: '20%',
    marginBottom: 20


  },

  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    //marginTop: 30
  },

  input: {
    backgroundColor: theme.colors.primary20,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 25 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 8,

    width: '90%',
    fontSize: 16,
    fontFamily: theme.fonts.text400,
    borderRadius: 8,
    marginBottom: 15,
    padding: 10

  },
  buttonLogin: {
    backgroundColor: theme.colors.secondary20,
    width: '90%',
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textLogin: {
    color: theme.colors.primary10,
    fontFamily: theme.fonts.text400,
    fontSize: 16,
  },

  buttonPassword: {
    marginTop: 10,
  },

  textPassword: {
    fontSize: 16,
    color: theme.colors.primary30,
    fontFamily: theme.fonts.text500,

  },

  containerRegister: {
    flexDirection: 'row',
    paddingTop: 10,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',

    flex: 1,

  },
  text1Register: {
    fontSize: 16,
    color: '#000',
    fontFamily: theme.fonts.text300,
  },

  text2Register: {
    fontSize: 16,
    color: theme.colors.secondary20,
    fontFamily: theme.fonts.text400,
  }



})