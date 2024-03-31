import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/screens/Home'


const Stack = createNativeStackNavigator()
const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      name = 'Home' component={Home}
      />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})