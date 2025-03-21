import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const screen3 = () => {

  return (
    <View>
      <Image
        source={require('../img/netcom1.jpg')}
        style={styles.img}
      />
    </View>
  )
}
