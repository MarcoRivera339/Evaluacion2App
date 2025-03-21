import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const screen2 = () => {

    return (
        <View>
            <Image
                source={require('../img/netcom.jpg')}
                style={styles.img}
            />
        </View>
    )
}
