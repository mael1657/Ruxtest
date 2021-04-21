import React from 'react';
import {View, Text, Dimensions, TouchableOpacity, Image, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Width = Dimensions.get('window').width;
const Boxwidth = Width / 2 - 30;
const Boxheight = Boxwidth - 70;

const ProductRegistBrandList = () => {
    const brandItem= [
        {
            id:1,
            title:'티파니',
            image:require('../images/make01.jpg'),
        },
        {
            id:2,
            title:'지방시',
            image:require('../images/make02.jpg'),
        },
        {
            id:3,
            title:'에르메스',
            image:require('../images/make03.jpg'),
        },
        {
            id:4,
            title:'프라다',
            image:require('../images/make04.jpg'),
        },
        {
            id:5,
            title:'오메가',
            image:require('../images/make05.jpg'),
        },
    ]
    return(
        <View 
            style={{
                width:Width,
                flex:1,
                padding:20,
            }}>
            <FlatList
                columnWrapperStyle={{justifyContent: 'space-between'}}
                style={{flex:1}}
                data={brandItem}
                renderItem={({item, index} ) => <BrandItem item={item}/>}
                keyExtractor={(item) => `${item.id}`}
                numColumns={2}
            />
        </View>
    );
};

const BrandItem = ({item : brandItem}) => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity 
            onPress={() => navigation.navigate('ProductRegistInfo')}
            style={{width:Boxwidth,paddingBottom:12,}}
        >
            <View 
                style={{
                    width:Boxwidth,
                    borderWidth:1,
                    borderColor:'#eee',
                    borderRadius:10,
                    overflow:'hidden',
                }}>
                <View style={{width:Boxwidth,height:Boxheight,}}>
                <Image
                    style={{resizeMode:'cover',width:'100%',height:'100%'}}
                    source={brandItem.image}/>
                </View>
            </View>
            <View style={{width:Boxwidth,alignItems:'center',paddingTop:6}}>
                <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',lineHeight:20,}}>{brandItem.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ProductRegistBrandList;