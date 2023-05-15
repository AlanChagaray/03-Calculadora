import { SafeAreaView, StatusBar, Text, View } from "react-native"
import React  from 'react'
import { CalculadoraScreens } from "./src/screens/CalculadoraScreens";
import { styles } from "./src/theme/appTheme";

// Curso React-Native 
// Prof: Herrera, Fernando
// Chagaray, Alan
// alanandreschagaray@gmail.com

const App = () => {
  return (
    <SafeAreaView style={ styles.fondo }>
      <StatusBar backgroundColor='black' barStyle="light-content"/>
      <CalculadoraScreens/>
    </SafeAreaView>
  )
}

export default App;