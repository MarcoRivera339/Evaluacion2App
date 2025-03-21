import React from 'react'
import { TextInput } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
  placeholder: string;
  handleChangeValue: (name: string, value: number) => void;
  name: string;
}

export const InputComponent = ({ placeholder, handleChangeValue, name }: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={(value) => handleChangeValue(name, Number(value))}
      style={styles.input}
    />
  )
}
