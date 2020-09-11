import React from 'react'
import { View, Text } from 'react-native'

import { globalStyles } from '../styles/global'

function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>
        ReViews is an App that shows you and lets you add / update the reviews
        and ratings of your shows, movies, and novels rated by enthusiastic
        people like you. so keep rating your favourites and enjoy...
      </Text>
    </View>
  )
}

export default About
