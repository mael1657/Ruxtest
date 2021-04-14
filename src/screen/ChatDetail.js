import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, ScrollView, TouchableOpacity, TouchableWithoutFeedback, TextInput, Dimensions} from 'react-native';

import Header, {ChatDetailHeader} from '../components/header';
import ChatCont, {ChatLeft, ChatRight, ChatDateLine, DealRequest, DealFalse, DealTrue} from '../components/ChatCont';

import Icon from 'react-native-vector-icons/MaterialIcons';

const ChatDetail = ({navigation}) => {
  useEffect(() => {
    const parent = navigation.dangerouslyGetParent();
    parent?.setOptions({ tabBarVisible: false });
    return () => parent?.setOptions({ tabBarVisible: true });
  }, []);
    return(
      <SafeAreaView style={{flex:1,backgroundColor: '#F5F5F5'}}>
        <ChatDetailHeader title="채팅"/>
          <ScrollView style={{flex:1}}>
            <View style={{paddingHorizontal: 20,}}>
              <ChatDateLine date="2021년 1월 11일 월요일" />
              <ChatLeft user="nappeni" message="안녕하세요."/>
              <ChatRight message="아니요."/>
              <ChatDateLine date="2021년 1월 12일 화요일" />
              <DealRequest
              user="nappeni"
              mine="yoru123"
              estimate="500,000"
              dealtype="택배거래 진행"
              />
              <ChatRight message="구매자 yoru123 님께서 거래요청을 거절하셨습니다."/>
              <DealFalse user="nappeni"/>
              <DealTrue
                mine="yoru123"
                num="010-1234-5678"
                name="MAISON MARGIELA"
                price="210,000"
                dealtype="안전거래"
                size="XL"
                />
            </View>
          </ScrollView>
          <TouchableOpacity style={{height:48,backgroundColor: '#EBEBEB',justifyContent: 'center',alignItems:'center'}}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>견적서 확인</Text>
          </TouchableOpacity>
          <View style={{backgroundColor: '#fff',flexDirection: 'row',justifyContent: 'space-between',paddingHorizontal: 20,paddingVertical: 12}}>
            <TouchableWithoutFeedback>
              <View style={{backgroundColor:'#477DD1',width:42,height:42,borderRadius:21,justifyContent: 'center',alignItems: 'center',marginRight:10,}}>
                <Icon name="camera-alt" size={24} color="#fff"/>
              </View>
            </TouchableWithoutFeedback>
            <View style={{flex:1,flexDirection:'row',borderWidth:1,borderColor:'#eee',borderRadius:8,height:42,alignItems: 'center',justifyContent: 'space-between',}}>
              <TextInput
                placeholder="메시지를 입력하세요"
                style={{height:42,flex:1}}
              />
              <TouchableOpacity style={{backgroundColor:'#477DD1',height:42,width:54,borderRadius:8,justifyContent: 'center',alignItems: 'center',}}>
                <Text style={{color:'#fff',fontSize:13,fontWeight:'bold'}}>전송</Text>
              </TouchableOpacity>
            </View>
          </View>
      </SafeAreaView>
    );
;}

export default ChatDetail;
