import React from 'react';
import {View,FlatList,Text,Image,TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const ChatList  = () => {
  const renderItems=[
    {
      id:1,
      prd:"MAISON MARGIELA",
      price:"200,000원",
      user:"nappeni",
      txt:"안녕하세요. 제품에 대한 문의가 있습니다. 블라블라블라",
      img:require('../images/profile01.png'),
    },
    {
      id:2,
      prd:"MAISON MARGIELA",
      price:"200,000원",
      user:"nappeni",
      txt:"안녕하세요. 제품에 대한 문의가 있습니다. 블라블라블라",
      img:require('../images/profile02.png'),
    },
    {
      id:3,
      prd:"MAISON MARGIELA",
      price:"200,000원",
      user:"nappeni",
      txt:"안녕하세요. 제품에 대한 문의가 있습니다. 블라블라블라",
      img:require('../images/profile03.png'),
    },
    {
      id:4,
      prd:"MAISON MARGIELA",
      price:"200,000원",
      user:"nappeni",
      txt:"안녕하세요. 제품에 대한 문의가 있습니다. 블라블라블라",
      img:require('../images/profile_no_img.png'),
    },
  ]
  return(
    <FlatList
        style={{flex:1,}}
        data={renderItems}
        renderItem={({item, index} ) => <ChatItem item={item}/>}
        keyExtractor={(item) => `${item.id}`}
        numColumns={1}
    />
  );
};

function ChatItem({item: renderItems}){
  const navigation = useNavigation();

  return(
    <TouchableOpacity
    onPress={() => navigation.navigate('ChatDetail')}
    style={{flexDirection:'row',justifyContent: 'space-between',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#eee',paddingBottom:12,marginBottom:12,}}>
        <View style={{width:62,height:62,borderWidth:2,borderColor:'#eee',borderRadius:31,marginRight:20,}}>
          <Image
            style={{resizeMode:'cover',width:'auto'}}
            source={renderItems.img}
          />
        </View>
        <View style={{flexGrow:1,}}>
          <Text style={{fontSize:16,fontFamily:'NotoSansKR-Bold',lineHeight:22}}>{renderItems.prd}</Text>
          <View style={{flexDirection: 'row',alignItems: 'center'}}>
            <Text style={{fontSize:13,fontFamily:'NotoSansKR-Bold',lineHeight:16,color:'#333',paddingRight:20,}}>내가 넣은 견적</Text>
            <Text style={{fontSize:13,color:'#555',fontFamily:'NotoSansKR-Regular',lineHeight:16}}>{renderItems.price}</Text>
          </View>
          <Text
            numberOfLines={1}
            style={{fontSize:13,color:'#999',maxWidth: 220,fontFamily:'NotoSansKR-Regular',lineHeight:20,}}
            >{renderItems.txt}</Text>
          <View style={{flexDirection:'row',alignItems:'center',}}>
            <Text style={{fontSize:13,fontFamily:'NotoSansKR-Bold',lineHeight:16,color:'#5E5E5E',paddingRight:10,}}>{renderItems.user}</Text>
            <Text style={{fontSize:12,fontFamily:'NotoSansKR-Bold',lineHeight:16,color:'#B9B9B9'}}>샤넬 종로점</Text>
          </View>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={{fontSize:10,color:'#999',paddingBottom:10,}}>2021.01.09</Text>
          <View style={{width:26,height:26,backgroundColor:'#477DD1',alignItems: 'center',justifyContent: 'center',borderRadius: 13,}}>
            <Text style={{color:'#fff',fontSize:13,fontFamily:'NotoSansKR-Bold',lineHeight:16}}>1</Text>
          </View>
        </View>
    </TouchableOpacity>
  );
};

export default ChatList;
