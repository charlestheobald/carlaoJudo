import { StyleSheet, StatusBar } from 'react-native'
import { theme } from '../../global/theme';
export const styles = StyleSheet.create({

  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,

    alignItems: "center",
    justifyContent: "center",
  },


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

  },

  ModalView: {
    flexDirection: 'column',
    alignItems: 'center',

    width: '80%',
    height: 560,
    backgroundColor: theme.colors.primary20,
    borderRadius: 20
  },


  FieldsModal: {
    marginBottom: 15,
    paddingTop: 15,
    textAlign: 'center',
    color: '#1C2247',
    fontSize: 12,
    fontWeight: 'bold',
  },

  buttonModal: {
    borderRadius: 8,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    backgroundColor: theme.colors.secondary20,
  },

  textModal: {
    fontSize: 16,
    marginBottom: 15,
  }
});