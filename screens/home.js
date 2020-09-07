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
import { ICONS } from '../Constants/icons'
import { ROUTES } from '../src/navigation/routes'
import { Provider } from 'redux'
import { dummyReviews } from '../Constants/dummyReviews'
import store from '../screens/store/store'

function Home({ navigation }) {
  const [modelOpen, setModelOpen] = useState(false)

  const [reviews, setReviews] = useState(dummyReviews)

  const addReview = (review) => {
    review.key = Math.random().toString()
    setReviews((currentReview) => {
      return [review, ...currentReview]
    })
    setModelOpen(false)
  }

  return (
    <Provider store={store}>
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
              onPress={() => navigation.navigate(ROUTES.REVIEW_DETAIL, item)}
            >
              <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />

        <MaterialIcons
          name={ICONS.ADD}
          size={44}
          style={styles.modalToggle}
          onPress={() => setModelOpen(true)}
        />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  modalToggle: {
    marginTop: 2,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 50,
    justifyContent: 'center',
  },
  modalContent: {
    flex: 1,
  },
})

export default Home
