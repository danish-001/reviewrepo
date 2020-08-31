import { StyleSheet } from 'react-native'
import { fonts } from '../Constants'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  titleText: {
    fontFamily: fonts.NunitoRegular,
    fontSize: 26,
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
})
