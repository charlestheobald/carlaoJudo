

import React, { useState, useContext } from 'react';
import { View, CheckBox, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles'
import { UsuarioContext } from '../../../contexts/usuario/UsuarioContext'
import { postParticipacao, getParticipantesEvento, getEventos } from '../../../services/AlunoService'
import { ModalEvent } from '../../../components/ModalEvent'
import { useNavigation } from "@react-navigation/native";

LocaleConfig.locales['br'] = {
	monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
	monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
	dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado',],
	dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
	today: 'Hoje'
};
LocaleConfig.defaultLocale = 'br';

const timeToString = (time) => {
	const date = new Date(time);
	return date.toISOString().split('T')[0];
};

export const WeekCalendarItem = () => {

	const [isModalAdmVisible, setIsModalVisible] = useState(false)

	const { isAdmin } = useContext(UsuarioContext);
	const [isSelected, setSelection] = useState(false);
	const [items, setItems] = useState({});

	const navigation = useNavigation();


	const handleOpenAdmModal = () => {
		setIsModalVisible(true)
	}

	const handleCloseAdmModal = () => {
		setIsModalVisible(false)
	}

	const loadItems = (day) => {
		setTimeout(() => {
			for (let i = -15; i < 85; i++) {
				const time = day.timestamp + i * 24 * 60 * 60 * 1000;
				const strTime = timeToString(time);
				if (!items[strTime]) {
					items[strTime] = [];
					const numItems = Math.floor(Math.random() * 5);
					for (let j = 0; j < numItems; j++) {
						items[strTime].push({
							name: 'Evento do dia ' + strTime,
							height: Math.max(50, Math.floor(Math.random() * 150)),
						});
					}
				}
			}
			const newItems = {};
			Object.keys(items).forEach((key) => {
				newItems[key] = items[key];
			});
			setItems(newItems);
		}, 1000);
	};

	const rowHasChanged = (r1, r2) => {
		return r1.name !== r2.name;
	}


	const renderItem = (item) => {
		return (
			<View style={styles.item} >
				<Text>{item.name}</Text>
				{isAdmin ?
					<TouchableOpacity onPress={handleOpenAdmModal}>
						<Ionicons name="ios-add-circle-sharp" size={36} color="red" />
					</TouchableOpacity>
					:
					<View>
						<CheckBox
							value={isSelected}
							onValueChange={setSelection}
						/>

					</View>
				}
			</View>
		);
	};

	const renderEmptyDate = () => {
		return (
			<View style={styles.emptyDate}>
				<Text>Nenhum evento agendado!</Text>

				{isAdmin ?
					<>
						<TouchableOpacity onPress={handleOpenAdmModal}
						>
							<Ionicons name="ios-add-circle-sharp" size={36} color="red" />
						</TouchableOpacity>

					</>
					: <Text>não é admin</Text>
				}

			</View>
		);
	}

	return (
		<>
			<Agenda

				loadItemsForMonth={loadItems}
				items={items}
				renderItem={renderItem}
				selected={new Date()}
				renderEmptyDate={renderEmptyDate}
				rowHasChanged={rowHasChanged}
				monthFormat={'MMMM yyyy'}
				futureScrollRange={12}
				theme={{
					agendaTodayColor: 'red',
					selectedDayBackgroundColor: 'red',
					markedTodayColor: 'red',
					dotColor: 'red',
					color: 'red'
				}}

			// <ImageBackground style={styles.imagemProduto}
			//                  source={{ uri: produto.produto.url }}
			//                  resizeMode='center'
			// />

			/>
			<ModalEvent isVisible={isModalAdmVisible} handleClose={handleCloseAdmModal} />
		</>
	);
};


