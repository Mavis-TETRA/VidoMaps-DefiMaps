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
import { GestureHandlerRootView, PinchGestureHandler, State, PanGestureHandler } from 'react-native-gesture-handler';


const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

//10.837287, 106.637145
const LATITUDE_LEFT_TOP = 10.852102; 
const LONGITUDE_LEFT_TOP = 106.627901; 

const LATITUDE_RIGHT_TOP = 10.852102;
const LONGITUDE_RIGHT_TOP = 106.628256;

const LATITUDE_LEFT_BOTTOM = 10.851352;//point
const LONGITUDE_LEFT_BOTTOM = 106.627901;//point

const LATITUDE_RIGHT_BOTTOM = 10.851352;
const LONGITUDE_RIGHT_BOTTOM = 106.628256;

const LATITUDE_DISTANCE_LEFT = (LATITUDE_LEFT_TOP - LATITUDE_LEFT_BOTTOM)/heightWindow;
const LONGITUDE_DISTANCE_BOTTOM = (LONGITUDE_RIGHT_BOTTOM - LONGITUDE_LEFT_BOTTOM);

// Detail

const LATITUDE_DISTANCE_RIGHT = LATITUDE_DISTANCE_LEFT;
const LONGITUDE_DISTANCE_TOP = LONGITUDE_DISTANCE_BOTTOM ;

// 10.851964668949051, 106.62819771457278

const LAT = 10.851964668949051;
const LONG = 106.62819771457278;



// class Home extends Component {
    
// }

function HomeActivity({navigation}){

   
      // console.log(scale);
    const [positionTS, setPositionTS] = useState({
      latitude: Math.round(((LAT.toFixed(6))- LATITUDE_LEFT_BOTTOM)/LATITUDE_DISTANCE_LEFT),
      longitude: Math.round(((LONG.toFixed(6)) - LONGITUDE_LEFT_BOTTOM)/LONGITUDE_DISTANCE_BOTTOM),
      latitudeDelta: 0.0421,
      longitudeDelta: 0.0421,
    })

    const [position, setPosition] = useState({
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });

      useEffect(() => {
        Geolocation.getCurrentPosition((pos) => {
          const crd = pos.coords;
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


      const scale = useRef(new Animated.Value(1)).current;

      const onZoomEventFunction = Animated.event(
        [{
          nativeEvent: { scale: scale }
        }],
        {
          useNativeDriver: true
        }
      )

      const onZoomStateChangeFunction = (event) => {
        if (event.nativeEvent.oldState == State.ACTIVE) {
          Animated.spring(scale, {
            toValue:1,
            useNativeDriver: true
          }).start()
        }
      }
    return (
        <SafeAreaView style={{width:'100%', height:'100%', padding:0}}>
        <StatusBar
            hidden={false}
        />
            <View style={{width: widthWindow, height: heightWindow, backgroundColor:"white"}}>
              {/* TEST */}
              <Text>
                {
                  positionTS.latitude+"||||"+positionTS.longitude
                }
              </Text>
            {/* <MapView
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
              </View> */}
              {/* Chỉnh map (chưa hoàng thiện) */}
              {/* <GestureHandlerRootView>
                  <PinchGestureHandler 
                    onGestureEvent = {onZoomEventFunction}
                    // onHandlerStateChange = {onZoomStateChangeFunction}
                  >
                    <Animated.Image 
                      source={require("../../drawble/drawbleImg/map.png")} 
                      style={{ width:widthWindow, 
                        height:heightWindow, 
                        transform:[
                          {scale: scale}
                        ]
                      }}
                      // resizeMode={'contain'}
                    />
                  </PinchGestureHandler>
                </GestureHandlerRootView> */}
               {/* <Text>
                {
                  LATITUDE_DISTANCE_LEFT/heightWindow + "|||"+ LONGITUDE_DISTANCE_LEFT/heightWindow

                }
               </Text> */}
               {/* <Text>
                {
                  LATITUDE_DISTANCE_BOTTOM/widthWindow + "|||"+ LONGITUDE_DISTANCE_BOTTOM/widthWindow

                }
               </Text> */}
            </View>
   </SafeAreaView>
    )
}

const style = StyleSheet.create({
  zoomImg: {
    width:widthWindow, 
    height:200
  }
})

export default HomeActivity