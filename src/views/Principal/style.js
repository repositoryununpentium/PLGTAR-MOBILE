import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    filtroTarefa: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        height: 70,
        alignItems: 'center'
    },

    tarefaAtiva: {
        color: '#EE6B26',
        fontWeight: 'bold',
        fontSize: 18,
    },

    tarefaInativa: {
        color: '#20295F',
        fontWeight: 'bold',
        fontSize: 19,
        opacity: 0.5
    }

});

export default styles;