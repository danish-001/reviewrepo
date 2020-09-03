import React, { Component } from './node_modules/react'
import { Text, View } from 'react-native'

export class Prfile extends Component {
  render() {
    return (
      <View>
        <Text> {profile.name} </Text>
        <Text> {profile.city} </Text>
        <Text> {profile.email} </Text>
      </View>
    )
  }
}
