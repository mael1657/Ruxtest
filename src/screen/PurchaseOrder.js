import React from 'react';
import {SafeAreaView,ScrollView,View,Text,TouchableOpacity,StyleSheet,TextInput} from 'react-native';

import Header, {DetailHead} from '../components/header';
import Footer from '../components/footer';
import Product from '../components/product';
import Selector, {LocationSelect, PaymentType} from '../components/Select';

const PurchaseOrder = (props, {navigation}) => {
  return(
    <SafeAreaView style={{flex:1,backgroundColor:'#fff',}}>
      <DetailHead title="주문서 작성"/>
      <ScrollView style={{flex:1}}>
        <View style={{paddingHorizontal:20,paddingVertical:10}}>
          <Product/>
        </View>
        <View style={{width:'100%',height:8,backgroundColor: '#eee',borderTopWidth:1,borderTopColor:'#d9d9d9'}}>
        </View>
        <View style={{padding:20,paddingBottom:100,}}>
          <Text style={{fontSize:16,fontWeight:'bold',paddingBottom:10,}}>구매자 정보</Text>
          <View style={{flexDirection:'row',flex:1,alignItems: 'center',paddingBottom:10,}}>
            <Text style={{fontSize:15,fontWeight:'bold',paddingRight:20,}}>받으시는 분</Text>
            <TouchableOpacity style={{backgroundColor:'#EBEBEB',paddingHorizontal:12,paddingVertical:6,borderRadius:8,}}>
              <Text>최근 데이터 자동 입력</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputWrap}>
            <Text style={{fontSize:14,fontWeight:'bold',paddingBottom:10,}}>배송지 선택</Text>
            <LocationSelect/>
          </View>
          <View style={styles.inputWrap}>
            <Text style={{fontSize:14,fontWeight:'bold',paddingBottom:10,}}>이름</Text>
            <TextInput
              style={{borderWidth:1,borderColor:'#eee',borderRadius:6,height:40,paddingHorizontal:20,}}
              placeholder="홍길동"
              placeholderTextColor="#C9C9C9"
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={{fontSize:14,fontWeight:'bold',paddingBottom:10,}}>전화번호</Text>
            <TextInput
              style={{borderWidth:1,borderColor:'#eee',borderRadius:6,height:40,paddingHorizontal:20,}}
              placeholder="051-123-4567"
              keyboardType="numeric"
              placeholderTextColor="#C9C9C9"
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={{fontSize:14,fontWeight:'bold',paddingBottom:10,}}>핸드폰</Text>
            <TextInput
              style={{borderWidth:1,borderColor:'#eee',borderRadius:6,height:40,paddingHorizontal:20,}}
              placeholder="010-1234-5678"
              keyboardType="numeric"
              placeholderTextColor="#C9C9C9"
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={{fontSize:14,fontWeight:'bold',paddingBottom:10,}}>주소</Text>
            <View style={{flexDirection: 'row',paddingBottom:10,}}>
              <TextInput
                style={{borderWidth:1,borderColor:'#eee',borderRadius:6,height:40,paddingHorizontal:20,flex:3,}}
                placeholder="주소를 입력해주세요."
                placeholderTextColor="#C9C9C9"
              />
              <TouchableOpacity style={{backgroundColor: '#477DD1',borderRadius:8,justifyContent: 'center',alignItems: 'center',flex:1,marginLeft:10,}}>
                  <Text style={{color:'#fff',fontSize:13,fontWeight:'bold',}}>주소 검색</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={{borderWidth:1,borderColor:'#eee',borderRadius:6,height:40,paddingHorizontal:20,marginBottom:10,}}
            />
            <TextInput
              style={{borderWidth:1,borderColor:'#eee',borderRadius:6,height:40,paddingHorizontal:20,}}
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={{fontSize:14,fontWeight:'bold',paddingBottom:10,}}>전하실 말씀</Text>
            <TextInput
              {...props}
              style={{borderWidth:1,borderColor:'#eee',borderRadius:6,paddingHorizontal:20,textAlignVertical:'top'}}
              numberOfLines={10}
              multiline={true}
              placeholder="내용을 입력해주세요."
              placeholderTextColor="#C9C9C9"
            />
          </View>
          <View style={{borderWidth:1,borderColor:'#eee',borderRadius:10}}>
            <Text style={{padding:12,borderBottomWidth:1,borderBottomColor:'#eee',fontSize:16,fontWeight:'bold'}}>결제 정보</Text>
            <View style={{padding:12,}}>
              <View style={styles.payinfo}>
                <Text style={{fontSize:13,}}>거래유형</Text>
                <Text>택배거래</Text>
              </View>
              <View style={styles.payinfo}>
                <Text style={{fontSize:13,}}>주문금액</Text>
                <Text>210,000원</Text>
              </View>
              <View style={styles.payinfo}>
                <Text style={{fontSize:13,}}>배송비</Text>
                <Text>3,000원</Text>
              </View>
              <View style={styles.payinfo}>
                <Text style={{fontSize:13,}}>수수료</Text>
                <Text>8,400원</Text>
              </View>
              <View style={styles.payinfo}>
                <Text style={{fontSize:13,}}>결제수단</Text>
                <PaymentType/>
              </View>
            </View>
            <View style={{backgroundColor:'#EBEBEB',flexDirection:'row',justifyContent: 'space-between',padding:12,}}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>총 주문 금액</Text>
              <Text style={{fontSize:16,fontWeight:'bold'}}>221,400원</Text>
            </View>
            <View style={{flexDirection: 'row',backgroundColor: '#477DD1',borderBottomLeftRadius:10,borderBottomRightRadius:10,}}>
              <TouchableOpacity style={{width:'50%',height:57,justifyContent: 'center',alignItems: 'center',borderRightWidth:1,borderRightColor:'#fff',}}>
                <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{width:'50%',height:57,justifyContent: 'center',alignItems: 'center',}}>
                <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>주문하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputWrap:{
      paddingBottom:10,
  },
  payinfo:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingBottom:10,
  },
})

export default PurchaseOrder;
