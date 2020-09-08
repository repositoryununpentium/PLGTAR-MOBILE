import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	
	header: {
		width: '100%',
		height: 70,
		margin: 22,
		backgroundColor: '#20295F',
		borderBottomWidth: 5,
		borderBottomColor: '#EE6B26',
		alignItems: 'center',
		justifyContent: 'center'
	},

	logomarca: {
		width: 100,
		height: 40
	},

	notificacao: {
		position: 'absolute',
		right: 20
	},

	notificacaoImagem: {
		width: 25,
		height: 25
	},

	notificacaoCirculo: {
		width: 16,
		backgroundColor: '#FFFFFF',
		borderRadius: 50,
		alignItems: 'center',
		position: 'absolute',
		left: 14,
		bottom: 16
	},

	numeroNotificacaoPendente: {
		justifyContent: 'center',
		color: '#EE6B26',
		fontWeight: 'bold'
	},

	qrcodeIcon: {
		position: 'absolute',
		left: 20
	},

	qrcode: {
		width: 30,
		height: 30
	},


});

export default styles;