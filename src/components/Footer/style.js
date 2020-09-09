import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	
	container: {
		width: '100%',
		height: 70,
		backgroundColor: '#20295F',
		position: 'absolute',
		bottom: 0,
		borderTopWidth: 5,
		borderBottomColor: '#EE6B26',
		alignItems: 'center'
	},

	button: {
		position: 'relative',
		top: - 35
	},

	imagem: {
		width: 80,
		height:  80
	},

	texto: {
		position: 'relative',
		top: -10,
		color: '#FFFFFF'
	}


});

export default styles;