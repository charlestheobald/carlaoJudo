import { theme } from '../../../global/theme'
import { StyleSheet, StatusBar } from 'react-native'


export const styles = StyleSheet.create({

  container: {
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 0,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerTitle: {
    marginTop: 50
  },

  containerBar: {
    flexDirection: 'row',
    marginTop: '20%',
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.colors.primary30,
    borderRadius: 20,
    height: 200,
  },

  containerTexts: {
    marginHorizontal: '5%',
    fontFamily: theme.fonts.titleLale400,
  },

  containerValues: {
    marginLeft: '5%',
  },
  values: {
    fontFamily: theme.fonts.titleLale400
  },
  type: {
    fontFamily: theme.fonts.titleLale400
  },

  title: {
    fontFamily: theme.fonts.titleLale400,
    fontSize: 20,
  },

  subTitle: {
    fontFamily: theme.fonts.titleLale400,
    fontSize: 18,
    alignSelf: 'center'
  },

  bar: {
    marginLeft: 3,
    height: "69%",
    width: 140,
    marginRight: '5%'
  },

})