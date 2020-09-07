import React from 'react'
import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native'
import { globalStyles } from '../styles/global'
import { Field, reduxForm } from 'redux-form'
import FlatButton from '../shared/button'

const ReviewForm = ({ addReview, handleSubmit }) => {
  const onSubmit = (values) => {
    console.log({ values })
    addReview(values)
  }

  return (
    <View></View>
    // <KeyboardAvoidingView>
    //   <View>
    //     <View>
    //       <Field
    //         name="title"
    //         component="input"
    //         placeholder="ReView Title (e.g. movie / series)"
    //         type="text"
    //       />
    //     </View>
    //     <View>
    //       <Field
    //         name="body"
    //         component="input"
    //         placeholder="Description"
    //         type="text"
    //       />
    //     </View>
    //     <View>
    //       <Field
    //         name="rating"
    //         component="input"
    //         placeholder="Rating (1-5)"
    //         type="text"
    //       />
    //     </View>
    //     <View>
    //       <FlatButton onPress={handleSubmit(onSubmit)} />
    //     </View>
    //   </View>
    // </KeyboardAvoidingView>
  )
}

export default reduxForm({
  form: 'reviewFrorm',
})(ReviewForm)
