import React , {Component}from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native';

import Header, {DetailHead} from '../components/header';
import Footer from '../components/footer';
import Selector, {DealType} from '../components/Select';
import Product from '../components/product';

export const Width = Dimensions.get('window').width / 4;

const Bidding = ({navigation}) => {
  return(
    <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
      <DetailHead/>
      <View style={{padding:20,flex:1}}>
        <View style={{paddingBottom:10,marginBottom:20,borderBottomWidth:1,borderBottomColor:'#eee'}}>
          <Product/>
        </View>
        <View style={{borderWidth:1,borderColor:'#eee',borderRadius:10}}>
          <Text style={{padding:12,borderBottomWidth:1,borderBottomColor:'#eee',fontSize:16,fontWeight:'bold'}}>입찰정보</Text>
          <View style={{padding:12,}}>
            <Text style={{paddingBottom:6,fontSize:13}}>입찰금액</Text>
            <TextInput
              style={{borderWidth:1,borderColor:'#eee',borderRadius:6,lineHeight: 20,height:30,padding:0,paddingHorizontal:10,marginBottom:12,}}
              placeholder="210,000원"
              placeholderTextColor="#C9C9C9"
              keyboardType="numeric"
              />
            <Text style={{paddingBottom:6,fontSize:13}}>거래유형</Text>
            <DealType/>
          </View>
          <View style={{flexDirection: 'row',backgroundColor: '#477DD1',borderBottomLeftRadius:10,borderBottomRightRadius:10,}}>
            <TouchableOpacity style={{width:'50%',height:57,justifyContent: 'center',alignItems: 'center',borderRightWidth:1,borderRightColor:'#fff',}}>
              <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>navigation.navigate('BidFinish')}
              style={{width:'50%',height:57,justifyContent: 'center',alignItems: 'center',}}>
              <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>입찰 하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer/>
    </SafeAreaView>
  )
}

export default Bidding;
