import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme';

interface Props {
  title: string;
  handleLogin: () => void;
}

export const ButtonComponent = ({ title, handleLogin }: Props) => {


  return (
    <TouchableOpacity
      style={styles.containerButton}
      onPress={handleLogin}>
      <Text style={styles.textBotton}>{title}</Text>
    </TouchableOpacity>
  )
}
