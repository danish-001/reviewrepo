import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Home from '../screens/home'
import ReviewDetail from '../screens/reviewDetails'

const screens = {
  Home: {
    screen: Home,
  },
  ReviewDetail: {
    screen: ReviewDetail,
  },
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)
