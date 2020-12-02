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
  Alert,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import Card from '../components/card'
import { globalStyles } from './global'
import ReviewForm from './reviewForm'

import { connect } from 'react-redux'
import { addReviews, deleteReviews } from '../reducer/index'

function Home({ navigation, reviews, addReviews, deleteReviews }) {
  const [modelOpen, setModelOpen] = useState(false)

  const addReview = (review) => {
    review.key = Math.random().toString()
    addReviews({ review })
    setModelOpen(false)
  }

  const deleteReview = (key) => {
    Alert.alert('Delete !!!', 'Do you want to delete this review ?', [
      {
        text: 'Yes',
        onPress: () => {
          deleteReviews({ key })
        },
        style: 'destructive',
      },
      {
        text: 'No',
        onPress: () => {
          console.log('No Pressed')
        },
        style: 'cancel',
      },
    ])
  }

  return (
    <View style={globalStyles.container}>
      <Modal visible={modelOpen} animationType="slide" statusBarTranslucent={true}>
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
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetail', item)}
            onLongPress={() => deleteReview(item.key)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
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
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 50,
    justifyContent: 'center',
    padding: 10
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
  deleteReviews,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
