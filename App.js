import React, { useState } from 'react'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import Home from './screens/home'
import Navigator from './routes/homeStack'
import { View, Text } from 'react-native'

const getfonts = async () => {
  return await Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  console.log(fontsLoaded)

  // return (
  //   <View>
  //     <Text>122</Text>
  //   </View>
  // )

  if (fontsLoaded) {
    return <Navigator />
  } else {
    return (
      <AppLoading startAsync={getfonts} onFinish={() => setFontsLoaded(true)} />
    )
  }
}
