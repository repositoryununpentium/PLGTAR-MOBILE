import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./style";

import addPNG from "../../assets/add.png";
import savePNG from "../../assets/save.png";

export default function Footer({ isShowIconeAdicionarTarefa }) {
	return(
		<View style={styles.container}>
			<TouchableOpacity style={styles.button}>
				<Image source={ isShowIconeAdicionarTarefa ? addPNG : savePNG} style={styles.imagem} />
			</TouchableOpacity>
			<Text style={styles.texto}>
				Organizando a sua Vida
			</Text>
		</View>
	)	
}