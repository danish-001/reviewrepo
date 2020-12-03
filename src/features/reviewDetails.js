import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  ScrollView,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { globalStyles, images } from './global'
import Card from '../components/card'
import ReviewForm from './reviewForm'
import { connect } from 'react-redux'
import { editReviews } from '../reducer/index'

const ReviewDetails = ({ navigation, editReviews }) => {
  const [modelOpen, setModelOpen] = useState(false)
  // const fadeIn = useState(new Animated.value(0))[0]

  const rating = navigation.getParam('rating')

  const openEditModal = (values) => {
    setModelOpen(true)
  }

  const editReview = (review) => {
    editReviews({ review })
    navigation.setParams(review)
    setModelOpen(false)
  }

  const values = {
    title: navigation.getParam('title'),
    body: navigation.getParam('body'),
    rating: navigation.getParam('rating'),
    key: navigation.getParam('key'),
    author: navigation.getParam('author'),
  }

  // const fadeInEffect = () => {
  //   Animated.timing(fadeIn, {
  //     toValue: 1,
  //     duration: 1500,
  //     useNativeDriver: true,
  //   }).start()
  // }

  return (
    <ScrollView>
      <Animated.View
        style={
          {
            // opacity: fadeIn
          }
        }
      >
        <View style={globalStyles.container}>
          <Card>
            <View style={globalStyles.editButtonView}>
              <Text style={[globalStyles.titleText, globalStyles.title]}>
                {navigation.getParam('title')}
              </Text>
              <MaterialIcons
                name="edit"
                size={32}
                onPress={() => openEditModal()}
              />
            </View>
            <Text style={globalStyles.titleText}>
              {navigation.getParam('body')}
            </Text>
            <View>
              <Text style={globalStyles.authorName}>
                - {navigation.getParam('author')}
              </Text>
            </View>
            <View style={styles.rating}>
              <Text style={globalStyles.titleText}>Rating :-</Text>
              <Image source={images.ratings[rating]} />
            </View>
          </Card>

          <View style={globalStyles.container}>
            <Modal
              visible={modelOpen}
              animationType="slide"
              statusBarTranslucent={true}
            >
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                  <MaterialIcons
                    name="close"
                    size={44}
                    style={{ ...styles.modalToggle, ...styles.modalClose }}
                    onPress={() => setModelOpen(false)}
                  />
                  <ReviewForm
                    buttonTitle="UPDATE"
                    editReview={editReview}
                    defaultValues={values}
                  />
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </View>
        </View>
      </Animated.View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
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
})

const mapStateToProps = (state) => {
  return {
    reviews: state.reviewsReducer.reviews,
  }
}

const mapDispatchToProps = {
  editReviews,
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewDetails)
