import React, { useEffect } from 'react'
import { ScrollView, View, KeyboardAvoidingView } from 'react-native'
import { globalStyles } from '../styles/global'
import { Field, reduxForm, change } from 'redux-form'
import FlatButton from '../shared/button'

import InputField from '../Components/InputField'
import { validate } from '../validation/validation'

const ReviewComponent = ({
  addReview,
  handleSubmit,
  buttonTitle = 'SUBMIT',
  editReview,
  dispatch,
  defaultValues,
}) => {
  useEffect(() => {
    if (defaultValues) {
      dispatch(change('reviewForm', 'key', defaultValues.key))
      dispatch(change('reviewForm', 'title', defaultValues.title))
      dispatch(change('reviewForm', 'body', defaultValues.body))
      dispatch(change('reviewForm', 'rating', defaultValues.rating.toString()))
      dispatch(change('reviewForm', 'author', defaultValues.author))
      return () => {}
    }
  }, [])

  const onSubmit = (values) => {
    if (addReview) {
      addReview(values)
    } else if (editReview) {
      editReview(values)
    }
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
            <Field
              name="author"
              component={InputField}
              placeholder="Enter Your Name"
            />
          </View>
          <View>
            <FlatButton text={buttonTitle} onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default reduxForm({
  form: 'reviewForm',
  validate,
})(ReviewComponent)
