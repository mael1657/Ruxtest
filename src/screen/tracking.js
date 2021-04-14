import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Text, Image,FlatList,} from 'react-native';

import Header, {DetailHead} from '../components/header';
import Footer from '../components/footer';
import Product from '../components/product';
import BotLine from '../components/bottomline';

const Tracking = () => {
  const dsitems = [
    {
      id:1,
      time:"2021-01-21 14:56:54",
      location:"서울 남대문",
      status:"배달완료",
    },
    {
      id:2,
      time:"2021-01-21 14:56:54",
      location:"서울 남대문",
      status:"배달완료",
    },
    {
      id:3,
      time:"2021-01-21 14:56:54",
      location:"서울 남대문",
      status:"배송중",
    },
    {
      id:4,
      time:"2021-01-21 14:56:54",
      location:"대전 HUB",
      status:"간선상차",
    },
    {
      id:5,
      time:"2021-01-21 14:56:54",
      location:"성북직영",
      status:"집하처리",
    },
    {
      id:6,
      time:"2021-01-21 14:56:54",
      location:"고객",
      status:"인수자등록",
    },
  ];
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
                <View style={{flex:1}}>
                  {/* {<FlatList
                    keyExtractor={(item) => item.id}
                    data={delivery}
                    renderItem={({ item }) => (
                      <View style={{
                          flexDirection:'row',
                          justifyContent:'space-around',
                          alignItems:'center',
                          borderBottomWidth:1,
                          borderBottomColor:'#eee',
                          paddingBottom:15,
                          paddingTop:15,
                          }}>
                          <Text style={{fontSize:14,width:100,textAlign:'center'}}>{item.time}</Text>
                          <Text style={{fontSize:14,width:100,textAlign:'center'}}>{item.location}</Text>
                          <Text style={{fontSize:14,width:100,textAlign:'center'}}>{item.status}</Text>
                      </View>
                    )}
                  />} */}
                  {dsitems.map((dsitem) => (
                      <DeliveriStatus key={dsitem.id} dsitem={dsitem}/>
                  ))} 
                </View>
              </View>
            </ScrollView>
          <Footer/>
        </SafeAreaView>
    );
};

function DeliveriStatus({dsitem}){
  return(
    <View style={{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#eee',
        paddingBottom:15,
        paddingTop:15,
        }}>
        <Text style={{fontSize:14,width:100,textAlign:'center'}}>{dsitem.time}</Text>
        <Text style={{fontSize:14,width:100,textAlign:'center'}}>{dsitem.location}</Text>
        <Text style={{fontSize:14,width:100,textAlign:'center'}}>{dsitem.status}</Text>
    </View>
  );
}

export default Tracking;
