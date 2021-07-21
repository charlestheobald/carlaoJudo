import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export const StandardButton = ({
  label,
  textColor,
  bgColor,
  font,
  onPress
}) => {

  return (

    <TouchableOpacity
      onpress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
        },
      ]}
    >
      <Text style={{ color: textColor, fontFamily: font }}>{label}</Text>
    </TouchableOpacity>
  )
}

