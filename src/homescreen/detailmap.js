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
import Geolocation from '@react-native-community/geolocation';
import Icon from "react-native-vector-icons/Ionicons";
import {Picker} from '@react-native-picker/picker';
// import SelectList from 'react-native-dropdown-select-list'
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
// import ImageViewer from 'react-native-image-zoom-viewer';
import ImageZoom from 'react-native-image-pan-zoom';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

// width and height map in App
const widthMap = widthWindow*4;
const heightMap = (heightWindow-(heightWindow*(20/100)));

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

// List Floor in build
const listFloor = [
  {
      area: 'cd_vido',
      floor: "floor0",
      user:"lager",
      detail: "Tầng Hầm",
      image: require("../../drawble/SoDoBoTri/Vido_school/SodoBotriHam.jpg")
    },
    {
      area: 'cd_vido',
      floor: "floor1",
      user:"lager",
      detail: "Tầng 1",
      image: require("../../drawble/SoDoBoTri/Vido_school/SodoBotri1-1.jpg")
    },
    {
      area: 'cd_vido',
      floor: "floorYard",
      user:"lager",
      detail: "Sân Trước",
      image: require("../../drawble/SoDoBoTri/Vido_school/SodoBotriSan.jpg")
    },
    {
      area: 'cd_vido',
      floor: "floor2",
      user:"lager",
      detail: "Tầng 2",
      image: require("../../drawble/SoDoBoTri/Vido_school/SodoBotri2.jpg")
    },
    {
      area: 'cd_vido',
      floor: "floor3",
      user:"lager",
      detail: "Tầng 3",
      image: require("../../drawble/SoDoBoTri/Vido_school/SodoBotri3.jpg")
    },
    {
      area: 'cd_vido',
      floor: "floor4",
      user:"lager",
      detail: "Tầng 4",
      image: require("../../drawble/SoDoBoTri/Vido_school/SodoBotri4.jpg")
    },
    {
      area: 'cd_vido',
      floor: "floor5",
      user:"lager",
      detail: "Tầng 5",
      image: require("../../drawble/SoDoBoTri/Vido_school/SodoBotri5.jpg")
    },
    {
      area: 'cd_vido',
      floor: "floor6",
      user:"lager",
      detail: "Tầng 6",
      image: require("../../drawble/SoDoBoTri/Vido_school/SodoBotri6.jpg")
    },
    {
      area: 'cd_vido',
      floor: "floor7",
      user:"lager",
      detail: "Tầng 7",
      image: require("../../drawble/SoDoBoTri/Vido_school/SodoBotri7.jpg")
    },
    {
      area: 'cd_vido',
      floor: "floor8",
      user:"lager",
      detail: "Tầng 8",
      image: require("../../drawble/SoDoBoTri/Vido_school/SodoBotri8.jpg")
    },
]


const listAreaCDLTT = [
  {
    area: "cd_lytutrong",
    floor: "floor1",
    user:"small",
    detail: "Khuôn viên",
    image: require("../../drawble/SoDoBoTri/LTT_school/mapLTT.png")
  },
]


// class Home extends Component {
    
// }

function DetailMap({route, navigation}){

    const [getfloor, setFloor] = useState(1)
    const [isModalVisible, setisModalVisible] = useState(false)
    const [positioningDeviationLAT, setPositioningDeviationLAT] = useState(null);
    const [positioningDeviationLONG, setPositioningDeviationLONG] = useState(null);
    const [selected, setSelected] = React.useState("floor1");
    const {id} = route.params;

    //value Location
    const [get_Location, set_Location] = useState({
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    });

    const [positionTS, setPositionTS] = useState({

      latitude: ((((LAT.toFixed(6))- LATITUDE_LEFT_BOTTOM_VIDO)/LATITUDE_DISTANCE_LEFT_VIDO)*120)-((((LAT.toFixed(6))- LATITUDE_LEFT_BOTTOM_VIDO)/LATITUDE_DISTANCE_LEFT_VIDO)*PERCENT_OF_BUILDING_DEVIATION),
      longitude: ((((LONG.toFixed(6)) - LONGITUDE_LEFT_BOTTOM_VIDO)/LONGITUDE_DISTANCE_BOTTOM_VIDO)*100)-((((LONG.toFixed(6)) - LONGITUDE_LEFT_BOTTOM_VIDO)/LONGITUDE_DISTANCE_BOTTOM_VIDO)*PERCENT_OF_BUILDING_DEVIATION),
      latitudeDelta: 0.0421,
      longitudeDelta: 0.0421,
    })
 

    const [position, setPosition] = useState({
        latitude: 0,
        longitude: 0,
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

          if (get_Location.longitude == 0 && get_Location.latitude == 0) {
            if ((position.longitude <= 100 && position.longitude >2) && (position.latitude <= 100 && position.latitude > 2)) {
              set_Location({
                latitude: position.longitude,
                longitude: position.latitude,
                latitudeDelta: 0.0421,
                longitudeDelta: 0.0421,
              });
            }
          }else {
            if (
              ((Number(position.longitude) <= (get_Location.longitude+5)) && (Number(position.longitude) >= (get_Location.longitude-5)))
              && 
              ((Number(position.latitude) <= (get_Location.latitude+5)) && (Number(position.latitude) >= (get_Location.latitude-5)))
              ) {
              set_Location({
                latitude: position.latitude,
                longitude: position.longitude,
                latitudeDelta: 0.0421,
                longitudeDelta: 0.0421,
              });
            }
          }
          
        }).catch((err) => {
          console.log(err);
        });

        // console.log(position.longitude+"|||"+position.latitude+"======"+get_Location.longitude+"||||"+get_Location.latitude);
      }, [position,get_Location]);
      // Modal
      // const changeModalVisibility = (bool) => {
      //   setisModalVisible(bool)
      // }

    

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
                    <View style={{ height:'100%', padding:5, position:"absolute", right:10,backfaceVisibility:'visible', borderColor:'black', backgroundColor:'#D1D0D0',borderWidth: 1,borderRadius:20 }}>
                      <Picker selectedValue= {selected} onValueChange = {(itemValue, itemIndex) => {setSelected(itemValue), setFloor(itemIndex)}} style={{width:170,height:50, }}>
                        {
                          listFloor[0].area == id ?  listFloor.map((e, index) => 
                          <Picker.Item key={e} label={listFloor[index].detail} value={listFloor[index].floor} />
                        ):  listAreaCDLTT.map((e, index) => 
                        <Picker.Item key={e} label={listAreaCDLTT[index].detail} value={listFloor[index].floor} />
                        )
                        }
                      </Picker>
                    </View>
                </View>

                <View style={{ width:"100%",height:"80%"}}>
                  <View style={[{width:"100%",height:"100%"}]}>
                    <ReactNativeZoomableView
                      maxZoom={3.5}
                      minZoom={1.0}
                     
                      initialZoom={1.0}
                      style={{
                        width:"100%",height:"100%", position:'relative'
                      }}
                    >
                      <View style={{width:"100%",height:"100%", position:'absolute', top:0, left:0}}>
                        <View style={{width:"100%",height:"100%",position:'relative', }}>
                          {listFloor[0].area == id?<Image style={[{width:"193%",height:"57%",position:'absolute', top:138, left: -180 }, {transform:[{ rotate: "90deg" }]}]}
                                source={listFloor[getfloor].image}
                                resizeMode="contain" />:<Image style={[{width:"193%",height:"57%",position:'absolute', top:138, left: -180 }, {transform:[{ rotate: "90deg" }]}]}
                                source={listAreaCDLTT[0].image}
                                resizeMode="contain" />
                              }
                          {get_Location.latitude > 0 && get_Location.longitude > 0? <View style={{ width:80,height:80, borderRadius:50, backgroundColor:"rgba(32,90,167,0.2)",  position:'absolute',left:(String(get_Location.latitude)+"%"),  bottom:(String(get_Location.longitude)+"%"), alignItems:'center',  flexDirection:'row',  justifyContent:'center'}}>
                            <View style={style.view_inpersion_lager}>
                              <View style={style.view_inpersion}>
                              </View>
                            </View>
                          </View>: null }
                        </View>
                      </View>
                    </ReactNativeZoomableView>
                  </View>
                </View>
              <View style={{width:'100%', height:'10%', flexDirection:'row', justifyContent:'flex-end'}}>
                <TouchableOpacity style={{width:60, height:60, borderRadius:30, alignItems:'center',backgroundColor:'rgba(255, 102, 102, 0.3)', flexDirection:'column', justifyContent:'center',  margin:10, position:'relative', zIndex:100}}
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                    <Icon5 name="plus-circle" color={'#CB3837'} size={50} />
                </TouchableOpacity>
              </View>
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
    width:widthMap,
    height:heightMap,

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