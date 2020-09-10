import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

import styles from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartaoTarefas from "../../components/CartaoTarefas";

export default function Princiapl() {

    const [filtro, setFiltro] = useState('hoje');

    return(
        <View style={styles.container}>
            <Header isShowNotificacao={true} isShowBotaoVoltar={false} />

            <View style={styles.filtroTarefa}>
                <TouchableOpacity onPress={() => setFiltro('todos')}>
                    <Text style={ filtro == 'todos' ? styles.tarefaAtiva : styles.tarefaInativa }>
                        Todos
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFiltro('hoje')}>
                    <Text style={ filtro == 'hoje' ? styles.tarefaAtiva : styles.tarefaInativa }>
                        Hoje
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFiltro('semana')}>
                    <Text style={ filtro == 'semana' ? styles.tarefaAtiva : styles.tarefaInativa }>
                        Semana
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFiltro('mes')}>
                    <Text style={ filtro == 'mes' ? styles.tarefaAtiva : styles.tarefaInativa }>
                        Mês
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFiltro('ano')}>
                    <Text style={ filtro == 'ano' ? styles.tarefaAtiva : styles.tarefaInativa }>
                        Ano
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tituloTarefa}>
                <Text style={styles.tituloTextoTarefa}>TAREFAS</Text>
            </View>

            <ScrollView style={styles.conteudoTarefas} contentContainerStyle={{alignItems: "center"}}>
                <CartaoTarefas isTarefaConcluida={false} />
                <CartaoTarefas isTarefaConcluida={false} />
                <CartaoTarefas isTarefaConcluida={true} />
                <CartaoTarefas isTarefaConcluida={false} />
                <CartaoTarefas isTarefaConcluida={false} />
                <CartaoTarefas isTarefaConcluida={false} />
                <CartaoTarefas isTarefaConcluida={false} />
                <CartaoTarefas isTarefaConcluida={false} />
            </ScrollView>

            <Footer isShowIconeAdicionarTarefa={true} />
        </View>
    )
}