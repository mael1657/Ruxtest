import React from 'react';
import {SafeAreaView, View, ScrollView, TouchableOpacity, Text, StyleSheet,TextInput} from 'react-native';

import Header, {DetailHead} from '../components/header';
import Footer from '../components/footer';
import Product from '../components/product';
import {DefaultPicker} from '../components/Select';

import Icon from 'react-native-vector-icons/Ionicons';

const type=[
  {label:'카테고리1', value:'카테고리1'},
  {label:'카테고리2', value:'카테고리2'},
  {label:'카테고리3', value:'카테고리3'},
]

const EstCheck2 = ({navigation}) => {
  return(
    <SafeAreaView style={{flex:1,backgroundColor: '#fff'}}>
      <DetailHead title="견적서 확인"/>
      <ScrollView style={{}}>
      {/* 내 견적*/}
        <View style={{padding:20,}}>
          <View style={{paddingBottom:10,marginBottom:15,borderBottomWidth:1,borderBottomColor:'#eee'}}>
            <Product/>
          </View>
          <View style={{borderWidth:1,borderColor:'#eee',borderRadius:10,marginBottom:20,overflow:'hidden'}}>
            <Text style={{borderBottomWidth:1,borderBottomColor:'#eee',padding:12,fontSize:16,fontFamily:'NotoSansKR-Bold',lineHeight:20, }}>입찰정보 </Text>
            <View style={{padding:12,}}>
             <View style={{}}>
                <Text style={styles.texta}>입찰금액</Text>
                <TextInput
                placeholder="210,000원"
                placeholderTextColor="#C9C9C9"
                style={{
                  borderWidth:1,
                  borderColor:'#eee',
                  borderRadius:8,
                  height:35,
                  padding:0,
                  paddingLeft:10,
                  marginVertical:10,
                }}
                />
              </View>
              <View style={styles.textbox}>
                <View style={{width:'auto'}}>
                  <Text style={styles.texta}>거래유형</Text>
                  <View style={{width:150,marginVertical:10,zIndex:999}}>
                    <DefaultPicker placeholder="거래유형 선택" picker={type}/>
                  </View>
                </View>
                <View style={{}}>
                  <Text style={styles.texta}>입찰입시</Text>
                  <Text style={[styles.textb, {marginVertical:10}]}>2021.01.16 11:23</Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
              <TouchableOpacity 
              style={{
                flex:1,
                backgroundColor:'#447DD1',
                justifyContent:'center',
                alignItems:'center',
                height:58,
                borderRightWidth:1,
                borderRightColor:'#fff',
                
              }}>
                <Text style={{fontSize:16,fontFamily:'NotoSansKR-Medium',color:'#fff'}}>취소</Text>
              </TouchableOpacity><TouchableOpacity 
              style={{
                flex:1,
                backgroundColor:'#447DD1',
                justifyContent:'center',
                alignItems:'center',
                height:58,
                
              }}>
                <Text style={{fontSize:16,fontFamily:'NotoSansKR-Medium',color:'#fff'}}>입찰하기</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* 내 견적 끝 */}
          <Text style={{fontSize:14,fontFamily:'NotoSansKR-Bold',lineHeight:20,paddingBottom:10,}}>구매 시 유의사항</Text>
          <View style={{padding:12,borderRadius:7,backgroundColor:'#F8F8F8'}}>
            <Text style={{fontSize:13,paddingBottom:7,fontFamily:'NotoSansKR-Regular',lineHeight:20}}>안전거래가 가능한 상품인지 확인하셨나요?</Text>
            <Text style={{fontSize:13,paddingBottom:7,fontFamily:'NotoSansKR-Regular',lineHeight:20}}>계좌이체시 인증된 계좌번호로 거래하시는지 확인하셨나요?</Text>
            <Text style={{fontSize:13,paddingBottom:7,fontFamily:'NotoSansKR-Regular',lineHeight:20}}>구매 하려는 상품의 상세사진 및 상세내용에 대해 확인하셨나요?</Text>
            <Text style={{fontSize:13,fontFamily:'NotoSansKR-Regular',lineHeight:20}}>판매자와의 충분한 합의를 하셨나요?</Text>
          </View>
        </View>
        <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:20,paddingVertical:15,borderBottomWidth:1,borderBottomColor:'#eee',borderTopWidth:1,borderTopColor:'#eee'}}>
          <Text style={{fontSize:16,fontFamily:'NotoSansKR-Medium',lineHeight:20}}>구매 전 안전하게 더치트 조회 해보기</Text>
          <Icon name="chevron-forward" size={20} color="#000"/>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textbox: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingBottom:10
  },
  texta: {
    fontSize:13,
    lineHeight:20,
    fontFamily:'NotoSansKR-Medium'
  },
  textb: {
    fontSize:13,
    lineHeight:20,
    fontFamily:'NotoSansKR-Regular'
  },
})

export default EstCheck2;
