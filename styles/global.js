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
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    margin: 10,
    fontSize: 18,
  },
})

export const RATE = require('../assets/2-star.png')

export const images = {
  ratings: {
    1: require('../assets/1-star.png'),
    2: require('../assets/2-star.png'),
    3: require('../assets/3-star.png'),
    4: require('../assets/4-star.png'),
    5: require('../assets/5-star.png'),
  },
}
