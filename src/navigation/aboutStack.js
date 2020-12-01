import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import About from '../features/about'
import Header from '../components/header'

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="About" />,
      }
    },
  },
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { height: 80 },
  },
})

export default AboutStack