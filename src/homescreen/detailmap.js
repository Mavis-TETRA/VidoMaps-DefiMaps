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
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Icon from "react-native-vector-icons/Ionicons";
import { GestureHandlerRootView, PinchGestureHandler, State, PanGestureHandler, ScrollView } from 'react-native-gesture-handler'; 
import SelectDropdown from 'react-native-select-dropdown'
import SelectList from 'react-native-dropdown-select-list'
import Icon5 from 'react-native-vector-icons/FontAwesome5';


const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

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

const listFloor = [
  {
      floor: "floor0",
      detail: "Tầng Hầm",
      image: require("../../drawble/SoDoBoTri/SodoBotriHam.jpg")
    },
    {
      floor: "floor1",
      detail: "Tầng 1",
      image: require("../../drawble/SoDoBoTri/SodoBotri1-1.jpg")
    },
    {
      floor: "floorYard",
      detail: "Sân Trước",
      image: require("../../drawble/SoDoBoTri/SodoBotriSan.jpg")
    },
    {
      floor: "floor2",
      detail: "Tầng 2",
      image: require("../../drawble/SoDoBoTri/SodoBotri2.jpg")
    },
    {
      floor: "floor3",
      detail: "Tầng 3",
      image: require("../../drawble/SoDoBoTri/SodoBotri3.jpg")
    },
    {
      floor: "floor4",
      detail: "Tầng 4",
      image: require("../../drawble/SoDoBoTri/SodoBotri4.jpg")
    },
    {
      floor: "floor5",
      detail: "Tầng 5",
      image: require("../../drawble/SoDoBoTri/SodoBotri5.jpg")
    },
    {
      floor: "floor6",
      detail: "Tầng 6",
      image: require("../../drawble/SoDoBoTri/SodoBotri6.jpg")
    },
    {
      floor: "floor7",
      detail: "Tầng 7",
      image: require("../../drawble/SoDoBoTri/SodoBotri7.jpg")
    },
    {
      floor: "floor8",
      detail: "Tầng 8",
      image: require("../../drawble/SoDoBoTri/SodoBotri8.jpg")
    },
]

const data = [
  {key:'0',value:'Tầng Hầm'},
  {key:'1',value:'Tầng 1'},
  {key:'2',value:'Sân Trước'},
  {key:'3',value:'Tầng 2'},
  {key:'4',value:'Tầng 3'},
  {key:'5',value:'Tầng 4'},
  {key:'6',value:'Tầng 5'},
  {key:'7',value:'Tầng 6'},
  {key:'8',value:'Tầng 7'},
  {key:'9',value:'Tầng 8'},
];

// class Home extends Component {
    
// }

function DetailMap({navigation}){

    const [getfloor, setFloor] = useState(1)
    const [isModalVisible, setisModalVisible] = useState(false)
    const [positioningDeviationLAT, setPositioningDeviationLAT] = useState(null);
    const [positioningDeviationLONG, setPositioningDeviationLONG] = useState(null);
    const [selected, setSelected] = React.useState("");

    

    // Animated


    const [positionTS, setPositionTS] = useState({

      latitude: ((((LAT.toFixed(6))- LATITUDE_LEFT_BOTTOM_VIDO)/LATITUDE_DISTANCE_LEFT_VIDO)*120)-((((LAT.toFixed(6))- LATITUDE_LEFT_BOTTOM_VIDO)/LATITUDE_DISTANCE_LEFT_VIDO)*PERCENT_OF_BUILDING_DEVIATION),
      longitude: ((((LONG.toFixed(6)) - LONGITUDE_LEFT_BOTTOM_VIDO)/LONGITUDE_DISTANCE_BOTTOM_VIDO)*100)-((((LONG.toFixed(6)) - LONGITUDE_LEFT_BOTTOM_VIDO)/LONGITUDE_DISTANCE_BOTTOM_VIDO)*PERCENT_OF_BUILDING_DEVIATION),
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
          if (positioningDeviationLAT == null) {
            setPositioningDeviationLAT(crd.latitude.toFixed(6));
            setPositioningDeviationLONG(crd.longitude.toFixed(6));
          }

          if (Math.abs(crd.latitude.toFixed(6) - positioningDeviationLAT) < 100 && Math.abs(crd.longitude.toFixed(6) - positioningDeviationLONG) < 100) {
            setPosition({
              latitude: ((((crd.latitude.toFixed(6))- LATITUDE_LEFT_BOTTOM_VIDO)/LATITUDE_DISTANCE_LEFT_VIDO)*100)-((((LAT.toFixed(6))- LATITUDE_LEFT_BOTTOM_VIDO)/LATITUDE_DISTANCE_LEFT_VIDO)*PERCENT_OF_BUILDING_DEVIATION),
              longitude: ((((crd.longitude.toFixed(6)) - LONGITUDE_LEFT_BOTTOM_VIDO)/LONGITUDE_DISTANCE_BOTTOM_VIDO)*100)-((((LONG.toFixed(6)) - LONGITUDE_LEFT_BOTTOM_VIDO)/LONGITUDE_DISTANCE_BOTTOM_VIDO)*PERCENT_OF_BUILDING_DEVIATION),
              latitudeDelta: 0.0421,
              longitudeDelta: 0.0421,
            });
          } else {
            setPosition({
              latitude: (((positioningDeviationLAT- LATITUDE_LEFT_BOTTOM_VIDO)/LATITUDE_DISTANCE_LEFT_VIDO)*100)-((((LAT.toFixed(6))- LATITUDE_LEFT_BOTTOM_VIDO)/LATITUDE_DISTANCE_LEFT_VIDO)*PERCENT_OF_BUILDING_DEVIATION),
              longitude: (((positioningDeviationLONG - LONGITUDE_LEFT_BOTTOM_VIDO)/LONGITUDE_DISTANCE_BOTTOM_VIDO)*100)-((((LONG.toFixed(6)) - LONGITUDE_LEFT_BOTTOM_VIDO)/LONGITUDE_DISTANCE_BOTTOM_VIDO)*PERCENT_OF_BUILDING_DEVIATION),
              latitudeDelta: 0.0421,
              longitudeDelta: 0.0421,
            });
          };
          
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
            useNativeDriver: true,
            bounciness:1
          }).start()
        }
      }

      // Modal
      const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
      }

    return (
        <SafeAreaView style={style.main_project}>
        <StatusBar
          hidden={false}
        />
            <View style={style.view_main}>

              <View style={{width:"100%", height:"10%",flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:10, zIndex:200, position:'relative'}}>
                  <TouchableOpacity style={{width:40, height:40, backgroundColor:'white', borderRadius:20, alignItems:'center', flexDirection:'column', justifyContent:'center'}}
                  onPress={() => {
                    navigation.goBack();
                  }}
                  >
                    <Icon5 name="arrow-circle-left" color={'#CB3837'} size={30} />
                  </TouchableOpacity>
                  {/* Search */}
                    <View style={{ height:'100%', padding:10}}>
                      <SelectList 
                          onSelect={() => setFloor(selected)}
                          setSelected={setSelected}
                          data={data}
                          search={false}
                          boxStyles={{borderRadius:10, backgroundColor:'rgba(255,255,255,0.8)', color: 'black'}}
                          dropdownStyles={{backgroundColor:'rgba(255,255,255,0.8)', height:'300%'}}
                          dropdownTextStyles = {{color:'black'}}
                          defaultOption={{ key:'1', value:'Tầng 1' }}
                        />
                    </View>
                </View>

              {/* Chỉnh map (chưa hoàng thiện) */}
              <View style={{width:'100%', height:'80%', zIndex:100, position:'relative'}}>
                <GestureHandlerRootView  style={[style.view_map,{transform:[{ rotate: "0deg" }]}]}>
                  <PinchGestureHandler 
                    onGestureEvent = {onZoomEventFunction}
                    onHandlerStateChange = {onZoomStateChangeFunction}
                  >
                    <Animated.Image 
                      source={listFloor[getfloor].image} 
                      style={{ width:"80%",height:"100%", alignItems:'center',
                        transform:[
                          {scale: scale}
                        ]
                      }}
                      resizeMode={'stretch'}
                    />
                  </PinchGestureHandler>
                </GestureHandlerRootView>
                <View style={{ width:100,height:100, borderRadius:50, backgroundColor:"rgba(32,90,167,0.2)",  position:'absolute',  left:String(position.longitude)+"%",  bottom:String(position.latitude)+"%",  alignItems:'center',  flexDirection:'row',  justifyContent:'center'}}>
                  <View style={style.view_inpersion_lager}>
                    <View style={style.view_inpersion}>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{width:'100%', height:'20%', flexDirection:'row', justifyContent:'flex-end'}}>
                <TouchableOpacity style={{width:60, height:60, borderRadius:30, alignItems:'center',backgroundColor:'rgba(255, 102, 102, 0.3)', flexDirection:'column', justifyContent:'center',  margin:10, position:'relative', zIndex:100}}
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                    <Icon5 name="plus-circle" color={'#CB3837'} size={50} />
                </TouchableOpacity>
              </View>
              {/* <Text style={{position:'absolute', top:80, left:10}}>
                {console.log(scale)}
                {
                  position.latitude+"||||"+position.longitude+"||||"
                }
              </Text> */}
              {/* <TouchableOpacity 
              style={style.btn_map_around}
              onPress={() =>{
                navigation.navigate("AroundMap")
              }}>
                <Image style={style.map_around} source={require("../../drawble/drawbleImg/minimap.png")}/>
              </TouchableOpacity> */}
              
            </View>
   </SafeAreaView>
    )
}
const style = StyleSheet.create({
  main_project: {
    width:'100%', 
    height:'100%', 
    padding:0, 
    backgroundColor:'white'
  },
  view_main: {
    width: widthWindow, 
    height: heightWindow, 
    position:'relative', 
  },
  view_map: {
    width:"500%", 
    height:'100%', 

  },
  image_map: {
    width:heightWindow+10, 
    height:widthWindow
  },
  view_outpersion: {
   
  },
  view_inpersion: {
    width:"90%", 
    height:"90%", 
    borderRadius:30, 
    backgroundColor:"#FF4500",
    
  },
  view_inpersion_lager: {
    width:"20%", 
    height:"20%", 
    borderRadius:40, 
    backgroundColor:'#cccc',
    position:'absolute', 
    alignItems:'center', 
    flexDirection:'row', 
    justifyContent:'center'
  },
 
  btn_map_around: {
    width:50,
    height:50,
    position:'absolute',
    top:110,
    left:10
  },
  map_around: {
    width:50,
    height:50,
    borderRadius:20,
  }
})

export default DetailMap