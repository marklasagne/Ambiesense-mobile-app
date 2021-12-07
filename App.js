// tesing websockets

import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './screens/LandingPage';
import SignupPage from './screens/SignupPage';
import DecisionPage from './screens/DecisionPage';
import HomePage from './screens/HomePage';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#011627',
  },
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
        <Stack.Screen name="DecisionPage" component={DecisionPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
