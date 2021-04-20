import React from 'react';
import {View,Text,Image,FlatList,TouchableOpacity,Dimensions} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from '../style/style';

export const Width = Dimensions.get('window').width;
export const Height = Dimensions.get('window').height;
const PADDING = 20;
const Box = (Width - PADDING * 2 - 20) /2

function ReviewItem({item: renderItems}) {
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={{
            backgroundColor:'#F1F1F1',
            width:Box,
            overflow:'hidden',
            borderRadius:9,
            margin:10,
            paddingBottom:10,
        }}
        onPress={() => navigation.navigate('ReviewDetail')}
        >
            <Image
                style={{width:Box,height:Box,resizeMode:'cover',}}
                source={renderItems.img}
            />
            <Text style={styles.reviewText} numberOfLines={2}>{renderItems.txt}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:10,}}>
                <View style={{flexDirection:'row',}}>
                  <Icon name="star" size={20} color="#477DD1"/>
                  <Icon name="star" size={20} color="#477DD1"/>
                  <Icon name="star" size={20} color="#477DD1"/>
                  <Icon name="star" size={20} color="#477DD1"/>
                  <Icon name="star-border" size={20} color="#DDDDDD"/>
                </View>
                <Text>
                  <Text style={{color:'#444',fontFamily:'NotoSansKR-Regular',fontSize:12,lineHeight:13,}}>{renderItems.rate}</Text>
                  <Text style={{color:'#999',fontFamily:'NotoSansKR-Regular',fontSize:12,lineHeight:13,}}>/5</Text>
                </Text>
              </View>
            <Text style={{alignSelf:'flex-end',paddingRight:10,color:'#999',}}>{renderItems.user}</Text>
        </TouchableOpacity>
    );
};

const Rv_List = ({navigation}) => {
    const renderItems=[
        {
            id:1,
            img:require('../images/rv_thumb01.jpg'),
            txt:"매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.",
            user:"nappeni",
            rate: "4.0"
        },
        {
            id:2,
            img:require('../images/rv_thumb01.jpg'),
            txt:"매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.",
            user:"nappeni",
            rate: "4.0"
        },
        {
            id:3,
            img:require('../images/rv_thumb01.jpg'),
            txt:"매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.",
            user:"nappeni",
            rate: "4.0"
        },
        {
            id:4,
            img:require('../images/rv_thumb01.jpg'),
            txt:"매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.",
            user:"nappeni",
            rate: "4.0"
        },
        {
            id:5,
            img:require('../images/rv_thumb01.jpg'),
            txt:"매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.",
            user:"nappeni",
            rate: "4.0"
        },
        {
            id:6,
            img:require('../images/rv_thumb01.jpg'),
            txt:"매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.",
            user:"nappeni",
            rate: "4.0"
        },
        {
            id:7,
            img:require('../images/rv_thumb01.jpg'),
            txt:"매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.",
            user:"nappeni",
            rate: "4.0"
        },
        {
            id:8,
            img:require('../images/rv_thumb01.jpg'),
            txt:"매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.",
            user:"nappeni",
            rate: "4.0"
        },
    ]
    return(
        <FlatList
        style={{flex:1,}}
        data={renderItems}
        renderItem={({item, index} ) => <ReviewItem item={item}/>}
        keyExtractor={(item) => `${item.id}`}
        numColumns={2}
    />

    );
}


export default Rv_List;