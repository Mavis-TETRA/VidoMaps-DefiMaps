/* eslint-disable prettier/prettier */
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions,
    SafeAreaView,
    ImageBackground,
    Image,
    StatusBar,
    Animated,
    AppRegistry } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';


const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;



// class Home extends Component {
    
// }

function HomeActivity({navigation}){
    const [position, setPosition] = useState({
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });

      useEffect(() => {
        Geolocation.getCurrentPosition((pos) => {
          const crd = pos.coords;
          // console.log(position)
          setPosition({
            latitude: crd.latitude,
            longitude: crd.longitude,
            latitudeDelta: 0.0421,
            longitudeDelta: 0.0421,
          });
        }).catch((err) => {
          console.log(err);
        });
      }, [position]);
    return (
        <SafeAreaView style={{width:'100%', height:'100%'}}>
        <StatusBar
            hidden={true}
        />
            <View style={{width: widthWindow, height: heightWindow, position:'relative', backgroundColor:"white"}}>
            <MapView
              style={{width:"100%", height:'90%'}}
                initialRegion={
                  position
                }
                showsUserLocation={true}
                showsMyLocationButton = {true}
                mapType="hybrid"
                zoomTapEnabled= {true}
                minZoomLevel={50}
                maxZoomLevel={50}
                followsUserLocation={false}
                userLocationUpdateInterval = {500}>
                <Marker
                  style={{width:30, height:30}}
                    coordinate={position}
                    title={"Me"}
                    description={"Check point"}
                >
                  <View style={{width:30 }}>
                    <Image style={{width:30, height:30}} source={require("../../drawble/drawbleImg/locationicon.jpg")}/>
                  </View>
                </Marker>
            </MapView>
              <View style = {{width:"100%", height:"10%"}}>
                  <Text style={{textAlign:"center"}}>{String(position["latitude"])+"|||"+String(position["longitude"])}</Text>
              </View>
            </View>
   </SafeAreaView>
       
    )
    
    
}

export default HomeActivity