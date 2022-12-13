import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useFonts from "./components/UseFonts";

import Wather from './components/Wather_main';

const Stack = createNativeStackNavigator();

export default function App() {
   //fonts
     
   const LoadFonts = async () => {
    await useFonts();
  };

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
