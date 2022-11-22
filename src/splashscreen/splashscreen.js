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
        <SafeAreaView style={style.main_project}>
            <StatusBar hidden={false} backgroundColor='#ffffff' />
                <View style={style.main_view}>
                    <View style={style.infor_name}>
                        <View style={style.name_logo}>
                            <Image style={style.detail_logo} source={require("../../drawble/drawbleImg/icon.jpg")}></Image>
                            <Text style={style.detail_name}>DEFIMAPS</Text>
                        </View>
                    </View>
                    <View style={style.view_design}>
                        <View style={style.detail_design}>
                            <Text style={style.text_design}>
                                Design by
                            </Text>
                            <Text style={style.text_name_design}>
                                CNTT Cao Đẳng Viễn Đông
                            </Text>
                        </View>
                    </View>
                </View>
       </SafeAreaView>
    );
}

const style = StyleSheet.create({
    main_project: {
        width:'100%', 
        height:'100%', 
        backgroundColor:"white"
    },

    main_view: {
        width: widthWindow, 
        height: heightWindow,
        position:'relative',
    },

    infor_name: {
        width:'100%', 
        height:"90%", 
        position:'relative', 
        flexDirection:"row", 
        justifyContent:"center",
        alignItems:"center"
    },

    name_logo: {
        width:200, 
        height:200,
        alignItems:"center"
    },

    detail_logo: {
        width:100, 
        height:100
    },

    detail_name: {
        fontSize:25, 
        fontWeight:"bold", 
        color:"#005C9D",
        marginTop:100
    },

    view_design: {
        width:"100%",
        height:"10%", 
        flexDirection:"row", 
        justifyContent:"center", 
        alignItems:"center"
    },

    detail_design: {
        width:200, 
        height:200,
        alignItems:"center",
        flexDirection:'column', 
        justifyContent:"center"
    },

    text_design: {
        color:"#005C9D", 
    },

    text_name_design: {
        color:"#27B1FC", 
    },

})

export default Splashscreen