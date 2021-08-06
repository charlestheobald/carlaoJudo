import { theme } from '../../global/theme'
import { StyleSheet, StatusBar } from 'react-native'


export const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerPagamento: {
    alignItems: 'center',
    justifyContent: 'center'
  }



})