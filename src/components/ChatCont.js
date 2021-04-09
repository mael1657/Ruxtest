import React from 'react';
import {View, Image, Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';

export const ChatLeft = ({message,user}) => {
  return(
      <View style={{flexDirection:'row',marginBottom:10,}}>
        <View style={{width:50,height:50,borderRadius:50,overflow: 'hidden',justifyContent: 'center',marginRight:10,}}>
          <Image
            style={{resizeMode:'contain',width:'auto'}}
            source={require('../images/profile01.png')}/>
        </View>
        <View>
          <Text style={{fontSize:16,fontWeight:'bold',paddingBottom:6,}}>{user}</Text>
          <View style={{backgroundColor: '#fff',padding:10,borderRadius: 8,}}>
            <Text style={{fontSize:15}}>{message}</Text>
          </View>
        </View>
        <Text style={{alignSelf:'flex-end',paddingLeft:10,fontSize:13,color:'#555'}}>오전 10:45</Text>
      </View>
  );
};

export const ChatRight = ({message}) => {
  return(
      <View style={{flexDirection:'row-reverse',paddingBottom:10,}}>
        <View>
          <View style={{backgroundColor: '#477DD1',padding:10,borderRadius: 8,maxWidth:210}}>
            <Text style={{fontSize:15,color:'#fff'}}>{message}</Text>
          </View>
        </View>
        <Text style={{alignSelf:'flex-end',paddingRight:10,fontSize:13,color:'#555'}}>오전 10:45</Text>
      </View>
  );
};

export const ChatDateLine = ({date}) => {
  return(
    <View style={{flexDirection:'row',justifyContent: 'center',alignItems: 'center'}}>
      <View style={{flex:1,height:1,backgroundColor: '#DDDDDD'}}></View>
      <View style={{flex:2,height:50,alignItems: 'center',justifyContent: 'center'}}>
        <Text style={{fontSize:13,color:'#999'}}>{date}</Text>
      </View>
      <View style={{flex:1,height:1,backgroundColor: '#DDDDDD'}}></View>
    </View>
  );
};

export const DealRequest = ({user,mine,estimate,dealtype} , {navigation}) => {
  return(
    <View style={{flexDirection:'row',marginBottom:20,maxWidth: 240,}}>
      <View style={{width:50,height:50,borderRadius:50,overflow: 'hidden',justifyContent: 'center',marginRight:10,}}>
        <Image
          style={{resizeMode:'contain',width:'auto'}}
          source={require('../images/profile01.png')}/>
      </View>
        <View>
          <Text style={{fontSize:16,fontWeight:'bold',paddingBottom:6,}}>{user}</Text>
          <View style={{backgroundColor: '#fff',borderRadius: 8,overflow:'hidden'}}>
          <View style={{padding:10,paddingVertical: 30,}}>
            <Text style={{fontSize:15,paddingBottom:10,}}>
                  <Text style={{fontWeight: 'bold'}}>판매자 {user}님</Text>께서
                  <Text style={{fontWeight: 'bold'}}> {mine}님의</Text>
                  <Text style={{color:'#477DD1',fontWeight: 'bold'}}> 견적 {estimate}원</Text>
                  <Text style={{fontWeight:'bold'}}>으로 {dealtype}</Text>을 원합니다.
            </Text>
            <Text style={{fontSize:15}}>거래를 진행하시겠습니까?</Text>
          </View>
          <View style={{flexDirection:'row',}}>
            <TouchableOpacity style={{flex:1,backgroundColor:'#477DD1',height:54,alignItems: 'center',justifyContent: 'center',borderRightWidth:1,borderRightColor:'#fff'}}>
              <Text style={{fontSize:16,fontWeight: 'bold',color:'#fff'}}>거래 진행</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,backgroundColor:'#477DD1',height:54,alignItems: 'center',justifyContent: 'center'}}>
              <Text style={{fontSize:16,fontWeight: 'bold',color:'#fff'}}>거래 거절</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={{alignSelf:'flex-end',paddingLeft:10,fontSize:13,color:'#555'}}>오전 10:45</Text>
    </View>
  );
};

export const DealFalse = ({user}) => {
  return(
    <View style={{flexDirection:'row-reverse',paddingBottom:20,justifyContent: 'flex-start'}}>
      <View style={{backgroundColor:'#fff',borderRadius: 8,overflow: 'hidden',minWidth:210,}}>
        <View style={{padding:10,paddingVertical:30,}}>
          <View style={{paddingBottom:10,}}>
              <Text style={{fontWeight: 'bold',fontSize:15,}}>판매자 {user}님께서</Text>
              <Text style={{fontSize:15}}>거래 취소를 요청하셨습니다.</Text>
          </View>
          <Text style={{fontSize:15,}}>동의하시겠습니까?</Text>
        </View>
        <View style={{flexDirection:'row',}}>
          <TouchableOpacity style={{flex:1,backgroundColor:'#477DD1',height:54,alignItems: 'center',justifyContent: 'center',borderRightWidth:1,borderRightColor:'#fff'}}>
            <Text style={{fontSize:16,fontWeight: 'bold',color:'#fff'}}>동의</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1,backgroundColor:'#477DD1',height:54,alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{fontSize:16,fontWeight: 'bold',color:'#fff'}}>거절</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{alignSelf:'flex-end',paddingRight:10,fontSize:13,color:'#555'}}>오전 10:45</Text>
    </View>
  );
};

export const DealTrue = ({mine,user,num,name,price,dealtype,size}) => {
  return(
    <View style={{flexDirection:'row-reverse',paddingBottom:20,justifyContent: 'flex-start'}}>
      <View style={{backgroundColor:'#fff',borderRadius: 8,overflow: 'hidden',minWidth:210,}}>
        <View style={{padding:10,paddingVertical:30,}}>
          <Text style={{fontSize:15,paddingBottom:10,}}><Text style={{fontWeight:'bold'}}>{mine}님께서</Text> 주문 완료했습니다.</Text>
          <View>
            <Text style={{fontSize:15,}}>휴대폰 번호 : {num}</Text>
            <Text style={{fontSize:15,}}>상품명 : {name}</Text>
            <Text style={{fontSize:15,}}>입찰금액 : {price}원</Text>
            <Text style={{fontSize:15,}}>거래유형 : {dealtype}</Text>
            <Text style={{fontSize:15,}}>사이즈 : {size}</Text>
          </View>
        </View>
        <View style={{flexDirection:'row',}}>
          <TouchableOpacity style={{flex:1,backgroundColor:'#477DD1',height:54,alignItems: 'center',justifyContent: 'center',borderRightWidth:1,borderRightColor:'#fff'}}>
            <Text style={{fontSize:16,fontWeight: 'bold',color:'#fff'}}>거래 정보 확인</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{alignSelf:'flex-end',paddingRight:10,fontSize:13,color:'#555'}}>오전 10:45</Text>
    </View>
  );
};

const ChatCont = () => {
  return(
    <View>
      <Text></Text>
    </View>
  );
};

export default ChatCont;
