import { theme } from '../../global/theme'
import { StyleSheet, StatusBar } from 'react-native'


export const styles = StyleSheet.create({

  container: {
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center'
  },

  // content: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },

  containerPagamento: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  containerBar: {
    marginTop: '60%',
  },

  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    marginBottom: '15%',
  },

  bar: {
    height: '74%',
    width: '50%',
    marginStart: '40%',
  },

  typePayment: {
    color: '#000',
    fontSize: 10,
    marginTop: '20%',
    marginStart: '-70%',
  },

  values: {
    marginStart: '70%',
    marginTop: '-18%',
  },

  type: {
    marginTop: '10%',
    marginBottom: '9%',
  },

})