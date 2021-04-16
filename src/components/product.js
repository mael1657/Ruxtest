import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

export const Width = Dimensions.get('window').width / 4;

const Product = () => {
  return(
    <View style={{flexDirection: 'row',alignItems:'center'}}>
      <View style={{borderWidth:1,borderColor:"#eee",borderRadius:6,width:Width,height:Width,overflow: 'hidden',alignItems:'center',justifyContent:'center',marginRight:20,}}>
        <Image
          source={require('../images/item05.jpg')}
          style={{resizeMode:"contain",width:Width,height:Width,}}
        />
      </View>
      <View>
        <Text style={{fontSize:16,lineHeight:20,fontFamily:'NotoSansKR-Bold',paddingBottom:10,}}>MAISON MARGIELA</Text>
        <Text style={{fontSize:13,lineHeight:16,fontFamily:'NotoSansKR-Medium'}}>입찰 기간</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize:13,lineHeight:16,color:'#555',paddingRight:4,fontFamily:'NotoSansKR-Regular'}}>~ 2021. 01. 30 </Text>
          <Text style={{fontSize:10,lineHeight:16,color:'#fff',backgroundColor:'#477DD1',paddingHorizontal:8,borderRadius:8,fontFamily:'NotoSansKR-Regular'}}>D-10</Text>
        </View>
      </View>
    </View>
  );
};

export default Product;
