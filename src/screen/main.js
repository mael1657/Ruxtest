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
import MainComp, {NewPrd, MainReview} from '../components/maincomp';


import Icon from 'react-native-vector-icons/MaterialIcons';

export const Width = Dimensions.get('window').width;
export const Boxwidth = Width / 2 - 30;
export const Boxheight = Boxwidth * 1.4;

const MainScreen = ({navigation}) => {

    return (
    <View style={styles.container}>
        <Header/>
        <ScrollView style={styles.content}>
        <MainSlide/>
        <TouchableOpacity style={{backgroundColor:'#EBEBEB',borderRadius:10,marginHorizontal:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:15,}}>
          <Text style={{color:'#333',fontSize:17,fontFamily:'NotoSansKR-Medium',lineHeight:20,}}>내 상품 등록하기</Text>
          <Image
           style={{}}
           source={require('../images/ar_right.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding:15,width:Width}}>
          <Image 
            style={{resizeMode:'contain',width:'100%',height:100}}
            source={require('../images/main_banner01.jpg')}
          />
        </TouchableOpacity>
        <View style={{marginBottom:30,}}>
          <View style={{paddingHorizontal:20,paddingVertical:0,flexDirection:'row',justifyContent:'space-between',}}>
            <Text style={{fontFamily:'NotoSansKR-Bold',fontSize:20,}}>새로운 상품</Text>
            <TouchableOpacity 
            style={{flexDirection:'row',alignItems:'center',}}
            onPress={() => navigation.navigate('PrdList')}>
              <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',}}>전체보기</Text>
              <Image
               style={{height:10,resizeMode:'contain',}}
               source={require('../images/ar_right.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{paddingLeft:20,}}>
           <NewPrd/>
          </View>
        </View>
        <View style={{paddingBottom:30,}}>
           <View style={{paddingHorizontal:20,paddingVertical:0,flexDirection:'row',justifyContent:'space-between',}}>
                <Text style={{fontFamily:'NotoSansKR-Bold',fontSize:20,}}>실시간 리뷰</Text>
                <TouchableOpacity 
                style={{flexDirection:'row',alignItems:'center',}}
                onPress={() => navigation.navigate('ReviewList')}
                >
                  <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',}}>전체보기</Text>
                  <Image
                   style={{height:10,resizeMode:'contain',}}
                   source={require('../images/ar_right.png')}
                  />
                </TouchableOpacity>
           </View>
           <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',paddingHorizontal:20,}}>
              <MainReview/>
           </View>
        </View>
        <View style={styles.footer}>
          <View style={{width:150,height:60}}>
            <Image 
                source={require('../images/logo01.png')} 
                style={{
                  tintColor:'gray',
                  opacity:0.7,
                  marginBottom:20,
                  resizeMode:'contain',
                  width:'100%'
              }}/>
          </View>
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
