import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet, Dimensions, Image, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import { DetailHead } from '../components/header';
import Footer from '../components/footer';
import ReviewSlide from '../components/reviewslide';

import Product from '../components/product';
import BotLine from '../components/bottomline';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Width = Dimensions.get('window').width;

export const Box = Width / 4 - 18;
export const Boxheight = Box * 0.7;


const ReviewDetail = ({navigation}) => {
    const rvitems = [
        {
            id: 1,
            image: require('../images/rv_thumb01.jpg'),
        },
        {
            id: 2,
            image: require('../images/rv_thumb01.jpg'),
        },
        {
            id: 3,
            image: require('../images/no_img.png'),
        },
        {
            id: 4,
            image: require('../images/no_img.png'),
        },
    ]

    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff',}}>
            <DetailHead title="리뷰 상세"/>
            <ScrollView>
                <View style={{padding:20,}}>
                    <Product/>
                </View>
                <BotLine/>
                <View style={{padding:20,}}>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    borderBottomWidth:1,
                    borderBottomColor:'#eee',
                    paddingBottom:10,
                }}>
                    <Text style={{fontSize:16,fontFamily:'NotoSansKR-Bold',lineHeight:20,}}>별점</Text>
                    <Text style={{fontSize:13,fontFamily:'NotoSansKR-Regular',lineHeight:15,color:'#B7B7B7'}}><Text style={{fontFamily:'NotoSansKR-Regular',lineHeight:15,color:'#477DD1'}}>4.0</Text>/5</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingTop:10,paddingBottom:20,}}>
                        <Icon name="star" size={40} color="#477DD1"/>
                        <Icon name="star" size={40} color="#477DD1"/>
                        <Icon name="star" size={40} color="#477DD1"/>
                        <Icon name="star" size={40} color="#477DD1"/>
                        <Icon name="star-border" size={40} color="#DDDDDD"/>
                    </View>
                    <Text style={styles.title}>상세한 후기</Text>
                    <View style={{paddingHorizontal:20,paddingVertical:10,backgroundColor:'#f8f8f8',borderRadius:7,marginBottom:20,}}>
                        <Text style={styles.textbox}>매우 좋아요 잘 사용할게요 여태 산 제품 중에서 만족도가 제일 높았어요. 매우 좋아요 잘 사용할게요 여태 산 제품 중에서만족도가 제일 높았어요. </Text>

                        <Text style={styles.textbox}>매우 좋아요 잘 사용할게요 여태 산제품 중에서 만족도가 제일 높았어요. 매우 좋아요 잘 사용할게요 여태 산 제품 중에서 만족도가 제일 높았어요. 매우 좋아요 잘 사용할게요</Text>
                    </View>
                    <Text style={styles.title}>리뷰 사진</Text>
                    <View style={{justifyContent:'center',alignItems:'center',paddingBottom:80}}>
                        <ReviewSlide/>
                        <View style={{flex:1,paddingVertical:20,}}>
                            <ScrollView style={{}} horizontal={true}>

                                {rvitems.map((rvitem) => (
                                    <ReviewItem key={rvitem.id} rvitem={rvitem}/>
                                ))} 
                                
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

function ReviewItem({rvitem}){
    return(
        <TouchableOpacity style={{
            width:Box,
            height:Boxheight,
            borderWidth:1,
            borderColor:'#eee',
            backgroundColor:'#F1F1F1',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:7,
            overflow:'hidden',
            marginRight:10,
            }}>
            <Image 
            source={rvitem.image}
            style={{resizeMode:'contain',width:Box}}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textbox:{
        paddingVertical:7,
        fontSize:14,
        fontFamily:'NotoSansKR-Regular',
    },
    title:{
        fontSize:16,
        fontFamily:'NotoSansKR-Bold',
        lineHeight:20,
        paddingBottom:20,
    }
})

export default ReviewDetail;
