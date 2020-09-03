import React, { useState } from 'react'
import { TextInput, Button, View, Text } from 'react-native'
import { globalStyles } from '../../../styles/global'

export class InputField extends Component {
  render() {
    // const { handleChange, values, handleBlur, touched, errors } = this.props

    return (
      <View>
        {/* <TextInput
          multiline
          minHeight={100}
          style={globalStyles.input}
          placeholder="Description"
          onChangeText={handleChange('body')}
          value={values.body}
          onBlur={handleBlur('body')}
        />
        <Text style={globalStyles.errorText}>
          {touched.body && errors.body}
        </Text> */}
      </View>
    )
  }
}
