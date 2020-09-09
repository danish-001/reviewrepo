import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../screens/home'
import ReviewDetail from '../screens/reviewDetails'
import Header from '../shared/header'
import { View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const ReviewHeader = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ flex: 'space-between' }}>ReView Details</Text>
      <MaterialIcons name="edit" size={24} />
    </View>
  )
}

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
      // title: 'ReView Details',
      headerTitle: () => <ReviewHeader />,
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
