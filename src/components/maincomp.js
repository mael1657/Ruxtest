import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList, Dimensions} from 'react-native';

import styles from '../style/style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export const Width = Dimensions.get('window').width;
export const Boxwidth = Width / 2 - 30;
export const Boxheight = Boxwidth * 1.4;

const MainComp = () => {
    return(
        <View>
            <Text></Text>
        </View>
    );
};

function NewItem({item: newItems}){
    const navigation = useNavigation(); 
    return(
        <TouchableOpacity 
           style={styles.prdRow} 
           onPress={()=> navigation.navigate('PrdDetail')}>
              <View style={{width:155,height:155,borderColor:'#e3e3e3',borderWidth:1,borderRadius:15,justifyContent:'center',alignItems:'center',marginBottom:10,overflow:'hidden'}}>
                 <Image style={{resizeMode:'contain',width:'80%'}}
                    source={newItems.image}
                 />
              </View>
              <View>
                  <Text style={{fontSize:17,fontFamily:'NotoSansKR-Bold',lineHeight:25,}}>{newItems.name}</Text>
                  <Text style={{fontFamily:'NotoSansKR-Medium',fontSize:13,lineHeight:18}}>입찰기간</Text>
                  <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                      <Text style={{fontFamily:'NotoSansKR-Regular',fontSize:13,lineHeight:18}}>{newItems.datea}</Text>
                      <Text style={{justifyContent:'center',alignItems:'center',borderRadius:10,paddingLeft:8,paddingRight:8,backgroundColor:'#477DD1',fontSize:12,color:'#fff',fontFamily:'NotoSansKR-Regular',lineHeight:18,}}>{newItems.dateb}</Text>
                  </View>
              </View>
           </TouchableOpacity>
    );
};

export const NewPrd = () => {
    const newItems= [
        {
            id:1,
            image:require('../images/item01.jpg'),
            name:'MAISON MARGIEA',
            datea:'~ 2021. 01. 30',
            dateb:'-10',
        },
        {
            id:2,
            image:require('../images/item02.jpg'),
            name:'MAISON MARGIEA',
            datea:'~ 2021. 01. 30',
            dateb:'-10',
        },
        {
            id:3,
            image:require('../images/item04.jpg'),
            name:'MAISON MARGIEA',
            datea:'~ 2021. 01. 30',
            dateb:'-10',
        },
        {
            id:4,
            image:require('../images/item03.jpg'),
            name:'MAISON MARGIEA',
            datea:'~ 2021. 01. 30',
            dateb:'-10',
        },
        {
            id:5,
            image:require('../images/item01.jpg'),
            name:'MAISON MARGIEA',
            datea:'~ 2021. 01. 30',
            dateb:'-10',
        },
        {
            id:6,
            image:require('../images/item02.jpg'),
            name:'MAISON MARGIEA',
            datea:'~ 2021. 01. 30',
            dateb:'-10',
        },
        {
            id:7,
            image:require('../images/item04.jpg'),
            name:'MAISON MARGIEA',
            datea:'~ 2021. 01. 30',
            dateb:'-10',
        },
        {
            id:8,
            image:require('../images/item03.jpg'),
            name:'MAISON MARGIEA',
            datea:'~ 2021. 01. 30',
            dateb:'-10',
        },
    ]
    return(
        <FlatList
            data={newItems}
            style={{flex:1,}}
            renderItem={({item, index} ) => <NewItem item={item}/>}
            keyExtractor={(item) => `${item.id}`}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    );
};

function RvItem({rvItem}){
    const navigation = useNavigation(); 
    return(
        <TouchableOpacity style={{
            backgroundColor:'#F1F1F1',
            width:Boxwidth,
            height:Boxheight,
            overflow:'hidden',
            borderRadius:9,
            marginBottom:20,
          }}
          onPress={() => navigation.navigate('ReviewDetail')}
          >
            <Image
              style={{width:200,height:143,justifyContent:'center',alignItems:'center',}}
              source={rvItem.image}
            />
            <View>
              <Text style={styles.reviewText} numberOfLines={2}>{rvItem.txt}</Text>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:10,}}>
                <View style={{flexDirection:'row',}}>
                  <Icon name="star" size={20} color="#477DD1"/>
                  <Icon name="star" size={20} color="#477DD1"/>
                  <Icon name="star" size={20} color="#477DD1"/>
                  <Icon name="star" size={20} color="#477DD1"/>
                  <Icon name="star-border" size={20} color="#DDDDDD"/>
                </View>
                <Text>
                  <Text style={{color:'#444',fontFamily:'NotoSansKR-Regular',fontSize:12,lineHeight:13,}}>{rvItem.rate}</Text>
                  <Text style={{color:'#999',fontFamily:'NotoSansKR-Regular',fontSize:12,lineHeight:13,}}>/5</Text>
                </Text>
              </View>
              <Text style={{alignSelf:'flex-end',paddingRight:10,color:'#999',fontFamily:'NotoSansKR-Regular',lineHeight:13,fontSize:12,}}>{rvItem.user}</Text>
            </View>
        </TouchableOpacity>
    );
};

export const MainReview = () => {

    const rvItems=[
        {
            id:1,
            image:require('../images/rv_thumb01.jpg'),
            txt:'매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.',
            rate:'4.0',
            user:'nappeni',
        },
        {
            id:2,
            image:require('../images/rv_thumb01.jpg'),
            txt:'매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.',
            rate:'4.0',
            user:'nappeni',
        },
        {
            id:3,
            image:require('../images/rv_thumb01.jpg'),
            txt:'매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.',
            rate:'4.0',
            user:'nappeni',
        },
        {
            id:4,
            image:require('../images/rv_thumb01.jpg'),
            txt:'매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.',
            rate:'4.0',
            user:'nappeni',
        },
    ]
    return(
        <>
            {rvItems.map((rvItem) => (
                <RvItem key={rvItem.id} rvItem={rvItem}/>
            ))} 
        </>
    );
};


export default MainComp;