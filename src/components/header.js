import React from 'react'

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer()
  }

  return (
    <ImageBackground
      source={require('../../assets/game_bg.png')}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        size={22}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.logoView}>
        <Image
          source={require('../../assets/logo.jpeg')}
          style={styles.logoImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
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
  logoImage: {
    width: 26,
    height: 26,
    marginRight: 10,
  },
  logoView: {
    flexDirection: 'row',
  },
})
