import React from 'react';
import {SafeAreaView, View, ScrollView, TouchableOpacity, Text} from 'react-native';

import Header, {DetailHead} from '../components/header';
import Footer from '../components/footer';
import Product from '../components/product';

import Icon from 'react-native-vector-icons/Ionicons';

const EstCheck = ({navigation}) => {
  return(
    <SafeAreaView style={{flex:1,backgroundColor: '#fff'}}>
      <DetailHead title="견적 상세 정보"/>
      <ScrollView style={{}}>
      {/* 내 견적*/}
        <View style={{padding:20,}}>
          <View style={{paddingBottom:10,marginBottom:15,borderBottomWidth:1,borderBottomColor:'#eee'}}>
            <Product/>
          </View>
          <View style={{borderWidth:1,borderColor:'#eee',borderRadius:10,marginBottom:20,}}>
            <Text style={{borderBottomWidth:1,borderBottomColor:'#eee',padding:12,fontSize:16,fontWeight:'bold'}}>
              내 견적
            </Text>
            <View style={{padding:12,}}>
              <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems: 'center',paddingBottom:10}}>
                <Text style={{fontSize:13}}>입찰금액</Text>
                <Text style={{fontSize:13}}>420,000</Text>
              </View>
              <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems: 'center',paddingBottom:10}}>
                <Text style={{fontSize:13}}>거래유형</Text>
                <Text style={{fontSize:13}}>직거래</Text>
              </View>
              <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems: 'center',paddingBottom:10}}>
                <Text style={{fontSize:13}}>직거래 가능 지역</Text>
                <Text style={{fontSize:13}}>서울시 강남구</Text>
              </View>
              <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems: 'center'}}>
                <Text style={{fontSize:13}}>입찰입시</Text>
                <Text style={{fontSize:13}}>2021.01.16 11:23</Text>
              </View>
            </View>
          </View>
          {/* 내 견적 끝 */}
          <Text style={{fontSize:14,fontWeight:'bold',paddingBottom:10,}}>구매 시 유의사항</Text>
          <View style={{padding:12,borderRadius:7,backgroundColor:'#F8F8F8'}}>
            <Text style={{fontSize:13,paddingBottom:7,}}>안전거래가 가능한 상품인지 확인하셨나요?</Text>
            <Text style={{fontSize:13,paddingBottom:7,}}>계좌이체시 인증된 계좌번호로 거래하시는지 확인하셨나요?</Text>
            <Text style={{fontSize:13,paddingBottom:7,}}>구매 하려는 상품의 상세사진 및 상세내용에 대해 확인하셨나요?</Text>
            <Text style={{fontSize:13,}}>판매자와의 충분한 합의를 하셨나요?</Text>
          </View>
        </View>
        <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:20,paddingVertical:15,borderBottomWidth:1,borderBottomColor:'#eee',borderTopWidth:1,borderTopColor:'#eee'}}>
          <Text style={{fontSize:16,fontWeight:'bold'}}>구매 전 안전하게 더치트 조회 해보기</Text>
          <Icon name="chevron-forward" size={20} color="#000"/>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EstCheck;
