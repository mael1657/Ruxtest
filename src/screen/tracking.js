import React from 'react';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';

import Header, {DetailHead} from '../components/header';
import Footer from '../components/footer';
import Product from '../components/product';
import ShippingStatus from '../components/ShippingStatus';
import BotLine from '../components/bottomline';

const Tracking = () => {
    return(
        <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
          <DetailHead title="운송장 조회"/>
            <ScrollView style={{}}>
              <View style={{padding:20,  }}>
                <Product/>
              </View>
              <BotLine/>
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
              <BotLine/>
              <View style={{padding:20,}}>
                <Text style={{fontSize:16,fontWeight:'bold',paddingBottom:12,marginBottom:12,borderBottomWidth:1,borderBottomColor:'#eee'}}>배송 현황 </Text>
                <View style={{flexDirection:'row',justifyContent: 'space-around',alignItems:'center'}}>
                  <View style={{width:'80%',height:3,backgroundColor:'#eee',position:'absolute',top:25,left:20,}}></View>
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
              <BotLine/>
              <View style={{padding:20,paddingBottom:100}}> 
                <View style={{
                  flexDirection:'row',
                  justifyContent:'space-around',
                  alignItems:'center',
                  borderBottomWidth:1,
                  borderBottomColor:'#eee',
                  paddingBottom:15,
                  }}>
                  <Text style={{fontSize:14,fontWeight:'bold',width:100,textAlign:'center'}}>처리 일시</Text>
                  <Text style={{fontSize:14,fontWeight:'bold',width:100,textAlign:'center'}}>현재 위치</Text>
                  <Text style={{fontSize:14,fontWeight:'bold',width:100,textAlign:'center'}}>배송 상태</Text>
                </View>
                <ShippingStatus
                  time="2021-01-21 14:56:54"
                  location="서울 남대문"
                  status="배달완료"
                />
                <ShippingStatus
                  time="2021-01-21 14:56:54"
                  location="서울 남대문"
                  status="배송중"
                />
                <ShippingStatus
                  time="2021-01-21 14:56:54"
                  location="남서울 터미널"
                  status="배달전"
                />
                <ShippingStatus
                  time="2021-01-21 14:56:54"
                  location="대전 HUB"
                  status="간선상차"
                />
                <ShippingStatus
                  time="2021-01-21 14:56:54"
                  location="성북직영"
                  status="집하처리"
                />
                <ShippingStatus
                  time="2021-01-21 14:56:54"
                  location="고객"
                  status="인수자등록"
                />
              </View>
            </ScrollView>
          <Footer/>
        </SafeAreaView>
    );
};
export default Tracking;
