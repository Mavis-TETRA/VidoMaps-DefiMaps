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
    Modal } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import MapView,{ Marker, Callout, Polygon, Circle, Polyline, Overlay } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Icon from "react-native-vector-icons/Ionicons";
import { GestureHandlerRootView, PinchGestureHandler, State, PanGestureHandler, ScrollView } from 'react-native-gesture-handler'; 
import SelectDropdown from 'react-native-select-dropdown'
import { markers, mapDarkStyle, mapStandardStyle } from '../model/mapData';
import StarRating from '../component/StarRating';


const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

const coordinates = [
  { name: 'TopLeft', latitude: 10.85203072511109, longitude: 106.62809501734563, image: require('../../drawble/drawbleImg/locationicon.jpg') },
  { name: 'TopRight', latitude: 10.852017553843844 , longitude: 106.62831428795626, image: require('../../drawble/drawbleImg/locationicon.jpg') },
  { name: 'BottomRight', latitude: 10.851486851274974, longitude: 106.62827883567216, image: require('../../drawble/drawbleImg/locationicon.jpg') },
  { name: 'BottomLeft', latitude: 10.851498046934633, longitude: 106.62806224728455, image: require('../../drawble/drawbleImg/locationicon.jpg') },
 
]

// lat and long center building : 10.85182111358613, 106.62807166628698

//10.852168
const LATITUDE_LEFT_TOP = 10.852168; 
const LONGITUDE_LEFT_TOP = 106.627799; 

const LATITUDE_RIGHT_TOP = 10.852102;
const LONGITUDE_RIGHT_TOP = 106.628256;

// 10.851526, 106.627799
const LATITUDE_LEFT_BOTTOM = 10.851526;//point
const LONGITUDE_LEFT_BOTTOM = 106.627799;//point

//   106.62825939654574
const LATITUDE_RIGHT_BOTTOM = 10.851526;
const LONGITUDE_RIGHT_BOTTOM = 106.628259;

const LATITUDE_DISTANCE_LEFT = (LATITUDE_LEFT_TOP - LATITUDE_LEFT_BOTTOM);
const LONGITUDE_DISTANCE_BOTTOM = (LONGITUDE_RIGHT_BOTTOM - LONGITUDE_LEFT_BOTTOM);

// Detail
const LATITUDE_DISTANCE_RIGHT = LATITUDE_DISTANCE_LEFT;
const LONGITUDE_DISTANCE_TOP = LONGITUDE_DISTANCE_BOTTOM ;

//10.851655221139566, 106.62816684009636

const LAT = 10.851655221139566
const LONG =  106.62816684009636;


// Building vido

const PERCENT_OF_BUILDING_DEVIATION = 10
const DELAY_TIME = 5000

//10.852084085012642, 106.62812835441531
const LATITUDE_LEFT_TOP_VIDO = 10.852084; 
const LONGITUDE_LEFT_TOP_VIDO = 106.628097; 

const LATITUDE_RIGHT_TOP_VIDO = 10.852102;
const LONGITUDE_RIGHT_TOP_VIDO = 106.628256;

// 10.851549, 106.628097
const LATITUDE_LEFT_BOTTOM_VIDO = 10.851549;//point
const LONGITUDE_LEFT_BOTTOM_VIDO = 106.628097;//point

//   10.851545944683382, 106.62821782254615
const LATITUDE_RIGHT_BOTTOM_VIDO = 10.851549;
const LONGITUDE_RIGHT_BOTTOM_VIDO = 106.628217;

const LATITUDE_DISTANCE_LEFT_VIDO = (LATITUDE_LEFT_TOP_VIDO - LATITUDE_LEFT_BOTTOM_VIDO);
const LONGITUDE_DISTANCE_BOTTOM_VIDO = (LONGITUDE_RIGHT_BOTTOM_VIDO - LONGITUDE_LEFT_BOTTOM_VIDO);

// Detail

const LATITUDE_DISTANCE_RIGHT_VIDO = LATITUDE_DISTANCE_LEFT_VIDO;
const LONGITUDE_DISTANCE_TOP_VIDO = LONGITUDE_DISTANCE_BOTTOM_VIDO;

// class Home extends Component {
    
// }

function AroundMap({navigation}){

    const [getfloor, setFloor] = useState(1)
    const [isModalVisible, setisModalVisible] = useState(false);
    const [positioningDeviationLAT, setPositioningDeviationLAT] = useState(null);
    const [positioningDeviationLONG, setPositioningDeviationLONG] = useState(null);

    const markers = []

    // Animated


    // const [positionTS, setPositionTS] = useState({

    //   latitude: ((((LAT.toFixed(6))- LATITUDE_LEFT_BOTTOM_VIDO)/LATITUDE_DISTANCE_LEFT_VIDO)*120)-((((LAT.toFixed(6))- LATITUDE_LEFT_BOTTOM_VIDO)/LATITUDE_DISTANCE_LEFT_VIDO)*PERCENT_OF_BUILDING_DEVIATION),
    //   longitude: ((((LONG.toFixed(6)) - LONGITUDE_LEFT_BOTTOM_VIDO)/LONGITUDE_DISTANCE_BOTTOM_VIDO)*100)-((((LONG.toFixed(6)) - LONGITUDE_LEFT_BOTTOM_VIDO)/LONGITUDE_DISTANCE_BOTTOM_VIDO)*PERCENT_OF_BUILDING_DEVIATION),
    //   latitudeDelta: 0.0421,
    //   longitudeDelta: 0.0421,
    // })
 

    // const [position, setPosition] = useState({
    //     latitude: 10,
    //     longitude: 10,
    //     latitudeDelta: 0.001,
    //     longitudeDelta: 0.001,
    //   });

    //   useEffect(() => {
    //     Geolocation.getCurrentPosition((pos) => {
    //       const crd = pos.coords;
    //       if (positioningDeviationLAT == null) {
    //         setPositioningDeviationLAT(crd.latitude.toFixed(6));
    //         setPositioningDeviationLONG(crd.longitude.toFixed(6));
    //       }

    //       if (Math.abs(crd.latitude.toFixed(6) - positioningDeviationLAT) < 100 && Math.abs(crd.longitude.toFixed(6) - positioningDeviationLONG) < 100) {
    //         setPosition({
    //           latitude: ((((crd.latitude.toFixed(6))- LATITUDE_LEFT_BOTTOM_VIDO)/LATITUDE_DISTANCE_LEFT_VIDO)*100)-((((LAT.toFixed(6))- LATITUDE_LEFT_BOTTOM_VIDO)/LATITUDE_DISTANCE_LEFT_VIDO)*PERCENT_OF_BUILDING_DEVIATION),
    //           longitude: ((((crd.longitude.toFixed(6)) - LONGITUDE_LEFT_BOTTOM_VIDO)/LONGITUDE_DISTANCE_BOTTOM_VIDO)*100)-((((LONG.toFixed(6)) - LONGITUDE_LEFT_BOTTOM_VIDO)/LONGITUDE_DISTANCE_BOTTOM_VIDO)*PERCENT_OF_BUILDING_DEVIATION),
    //           latitudeDelta: 0.0421,
    //           longitudeDelta: 0.0421,
    //         });
    //       } else {
    //         setPosition({
    //           latitude: (((positioningDeviationLAT- LATITUDE_LEFT_BOTTOM_VIDO)/LATITUDE_DISTANCE_LEFT_VIDO)*100)-((((LAT.toFixed(6))- LATITUDE_LEFT_BOTTOM_VIDO)/LATITUDE_DISTANCE_LEFT_VIDO)*PERCENT_OF_BUILDING_DEVIATION),
    //           longitude: (((positioningDeviationLONG - LONGITUDE_LEFT_BOTTOM_VIDO)/LONGITUDE_DISTANCE_BOTTOM_VIDO)*100)-((((LONG.toFixed(6)) - LONGITUDE_LEFT_BOTTOM_VIDO)/LONGITUDE_DISTANCE_BOTTOM_VIDO)*PERCENT_OF_BUILDING_DEVIATION),
    //           latitudeDelta: 0.0421,
    //           longitudeDelta: 0.0421,
    //         });
    //       };
          
    //     }).catch((err) => {
    //       console.log(err);
    //     });
    //   }, [position]);


      // const scale = useRef(new Animated.Value(1)).current;

      // const onZoomEventFunction = Animated.event(
      //   [{
      //     nativeEvent: { scale: scale }
      //   }],
      //   {
      //     useNativeDriver: true
      //   }
      // )

      // const onZoomStateChangeFunction = (event) => {
      //   if (event.nativeEvent.oldState == State.ACTIVE) {
      //     Animated.spring(scale, {
      //       toValue:1,
      //       useNativeDriver: true
      //     }).start()
      //   }
      // }

      // // Modal
      // const changeModalVisibility = (bool) => {
      //   setisModalVisible(bool)
      // }

      // A : lat=10.85203149607584, long=106.62809380157904
// C : lat=10.852016615953746, long=106.62831389115175

    return (
        <SafeAreaView style={style.main_project}>
        <StatusBar
          hidden={false}
        />
            
            <View style={style.view_main}>
            <MapView
                style={style.map_view}
                  initialRegion={{
                    latitude: 10.851495319241918, 
                    longitude: 106.62806068119448 ,
                    latitudeDelta: 0.0421,
                    longitudeDelta: 0.0421,
                  }}
                  showsUserLocation={true}
                  showsMyLocationButton = {true}
                  mapType="standard"
                  zoomTapEnabled= {true}
                  minZoomLevel={18}
                  maxZoomLevel={50}
                  showsPointsOfInterest={false}
                  followsUserLocation={true}
                  userLocationUpdateInterval = {500}>
                    {/* <Overlay
                    bounds={[
                      [10.85203072511109,106.62809],
                      [10.852017553843844 ,106.62831],
                      [10.851486851274974, 106.62827883567216],
                      [10.851498046934633,106.62806224728455],
                    ]}
                     image={require("../../drawble/SoDoBoTri/Vido_school/SodoBotri1.jpg")}
                    /> */}
                    <Overlay
                     image={require("../../drawble/SoDoBoTri/Vido_school/SodoBotri1.jpg")}
                      bounds={[
                        [10.851495319241918, 106.62806068119448], 
                        [10.852020040395047, 106.62831266801642],
                        // [10.852032278972974, 106.62809601386418],
                        // [10.85148698847369, 106.6282780832801],
                        

                      ]}
                     bearing={0}
                    />
                    {/* <Polyline
                      coordinates={coordinates}
                      // fillColor={'#FFFBF0'}
                       // fallback for when `strokeColors` is not supported by the map-provider
                      strokeColors={[
                        '#7F0000',
                        '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                        '#B24112',
                        '#E5845C',
                        '#238C23',
                        '#7F0000'
                      ]}
                      strokeWidth={6}
                    /> */}
                   
                  {/* <Marker
                    style={[style.marker_point, {transform:[{ rotate: "100deg" }]}]}
                      coordinate={{
                        latitude: 10.851760907485463, 
                        longitude:  106.62818635556413
                      }}
                      title={"Cao Đẳng Viễn Đông"}
                      description={"Có việc làm đúng ngành"}
                      image={require("../../drawble/SoDoBoTri/Vido_school/SodoBotri1.jpg")}
                    /> */}
                     {/* <Marker
                    style={[style.marker_point, {transform:[{ rotate: "100deg" }]}]}
                      coordinate={{
                        latitude: 10.852030991873294, 
                        longitude: 106.62809541869957
                      }}
                      title={"Cao Đẳng Viễn Đông"}
                      description={"Có việc làm đúng ngành"}
                  >
                    <View style={style.marker_point}>
                      <Image style={style.marker_point} source={require("../../drawble/SoDoBoTri/Vido_school/SodoBotri1.jpg")}/>
                    </View>
                  </Marker> */}
                    {/* {
                      coordinates.map((marker, index) => (
                        <Marker
                          key={marker.name}
                          ref={ref => markers[index] = ref}
                          onPress={() => this.onMarkerPressed(marker, index)}
                          coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                        >
                          <Callout>
                            <Text>{marker.name}</Text>
                          </Callout>

                        </Marker>
                      ))
                    } */}
              </MapView>
            </View>
   </SafeAreaView>
    )
}
const style = StyleSheet.create({
  main_project: {
    width:'100%',
    height:'100%', 
    padding:0
  },
  main_view: {
    width: widthWindow, 
    height: heightWindow, 
    position:'relative'
  },
  map_view: {
    width:"100%", 
    height:'100%'
  },
  marker_point: {
    
    width:100, 
    height:100
  },
  searchBox: {
    position:'absolute', 
    top:10,
    left:10,
    flexDirection:"row",
    backgroundColor: '#fff',
    width: '80%',
    alignSelf:'center',
    borderRadius: 5,
    padding: 8,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScroolView: {
    position:'absolute', 
    top:80, 
    paddingHorizontal:10
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection:"row",
    backgroundColor:'#fff', 
    borderRadius:20,
    padding:8,
    paddingHorizontal:20, 
    marginHorizontal:10,
    height:35,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width:50,
    height:50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 5
  },
  card: {
    width:"95%",
    height:"40%",
    backgroundColor:"white",
    position:'absolute',
    left:10,
    
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    // alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  
  signIn: {
      position:"absolute",
      top:5,
      right:5,
      width: '10%',
      padding:8,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      backgroundColor:'white'
      
  },
  textSign: {
      fontSize: 14,
      fontWeight: 'bold'
  }
})


export default AroundMap