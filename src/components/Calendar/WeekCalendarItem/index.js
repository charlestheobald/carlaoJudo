import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const WeekCalendarItem = ({ day, handlePress }) => {
	return (
		<TouchableOpacity style={{ flexDirection: 'row' }}
			onPress={() => handlePress()}
		>
			<View style={styles.container}>
				<View style={styles.dayContainer}>
					<Text style={styles.day}>{day}</Text>
				</View>
				<View style={styles.labelContainer}>
					<Text style={styles.label}>Visualizar programação</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}

