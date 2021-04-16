import React, {Component} from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity, Dimensions,FlatList} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export const Width = Dimensions.get('window').width;
export const Height = Dimensions.get('window').height;
const PADDING = 15;
const Box = (Width - PADDING * 2 - 20) /2
function Est({item : items}) {
 const navigation = useNavigation();
    return(
              <TouchableOpacity
              onPress={() => navigation.navigate('EstDetail')}
              style={{width:Box,alignItems: 'center', margin : 10}}>
                    <View style={{width:Box,height:Box,borderColor:'#e3e3e3',borderWidth:1,borderRadius:15,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                        <Image
                            style={{width:'80%',resizeMode:'contain'}}
                            source={items.image}
                        />
                    </View>
                    <Text
                      style={{fontSize:18,fontFamily:'NotoSansKR-Bold',lineHeight:30,alignSelf:'flex-start',width:'100%',paddingHorizontal:5}}
                      numberOfLines={1}
                      >{items.name}</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:3,}}>
                        <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:18}}>내가 넣은 견적</Text>
                        <Text
                          style={{color:'#707070',fontSize:13,maxWidth:80,fontFamily:'NotoSansKR-Regular',lineHeight:18}}
                          numberOfLines={1}
                          >{items.price}원</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:3,}}>
                        <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:18}}>견적 마감</Text>
                        <Text style={{color:'#707070',fontSize:13,fontFamily:'NotoSansKR-Regular',lineHeight:18}}>{items.date}일 전</Text>
                    </View>
              </TouchableOpacity>
    )
}


function EstList({navigation}) {

       const items = [
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
                price: "200000000000,000",
                date: "10",
                },
                {
                id: 8 ,
                name: 'MAISON MARGIELAMAISON MARGIELAMAISON MARGIELAMAISON MARGIELAMAISON MARGIELAMAISON MARGIELAMAISON MARGIELA',
                image: require('../images/item04.jpg'),
                price: "200.000",
                date: "10",
                },
       ];


         return(
                <FlatList
                    style={{flex:1,alignSelf : 'center'}}
                    data={items}
                    renderItem={({item, index} ) => <Est item={item}/>}
                    keyExtractor={(item) => `${item.id}`}
                    numColumns={2}
                />
        )

}
export default EstList;
