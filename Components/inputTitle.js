import React from 'react'
import { View, TextInput, Text } from 'react-native'
import { globalStyles } from '../styles/global'

const InputTitle = (props) => {
  const { input, meta } = props

  return (
    <View>
      <TextInput
        style={globalStyles.input}
        placeholder="ReView Title (e.g. movie / series)"
        onChangeText={input.onChange}
        value={input.value}
      />
      {meta.error && meta.submitFailed && (
        <Text style={globalStyles.errorText}>{meta.error}</Text>
      )}
    </View>
  )
}

export default InputTitle
