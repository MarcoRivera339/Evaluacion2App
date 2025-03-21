import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent';
import { InputComponent } from '../components/InputComponent';

export const screen5 = () => {

    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [resultado, setResultado] = useState('');

    const compararNumeros = () => {
        if (numero1 < numero2) {
            setResultado(`El número menor es: ${numero1}`);
        } else if (numero2 < numero1) {
            setResultado(`El número menor es: ${numero2}`);
        } else {
            setResultado('Ambos números son iguales.');
        }
    };

    const handleChangeValue = (name: string, value: number): void => {
        if (name === 'campo1') {
            setNumero1(value);
        } else if (name === 'campo2') {
            setNumero2(value);
        }
    }



    return (
        <View>
            <InputComponent placeholder='numero 1' handleChangeValue={handleChangeValue} name='campo1' />
            <InputComponent placeholder='numero 2' handleChangeValue={handleChangeValue} name='campo2' />
            <ButtonComponent title="<=" handleLogin={compararNumeros} />
            <Text style={{ marginTop: 20, fontSize: 18 }}>{resultado}</Text>
        </View>
    )
}
