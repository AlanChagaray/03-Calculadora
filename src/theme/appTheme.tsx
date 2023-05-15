import { StyleSheet } from "react-native"

// Curso React-Native 
// Prof: Herrera, Fernando
// Chagaray, Alan
// alanandreschagaray@gmail.com

export const styles = StyleSheet.create({
    fondo : {
        flex:1,
        backgroundColor: 'black'
    },
    container: {
        flex:1,
        paddingHorizontal: 20,
        justifyContent:"flex-end"
    },
    resultado: {
        fontSize: 60,
        color: 'white',
        textAlign: 'right'
    },
    resultadoPequenio: {
        fontSize: 30,
        color: 'rgba(255,255,255,0.5)',
        textAlign: 'right'
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})