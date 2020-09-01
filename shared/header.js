import React from 'react'

import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer()
  }
  console.log(title)
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={22}
        onPress={openMenu}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('window').width,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
})
