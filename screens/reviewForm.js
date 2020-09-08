import React from 'react'
import { ScrollView, View, KeyboardAvoidingView } from 'react-native'
import { globalStyles } from '../styles/global'
import { Field, reduxForm } from 'redux-form'
import FlatButton from '../shared/button'

import InputTitle from '../Components/InputTitle'
import InputDescription from '../Components/InputDescription'
import InputRating from '../Components/InputRating'
import { validate } from '../validation/validation'

const ReviewForm = ({ addReview, handleSubmit }) => {
  const onSubmit = (values) => {
    addReview(values)
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <KeyboardAvoidingView>
        <View style={globalStyles.container}>
          <Field
            name="title"
            component={InputTitle}
            placeholder="ReView Title (e.g. movie / series)"
          />
          <View>
            <Field
              name="body"
              component={InputDescription}
              placeholder="Description"
            />
            <Field
              name="rating"
              component={InputRating}
              placeholder="Rating (1-5)"
            />
          </View>
          <View>
            <FlatButton text="submit" onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default reduxForm({
  form: 'reviewForm',
  validate,
})(ReviewForm)
