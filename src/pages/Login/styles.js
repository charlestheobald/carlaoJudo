import { theme } from '../../global/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary10,
  },

  logo: {
    paddingTop: 50,
    flex: 1,
    justifyContent: 'center',

  },

  container: {
    paddingTop: 30,
    backgroundColor: theme.colors.primary30,
    width: 285,
    height: 242,
    borderRadius: 20,
    // flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',

  },

  InputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

  },

  input: {
    backgroundColor: theme.colors.primary10,
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
  buttonContainer: {
    marginTop: 15
  },

  containerPassword: {
    marginTop: 35,
    marginBottom: 10
  },

  textPassword: {
    fontSize: 16,
    color: theme.colors.primary30,
    fontFamily: theme.fonts.text500,

  },

  containerRegister: {
    flexDirection: 'row',
    marginTop: 15,
    paddingBottom: 30,
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