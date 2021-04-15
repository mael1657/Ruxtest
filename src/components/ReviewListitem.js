import React from 'react';
import {View,Text,Image,FlatList,TouchableOpacity,Dimensions} from 'react-native';

import { useNavigation } from '@react-navigation/native';

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
            height:247,
            overflow:'hidden',
            borderRadius:9,
            margin:10,
        }}
        onPress={() => navigation.navigate('ReviewDetail')}
        >
            <Image
                style={{width:'auto',justifyContent:'center',alignItems:'center',resizeMode:'cover'}}
                source={renderItems.img}
            />
            <Text style={styles.reviewText} numberOfLines={2}>{renderItems.txt}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:10,}}>
                <View style={{flexDirection:'row',}}>
                <Image
                style={styles.star}
                source={require('../images/star01.png')}
                />
                <Image
                style={styles.star}
                source={require('../images/star01.png')}
                />
                <Image
                style={styles.star}
                source={require('../images/star01.png')}
                />
                <Image
                style={styles.star}
                source={require('../images/star01.png')}
                />
                <Image
                style={styles.star}
                source={require('../images/star02.png')}
                />
                </View>
                <Text>
                <Text style={{color:'#444'}}>4.0</Text>
                <Text style={{color:'#999'}}>/5</Text>
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
        },
        {
            id:2,
            img:require('../images/rv_thumb01.jpg'),
            txt:"매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.",
            user:"nappeni",
        },
        {
            id:3,
            img:require('../images/rv_thumb01.jpg'),
            txt:"매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.",
            user:"nappeni",
        },
        {
            id:4,
            img:require('../images/rv_thumb01.jpg'),
            txt:"매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.",
            user:"nappeni",
        },
        {
            id:5,
            img:require('../images/rv_thumb01.jpg'),
            txt:"매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.",
            user:"nappeni",
        },
        {
            id:6,
            img:require('../images/rv_thumb01.jpg'),
            txt:"매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.",
            user:"nappeni",
        },
        {
            id:7,
            img:require('../images/rv_thumb01.jpg'),
            txt:"매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.",
            user:"nappeni",
        },
        {
            id:8,
            img:require('../images/rv_thumb01.jpg'),
            txt:"매우 좋아요 잘 사용할게요. 여태 산 제품 중에서 만족해요.",
            user:"nappeni",
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