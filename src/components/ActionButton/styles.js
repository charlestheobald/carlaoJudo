import { StyleSheet } from "react-native";
import { theme } from '../../global/theme';



export const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 25 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 8,
    width: 140,
    height: 39,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    // marginHorizontal: 10,
  },
  text: {
    fontFamily: theme.fonts.text400,
    fontSize: 16
  },
});