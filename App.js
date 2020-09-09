import React, { useState } from 'react'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { Provider } from 'react-redux'
import store from './screens/store/store'
import Navigator from './routes/drawer'
import { View, Text } from 'react-native'

console.disableYellowBox = true

const getfonts = async () => {
  return await Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  } else {
    return (
      <AppLoading startAsync={getfonts} onFinish={() => setFontsLoaded(true)} />
    )
  }
}
