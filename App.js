import { StatusBar, SafeAreaView, View } from 'react-native';
import React from 'react';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import Cesta from './src/telas/cesta/Cesta';
import mock from './src/mocks/cesta';

export default function App() {

  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  }) /* Carrega fonts */


  if (!fontCarregada) {
    return <View />
  } /* Verifica se as fontes foram carregadas. Se sim, mostra app. Se não, retorna vazio */

  return (
    /* SafeAreaView serve para proteger a StatusBar no iOS */
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}
