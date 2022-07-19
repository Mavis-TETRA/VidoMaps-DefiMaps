/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';


const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function Splashscreen({navigation}) {
    // set Time

    setTimeout(() => {
        navigation.navigate('HomeActivity');
    }, 2000);
    
    return (
       <SafeAreaView style={{width:'100%', height:'100%'}}>
           
               <StatusBar
                hidden={true}
               />
               <View style={{width: widthWindow, height: heightWindow, position:'relative'}}>
                <Text>
                    Hello Splashscreen here
                </Text>
               </View>
               
                
       </SafeAreaView>
    );
}

export default Splashscreen