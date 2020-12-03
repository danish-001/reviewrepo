import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../features/home'
import ReviewDetail from '../features/reviewDetails'
import Header from '../components/header'

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
    headerStyle: { height: 100 },
  },
})

export default HomeStack
