/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Splash Screen
import Splashscreen from './splashscreen/splashscreen';
// Home Screen
import HomeActivity from './homescreen/mainactivity';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function RootComponent() {
    return (
        <NavigationContainer>
      {/* Rest of your app code */}
        <Stack.Navigator initialRouteName="Splashscreen" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splashscreen" component={Splashscreen} />
          <Stack.Screen name="HomeActivity" component={HomeActivity} />

        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default RootComponent
