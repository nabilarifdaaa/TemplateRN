import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router'

export default function App() {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  )
}
