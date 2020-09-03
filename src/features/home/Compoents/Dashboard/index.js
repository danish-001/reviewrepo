import React, { useState } from 'react'
import {
  TouchableOpacity,
  FlatList,
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import Card from '../shared/card'
import { globalStyles } from '../styles/global'
import ReviewForm from './reviewForm'

function Home({ navigation }) {
  const [modelOpen, setModelOpen] = useState(false)

  const [reviews, setReviews] = useState([
    {
      title: 'Batman : The Dark Knight',
      rating: 5,
      body:
        'A masterpiece by Christopher Nolan that exceeds every aspect of the cinemetography, Acting and Direction',
      key: '1',
    },
    {
      title: 'Inception',
      rating: 5,
      body: 'A movie that will blow your mind and leave you speechless',
      key: '2',
    },
    {
      title: 'Avengers : Endgame',
      rating: 5,
      body: 'A movie filled with emotions and a true sci-fi journey',
      key: '3',
    },
    {
      title: '3 Idiots',
      rating: 5,
      body:
        'A Raj Kumar Hirani movie on Engineering students life that shows what an Engineer student goes through',
      key: '4',
    },
    {
      title: 'PK',
      rating: 5,
      body:
        'A Raj Kumar Hirani movie that point outs the pros and cons of a religion',
      key: '5',
    },
    {
      title: 'Captain America : The Winter Soldier',
      rating: 4,
      body:
        'A well made movie from Marvel that shows amazing one to one combats in an excellent way',
      key: '6',
    },
    {
      title: 'Race 3',
      rating: 1,
      body: 'A movie that detroyed a movie series that was doing much better',
      key: '7',
    },
    {
      title: 'Total Dhamaal',
      rating: 2,
      body:
        'Successfully ruined a classic comedy movie series(both Double Dhamaal and this one)',
      key: '8',
    },
    {
      title: 'Interstellar',
      rating: 5,
      body:
        'Another masterpiece by Christopher Nolan leave you totally speechless',
      key: '9',
    },
    {
      title: 'Black Panther',
      rating: 4,
      body:
        'An amazing Marvel movie showing you the some of traditions of the african tribes and a perfect CGI journey',
      key: '10',
    },
    {
      title: 'Undisputed 2',
      rating: 4,
      body:
        'A movie with unbelievable action scenes and packs almost every main-stream martial arts',
      key: '11',
    },
  ])

  const addReview = (review) => {
    review.key = Math.random().toString()
    setReviews((currentReview) => {
      return [review, ...currentReview]
    })
    setModelOpen(false)
  }

  return (
    <View style={globalStyles.container}>
      <Modal visible={modelOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={44}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModelOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

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

      <MaterialIcons
        name="add"
        size={44}
        style={styles.modalToggle}
        onPress={() => setModelOpen(true)}
      />
    </View>
  )
}

export default Home
