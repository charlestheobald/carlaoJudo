import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: 'center',
    width: '80%',
    height: 620,
    backgroundColor: theme.colors.primary20,
    borderRadius: 20
  },

  content: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
  },
  textHeader: {
    fontFamily: theme.fonts.titleLale400,
    color: theme.colors.secondary20,
    fontSize: 16,
  },
  containerCloseButton: {
    marginRight: '6%'
  },

  input: {
    flex: 1,
    backgroundColor: 'white',
    height: 50,
    width: 280,
    borderRadius: 8,
    marginBottom: 25,

  },

  inputDescription: {
    flex: 1,
    backgroundColor: 'white',
    height: 100,
    width: 280,
    borderRadius: 8,
    marginBottom: 25,
  },

  inputText: {
    fontSize: 18,
    fontFamily: theme.fonts.titleLale400
  },
  buttonSave: {
    backgroundColor: 'red',
    borderRadius: 8,
    width: 250,
    height: 50,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textButton: {
    color: 'white',
    fontSize: 16,
  }
});


