import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// Curso React-Native 
// Prof: Herrera, Fernando
// Chagaray, Alan
// alanandreschagaray@gmail.com

interface Props {
    texto: string;
    color?: string;
    ancho?: boolean;
    accion: ( accion : string)=> void;
}

export const BotonCalc = ({texto , color='#2D2D2D' , ancho = false , accion} : Props ) => {
  return (
    <TouchableOpacity onPress={()=>accion(texto)}>
        <View style={{
            ...styleBotonCalc.boton,
            backgroundColor: color,
            width : (ancho === true) ? 180 : 80 
        }}>
            <Text style={{
                ...styleBotonCalc.botonTexto,
                color : ( color === '#9B9B9B' )? 'black' : 'white'
                }}>{texto}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styleBotonCalc = StyleSheet.create({
    boton:{
        backgroundColor:'#2D2D2D',
        width:80,
        height:80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal:10,
        marginVertical:5
    },
    botonTexto :{
        fontSize:30,
        padding:10,
        color:'black',
        textAlign: 'center'
    }
})