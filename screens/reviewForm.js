import React from 'react'
import { ScrollView, View, KeyboardAvoidingView } from 'react-native'
import { globalStyles } from '../styles/global'
import { Field, reduxForm } from 'redux-form'
import FlatButton from '../shared/button'

import InputField from '../Components/InputField'
import { validate } from '../validation/validation'

const ReviewForm = ({ addReview, handleSubmit }) => {
  const onSubmit = (values) => {
    addReview(values)
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <KeyboardAvoidingView>
        <View style={globalStyles.container}>
          <View>
            <Field
              name="title"
              component={InputField}
              placeholder="ReView Title (e.g. movie / series)"
            />
          </View>
          <View>
            <Field
              multiline
              name="body"
              component={InputField}
              placeholder="Description"
              height={140}
            />
          </View>
          <View>
            <Field
              name="rating"
              component={InputField}
              placeholder="Rating (1-5)"
              keyboardType="numeric"
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
