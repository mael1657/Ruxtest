import React, {Component} from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity, Dimensions,FlatList} from 'react-native';


///

///


export const Width = Dimensions.get('window').width;
export const Height = Dimensions.get('window').height;
const PADDING = 15;
const Box = (Width - PADDING * 2 - 20) /2
function Est({item : items}) {

    return(
              <TouchableOpacity style={{width:Box,alignItems: 'center', margin : 10}}>
                    <View style={{width:Box,height:Box,borderColor:'#e3e3e3',borderWidth:1,borderRadius:15,justifyContent:'center',alignItems:'center',}}>
                        <Image
                            style={{width:'80%',resizeMode:'contain'}}
                            source={items.image}
                        />
                    </View>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>{items.name}</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:3,}}>
                        <Text style={{fontSize:13,}}>내가 넣은 견적</Text>
                        <Text style={{color:'#707070',fontSize:13}}>{items.price}원</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:3,}}>
                        <Text style={{fontSize:13,}}>견적 마감</Text>
                        <Text style={{color:'#707070',fontSize:13}}>{items.date}일 전</Text>
                    </View>
              </TouchableOpacity>
    )
}


function EstList() {

       const items = [
                {
                id: 1 ,
                name: 'MAISON MARGIELA',
                image: require('../images/item01.jpg'),
                price: "200.000",
                date: "10",
                },
                {
                id: 2 ,
                name: 'MAISON MARGIELA',
                image: require('../images/item02.jpg'),
                price: "300.000",
                date: "12",
                },
                {
                id: 3 ,
                name: 'MAISON MARGIELA',
                image: require('../images/item03.jpg'),
                price: "200.000",
                date: "10",
                },
                {
                id: 4 ,
                name: 'MAISON MARGIELA',
                image: require('../images/item04.jpg'),
                price: "200.000",
                date: "10",
                }
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