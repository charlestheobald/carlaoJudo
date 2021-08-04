import React, { ReactNode } from "react";
import { Text, View, Modal, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


import { styles } from "./styles";



export function ModalView({ isVisible, filterParam, handleClose }) {

  const handleFilterParam = (menorQue, maiorQue) => {
    filterParam(menorQue, maiorQue)
  }
  // SUB_5, 
  // SUB_7, 
  // SUB_9, 
  // SUB_11, 
  // SUB_13, 
  // SUB_15, 
  // SUB_18, 
  // SUB_21,
  // SENIOR_BRANCA_AMARELA,
  // SENIOR_LARANJA_VERDE,
  // SENIOR_BRANCA_VERDE, 
  // SENIOR_ROXA_PRETA,
  // VETERANO_1,
  // VETERANO_2,
  // VETERANO_3,
  // VETERANO_4,
  // VETERANO_5,
  // VETERANO_6,
  // VETERANO_7,
  // VETERANO_8,
  // VETERANO_9,
  // VETERANO_10,
  // VETERANO_11;


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
          <ScrollView style={{ marginBottom: '10%' }}>

            <View style={styles.content}>
              <View style={styles.contentColumn}>
                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('GERAL')}
                >
                  <Text style={styles.textSub}>GERAL</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('SUB_5')}>
                  <Text style={styles.textSub}>SUB-5</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('SUB_7')}>
                  <Text style={styles.textSub}>SUB-7</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('SUB_9')}>
                  <Text style={styles.textSub}>SUB-9</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('SUB_11')}>
                  <Text style={styles.textSub}>SUB-11</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('SUB_13')} >
                  <Text style={styles.textSub}>SUB-13</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('SUB_15')}>
                  <Text style={styles.textSub}>SUB-15</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('SUB_18')}>
                  <Text style={styles.textSub}>SUB-18</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('SUB_21')}>
                  <Text style={styles.textSub}>SUB-21</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('SENIOR_BRANCA_AMARELA')}>
                  <Text style={styles.textSub}>SÊNIOR FEMININO</Text>
                  <Text style={styles.textFaixa} >(Branca a amarela)</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.contentColumn}>
                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('SENIOR_LARANJA_VERDE')}
                >
                  <Text style={styles.textSub}>SÊNIOR FEMININO</Text>
                  <Text style={styles.textFaixa}>(Laranja a verde)</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('SENIOR_BRANCA_VERDE')}>
                  <Text style={styles.textSub}>SÊNIOR MASCULINO</Text>
                  <Text style={styles.textFaixa}>(Branca a Verde)</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('SENIOR_ROXA_PRETA')}>
                  <Text style={styles.textSub}>SÊNIOR</Text>
                  <Text style={styles.textFaixa}>(Roxa a preta)</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('VETERANO_1')}>
                  <Text style={styles.textSub}>VETERANO 1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('VETERANO_2')}>
                  <Text style={styles.textSub}>VETERANO 2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('VETERANO_3')} >
                  <Text style={styles.textSub}>VETERANO 3</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('VETERANO_4')}>
                  <Text style={styles.textSub}>VETERANO 4</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('VETERANO_5')}>
                  <Text style={styles.textSub}>VETERANO 5</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('VETERANO_6')}>
                  <Text style={styles.textSub}>VETERANO 6</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('VETERANO_7')}>
                  <Text style={styles.textSub}>VETERANO 7</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('VETERANO_8')}>
                  <Text style={styles.textSub}>VETERANO 8</Text>
                </TouchableOpacity>

              </View>
              <View style={styles.contentColumn}>
                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('VETERANO_9')}>
                  <Text style={styles.textSub}>VETERANO 9</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('VETERANO_10')}>
                  <Text style={styles.textSub}>VETERANO 10</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filterButton}
                  onPress={() => handleFilterParam('VETERANO_11')}>
                  <Text style={styles.textSub}>VETERANO 11</Text>
                </TouchableOpacity>

              </View>

            </View>
          </ScrollView>
        </View>

      </View>

    </Modal >
  );
}
