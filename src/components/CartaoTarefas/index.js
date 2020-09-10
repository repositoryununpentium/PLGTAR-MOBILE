import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import defaultPNG from "../../assets/default.png";

export default function CartaoTarefas( { isTarefaConcluida } ) {
	return(
		<TouchableOpacity style={ [styles.cartaoTarefaContainer, isTarefaConcluida && styles.cartaoTarefaFinalizado] }>
			<View style={styles.cartaoTarefasEsquerda}>
				<Image source={defaultPNG} style={styles.tipoTarefaAtiva} />
				<Text style={styles.tituloCartaoTarefa}>Entregar Relatório Financeiro</Text>
			</View>
			<View style={styles.cartaoTarefasDireita}>
				<Text style={styles.cartaoTarefasData}>10/09/2020</Text>
				<Text style={styles.cartaoTarefasHora}>14:00:00</Text>
			</View>			
		</TouchableOpacity>
		
	)
}