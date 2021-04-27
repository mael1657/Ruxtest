import React from 'react';
import {SafeAreaView,View,Text,Image,TouchableOpacity,Dimensions,FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {RPHeader} from '../components/header';

export const Width = Dimensions.get('window').width;
export const Height = Dimensions.get('window').height;
const PADDING = 20;
const Box = (Width - PADDING * 2 - 20) /2

const RegisteredProduct = ({navigation}) => {
    const RPitem =[
        {
            id:1,
            title:'MAISON MARGIELA',
            image:require('../images/item01.jpg'),
            shown:'노출',
            authentic:'정품',
            date:'2021.02.14',
        },
        {
            id:2,
            title:'MAISON MARGIELA',
            image:require('../images/item02.jpg'),
            shown:'노출',
            authentic:'정품',
            date:'2021.02.14',
        },
    ]
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <RPHeader title="등록물품 "/>
            <View style={{flex:1,paddingHorizontal:20,}}>
                <FlatList
                style={{flex:1}}
                data={RPitem}
                renderItem={({item, index}) => <RPlist item={item}/>}
                keyExtractor={(item) => `${item.id}`}
                numColumns={2}
                />
            </View>
        </SafeAreaView>
    );
};

const RPlist = ({item : RPitem}) => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity
        onPress={() => navigation.navigate('ReigsteredProductInfo')}
        style={{
            width:Box,
            margin:5,
        }}> 
            <View 
            style={{
                borderWidth:1,
                borderColor:'#eee',
                borderRadius:11,
                overflow:'hidden',
                backgroundColor:'#fff',
                width:Box,
                height:Box,
                marginBottom:20,
            }}>
                <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}> 
                    <Image
                        style={{resizeMode:'cover',width:'100%'}}
                        source={RPitem.image}
                    />
                </View>
            </View>
            <Text
            style={{
                fontSize:18,
                fontFamily:'NotoSansKR-Bold',
                lineHeight:20,
                paddingBottom:6,
            }}
            numberOfLines={1}
            ellipsizeMode="tail"
            >{RPitem.title}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:4,}}>
                <View style={{flex:1,height:26,borderWidth:1,borderColor:'#447DD1',borderRadius:9,justifyContent:'center',alignItems:'center',marginRight:5,}}>
                    <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:20,color:'#447DD1'}}>{RPitem.shown}</Text>
                </View>
                <View style={{flex:1,height:26,backgroundColor:'#447DD1',borderRadius:9,justifyContent:'center',alignItems:'center',}}>
                    <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:20,color:'#fff'}}>{RPitem.authentic}</Text>
                </View>
            </View>    
            <Text style={{fontSize:13,fontFamily:'NotoSansKR-Regular',lineHeight:20,color:'#555'}}>{RPitem.date}</Text>
        </TouchableOpacity>
    );
}

export default RegisteredProduct;