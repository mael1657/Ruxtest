import React from 'react';
import {View, Text, TouchableOpacity, TouchableWithoutFeedback, Dimensions, ScrollView, Image, StyleSheet} from 'react-native';

import Header, {DetailHead} from '../components/header';
import Icon from 'react-native-vector-icons/Ionicons';

export const Width = Dimensions.get('window').width / 2;
export const PADDING = 20;

const PrdDetail = ({navigation}) => {
  return(
    <View style={{flex:1,backgroundColor: '#fff'}}>
      <DetailHead title="상품 정보"/>
      <ScrollView style={{flex:1,}}>
        <View style={{flex:1,width:'100%',height:250,}}>
          <Image
            style={{resizeMode: 'cover',width:'100%'}}
            source={require('../images/info_item01.jpg')}
          />
        </View>
        <View style={{width:'100%',height:120,justifyContent: 'center',alignItems: 'center',position:'absolute',top:185,}}>
          <View style={{width:100,height:100,borderRadius:50,backgroundColor: '#fff',justifyContent:'center',alignItems:'center',elevation: 10,}}>
            <Image
            style={{resizeMode: 'center'}}
            source={require('../images/make02.jpg')}
            />
          </View>
        </View>
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center',marginBottom:10,marginTop:65,}}>
          <Text style={{fontSize:13,fontFamily:'NotoSansKR-Regular',lineHeight:15,}}>지방시</Text>
          <Text style={{fontSize:24,fontFamily:'NotoSansKR-Bold',paddingBottom:10,lineHeight:35,}}>MAISON MARGIEA</Text>
          <Text style={{backgroundColor:'#477DD1',color:'#fff',fontFamily:'NotoSansKR-Bold',lineHeight:18,paddingHorizontal: 20,paddingVertical: 6,borderRadius:30,}}>~ 2021. 01. 30 (D-5)</Text>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent: 'space-between',alignItems: 'center',paddingHorizontal: PADDING,marginBottom:10,}}>
          <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',}}>
            <TouchableWithoutFeedback>
              <Icon name="ios-share-social-outline" size={30} color="#aaa" style={{marginRight:10,}}/>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Icon name="ios-heart-outline" size={30} color="#477DD1"/>
            </TouchableWithoutFeedback>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={{fontSize:13,color:'#000',fontFamily:'NotoSansKR-Medium',lineHeight:15}}>즉시구매가</Text>
            <Text style={{fontSize:24,fontFamily:'NotoSansKR-Bold',color:'#000',lineHeight:28}}>420,000원</Text>
          </View>
        </View>
        <View style={{borderWidth:1,borderColor:'#eee',borderRadius:10,marginHorizontal: 20,marginBottom:10,}}>
          <Text style={{padding:10,borderBottomWidth:1,borderBottomColor:'#eee',fontSize:16,fontFamily:'NotoSansKR-Bold',lineHeight:20,}}>기본 정보</Text>
          <View style={{padding:10,}}>
            <Text style={styles.title}>카테고리</Text>
            <View style={{flexDirection: 'row',flexWrap: 'wrap',paddingBottom:5,}}>
              <Text style={styles.hashtag}>여성</Text>
              <Text style={styles.hashtag}>의류</Text>
              <Text style={styles.hashtag}>코트/패딩</Text>
            </View>
            <Text style={styles.title}>키워드</Text>
              <View style={{flexDirection: 'row',flexWrap: 'wrap',paddingBottom:5,}}>
                <Text style={styles.hashtag}>#여자</Text>
                <Text style={styles.hashtag}>#지갑</Text>
                <Text style={styles.hashtag}>#메종마르지엘라</Text>
                <Text style={styles.hashtag}>#클러치</Text>
                <Text style={styles.hashtag}>#백화점</Text>
                <Text style={styles.hashtag}>#보증서</Text>
                <Text style={styles.hashtag}>#안전거래</Text>
                <Text style={styles.hashtag}>#택배거래</Text>
                <Text style={styles.hashtag}>#공용</Text>
              </View>
            <View style={styles.contWrap}>
              <Text style={styles.title}>구매 시기</Text>
              <Text style={styles.cont}>2010년 8월</Text>
            </View>
            <View style={styles.contWrap}>
              <Text style={styles.title}>구매한 곳</Text>
              <Text style={styles.cont}>현대 백화점</Text>
            </View>
            <View style={styles.contWrap}>
              <Text style={styles.title}>구성품</Text>
              <Text style={styles.cont}>케이스, 보증서</Text>
            </View>
            <View style={styles.contWrap}>
              <Text style={styles.title}>사이즈</Text>
              <Text style={styles.cont}>XL</Text>
            </View>
            <View style={styles.contWrap}>
              <Text style={styles.title}>거래 유형</Text>
              <Text style={styles.cont}>직거래/택배거래/안전거래</Text>
            </View>
            <View style={styles.contWrap}>
              <Text style={styles.title}>직거래 지역</Text>
              <Text style={styles.cont}>서울시 강남구</Text>
            </View>
            <View style={styles.contWrap}>
              <Text style={styles.title}>배송비</Text>
              <Text style={styles.cont}>무료</Text>
            </View>
            <View style={styles.contWrap}>
              <Text style={styles.title}>제품의 상태</Text>
              <Text style={styles.cont}>하자나 헤짐 있는 상품{"\n"}(수선여부,헤짐)</Text>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: PADDING,marginBottom:60,}}>
          <View style={{borderColor: '#eee',borderWidth:1,marginBottom:10,}}>
            <Image
              source={require('../images/info_item01.jpg')}
            />
            <View style={{position: 'absolute',top:0,left:0,backgroundColor:'#eee',width:80,height:30,justifyContent: 'center',alignItems: 'center',}}>
              <Text style={{color:'#333',fontSize:13,lineHeight:16,fontFamily:'NotoSansKR-Medium'}}>대표이미지</Text>
            </View>
          </View>
          <View style={{borderColor: '#eee',borderWidth:1,marginBottom:10,}}>
            <Image
              source={require('../images/info_item02.jpg')}
            />
            <View style={{position: 'absolute',top:0,left:0,backgroundColor:'#eee',width:80,height:30,justifyContent: 'center',alignItems: 'center',}}>
              <Text style={{color:'#333',fontSize:13,lineHeight:16,fontFamily:'NotoSansKR-Medium'}}>전면</Text>
            </View>
          </View>
          <View style={{borderColor: '#eee',borderWidth:1,marginBottom:10,}}>
            <Image
              source={require('../images/info_item03.jpg')}
            />
            <View style={{position: 'absolute',top:0,left:0,backgroundColor:'#eee',width:80,height:30,justifyContent: 'center',alignItems: 'center',}}>
              <Text style={{color:'#333',fontSize:13,lineHeight:16,fontFamily:'NotoSansKR-Medium'}}>후면</Text>
            </View>
          </View>
          <View style={{borderColor: '#eee',borderWidth:1,marginBottom:10,}}>
            <Image
              source={require('../images/info_item04.jpg')}
            />
            <View style={{position: 'absolute',top:0,left:0,backgroundColor:'#eee',width:80,height:30,justifyContent: 'center',alignItems: 'center',}}>
              <Text style={{color:'#333',fontSize:13,lineHeight:16,fontFamily:'NotoSansKR-Medium'}}>사용감, 하자</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{flex:1,backgroundColor: '#F8F8F8', flexDirection:'row',position:'absolute',bottom:0,left:0,elevation:0,}}>
          <TouchableOpacity
              onPress={() => navigation.navigate('PurchaseOrder')}
              style={{width:Width,height:57,justifyContent: 'center',alignItems: 'center',borderRightWidth:1, borderRightColor:'#ddd'}}>
              <Text style={{fontSize:18,fontFamily:'NotoSansKR-Bold'}}>즉시 구매</Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => navigation.navigate('Bidding')}
              style={{width:Width,height:57,justifyContent: 'center',alignItems: 'center',}}>
              <Text style={{fontSize:18,fontFamily:'NotoSansKR-Bold'}}>입찰하기</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title:{
    fontSize:13,
    fontFamily:'NotoSansKR-Bold',
    lineHeight:18,
    width:80,
    paddingBottom:6,
  },
  cont:{
    fontFamily:'NotoSansKR-Regular',
    fontSize:13,
    lineHeight:18,
  },
  contWrap:{
    flexDirection: 'row',

  },
  hashtag:{
    backgroundColor: '#F8F8F8',
    fontSize:12,
    fontFamily:'NotoSansKR-Regular',
    lineHeight:16,
    paddingVertical:3,
    paddingHorizontal: 6,
    borderRadius: 7,
    color:'#707070',
    marginRight:4,
    marginBottom:4,
  },
})

export default PrdDetail;
