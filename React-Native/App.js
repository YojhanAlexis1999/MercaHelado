import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './src/login//Login'

export default function App() {

  const AppStack = createStackNavigator()

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Login" component={Login}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
