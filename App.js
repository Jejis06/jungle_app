import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts } from 'expo-font';

import Wather from './components/Wather_main';

const Stack = createNativeStackNavigator();

export default function App() {
   //fonts
   
  const fetchFonts = async () =>
    await Font.loadAsync({
      'Hbold': require('./assets/fonts/Heebo-Bold.ttf'),
      'Hreg': require('./assets/fonts/Heebo-Regular.ttf'),
  });
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Wather-main" 
        component={Wather} 
        options={{
          headerShown: false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//siemanko

const styles = StyleSheet.create({
  
});
