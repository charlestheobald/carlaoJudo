import { StyleSheet, StatusBar } from 'react-native'
import { theme } from '../../global/theme';
export const styles = StyleSheet.create({

  container: {
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 14,
    paddingRight: 14,
    width: '100%',
    backgroundColor: theme.colors.primary10
  },

  avatar: {
    backgroundColor: theme.colors.secondary20,

    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.colors.secondary20

  },

  logo: {
    marginLeft: 15,
    alignItems: 'center',

  },

  rightSide: {
    flexDirection: "row",
    alignItems: 'center',
  },

  button: {

    marginLeft: 30,

  }

});