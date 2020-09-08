import React from 'react'
import { View, TextInput, Text } from 'react-native'
import { globalStyles } from '../styles/global'

function InputRating(props) {
  const { input, meta } = props
  return (
    <View>
      <TextInput
        style={globalStyles.input}
        placeholder="Rating (1-5)"
        onChangeText={input.onChange}
        value={input.value}
        keyboardType="numeric"
      />
      {meta.error && meta.submitFailed && (
        <Text style={globalStyles.errorText}>{meta.error}</Text>
      )}
    </View>
  )
}

export default InputRating
