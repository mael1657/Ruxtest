import React from 'react';
import {SafeAreaView,ScrollView,View,Text,TouchableOpacity,StyleSheet,TextInput} from 'react-native';

import Header, {DetailHead} from '../components/header';
import Footer from '../components/footer';
import Product from '../components/product';
import Selector, {LocationSelect} from '../components/Select';

const PurchaseOrder = (props) => {
  return(
    <SafeAreaView style={{flex:1,backgroundColor:'#fff',}}>
      <DetailHead/>
      <ScrollView style={{flex:1}}>
        <View style={{paddingHorizontal:20,paddingVertical:10}}>
          <Product/>
        </View>
        <View style={{width:'100%',height:8,backgroundColor: '#eee',borderTopWidth:1,borderTopColor:'#d9d9d9'}}>
        </View>
        <View style={{padding:20,paddingBottom:200,}}>
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
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={{fontSize:14,fontWeight:'bold',paddingBottom:10,}}>전화번호</Text>
            <TextInput
              style={{borderWidth:1,borderColor:'#eee',borderRadius:6,height:40,paddingHorizontal:20,}}
              placeholder="051-123-4567"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={{fontSize:14,fontWeight:'bold',paddingBottom:10,}}>핸드폰</Text>
            <TextInput
              style={{borderWidth:1,borderColor:'#eee',borderRadius:6,height:40,paddingHorizontal:20,}}
              placeholder="010-1234-5678"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={{fontSize:14,fontWeight:'bold',paddingBottom:10,}}>주소</Text>
            <View style={{flexDirection: 'row',paddingBottom:10,}}>
              <TextInput
                style={{borderWidth:1,borderColor:'#eee',borderRadius:6,height:40,paddingHorizontal:20,flex:3,}}
                placeholder="주소를 입력해주세요."
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
            />
          </View>
        </View>
      </ScrollView>
      <Footer/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputWrap:{
      paddingBottom:10,
  },
})

export default PurchaseOrder;
