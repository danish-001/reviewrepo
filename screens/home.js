import React, { useState } from 'react'
import { TouchableOpacity, FlatList, View, Text } from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../shared/card'

function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: 'Inception',
      rating: 5,
      body: 'A movie that will blow your mind and leave you speechless',
      key: '1',
    },
    {
      title: 'Avengers : Endgame',
      rating: 5,
      body: 'A movie filled with emotions and a true sci-fi journey',
      key: '2',
    },
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum dfgdfs gdfg gdfg fgsdfsg rfgdg',
      key: '3',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum eryrt',
      key: '4',
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum fgdsfg gdfsg rgdfg',
      key: '5',
    },
  ])

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetail', item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Home
