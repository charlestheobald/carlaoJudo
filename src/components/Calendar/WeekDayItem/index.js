import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'
import { theme } from '../../../global/theme'

import { StandardButton } from '../../StandardButton'

export const WeekDayItem = ({ label, period, local, description, handlePress  }) => {
    return (
		<View styles={{flex:1}}>	
			<View style={styles.container}>
				<View style={styles.containerLabelPeriod}>
					<View style={styles.containerLabel}>
						<Text style={styles.boldTitle}>Evento: </Text>
						<Text>{label}</Text>
					</View>
					<View style={styles.containerPeriod}>
						<Text style={styles.boldTitle}>Período: </Text>
						<Text>{period[0]} às {period[1]}h</Text>
					</View>
				</View>
				<View style={styles.containerLocal}>
					<Text style={styles.boldTitle}>Local: </Text>
					<Text>{local}</Text>
				</View>
				<View style={styles.containerDescription}>
					<View style={styles.descriptionLabelContainer}>
						<Text style={styles.boldTitle}>Descrição:</Text>
					</View>
					<View style={styles.descriptionTextContaiener}>
						<Text>
							{description} 
						</Text>
					</View>
				</View>
			</View>
			<View style={{justifyContent:'center', alignItems:'center', marginBottom:30}}>
				<StandardButton
					label='Comparecer'
					textColor={theme.colors.highlight}
					bgColor={theme.colors.secondary10}
					font={theme.fonts.text300}
					onPress={handlePress}
					widthProp='90%'
				/>
			</View>
		</View>			
    )
}

