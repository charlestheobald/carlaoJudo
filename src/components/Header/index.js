
import React, { useRef } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';


export const Header = () => {

  return (



    <View style={styles.container}>
      <View >
        <Image style={styles.logo} source={require('../../assets/Image/logo2.png')} />
      </View>

      <View style={styles.rightSide}>

        <TouchableOpacity style={styles.button}>
          <View style={styles.avatar}></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <AntDesign name="setting" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>



  )
}

