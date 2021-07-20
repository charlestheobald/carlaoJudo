import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export const ActionButton = ({
  color,
  title,
  textColor,
  handleAction,
}) => {

  return (
    <TouchableOpacity
      onPress={handleAction}
      style={[
        styles.container,
        {
          backgroundColor: color,

        },
      ]}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};