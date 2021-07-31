
import React, { useState } from 'react';
import {
  View,
  Text,

} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { styles } from './styles'
import { theme } from '../../global/theme';

export const RankedStudent = ({ rank, name, points }) => {

  return (


    <View style={styles.container}>
      <View style={styles.numberContainer}>
        <Text style={[{ color: rank === 1 ? theme.colors.secondary20 : theme.colors.text }, styles.number]}>
          {rank}
        </Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name ? name : 'Nome não informado'}</Text>
      </View>
      <View style={styles.pointsContainer}>

        <Text >{points ? points : '0'}</Text>
        <Text>pts</Text>
      </View>

    </View >

  )
}


