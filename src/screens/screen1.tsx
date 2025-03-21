import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { ButtonComponent } from '../components/ButtonComponent';
import { styles } from '../theme/appTheme';

export const screen1 = () => {
    //hook useNavigation
    const navigation = useNavigation();

    const handleSendFormScreen2 = (): void => {
        navigation.navigate('Pantalla2' as never)
    }

    const handleSendFormScreen3 = (): void => {
        navigation.navigate('Pantalla3' as never)
    }

    const handleSendFormScreen4 = (): void => {
        navigation.navigate('Pantalla4' as never)
    }

    const handleSendFormScreen5 = (): void => {
        navigation.navigate('Pantalla5' as never)
    }

    return (
        <View>
            <Text style={styles.textBienvenido}>BIENVENIDO</Text>
            <View style={styles.containerScreen1}>
                <ButtonComponent title={'Imagen 1'} handleLogin={handleSendFormScreen2}></ButtonComponent>
                <ButtonComponent title={'Imagen 2'} handleLogin={handleSendFormScreen3}></ButtonComponent>
                <ButtonComponent title={'>='} handleLogin={handleSendFormScreen4}></ButtonComponent>
                <ButtonComponent title={'<='} handleLogin={handleSendFormScreen5}></ButtonComponent>
            </View>
        </View>
    )
}
