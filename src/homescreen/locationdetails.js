/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated, ScrollView } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import StarRating from '../component/StarRating';
// import SelectList from 'react-native-dropdown-select-list'
import Icon5 from 'react-native-vector-icons/FontAwesome5';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function LocationDetail({route,navigation}) {
    const [getDataPS, setData] = useState(route.params);
    return (
        <SafeAreaView style={{width:'100%', height:'100%', backgroundColor:"white"}}>
            <StatusBar hidden={false} 
            backgroundColor="#0D9648" />
                <View style={{width: widthWindow, height: heightWindow}}>
                    <View style={{width:"100%", height:"10%",flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:10, zIndex:200, position:'relative'}}>
                    <TouchableOpacity style={{width:40, height:40, backgroundColor:'white', borderRadius:20, alignItems:'center', flexDirection:'column', justifyContent:'center'}}
                    onPress={() => {
                        navigation.goBack();
                    }}
                    >
                        <Icon5 name="arrow-circle-left" color={'#CB3837'} size={30} />
                    </TouchableOpacity>
                    </View>
                    <View style={{width:"100%", height:"90%"}}>
                        <ScrollView style={{margin:10}}>
                            <View style={{margin:10}}>
                                <Text style={{color:'black', fontStyle:'800', fontSize: 30, }}>{getDataPS.title}</Text>
                                <Text style={{color: "black"}}>{getDataPS.description}</Text>
                                <StarRating ratings={getDataPS.rating} reviews={getDataPS.reviews} />
                                
                            </View>
                            <ScrollView style={{width:"100%", height:'50%'}} horizontal={true}>
                                {getDataPS.image.map((key, index) => (
                                   
                                    <Image 
                                        key={key}
                                        source={getDataPS.image[index]}
                                        style={{width:500, height:200, margin:10, borderRadius:20}}
                                        resizeMode="cover"
                                    />
                                ))}
                            </ScrollView>

                            <View style={{flexDirection:'row', justifyContent:'space-between', margin:10}}>
                                <TouchableOpacity style={{alignItems:'center'}} onPress={() => {

                                }}>
                                    <Icon5 name="directions" color={'#CB3837'} size={30} />
                                    <Text style={{color:"#CB3837"}}>ĐƯỜNG ĐI</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{alignItems:'center'}} onPress={() => {

                                }}>
                                    <Icon5 name="phone-alt" color={'#CB3837'} size={30} />
                                    <Text style={{color:"#CB3837"}}>GỌI</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{alignItems:'center'}} onPress={() => {

                                }}>
                                    <Icon5 name="share-square" color={'#CB3837'} size={30} />
                                    <Text style={{color:"#CB3837"}}>CHIA SẺ VỊ TRÍ</Text>
                                </TouchableOpacity>

                            </View>

                            <View style={{margin:10}}>
                                <View style={{margin:10}}>
                                    <Text style={{marginBottom:10, paddingBottom:5, color:'black', borderBottomColor:'black', borderBottomWidth:1}}>
                                        Địa chỉ: 394 Hoàng Văn Thụ, Phường 4, Tân Bình, Thành phố Hồ Chí Minh, Vietnam
                                    </Text>
                                    <Text style={{marginBottom:10, paddingBottom:5, color:'black', borderBottomColor:'black', borderBottomWidth:1}}>
                                        Giờ mở cửa: 8h sáng
                                    </Text>
                                    <Text style={{marginBottom:10, paddingBottom:5, color:'black', borderBottomColor:'black', borderBottomWidth:1}}>
                                        Giờ đóng cửa: 10h đêm
                                    </Text>
                                    <View style={{marginTop:20}}>
                                        <Text style={{marginBottom:10, paddingBottom:5, color:'black', borderBottomColor:'black', borderBottomWidth:1, fontSize:20, textAlign:'center'}}>
                                            Thực Đơn Cửa Hàng
                                        </Text>
                                        <Text style={{marginBottom:10, paddingBottom:5, color:'black', borderBottomColor:'black', borderBottomWidth:1}}>1 Miếng Gà Sốt Cay Ramyeon 1 Miếng Gà Sốt Cay Ramyeon ---- 49,000,000 đ</Text>
                                        <Text style={{marginBottom:10, paddingBottom:5, color:'black', borderBottomColor:'black', borderBottomWidth:1}}>
                                        Combo B – Gà Sốt Cay Ramyeon ---- 199,000,000 đ
                                        </Text>
                                        <Text style={{marginBottom:10, paddingBottom:5, color:'black', borderBottomColor:'black', borderBottomWidth:1}}>
                                        Combo A – Gà Sốt Cay Ramyeon ---- 199,000,000 đ
                                        </Text>
                                        <Text style={{marginBottom:10, paddingBottom:5, color:'black', borderBottomColor:'black', borderBottomWidth:1}}>
                                        1 Miếng Gà Sốt Cay Ramyeon ---- 49,000,000 đ
                                        </Text>
                                    </View>
                                </View>
                                <View style={{marginTop:10}}>
                                    <Text style={{fontSize:20, color:'black'}}>
                                        Đặt hàng qua:
                                    </Text>
                                    <View style={{margin:10, flexDirection:'row', justifyContent:'space-between'}}>
                                        <TouchableOpacity>
                                            <Image source={require("../../drawble/drawbleImg/gojek.png")} style={{width:50, height:50}}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Image source={require("../../drawble/drawbleImg/grabfood.png")} style={{width:50, height:50}}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Image source={require("../../drawble/drawbleImg/shopeefood.png")} style={{width:50, height:50}}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
       </SafeAreaView>
    );
}
export default LocationDetail