import { theme } from '../../global/theme'
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

  },

  containerHeader: {

    width: '100%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '0%',

  },

  back: {

    marginLeft: '5%',
    alignSelf: 'center'
  },

  image: {
    alignItems: 'center',
    marginLeft: '19%',

    width: 133,
    height: 53,
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
    marginBottom: 15,
  },

  TextPhoto: {
    justifyContent: 'center',
    color: theme.colors.primary10
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

  buttonSave: {
    marginTop: 15,
    marginBottom: 30
  }
})
