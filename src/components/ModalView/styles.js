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
    justifyContent: 'center',
    width: '75%',
    height: 460,
    backgroundColor: theme.colors.primary20,
    borderRadius: 20

  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  header: {
    flexDirection: 'row',
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
    marginVertical: 5
  },


  textSub: {
    fontSize: 20,
    fontFamily: theme.fonts.titleLale400
  },


});