import React from 'react';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';

import Header, {DetailHead} from '../components/header';
import Footer from '../components/footer';
import Product from '../components/product';

const Tracking = () => {
    return(
        <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
          <DetailHead title="운송장 조회"/>
            <ScrollView>
              <View style={{padding:20,  }}>
                <Product/>
              </View>
              <View style={{width:'100%',height:8,backgroundColor: '#eee',borderTopWidth:1,borderTopColor:'#d9d9d9'}}>
              </View>
              <View style={{padding:20,}}>
                <Text style={{fontSize:16,fontWeight:'bold',paddingBottom:12,marginBottom:12,borderBottomWidth:1,borderBottomColor:'#eee'}}>배송 정보</Text>
                <View style={{flexDirection:'row',justifyContent: 'space-between',paddingBottom:10,}}>
                  <Text style={{fontSize:13}}>택배사</Text>
                  <Text style={{fontSize:13}}>CJ대한통운</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                  <Text style={{fontSize:13}}>운송장번호</Text>
                  <Text style={{fontSize:13}}>13287513557521</Text>
                </View>
              </View>
              <View style={{width:'100%',height:8,backgroundColor: '#eee',borderTopWidth:1,borderTopColor:'#d9d9d9'}}>
              </View>
              <View style={{padding:20,}}>
                <Text style={{fontSize:16,fontWeight:'bold',paddingBottom:12,marginBottom:12,borderBottomWidth:1,borderBottomColor:'#eee'}}>배송 현황 </Text>
                <View style={{flexDirection:'row',justifyContent: 'space-around',alignItems:'center'}}>
                <View style={{alignItems: 'center'}}>
                  <View style={{width:53,height:53,backgroundColor: '#eee',borderRadius:53,justifyContent: 'center',alignItems:'center',marginBottom:4,}}>
                    <Image
                    style={{width:30,height:30,resizeMode:'contain'}}
                    source={require('../images/track_01.png')}/>
                  </View>
                  <Text>상품발송</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <View style={{width:53,height:53,backgroundColor: '#eee',borderRadius:53,justifyContent: 'center',alignItems:'center',marginBottom:4,}}>
                    <Image
                    style={{width:30,height:30,resizeMode:'contain'}}
                    source={require('../images/track_02.png')}/>
                  </View>
                  <Text>택배사도착</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <View style={{width:53,height:53,backgroundColor: '#eee',borderRadius:53,justifyContent: 'center',alignItems:'center',marginBottom:4,}}>
                    <Image
                    style={{width:30,height:30,resizeMode:'contain'}}
                    source={require('../images/track_03.png')}/>
                  </View>
                  <Text>배송중</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <View style={{width:53,height:53,backgroundColor: '#ECF2FB',borderRadius:53,justifyContent: 'center',alignItems:'center',marginBottom:4,}}>
                    <Image
                    style={{width:30,height:30,resizeMode:'contain'}}
                    source={require('../images/track_04_on.png')}/>
                  </View>
                  <Text style={{color:'#477DD1'}}>배송완료</Text>
                </View>
              </View>
              </View>
              <View style={{width:'100%',height:8,backgroundColor: '#eee',borderTopWidth:1,borderTopColor:'#d9d9d9'}}>
              </View>
              <View>
                
              </View>
            </ScrollView>
          <Footer/>
        </SafeAreaView>
    );
};
export default Tracking;
