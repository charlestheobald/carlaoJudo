import React from 'react';
import { StyleSheet } from 'react-native'
import { theme } from '../../../global/theme'


export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.primary20,
        height: 60,
        width: '90%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 25 },
        shadowOpacity: 0.07,
        shadowRadius: 10,
        marginVertical: 5,
    },
    dayContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:22
        
    },
    day:{
        fontSize:18,
        fontFamily:theme.fonts.text400
    },
    labelContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    label:{
        fontFamily: theme.fonts.text400,
        fontSize:15,
    },
})
