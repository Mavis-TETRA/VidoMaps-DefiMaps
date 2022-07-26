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
        <SafeAreaView style={{width:'100%', height:'100%', backgroundColor:"white"}}>
            <StatusBar hidden={true} />
                <View style={{width: widthWindow, height: heightWindow}}>
                    <View style={{width:'100%', height:"90%", position:'relative', flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                        <View style={{width:200, height:200,alignItems:"center"}}>
                            <Image style={{width:100, height:100}} source={require("../../drawble/drawbleImg/Petal_Maps_Logo.png")}></Image>
                            <Text style={{fontSize:25, fontWeight:"bold", color:"#FE4574", marginTop:10}}>Mavis Map</Text>
                        </View>
                    </View>
                    <View style={{width:"100%", height:"10%", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                        <View style={{width:200, height:200,alignItems:"center",flexDirection:'column', justifyContent:"center",}}>
                            <Text style={{color:"#00D268", }}>
                                Design by
                            </Text>
                            <Text style={{color:"#FE4574", }}>
                                5T1N
                            </Text>
                        </View>
                    </View>
                </View>
       </SafeAreaView>
    );
}

export default Splashscreen