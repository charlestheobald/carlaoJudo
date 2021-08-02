import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,

    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',

    width: '80%',
    height: 560,
    backgroundColor: theme.colors.primary20,
    borderRadius: 20

  },
  textFaixa: {
    marginTop: -5,
    fontSize: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50
  },
  contentColumn: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    marginTop: 10
  },
  containerTextHeader: {
    flex: 1,
    marginLeft: '20%'
  },
  textHeader: {
    fontFamily: theme.fonts.titleLale400,
    color: theme.colors.secondary20,
    fontSize: 16,
  },
  containerCloseButton: {
    marginRight: '6%'
  },


  filterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },


  textSub: {
    fontSize: 18,
    fontFamily: theme.fonts.titleLale400
  },


});