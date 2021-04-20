import React,{useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity, TouchableWithoutFeedback, FlatList, Image, StyleSheet,Modal} from 'react-native';

import Header, {HeaderA} from '../components/header';


import { useNavigation } from '@react-navigation/native';

export const Width = Dimensions.get('window').width;
export const Height = Dimensions.get('window').height;
const PADDING = 15;
const Box = Width / 4;
const HashWidth = (Width - Box) - (PADDING * 2) - 10;

const PrdList = ({navigation}) => {
    return(
      <View style={{flex:1,backgroundColor: '#fff'}}>
        <HeaderA/>
        <View style={{paddingHorizontal:PADDING,flex:1,}}>
          <PrdListItems/>
        </View>
      </View>
      
    );q
};


function PrdListItems() {
  const renderItems = [
    {
    id: 1 ,
    name: 'MAISON MARGIELA',
    image: require('../images/item01.jpg'),
    price: "200,000",
    date: "10",
    },
    {
    id: 2 ,
    name: 'MAISON MARGIELA',
    image: require('../images/item02.jpg'),
    price: "300,000",
    date: "12",
    },
    {
    id: 3 ,
    name: 'MAISON MARGIELA',
    image: require('../images/item03.jpg'),
    price: "200,000",
    date: "10",
    },
    {
    id: 4 ,
    name: 'MAISON MARGIELA',
    image: require('../images/item04.jpg'),
    price: "200,000",
    date: "10",
    },
    {
    id: 5 ,
    name: 'MAISON MARGIELA',
    image: require('../images/item01.jpg'),
    price: "200,000",
    date: "10",
    },
    {
    id: 6 ,
    name: 'MAISON MARGIELA',
    image: require('../images/item02.jpg'),
    price: "300,000",
    date: "12",
    },
    {
    id: 7 ,
    name: 'MAISON MARGIELA',
    image: require('../images/item03.jpg'),
    price: "200,000",
    date: "10",
    },
    {
    id: 8 ,
    name: 'MAISON MARGIELA',
    image: require('../images/item04.jpg'),
    price: "200,000",
    date: "10",
    },
  ]
  return(
    <FlatList
        style={{flex:1,alignSelf : 'center'}}
        data={renderItems}
        renderItem={({item, index} ) => <PrdItem item={item}/>}
        keyExtractor={(item) => `${item.id}`}
        numColumns={1}
    />
  );
}

function PrdItem({item: renderItems}){

  const [fav ,setFav] = useState('off');
  const navigation = useNavigation();

  return(
    <TouchableOpacity
      style={{
        Width:Width,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom:10,
        paddingTop:15,
      }}
      onPress={() => navigation.navigate('PrdDetail')}
      >
      <View style={{width:Box,height:Box,borderWidth: 1,borderColor: '#e3e3e3',borderRadius: 8,marginRight:10,padding:10,}}>
        <Image
          style={{resizeMode:'cover',width:'100%',height:'100%'}}
          source={renderItems.image}/>
      </View>
      <View style={{flexGrow:1,}}>
        <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',marginBottom:10,}}>
          <Text style={{fontSize:16,fontFamily:'NotoSansKR-Bold',lineHeight:20,}}>{renderItems.name}</Text>
          <TouchableWithoutFeedback>
            <Image source={fav === 'off' ? require('../images/heart_no.png') : require('../images/heart.png') } />
          </TouchableWithoutFeedback>
        </View>
        <Text style={{fontFamily:'NotoSansKR-Medium',color:'#333',fontSize:13,lineHeight:15,paddingBottom:5,}}>즉시구매 <Text style={{fontFamily:'NotoSansKR-Regular',color:'#555'}}>{renderItems.price}원</Text></Text>
        <Text style={{fontFamily:'NotoSansKR-Medium',color:'#333',fontSize:13,lineHeight:15}}>견적 마감 <Text style={{fontFamily:'NotoSansKR-Regular',color:'#555'}}>{renderItems.date}일 전</Text></Text>
        <View style={{flexDirection: 'row',flexWrap:'wrap',marginTop:10,width:HashWidth}}>
            <Text style={styles.hashtag}>#메종마르지엘라</Text>
            <Text style={styles.hashtag}>#클러치</Text>
            <Text style={styles.hashtag}>#여자 </Text>
            <Text style={styles.hashtag}>#지갑 </Text>
            <Text style={styles.hashtag}>#백화점</Text>
            <Text style={styles.hashtag}>#보증서</Text>
            <Text style={styles.hashtag}>#안전거래</Text>
            <Text style={styles.hashtag}>#직거래</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  hashtag:{
    backgroundColor: '#F8F8F8',
    fontSize:10,
    fontFamily:'NotoSansKR-Medium',
    lineHeight:15,
    paddingVertical:3,
    paddingHorizontal: 6,
    borderRadius: 7,
    color:'#707070',
    marginRight:4,
    marginBottom:4,
  }
})


export default PrdList;
