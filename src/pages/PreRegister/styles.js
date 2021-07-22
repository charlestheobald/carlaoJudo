
import { theme } from '../../global/theme'
import { StyleSheet, StatusBar, } from 'react-native'


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
    marginBottom: 15,
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

})