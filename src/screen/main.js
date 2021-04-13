import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
  Flatlist,
  Dimensions,
} from 'react-native';

import styles from '../style/style';
import Header from '../components/header';
// import Footer from '../components/footer';
import MainSlide from '../components/main_slide';
import SellerSlide from '../components/seller_slide';

export const Width = Dimensions.get('window').width;
export const Boxwidth = Width / 2 - 30;
export const Boxheight = Boxwidth * 1.4;

const MainScreen = () => {

    return (
    <View style={styles.container}>
        <Header/>
        <ScrollView style={styles.content}>
        <MainSlide/>
        <TouchableOpacity style={{backgroundColor:'#EBEBEB',borderRadius:10,marginHorizontal:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:15,paddingRight:15,paddingTop:15,paddingBottom:15,}}>
          <Text style={{color:'#333',fontSize:18,}}>내 상품 등록하기</Text>
          <Image
           style={{}}
           source={require('../images/ar_right.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding:15,width:Width}}>
          <Image 
            style={{resizeMode:'contain',width:'100%',}}
            source={require('../images/main_banner01.png')}
          />
        </TouchableOpacity>
        <View style={{marginBottom:30,}}>
          <View style={{padding:20,flexDirection:'row',justifyContent:'space-between',}}>
            <Text style={{fontSize:20,fontWeight:'bold',}}>새로운 상품</Text>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',}}>
              <Text style={{fontSize:13,}}>전체보기</Text>
              <Image
               style={{height:10,resizeMode:'contain',}}
               source={require('../images/ar_right.png')}
              />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator = {true} showsHorizontalScrollIndicator={false} style={{paddingLeft:20,}}>
           <TouchableOpacity style={styles.prdRow} >
              <View style={{width:155,height:155,borderColor:'#e3e3e3',borderWidth:1,borderRadius:15,justifyContent:'center',alignItems:'center',marginBottom:10,overflow:'hidden'}}>
                 <Image style={{resizeMode:'contain',width:'80%'}}
                    source={require('../images/item01.jpg')}
                 />
              </View>
              <View>
                  <Text style={{fontWeight:'700',fontSize:17,paddingBottom:2,}}>MAISON MARGIEA</Text>
                  <Text>입찰기간</Text>
                  <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                      <Text>~ 2021. 01. 30</Text>
                      <Text style={{justifyContent:'center',alignItems:'center',borderRadius:10,paddingLeft:8,paddingRight:8,backgroundColor:'#477DD1',fontSize:12,color:'#fff',}}>D-10</Text>
                  </View>
              </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.prdRow} >
              <View style={{width:155,height:155,borderColor:'#e3e3e3',borderWidth:1,borderRadius:15,justifyContent:'center',alignItems:'center',marginBottom:10,overflow:'hidden'}}>
                 <Image style={{resizeMode:'contain',width:'80%'}}
                    source={require('../images/item02.jpg')}
                 />
              </View>
              <View>
                  <Text style={{fontWeight:'700',fontSize:17,paddingBottom:2,}}>MAISON MARGIEA</Text>
                  <Text>입찰기간</Text>
                  <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                      <Text>~ 2021. 01. 30</Text>
                      <Text style={{justifyContent:'center',alignItems:'center',borderRadius:10,paddingLeft:8,paddingRight:8,backgroundColor:'#477DD1',fontSize:12,color:'#fff',}}>D-10</Text>
                  </View>
              </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.prdRow} >
              <View style={{width:155,height:155,borderColor:'#e3e3e3',borderWidth:1,borderRadius:15,justifyContent:'center',alignItems:'center',marginBottom:10,overflow:'hidden'}}>
                 <Image style={{resizeMode:'contain',width:'80%'}}
                    source={require('../images/item03.jpg')}
                 />
              </View>
              <View>
                  <Text style={{fontWeight:'700',fontSize:17,paddingBottom:2,}}>MAISON MARGIEA</Text>
                  <Text>입찰기간</Text>
                  <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                      <Text>~ 2021. 01. 30</Text>
                      <Text style={{justifyContent:'center',alignItems:'center',borderRadius:10,paddingLeft:8,paddingRight:8,backgroundColor:'#477DD1',fontSize:12,color:'#fff',}}>D-10</Text>
                  </View>
              </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.prdRow} >
              <View style={{width:155,height:155,borderColor:'#e3e3e3',borderWidth:1,borderRadius:15,justifyContent:'center',alignItems:'center',marginBottom:10,overflow:'hidden'}}>
                 <Image style={{resizeMode:'contain',width:'80%'}}
                    source={require('../images/item04.jpg')}
                 />
              </View>
              <View>
                  <Text style={{fontWeight:'700',fontSize:17,paddingBottom:2,}}>MAISON MARGIEA</Text>
                  <Text>입찰기간</Text>
                  <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                      <Text>~ 2021. 01. 30</Text>
                      <Text style={{justifyContent:'center',alignItems:'center',borderRadius:10,paddingLeft:8,paddingRight:8,backgroundColor:'#477DD1',fontSize:12,color:'#fff',}}>D-10</Text>
                  </View>
              </View>
           </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={{paddingBottom:30,}}>
           <View style={{padding:20,flexDirection:'row',justifyContent:'space-between',}}>
                <Text style={{fontSize:20,fontWeight:'bold',}}>실시간 리뷰</Text>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',}}>
                  <Text style={{fontSize:13,}}>전체보기</Text>
                  <Image
                   style={{height:10,resizeMode:'contain',}}
                   source={require('../images/ar_right.png')}
                  />
                </TouchableOpacity>
           </View>
           <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',paddingHorizontal:20,}}>
              <TouchableOpacity style={{
                backgroundColor:'#F1F1F1',
                width:Boxwidth,
                height:Boxheight,
                overflow:'hidden',
                borderRadius:9,
                marginBottom:20,
              }}>
                <Image
                  style={{width:200,height:143,justifyContent:'center',alignItems:'center',}}
                  source={require('../images/rv_thumb01.jpg')}
                />
                <Text style={styles.reviewText} numberOfLines={2}>매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:10,}}>
                  <View style={{flexDirection:'row',}}>
                    <Image
                    style={styles.star}
                    source={require('../images/star01.png')}
                    />
                    <Image
                    style={styles.star}
                    source={require('../images/star01.png')}
                    />
                    <Image
                    style={styles.star}
                    source={require('../images/star01.png')}
                    />
                    <Image
                    style={styles.star}
                    source={require('../images/star01.png')}
                    />
                    <Image
                    style={styles.star}
                    source={require('../images/star02.png')}
                    />
                  </View>
                  <Text>
                    <Text style={{color:'#444'}}>4.0</Text>
                    <Text style={{color:'#999'}}>/5</Text>
                  </Text>
                </View>
                <Text style={{alignSelf:'flex-end',paddingRight:10,color:'#999',}}>nappeni</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                backgroundColor:'#F1F1F1',
                width:Boxwidth,
                height:Boxheight,
                overflow:'hidden',
                borderRadius:9,
                marginBottom:20,
              }}>
                <Image
                  style={{width:200,height:143,justifyContent:'center',alignItems:'center',}}
                  source={require('../images/rv_thumb01.jpg')}
                />
                <Text style={styles.reviewText} numberOfLines={2}>매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:10,}}>
                  <View style={{flexDirection:'row',}}>
                    <Image
                    style={styles.star}
                    source={require('../images/star01.png')}
                    />
                    <Image
                    style={styles.star}
                    source={require('../images/star01.png')}
                    />
                    <Image
                    style={styles.star}
                    source={require('../images/star01.png')}
                    />
                    <Image
                    style={styles.star}
                    source={require('../images/star01.png')}
                    />
                    <Image
                    style={styles.star}
                    source={require('../images/star02.png')}
                    />
                  </View>
                  <Text>
                    <Text style={{color:'#444'}}>4.0</Text>
                    <Text style={{color:'#999'}}>/5</Text>
                  </Text>
                </View>
                <Text style={{alignSelf:'flex-end',paddingRight:10,color:'#999',}}>nappeni</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                backgroundColor:'#F1F1F1',
                width:Boxwidth,
                height:Boxheight,
                overflow:'hidden',
                borderRadius:9,
                marginBottom:20,
              }}>
                <Image
                  style={{width:200,height:143,justifyContent:'center',alignItems:'center',}}
                  source={require('../images/rv_thumb01.jpg')}
                />
                <Text style={styles.reviewText} numberOfLines={2}>매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:10,}}>
                  <View style={{flexDirection:'row',}}>
                    <Image
                    style={styles.star}
                    source={require('../images/star01.png')}
                    />
                    <Image
                    style={styles.star}
                    source={require('../images/star01.png')}
                    />
                    <Image
                    style={styles.star}
                    source={require('../images/star01.png')}
                    />
                    <Image
                    style={styles.star}
                    source={require('../images/star01.png')}
                    />
                    <Image
                    style={styles.star}
                    source={require('../images/star02.png')}
                    />
                  </View>
                  <Text>
                    <Text style={{color:'#444'}}>4.0</Text>
                    <Text style={{color:'#999'}}>/5</Text>
                  </Text>
                </View>
                <Text style={{alignSelf:'flex-end',paddingRight:10,color:'#999',}}>nappeni</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                backgroundColor:'#F1F1F1',
                width:Boxwidth,
                height:Boxheight,
                overflow:'hidden',
                borderRadius:9,
                marginBottom:20,
              }}>
                <Image
                  style={{width:200,height:143,justifyContent:'center',alignItems:'center',}}
                  source={require('../images/rv_thumb01.jpg')}
                />
                <Text style={styles.reviewText} numberOfLines={2}>매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:10,}}>
                  <View style={{flexDirection:'row',}}>
                    <Image
                    style={styles.star}
                    source={require('../images/star01.png')}
                    />
                    <Image
                    style={styles.star}
                    source={require('../images/star01.png')}
                    />
                    <Image
                    style={styles.star}
                    source={require('../images/star01.png')}
                    />
                    <Image
                    style={styles.star}
                    source={require('../images/star01.png')}
                    />
                    <Image
                    style={styles.star}
                    source={require('../images/star02.png')}
                    />
                  </View>
                  <Text>
                    <Text style={{color:'#444'}}>4.0</Text>
                    <Text style={{color:'#999'}}>/5</Text>
                  </Text>
                </View>
                <Text style={{alignSelf:'flex-end',paddingRight:10,color:'#999',}}>nappeni</Text>
              </TouchableOpacity>
           </View>
        </View>
        <View style={styles.footer}>
          <Image source={require('../images/logo01.png')} style={{tintColor:'gray', opacity:0.7,marginBottom:20,}}/>
          <View style={{flexDirection:'column',marginBottom:20,}}>
            <Text style={styles.footText}>상호명 / 대표자 최태준 / 개인정보보호책임자 김성준</Text>
            <Text style={styles.footText}>사업자등록번호 123-45-67893</Text>
            <Text style={styles.footText}>통신판매업 신고번호 : 2021-서울강남-01234</Text>
            <Text style={styles.footText}>서울특별시 강남구 봉은사로 1</Text>
            <Text style={styles.footText}>고객센터 : 070-1234-5678 / fax : 07012345678</Text>
          </View>
          <Text style={styles.footText}>COPYRIGHT © 2021 DEALMATE LTD ALL RIGHTS RESERVED</Text>
        </View>
        </ScrollView>
    </View>
      );
}

export default MainScreen;
