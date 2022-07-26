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
    AppRegistry,
    BackHandler,
    Platform,ScrollView } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import MapView from 'react-native-maps';
import { Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import { check, PERMISSIONS, RESULTS, request, checkMultiple, requestMultiple, openSettings } from 'react-native-permissions'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Markers from '../model/mapData';
import StarRating from '../component/StarRating';


const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;
const CARD_HEIGHT = 220;
const CARD_WIDTH = widthWindow * 0.8;
const SPACING_FOR_CARD_INSET = widthWindow * 0.1 - 10;

// lat and long center building


//10.851655221139566, 106.62816684009636

const LAT = 10.851655221139566
const LONG =  106.62816684009636;

// class Home extends Component {
    
// }


const Images = [
  { image: require("../../drawble/drawbleImg/logoVido.png") },
];

const markers = [
  {
    coordinate: {
      latitude: 10.85182111358613,
      longitude:  106.62807166628698
    },
    id:"cd_vido",
    title: "Cao Đẳng Viễn Đông",
    description: "Có việc làm đúng ngành",
    imagelogo: require("../../drawble/drawbleImg/logoVido.png"),
    imagebanner: require("../../drawble/drawbleImg/Banner_Vido.gif"),
    image: [require("../../drawble/drawbleImg/Banner_Vido.gif"),require("../../drawble/drawbleImg/viendong.jpg")],
    rating: 4,
    reviews: 99,
  },
  {
    //10.852058, 106.629597
    coordinate: {
      latitude: 10.797441735177092,
      longitude: 106.65608245760271,
    },
    id : "cd_lytutrong",
    title: "Cao Đẳng Lý Tự Trọng",
    description: "Trường cao đẳng cộng đồng ở Hồ Chí Minh",
    imagelogo: require("../../drawble/drawbleImg/Lytutrong.png"),
    imagebanner: require("../../drawble/drawbleImg/Banner_LTT.jpg"),
    image: [require("../../drawble/drawbleImg/Banner_LTT.jpg"),require("../../drawble/drawbleImg/lytutrong.jpg")],
    rating: 5,
    reviews: 102,
  },

  {
    coordinate: {
      latitude: 10.796531543810197, 
      longitude:  106.65712176038048
    },
    id:"hong_phat_com",
    title: "Cơm gà hồng phát",
    description: "Cơm là phải ngon.",
    imagelogo: require("../../drawble/drawbleImg/image_ad/banner_hongphat.png"),
    imagebanner: require("../../drawble/drawbleImg/image_ad/banner_hongphat.png"),
    image: [require("../../drawble/drawbleImg/image_ad/tiệm cơm gà Hồng Phát.jpg"), require("../../drawble/drawbleImg/image_ad/tiệm cơm gà Hồng Phát2.jpg")],
    rating: 4,
    reviews: 109,
  },

  {
    coordinate: {
      latitude: 10.79614162506003, 
      longitude:  106.65635108009506
    },
    id:"TEXAS_CHICKEN",
    title: "TEXAS CHICKEN",
    description: "Bigger. Juicier. Crunchier",
    imagelogo: require("../../drawble/drawbleImg/image_ad/images.png"),
    imagebanner: require("../../drawble/drawbleImg/image_ad/chicken_banner.jpg"),
    image: [require("../../drawble/drawbleImg/image_ad/Texas.jpg"), require("../../drawble/drawbleImg/image_ad/Texas2.jpg")],
    rating: 4,
    reviews: 99,
  },

  {
    coordinate: {
      latitude: 10.796258212539934, 
      longitude:  106.65505242344013
    },
    id:"khanh_nguyen_su",
    title: "Bánh su Khánh Nguyễn",
    description: "Bánh su ngon sài thành.",
    imagelogo: require("../../drawble/drawbleImg/image_ad/banner_khanhnguyen.jpg"),
    imagebanner: require("../../drawble/drawbleImg/image_ad/banner_khanhnguyen.jpg"),
    image: [require("../../drawble/drawbleImg/image_ad/Bánh Su Khánh Nguyễn .png"),require("../../drawble/drawbleImg/image_ad/Bánh Su Khánh Nguyễn 2.png")],
    rating: 5,
    reviews: 299,
  },

  {
    coordinate: {
      latitude: 10.795858225784471, 
      longitude:  106.65418298836633 
    },
    id:"mon_fastfood",
    title: "Quán Moon Fast Food",
    description: "Fast and Good",
    imagelogo: require("../../drawble/drawbleImg/image_ad/banner_mon.jpg"),
    imagebanner: require("../../drawble/drawbleImg/image_ad/banner_mon.jpg"),
    image: [require("../../drawble/drawbleImg/image_ad/Quán Moon Fast Food.png"),require("../../drawble/drawbleImg/image_ad/Quán Moon Fast Food2.png")],
    rating: 4,
    reviews: 99,
  },

  {
    coordinate: {
      latitude: 10.795929048495037, 
      longitude:  106.65544082321642
    },
    id:"Beefsteak_sister",
    title: "Beefsteak Hai Chị Em",
    description: "Beefsteak ngon, giá rẻ.",
    imagelogo: require("../../drawble/drawbleImg/image_ad/banner_sister.jpg"),
    imagebanner: require("../../drawble/drawbleImg/image_ad/banner_sister.jpg"),
    image: [require("../../drawble/drawbleImg/image_ad/Beefsteak Hai Chị Em.jpg"),require("../../drawble/drawbleImg/image_ad/Beefsteak Hai Chị Em2.png")],
    rating: 5,
    reviews: 79,
  },

  {
    coordinate: {
      latitude: 10.796591777837238,
      longitude: 106.65855545890962
    },
    id:"coffee_kai",
    title: "KAI Coffee - Út Tịch",
    description: "Coffee and Chill",
    imagelogo: require("../../drawble/drawbleImg/image_ad/banner_kai.jpg"),
    imagebanner: require("../../drawble/drawbleImg/image_ad/banner_kai.jpg"),
    image: [require("../../drawble/drawbleImg/image_ad/KAI Coffee - Út Tịch.png"),require("../../drawble/drawbleImg/image_ad/Quán Moon Fast Food2.png")],
    rating: 5,
    reviews: 129,
  },
 
  {
    coordinate: {
      latitude: 10.8522596822793, 
      longitude: 106.62943852607353
    },
    id:"coffee_cof",
    title: "Cof Coffee",
    description: "Coffee and Chill",
    imagelogo: require("../../drawble/drawbleImg/image_ad/cof_logo.png"),
    imagebanner: require("../../drawble/drawbleImg/image_ad/banner_cof.jpeg"),
    image: [require("../../drawble/drawbleImg/image_ad/cof1.png"),require("../../drawble/drawbleImg/image_ad/cof2.png")],
    rating: 5,
    reviews: 129,
  },
];

const markers_ad = [


]


function HomeActivity({navigation}){

  const categories = [
    { 
      name: 'Thức ăn nhanh', 
      icon: <MaterialCommunityIcons style={style.chipsIcon} name="food-fork-drink" size={18} />,
    },
    {
      name: 'Nhà hàng',
      icon: <Ionicons name="restaurant" style={style.chipsIcon} size={18} />,
    },
    {
      name: 'Khách sạn',
      icon: <Fontisto name="hotel" style={style.chipsIcon} size={15} />,
    },
    {
      name: 'Nhà riêng',
      icon: <Fontisto name="home" style={style.chipsIcon} size={15} />,
    },
  ]
  const [getLawPermission, setLawPermission] = useState(false);
    const requestPermission = () => {
      request(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION).then((response) => {
        // console.log(response)
      })
    }

    const checkPermission = () => {
      check(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION)
        .then((result) => {
          switch (result) {
            case RESULTS.DENIED:
              BackHandler.exitApp();
              // console.log('The permission has not been requested / is denied but requestable');
              break;
            case RESULTS.GRANTED:
              // console.log('The permission is granted');
              setLawPermission(true)
              break;
            case RESULTS.BLOCKED:
              BackHandler.exitApp();
              // console.log('The permission is denied and not requestable anymore');
              break;
          }
        })
        .catch((error) => {
          // …
        });
    }
    const runningRequest = () =>{
      if (getLawPermission == false) {
        requestPermission();
        checkPermission();
      }
    }

    const [position, setPosition] = useState(null);
    

    const PositionDF = () => {
      Geolocation.getCurrentPosition((pos) => {
        const crd = pos.coords;
        setPosition({
          latitude: crd.latitude ,
          longitude: crd.longitude ,
         
          latitudeDelta: 0.0421,
          longitudeDelta: 0.0421,
        });
      }).catch((err) => {
        console.log(err);
      })

    }

    const [indexLocation, setIndexLocation] = useState(1);
    const topMotion = useRef(new Animated.Value(-(Dimensions.get('window').height))).current;
    const topMotionAD = useRef(new Animated.Value(-(Dimensions.get('window').height))).current;


    const topView = () => {
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(topMotion, {
        toValue: Dimensions.get('window').height/30,
        duration: 500,
        useNativeDriver: false
      }).start();
    };

    const bottomView = () => {
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(topMotion, {
        toValue: (-(Dimensions.get('window').height)),
        duration: 500,
        useNativeDriver: false
      }).start();
    };

    const topViewAD = () => {
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(topMotionAD, {
        toValue: Dimensions.get('window').height/12,
        duration: 500,
        useNativeDriver: false
      }).start();
    };

    const bottomViewAD = () => {
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(topMotionAD, {
        toValue: (-(Dimensions.get('window').height)),
        duration: 500,
        useNativeDriver: false
      }).start();
    };

      useEffect(() => {
        if (position == null) {
          PositionDF();
          Geolocation.stopObserving();
        }
        runningRequest();
      });

      const _map = React.useRef(null);
      const _scrollView = React.useRef(null);

      const onMarkerPress = (mapEventData) => {
        const markerID = mapEventData._targetInst.return.key;
    
        let x = (markerID * CARD_WIDTH) + (markerID * 20); 
        if (Platform.OS === 'ios') {
          x = x - SPACING_FOR_CARD_INSET;
        }
    
        _scrollView.current.scrollTo({x: x, y: 0, animated: true});
      }

      const scale = useRef(new Animated.Value(1)).current;

      const onZoomEventFunction = Animated.event(
        [{
          nativeEvent: { scale: scale }
        }],
        {
          useNativeDriver: true
        }
      )
      const mapStyle = [
        {
          "featureType": "landscape.man_made",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.attraction",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.business",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.business",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi.government",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        }
      ]
   
    return (
        <SafeAreaView style={style.main_project}>
          <StatusBar
            hidden={false} 
            backgroundColor="#0D9648"
          />
            <View style={style.main_view}>
              <MapView
                style={style.map_view}
                  initialRegion={
                    position
                  }
                  showsUserLocation={true}
                  showsMyLocationButton = {true}
                  mapType="standard"
                  zoomTapEnabled= {true}
                  minZoomLevel={0}
                  maxZoomLevel={50}
                  followsUserLocation={true}
                  showsCompass={true}
                  showsBuildings={true}
                  customMapStyle={mapStyle}
                  showsIndoors={true}
                  userLocationUpdateInterval = {500}
                  >
                  {/* <Marker
                    style={style.marker_point}
                      coordinate={{
                        latitude: 10.85182111358613,
                        longitude:  106.62807166628698
                      }}
                      title={"Cao Đẳng Viễn Đông"}
                      description={"Có việc làm đúng ngành"}
                      onPress={() => {
                        navigation.navigate("DetailMap")
                      }}
                  >
                    <View style={style.marker_point}>
                      <Image style={style.marker_point} source={require("../../drawble/drawbleImg/logoVido.png")}/>
                    </View>
                  </Marker> */}

                  {/* <Marker
                    style={{}}
                      coordinate={{
                        latitude: 10.796775414948181,  
                        longitude:  106.65606719267605,
                      }}
                      title={"Me"}
                      description={""}
                  >
                    <View style={{backgroundColor:'blue', width:10, height:10, borderRadius:20}}>
                    </View>
                  </Marker> */}
                   {markers.map((marker, index) => {
                     return(
                      <Marker key={index} 
                      coordinate={marker.coordinate} 
                      title={marker.title}
                      description={marker.description}
                      onPress={() => {
                        setIndexLocation(index),
                        topView();
                      }}
                      >
                          <View style={style.marker_point}>
                            <Image
                              source={marker.imagelogo}
                              style={style.marker_point}
                            />
                          </View>
                      </Marker>
                     )
                  })}

                  {/* Marker Ad */}
                  {/* {markers_ad.map((marker_ad, id) => {
                     return(
                      <Marker key={id} 
                      coordinate={marker_ad.coordinate} 
                      title={marker_ad.title}
                      description={marker_ad.description}
                      onPress={() => {
                        setIndexLocation(id),
                        topViewAD();
                      }}
                      >
                          <View style={style.markers_point}>
                            <Image
                              source={marker_ad.imagelogo}
                              style={style.marker_point}
                            />
                          </View>
                      </Marker>
                     )
                  })} */}
              </MapView>

              {/* search and scrollview search */}
              <View style={style.searchBox}>
                <Icon name="map-marked-alt" color={'#CB3837'} size={20} />
                <TextInput 
                  placeholder="Search here"
                  placeholderTextColor="#000"
                  autoCapitalize="none"
                  style={{flex:1,padding:0, marginLeft: 10}}
                />
                <Ionicons name="search" size={20} color="#900" />
              </View>
              <ScrollView
                 horizontal
                 scrollEventThrottle={1}
                 showsHorizontalScrollIndicator={false}
                 height={50}
                 style={style.chipsScroolView}
                 contentInset={{ // iOS only
                   top:0,
                   left:0,
                   bottom:0,
                   right:20
                 }}
                 contentContainerStyle={{paddingRight:20}}
              >
                {categories.map((category, index) => (
                  <TouchableOpacity key={index} style={style.chipsItem}>
                    {category.icon}
                    <Text>{category.name}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              {/* View detail */}

              {markers[indexLocation].id == "cd_vido" || markers[indexLocation].id == "cd_lytutrong" ? <Animated.View style={[style.card, {bottom:topMotion}]} key={indexLocation}>
                <Image 
                      source={markers[indexLocation].imagebanner}
                      style={style.cardImage}
                      resizeMode="cover"
                    />
                    <View style={style.textContent}>
                      <View style={{flexDirection:'row',padding:10}}>
                        <View style={{flex:1}}>
                          <Text numberOfLines={1} style={style.cardtitle}>{markers[indexLocation].title}</Text>
                          <StarRating ratings={markers[indexLocation].rating} reviews={markers[indexLocation].reviews} />
                          <Text numberOfLines={1} style={style.cardDescription}>{markers[indexLocation].description}</Text>
                        </View>
                        <View style={{flex:1}}>
                          <TouchableOpacity
                          onPress={() => {
                            // bottomView();
                            navigation.navigate("LocationDetail", {
                              coordinate: {
                                latitude: markers[indexLocation].coordinate.latitude,
                                longitude:  markers[indexLocation].coordinate.longitude
                              },
                              id:markers[indexLocation].id,
                              title: markers[indexLocation].title,
                              description: markers[indexLocation].description,
                              imagelogo: markers[indexLocation].imagelogo,
                              imagebanner: markers[indexLocation].imagebanner,
                              image: markers[indexLocation].image,
                              rating: markers[indexLocation].rating,
                              reviews: markers[indexLocation].reviews,
                            },);
                          }}
                          >
                          <View style={{backgroundColor:'#CB3837',marginTop:10, padding:10, borderRadius:20, alignItems:'center'}}>
                            <Text style={{color:'white'}}>Xem chi tiết</Text>
                          </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          // bottomView();
                          navigation.navigate("DetailMap", {
                            id: markers[indexLocation].id
                          });
                        }}
                      >
                        <View style={{backgroundColor:'green',marginTop:10, padding:10, borderRadius:20, alignItems:'center'}}>
                          <Text style={{color:'white'}}>Xem bản đồ chi tiết</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                        <TouchableOpacity
                          onPress={() => {
                            bottomView();
                          }}
                          style={[style.signIn, {borderColor: '#FF6347', borderWidth: 1}]}
                        >
                          <Text style={[style.textSign, {color: '#FF6347'}]}>X</Text>
                        </TouchableOpacity>
                </Animated.View> :<Animated.View style={[style.card, {bottom:topMotion}]} key={indexLocation}>
                <Image 
                      source={markers[indexLocation].imagebanner}
                      style={style.cardImage}
                      resizeMode="cover"
                    />
                    <View style={style.textContent}>
                      <View style={{flexDirection:'row',padding:10}}>
                        <View style={{flex:1}}>
                          <Text numberOfLines={1} style={style.cardtitle}>{markers[indexLocation].title}</Text>
                          <StarRating ratings={markers[indexLocation].rating} reviews={markers[indexLocation].reviews} />
                          <Text numberOfLines={1} style={style.cardDescription}>{markers[indexLocation].description}</Text>
                        </View>
                        <View style={{flex:1}}>
                          <TouchableOpacity
                          onPress={() => {
                            // bottomView();
                            navigation.navigate("LocationDetail", {
                              coordinate: {
                                latitude: markers[indexLocation].coordinate.latitude,
                                longitude:  markers[indexLocation].coordinate.longitude
                              },
                              id:markers[indexLocation].id,
                              title: markers[indexLocation].title,
                              description: markers[indexLocation].description,
                              imagelogo: markers[indexLocation].imagelogo,
                              imagebanner: markers[indexLocation].imagebanner,
                              image: markers[indexLocation].image,
                              rating: markers[indexLocation].rating,
                              reviews: markers[indexLocation].reviews,
                            });
                          }}
                          >
                          <View style={{backgroundColor:'#CB3837',marginTop:10, padding:10, borderRadius:20, alignItems:'center'}}>
                            <Text style={{color:'white'}}>Xem chi tiết</Text>
                          </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          // bottomView();
                          // navigation.navigate("DetailMap", {
                          //   id: markers[indexLocation].id
                          // });
                        }}
                      >
                        <View style={{backgroundColor:'#CB3837',marginTop:10, padding:10, borderRadius:20, alignItems:'center', flexDirection:'row', justifyContent:'center', width:"40%"}}>
                          <Icon name="map-marked-alt" color={'white'} size={20} />
                          <Text style={{color:'white'}}> Gọi điện thoại</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                        <TouchableOpacity
                          onPress={() => {
                            bottomView();
                          }}
                          style={[style.signIn, {borderColor: '#FF6347', borderWidth: 1}]}
                        >
                          <Text style={[style.textSign, {color: '#FF6347'}]}>X</Text>
                        </TouchableOpacity>
                </Animated.View> }
                {/* VIew AD */}
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
    width:25, 
    height:25,
    borderRadius:20
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
    height:"45%",
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
      width: 45,
      height:45,
      padding:8,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      backgroundColor:'white'
      
  },
  textSign: {
      fontSize: 14,
      fontWeight: 'bold'
  }
})

export default HomeActivity