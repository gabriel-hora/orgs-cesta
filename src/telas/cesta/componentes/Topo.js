import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
 
import Texto from '../../../componentes/Texto'
import topo from '../../../../assets/topo.png' 

/* Para pegar a largura da tela */
const width = Dimensions.get('screen').width;

export default function Topo() {
    return <View>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>Detalhes da cesta</Texto>
    </View>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width, /**params: larguraDaImagem, alturaDaImagem, larguraDaTela*/

    },
    titulo: {
        width: "100%",
        position: "absolute", /*absolute: Semelhante ao comportamento do Box | relative: Column*/
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
})