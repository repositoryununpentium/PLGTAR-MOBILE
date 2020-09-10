import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

	cartaoTarefaContainer: {
		flexDirection: "row",
		width: "95%",
		height: 100,
		shadowColor: "#000000",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.35,
		shadowRadius: 4,
		elevation: 5,
		borderRadius: 10,
		justifyContent: "space-between",
		padding: 5,
		marginVertical: 8,
		backgroundColor: "#F9F9F9"
	},

	cartaoTarefasEsquerda: {
		flexDirection: "row",
		alignItems: "center"
	},

	cartaoTarefasDireita: {
		alignItems: "flex-end",
		justifyContent: "space-between"
	},

	tipoTarefaAtiva: {
		width: 50,
		height: 50
	},

	tituloCartaoTarefa: {
		marginLeft: 10,
		fontWeight: "bold",
		fontSize: 16
	},

	cartaoTarefasData: {
		color: "#EE6B26",
		fontWeight: "bold",
		fontSize: 16
	},

	cartaoTarefasHora: {
		color: "#707070",
		fontWeight: "bold",
		fontSize: 14
	},

	cartaoTarefaFinalizado: {
		opacity: 0.5
	}


});

export default styles;