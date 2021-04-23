import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import {AppraiseHeader} from '../components/header';

const Width = Dimensions.get('window').width;
const BoxWidth = (Width - 60) / 2;

const Appraise = () => {
    const AppraiseItems=[
        {
            id:1,
            title:'MAISON MARGIEA',
            brand:'발렌시아가',
            stat:'감정대기',
            date:'2021.02.14',
        },
        {
            id:2,
            title:'MAISON MARGIEA',
            brand:'발렌시아가',
            stat:'감정중',
            date:'2021.02.14',
        },
        {
            id:3,
            title:'MAISON MARGIEA',
            brand:'발렌시아가',
            stat:'감정완료',
            date:'2021.02.14',
        },
        {
            id:4,
            title:'MAISON MARGIEA',
            brand:'발렌시아가',
            stat:'감정대기',
            date:'2021.02.14',
        },
        {
            id:5,
            title:'MAISON MARGIEA',
            brand:'발렌시아가',
            stat:'감정중',
            date:'2021.02.14',
        },
        {
            id:6,
            title:'MAISON MARGIEA',
            brand:'발렌시아가',
            stat:'감정완료',
            date:'2021.02.14',
        },
    ]
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
            <AppraiseHeader title="감정신청"/>
            <View style={{paddingHorizontal:10,}}>
                <FlatList
                    data={AppraiseItems}
                    renderItem={({item, index} ) => <RenderItem item={item}/>}
                    keyExtractor={(item) => `${item.id}`}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    );
};

const RenderItem = ({item: AppraiseItems}) => {
    return(
        <TouchableOpacity 
          style={{
              borderWidth:1,
              borderColor:'#eee',
              borderRadius:15,
              width:BoxWidth,
              padding:20,
              margin:10,
          }}>
            <Text 
                style={{fontSize:15,fontFamily:'NotoSansKR-Bold',lineHeight:20,}}
                numberOfLines={1}
                >{AppraiseItems.title}</Text>
            <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',lineHeight:20,paddingBottom:6,}}>{AppraiseItems.brand}</Text>
            <View style={{borderWidth:1,borderColor:'#447DD1',borderRadius:8,width:75,height:26,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:20,color:'#447DD1'}}>{AppraiseItems.stat}</Text>
            </View>
            <Text style={{fontSize:13,fontFamily:'NotoSansKR-Regular',lineHeight:20,}}>{AppraiseItems.date}</Text>
        </TouchableOpacity>
    );
};

export default Appraise;