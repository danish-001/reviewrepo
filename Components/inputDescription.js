import React from 'react'
import { View, TextInput, Text } from 'react-native'
import { globalStyles } from '../styles/global'

function InputDescription(props) {
  const { input, meta, placeholder } = props

  return (
    <View>
      <TextInput
        multiline
        style={globalStyles.input}
        placeholder={placeholder}
        onChangeText={input.onChange}
        value={input.value}
        height={140}
      />

      {meta.error && meta.submitFailed && (
        <Text style={globalStyles.errorText}>{meta.error}</Text>
      )}
    </View>
  )
}

export default InputDescription
