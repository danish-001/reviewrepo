import { StyleSheet } from 'react-native'
import { fonts } from '../constants'

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
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 2,
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 38,
    flex: 9,
  },
  editButtonView: {
    flexDirection: 'row',
  },
  editButton: {
    flex: 1,
  },
  authorName: {
    paddingTop: 4,
    color: 'gray',
    fontSize: 22,
    textAlign: 'right',
  },
})

export const RATE = require('../../assets/2-star.png')

export const images = {
  ratings: {
    1: require('../../assets/1-star.png'),
    2: require('../../assets/2-star.png'),
    3: require('../../assets/3-star.png'),
    4: require('../../assets/4-star.png'),
    5: require('../../assets/5-star.png'),
  },
}
