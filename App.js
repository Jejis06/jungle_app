import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import * as React from 'react';
import React,{useState} from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';

import Wather from './components/Wather_main';

const Stack = createNativeStackNavigator();



export default function App() {
   //fonts
   
  
  const [fonts_loaded] = useFonts({
      'Hbold': require('./assets/fonts/Heebo-Bold.ttf'),
      'Hreg': require('./assets/fonts/Heebo-Regular.ttf'),
  });
   
  if(!fonts_loaded){
    return null;
  }

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
//hasdhkjsadhjaksh

const styles = StyleSheet.create({
  
});
