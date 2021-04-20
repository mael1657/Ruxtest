import React from 'react';
import {FlatList, TouchableOpacity, View, Image, Text,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const TransList = () => {
    const transItem = [
        {
            id:1,
            image: require('../images/profile01.png'),
            title: 'MAISON MARGIELA',
            price: '200,000원',
            user: 'nappeni',
            location: '샤넬 종로점',
            date: '2021.03.08',
        },
        {
            id:2,
            image: require('../images/profile02.png'),
            title: 'MAISON MARGIELA',
            price: '300,000원',
            user: 'nappeni',
            location: '샤넬 종로점',
            date: '2021.03.08',
        },
        {
            id:3,
            image: require('../images/profile03.png'),
            title: 'MAISON MARGIELA',
            price: '300,000원',
            user: 'nappeni',
            location: '샤넬 종로점',
            date: '2021.03.08',
        },
        {
            id:4,
            image: require('../images/profile_no_img.png'),
            title: 'MAISON MARGIELA',
            price: '300,000원',
            user: 'nappeni',
            location: '샤넬 종로점',
            date: '2021.03.08',
        },
        {
            id:5,
            image: require('../images/profile_no_img.png'),
            title: 'MAISON MARGIELA',
            price: '300,000원',
            user: 'nappeni',
            location: '샤넬 종로점',
            date: '2021.03.08',
        },
        {
            id:6,
            image: require('../images/profile_no_img.png'),
            title: 'MAISON MARGIELA',
            price: '300,000원',
            user: 'nappeni',
            location: '샤넬 종로점',
            date: '2021.03.08',
        },
        {
            id:7,
            image: require('../images/profile_no_img.png'),
            title: 'MAISON MARGIELA',
            price: '300,000원',
            user: 'nappeni',
            location: '샤넬 종로점',
            date: '2021.03.08',
        },
        {
            id:8,
            image: require('../images/profile_no_img.png'),
            title: 'MAISON MARGIELA',
            price: '300,000원',
            user: 'nappeni',
            location: '샤넬 종로점',
            date: '2021.03.08',
        },
    ]
    return(
        <FlatList
            style={{flex:1}}
            data={transItem}
            renderItem={({item, index} ) => <TransItem item={item}/>}
            keyExtractor={(item) => `${item.id}`}
            showsVerticalScrollIndicator={false}
        />
    );
};

function TransItem({item : transItem}){
    return(
        <TouchableOpacity 
            style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                borderBottomWidth:1,
                borderBottomColor:'#eee',
                paddingVertical:14,
                }}
        >
            <TouchableOpacity
                style={{width:20,height:20,position:'absolute',top:4,right:0,}}
                >
                <Icon name="close" size={20} color="#AAAAAA"/>
            </TouchableOpacity>
            <View style={{width:62,height:62,borderRadius:31,overflow:'hidden',marginRight:10,}}>
                <Image 
                    style={{resizeMode:'cover',width:'100%',height:'100%',}}
                    source={transItem.image}
                />
            </View>
            <View style={{flexGrow:1}}>
                <Text style={{fontSize:16,fontFamily:'NotoSansKR-Bold',lineHeight:20,paddingBottom:4,}}>{transItem.title}</Text>
                <Text style={{fontFamily:'NotoSansKR-Medium',lineHeight:16,fontSize:13,}}>구매가 <Text style={{fontFamily:'NotoSansKR-Regular',color:'#555'}}>{transItem.price}</Text></Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:20,color:'#5E5E5E',paddingRight:6,}}>{transItem.user}</Text>
                    <Text style={{fontSize:12,fontFamily:'NotoSansKR-Regular',lineHeight:20,color:'#B9B9B9',paddingRight:6,}}>{transItem.location}</Text>
                    <Text style={{fontSize:12,fontFamily:'NotoSansKR-Regular',lineHeight:20,color:'#B9B9B9'}}>{transItem.date}</Text>
                </View>
            </View>
            <TouchableOpacity 
                style={{
                    backgroundColor:'#447DD1',
                    height:32,
                    width:80,
                    borderRadius:9,
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                <Text style={{fontFamily:'NotoSansKR-Medium',color:'#fff',fontSize:13,lineHeight:20,}}>카드결제</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

export default TransList;