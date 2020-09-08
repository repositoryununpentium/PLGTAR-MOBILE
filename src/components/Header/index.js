import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import styles from "./style";

import logoPNG from "../../assets/logo.png";
import bellPNG from "../../assets/bell.png";
import qrcodePNG from "../../assets/qrcode.png";
import backPNG from "../../assets/back.png";

export default function Header({ isShowNotificacao, isShowBotaoVoltar }) {
	return (

		<View style={styles.header}>

			{ 
				isShowBotaoVoltar ?
					<TouchableOpacity style={styles.qrcodeIcon}>
						<Image source={backPNG} style={styles.qrcode} />
					</TouchableOpacity>
				:
					<TouchableOpacity style={styles.qrcodeIcon}>
						<Image source={qrcodePNG} style={styles.qrcode} />
					</TouchableOpacity>
			}

			<Image source={logoPNG} style={styles.logomarca} />

			{
				isShowNotificacao && 
				
				<TouchableOpacity style={styles.notificacao}>
					<Image source={bellPNG} style={styles.notificacaoImagem} />
					<View style={styles.notificacaoCirculo}>
						<Text style={styles.numeroNotificacaoPendente}>3</Text>
					</View>
				</TouchableOpacity>
			}

			
		</View>
	)
}

