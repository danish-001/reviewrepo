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
import reviewsReducer from '../Components/reducer/reviewsReducer'

import { connect } from 'react-redux'
import { addReviews } from '../Components/actions'

function Home({ navigation, reviews, addReviews }) {
  const [modelOpen, setModelOpen] = useState(false)

  const addReview = (review) => {
    review.key = Math.random().toString()
    addReviews({ review })
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

const mapStateToProps = (state) => {
  return {
    reviews: state.reviewsReducer.reviews,
  }
}

const mapDispatchToProps = {
  addReviews,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
