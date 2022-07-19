/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';


const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function HomeActivity({navigation}) {

    return (
       <SafeAreaView style={{width:'100%', height:'100%'}}>
            <StatusBar
                hidden={true}
            />
                <View style={{width: widthWindow, height: heightWindow, position:'relative'}}>
                {/* <MapView
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}
                    >
                    {this.state.markers.map((marker, index) => (
                        <Marker
                        key={index}
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                        />
                    ))}
                </MapView> */}
                </View>
       </SafeAreaView>
    );
}

export default HomeActivity