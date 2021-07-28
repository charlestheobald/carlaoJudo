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

  },

  ModalView: {
    margin: 20,
    marginTop: 70,
    width: '100%',
    marginLeft: 3,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  FieldsModal: {
    marginBottom: 15,
    paddingTop: 15,
    textAlign: 'center',
    color: '#1C2247',
    fontSize: 12,
    fontWeight: 'bold',
  }


});