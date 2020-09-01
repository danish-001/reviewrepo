import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../screens/home'
import ReviewDetail from '../screens/reviewDetails'
import Header from '../shared/header'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="ReViews" />,
      }
    },
  },
  ReviewDetail: {
    screen: ReviewDetail,
    navigationOptions: {
      title: 'ReView Details',
    },
  },
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { height: 80 },
  },
})

export default HomeStack
