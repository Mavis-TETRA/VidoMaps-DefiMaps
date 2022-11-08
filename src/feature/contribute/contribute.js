/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';


const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function Contribute({navigation}) {
    
    return (
        <SafeAreaView style={{width:'100%', height:'100%', backgroundColor:"white"}}>
            <StatusBar hidden={false} 
            backgroundColor="#0D9648" />
                <View style={{width: widthWindow, height: heightWindow}}>
                    <Text>Contribute</Text>
                </View>
       </SafeAreaView>
    );
}

export default Contribute