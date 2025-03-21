import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { screen1 } from '../screens/screen1';
import { screen2 } from '../screens/screen2';
import { screen3 } from '../screens/screen3';
import { screen4 } from '../screens/screen4';
import { screen5 } from '../screens/screen5';
import { View } from 'react-native';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                cardStyle: {
                    backgroundColor: 'yellow',
                }
            }}
        >
            <Stack.Screen name="Pantalla1" options={{ title: 'Screen 1' }} component={screen1} />
            <Stack.Screen name="Pantalla2" options={{ title: 'Screen 2', headerShown: true }} component={screen2} />
            <Stack.Screen name="Pantalla3" options={{ title: 'Screen 3' }} component={screen3} />
            <Stack.Screen name="Pantalla4" options={{ title: 'Screen 4' }} component={screen4} />
            <Stack.Screen name="Pantalla5" options={{ title: 'Screen 5' }} component={screen5} />
        </Stack.Navigator>
    )
}
