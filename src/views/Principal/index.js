import React from 'react';
import { Text, View } from 'react-native';

import styles from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Princiapl() {
    return(
        <View style={styles.container}>
            <Header isShowNotificacao={true} isShowBotaoVoltar={false} />
            <Footer isShowIconeAdicionarTarefa={true} />
        </View>
    )
}