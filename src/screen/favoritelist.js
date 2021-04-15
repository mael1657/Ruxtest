import React, {useState } from 'react';
import {SafeAreaView,View,FlatList,Text,Image,TouchableOpacity,Dimensions,TouchableWithoutFeedback} from 'react-native';

import Header, {FavoriteHeader} from '../components/header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 
export const Width = Dimensions.get('window').width;
export const Height = Dimensions.get('window').height;
const PADDING = 20;
const Box = Width / 4;

const FavoriteList = ({navigation}) => {
    const [favitem, setFavitem] = useState([
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
    ]);

    const [fav ,setFav] = useState('false');
    
    function handleOnPress(){
        setFav(!fav);
    };
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff '}}>
            <FavoriteHeader title="찜 목록"/>
            <FlatList
                numColumns={1}
                keyExtractor={(item) => item.id}
                data={favitem}
                renderItem={({ item }) => (
                    <View style={{flex:1,backgroundColor:'#fff',paddingHorizontal:20,}}>
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
                        <View style={{width:Box,height:Box,borderWidth: 1,borderColor: '#e3e3e3',borderRadius: 8,marginRight:10,overflow:'hidden'}}>
                            <Image
                            style={{resizeMode:'contain',width:Box,height:Box}}
                            source={item.image}/>
                        </View>
                        <View style={{flexGrow:1,}}>
                            <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',marginBottom:10,}}>
                                <Text 
                                style={{
                                    fontSize:16,
                                    fontWeight: 'bold',
                                    flex:1,
                                }}
                                numberOfLines={1}
                                >{item.name}</Text>
                            </View>
                            <Text style={{fontWeight:'bold',color:'#333'}} numberOfLines={1}>즉시구매 <Text style={{fontWeight:'normal',color:'#555'}}>{item.price}원</Text></Text>
                            <Text style={{fontWeight:'bold',color:'#333'}}>견적 마감 <Text style={{fontWeight:'normal',color:'#555'}}>{item.date}일 전</Text></Text>
                        </View>
                        <View style={{alignSelf:'flex-end'}}>
                            <TouchableWithoutFeedback onPress={handleOnPress} key={item.index}>
                                {/* <Image source={fav === 'false' ? require('../images/heart_no.png') : require('../images/heart.png') } /> */}
                                {fav === 'false'
                                ? <Icon name="heart-outline" size={30} color="#ccc"/>
                                : <Icon name="heart" size={30} color="#477DD1"/>}
                            </TouchableWithoutFeedback> 
                        </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};


export default FavoriteList;