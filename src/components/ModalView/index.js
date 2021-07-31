import React, { ReactNode } from "react";
import { Text, View, Modal, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


import { styles } from "./styles";



export function ModalView({ isVisible, filterParam, handleClose }) {

  const handleFilterParam = (menorQue, maiorQue) => {
    filterParam(menorQue, maiorQue)
  }


  return (
    <Modal animationType="slide" visible={isVisible} transparent={true} >
      <View style={styles.overlay}>

        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.containerTextHeader}>
              <Text style={styles.textHeader}>Selecione o tipo do Ranking</Text>
            </View>
            <View style={styles.containerCloseButton}>
              <TouchableOpacity
                onPress={handleClose}
              >
                <FontAwesome name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.content}>

            <TouchableOpacity style={styles.filterButton}
              onPress={() => handleFilterParam(200, 0)}
            >
              <Text style={styles.textSub}>GERAL</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filterButton}
              onPress={() => handleFilterParam(5, 0)}>
              <Text style={styles.textSub}>SUB-5</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filterButton}
              onPress={() => handleFilterParam(7, 5)}>
              <Text style={styles.textSub}>SUB-7</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filterButton}
              onPress={() => handleFilterParam(9, 7)}>
              <Text style={styles.textSub}>SUB-9</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filterButton}
              onPress={() => handleFilterParam(11, 9)}>
              <Text style={styles.textSub}>SUB-11</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filterButton}
              onPress={() => handleFilterParam(13, 11)} >
              <Text style={styles.textSub}>SUB-13</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filterButton}
              onPress={() => handleFilterParam(15, 13)}>
              <Text style={styles.textSub}>SUB-15</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filterButton}
              onPress={() => handleFilterParam(18, 15)}>
              <Text style={styles.textSub}>SUB-18</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filterButton}
              onPress={() => handleFilterParam(21, 18)}>
              <Text style={styles.textSub}>SUB-21</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filterButton}
              onPress={() => handleFilterParam(200, 21)}>
              <Text style={styles.textSub}>SÊNIOR</Text>
            </TouchableOpacity>

          </View>
        </View>

      </View>
    </Modal >
  );
}
