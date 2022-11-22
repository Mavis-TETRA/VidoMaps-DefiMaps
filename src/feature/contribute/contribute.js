/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated } from 'react-native';
import React from 'react';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function Contribute({navigation}) {
    return (
        <SafeAreaView style={style.body}>
            <StatusBar hidden={false}
            backgroundColor="#0D9648" />
                <View style={style.view}>
                    <Text>Contribute</Text>
                </View>
       </SafeAreaView>
    );
}

const style = StyleSheet.create({
    body:{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    view:{
        width: widthWindow,
        height: heightWindow,
    },
});

export default Contribute
