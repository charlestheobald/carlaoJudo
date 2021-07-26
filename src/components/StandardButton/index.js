import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'
import { theme } from '../../global/theme'
export const StandardButton = ({
  label,
  textColor,
  bgColor,
  font,
  onPress,
  widthProp,
  
}) => {

  return (

    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
          width: widthProp ? widthProp : 130
        },
      ]}
    >
      <Text style={{ color: textColor, fontFamily: theme.fonts.text400, fontSize: 18 }}>{label}</Text>
    </TouchableOpacity>
  )
}

