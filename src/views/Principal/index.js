import React from 'react';
import { Text, View } from 'react-native';

import styles from './style';
import Header from '../../components/Header';

export default function Princiapl() {
    return(
        <View style={styles.container}>
            <Header isShowNotificacao={true} isShowBotaoVoltar={false} />
        </View>
    )
}