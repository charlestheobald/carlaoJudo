import React from 'react';
import { StyleSheet } from 'react-native'
import { theme } from '../../../global/theme'


export const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
       
        backgroundColor: theme.colors.primary20,
        height: 200,
        width: '100%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 60 },
        shadowOpacity: 0.07,
        shadowRadius: 10,
        marginVertical: 10,
    },
    containerLabelPeriod:{
        flexDirection:'row',
        marginTop:16
    },
    containerLabel:{
        flexDirection:'row',
        marginLeft:10,
        marginRight:30
    },
  
    containerPeriod:{
        flexDirection:'row'
    },
    containerLocal:{
        flexDirection:'row',
        marginLeft:10,
        marginTop:21
    },
    containerDescription:{
        flex:1,
        marginLeft:10,
        marginTop:21
    },
    descriptionLabelContainer:{
        marginBottom:5
    },
    boldTitle:{
        fontFamily: theme.fonts.text500
    },
})
