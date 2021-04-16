import React from 'react';
import {SafeAreaView,ScrollView,View,Text,TextInput,} from 'react-native';

import Header, {DetailHead} from '../components/header';
import Btn , {BtnFull} from '../components/button';
import {DeliverySelect} from '../components/Select';
import BotLine from '../components/bottomline';

const DeliveryCheck = ({navigation}) => {
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
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <DetailHead title="택배 조회"/>
            <ScrollView>
                <View style={{
                    backgroundColor:'#F8F8F8',
                    height:70,
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <Text style={{fontSize:13,color:"#444",fontFamily:'NotoSansKR-Regular'}}>택배사와 운송장 번호를 이용하여 배송 조회를 하실 수 있습니다.</Text>
                </View>
                <View style={{padding:20,}}>
                    <View style={{paddingBottom:10,}}>
                        <Text style={{fontSize:16,fontFamily:'NotoSansKR-Bold',lineHeight:20,}}>택배사 정보</Text>
                    </View>
                    <View style={{paddingBottom:10,}}>
                        <View style={{paddingBottom:10,}}>
                            <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:20,}}>택배사</Text>
                        </View>
                        <DeliverySelect/>
                    </View>
                    <View style={{paddingBottom:20,}}>
                        <View style={{paddingBottom:10,}}>
                            <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:20,}}>운송장 번호</Text>
                        </View>
                        <View style={{flex:1,borderWidth:1,borderColor:'#eee',borderRadius:8,height:35,lineHeight:16,justifyContent:'center',paddingHorizontal:8,}}>
                            <TextInput
                                style={{height:35,paddingVertical:0,fontFamily:'NotoSansKR-Regular',fontSize:13,}}
                                placeholder="운송장 번호를 입력하세요."
                                placeholderTextColor="#C9C9C9"
                            />
                        </View>
                    </View>
                    <BtnFull title="리뷰 목록"/>
                </View>
                <BotLine/>
                <View style={{padding:20,}}>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-around',
                        alignItems:'center',
                        borderBottomWidth:1,
                        borderBottomColor:'#eee',
                        paddingBottom:15,
                        }}>
                        <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',lineHeight:20,width:100,textAlign:'center'}}>처리 일시</Text>
                        <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',lineHeight:20,width:100,textAlign:'center'}}>현재 위치</Text>
                        <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',lineHeight:20,width:100,textAlign:'center'}}>배송 상태</Text>
                    </View>
                    <View>
                        {dsitems.map((dsitem) => (
                           <DeliveriStatus key={dsitem.id} dsitem={dsitem}/>
                        ))} 
                    </View>
                </View>
            </ScrollView>
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
          <Text style={{fontSize:14,fontFamily:'NotoSansKR-Regular',lineHeight:20,width:100,textAlign:'center'}}>{dsitem.time}</Text>
          <Text style={{fontSize:14,fontFamily:'NotoSansKR-Regular',lineHeight:20,width:100,textAlign:'center'}}>{dsitem.location}</Text>
          <Text style={{fontSize:14,fontFamily:'NotoSansKR-Regular',lineHeight:20,width:100,textAlign:'center'}}>{dsitem.status}</Text>
      </View>
    );
  };
export default DeliveryCheck;