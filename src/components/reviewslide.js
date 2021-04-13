import React from 'react';
import {View,Text,Image,Dimensions,StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';


export const Width = Dimensions.get('window').width;
export const Slidewidth = Width - 40;
export const Slideheight = Slidewidth * 0.6;

const ReviewSlide = () => {
    return(
        <Swiper
            showsPagination={false}
            showsButtons={true}
            height={Slideheight}
            width={Slidewidth}
            style={{}}
            containerStyle={{backgroundColor:'#DDDDDD',borderRadius:8,overflow:'hidden'}}
            buttonWrapperStyle={{position:'absolute',top:0,left:0,}}
            >
            <View style={{width:Slidewidth,justifyContent:'center',alignItems:'center'}}>
                <Image 
                style={{resizeMode:'contain',width:Slidewidth,height:Slideheight}}
                source={require('../images/rv_thumb01.jpg')}/>
            </View>
            <View style={{width:Slidewidth,justifyContent:'center',alignItems:'center'}}>
                <Image 
                style={{resizeMode:'contain',width:Slidewidth,height:Slideheight}}
                source={require('../images/rv_thumb01.jpg')}/>
            </View>
            <View style={{width:Slidewidth,justifyContent:'center',alignItems:'center'}}>
                <Image 
                style={{resizeMode:'contain',width:Slidewidth,height:Slideheight}}
                source={require('../images/rv_thumb01.jpg')}/>
            </View>
        </Swiper>
    );
};


export default ReviewSlide;
