import { theme } from '../../global/theme'
import { StyleSheet, StatusBar } from 'react-native'


export const styles = StyleSheet.create({

  container: {
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  containerBar: {
    width: '100%',
    paddingTop: '30%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    //flex: 1,
  },

  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    marginBottom: '15%',
  },

  bar: {
    height: '50%',
    marginEnd: '5%',
    marginStart: '41%',
    //marginTop: '-70%',
    //flex: 1,
    backgroundColor: 'blue',
  },

  values: {
    marginStart: '70%',
    marginTop: '-1.7%',
    //backgroundColor: '#0ff',
    width: '10%',
    //zIndex: 1,
    marginBottom: '3.8%',
    marginEnd: '5%',
    marginStart: '42%',
  },

  type: {
    marginBottom: '2%',
    marginEnd: '60%',
    marginStart: '5%',
    //backgroundColor: 'green',
  },

  containerValues: {
    marginTop: '-54%',
    justifyContent: 'space-between',
  },

  containerText: {
    justifyContent: 'space-between',
  },
  // containerGrafico: {
  //   justifyContent: 'center',
  //   zIndex: 1,
  //   width: '50%',
  // }

})