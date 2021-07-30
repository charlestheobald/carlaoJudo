import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.primary20,
    height: 60,
    width: '90%',
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 25 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
    marginVertical: 5,
  },
  numberContainer: {
    paddingLeft: 27
  },
  nameContainer: {
    flex: 1,
    marginLeft: 32

  },
  pointsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingRight: 10
  },
  rank: {
    fontSize: 20
  }


})