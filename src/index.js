/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Splash Screen
import Splashscreen from './splashscreen/splashscreen';
// Home Screen
import HomeActivity from './homescreen/mainactivity';
import Transfer from './feature/transfer/transfer';
import DetailMap from './homescreen/detailmap';
import AroundMap from './homescreen/aroundmap';
import LocationDetail from './homescreen/locationdetails';

// Feature
import Contribute from './feature/contribute/contribute';
import News from './feature/news/news';
import Storage from './feature/storage/storage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor: 'white',
    tabBarActiveBackgroundColor: '#0D9648',
    tabBarInactiveTintColor: 'gray',
    tabBarInactiveBackgroundColor: 'white',
    tabBarStyle: {backgroundColor: 'white', height:55 }}}>
      <Tab.Screen name="Home" options={{
        tabBarLabel: 'Khám phá',
        tabBarIcon: ({ color }) => (
            <Icon name="map-marker-alt" color={color} size={20} />
        )
    }}  component={HomeActivity} />
    <Tab.Screen name="Transfer" options={{
        tabBarLabel: 'Di chuyển',
        tabBarIcon: ({ color }) => (
            <Icon name="car-alt" color={color} size={20} />
        )
    }}  component={Transfer} />
      <Tab.Screen name="Contribute" options={{
        tabBarLabel: 'Đóng góp',
        tabBarIcon: ({ color }) => (
            <Icon name="plus-circle" color={color} size={20} />
        )
    }} component={Contribute} />
      <Tab.Screen name="News" options={{
        tabBarLabel: 'Tin tức',
        tabBarIcon: ({ color }) => (
            <Icon name="newspaper" color={color} size={20} />
        )
    }} component={News} />
      <Tab.Screen name="Storage" options={{
        tabBarLabel: 'Lưu trữ',
        tabBarIcon: ({ color }) => (
            <Icon name="bookmark" color={color} size={20} />
        )
    }} component={Storage} />
    </Tab.Navigator>
  );
}

function RootComponent() {
    return (
        <NavigationContainer>
      {/* Rest of your app code */}
        <Stack.Navigator initialRouteName="Splashscreen" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splashscreen" component={Splashscreen} />
          <Stack.Screen name="HomeActivity" component={HomeActivity} />
          <Stack.Screen name="DetailMap" component={DetailMap} />
          <Stack.Screen name="AroundMap" component={AroundMap} />
          <Stack.Screen name="LocationDetail" component={LocationDetail} />

        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default RootComponent
