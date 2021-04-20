import React, {useState} from 'react';
import {SafeAreaView, View, Text,TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {MypageHeader} from '../components/header';

const KeywordSet = ({navigation}) => {
    const [state,setState] = useState('on');
    
    const keyitems= [
        {
            id:1,
            title:"명품백"
        },
        {
            id:2,
            title:"시계"
        },
        {
            id:3,
            title:"트위드"
        },
        {
            id:4,
            title:"쥬얼리"
        },
        {
            id:5,
            title:"오버핏 후드티"
        },
        {
            id:6,
            title:"반지갑"
        },
        {
            id:7,
            title:"단화"
        },
        {
            id:8,
            title:"장화"
        },
        {
            id:9,
            title:"스커트"
        },
        {
            id:10,
            title:"언더웨어"
        },
    ]


    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <MypageHeader/>
            <View style={{flex:1, padding:20,}}>
                <Text style={{fontSize:16,fontFamily:'NotoSansKR-Bold',lineHeight:20,}}>키워드 알림 설정</Text>
                <View style={{width:102,height:35,borderRadius:8,backgroundColor:'#DEDEDE',flexDirection:'row',justifyContent:'center',alignItems:'center',marginVertical:10,}}>
                    <TouchableOpacity 
                    onPress ={() => setState('on')}
                    style={{
                        width:51,
                        height:35,
                        borderRadius:8,
                        backgroundColor: state === 'on' ? '#477DD1' : null,
                        justifyContent:'center',
                        alignItems:'center',
                    }}> 
                        <Text 
                        style={{
                            color: state === 'on' ? '#fff' : '#999999',
                            fontFamily:'NotoSansKR-Bold',
                            lineHeight:20,
                        }}>ON</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress ={() => setState('off')}
                    style={{
                        width:51,
                        height:35,
                        borderRadius:8,
                        backgroundColor: state === 'off' ? '#477DD1' : null,
                        justifyContent:'center',
                        alignItems:'center',
                    }}> 
                        <Text 
                        style={{
                            color: state === 'off' ? '#fff' : '#999999',
                            fontFamily:'NotoSansKR-Bold',
                            lineHeight:20,
                        }}>OFF</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                    <View style={{
                        borderWidth:1,
                        borderColor:'#eee',
                        borderRadius:8,
                        flexDirection:'row',
                        alignItems:'center',
                        height:45,
                        paddingHorizontal:10,
                        flex:1,
                        }}>
                        <Text style={{fontSize:20,color:'#707070',fontFamily:'NotoSansKR-Regular',lineHeight:26,}}>#</Text>
                        <TextInput
                            style={{padding:0,paddingLeft:7,flex:1,height:45}}
                            placeholder="키워드를 입력해주세요."
                            placeholderTextColor="#C9C9C9"
                        />
                    </View>
                    <TouchableOpacity style={{
                        width:93,
                        height:45,
                        backgroundColor:'#477DD1',
                        borderRadius:8,
                        justifyContent:'center',
                        alignItems:'center',
                        marginLeft:5,
                    }}>
                        <Text style={{fontSize:13,fontFamily:'NotoSansKR-Bold',color:'#fff'}}>키워드 추가</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection:'row',
                    paddingVertical:16,
                    flexWrap:'wrap', 
                }}>
                   {keyitems.map((keyitem) => (
                        <Array key={keyitem.id} keyitem={keyitem}/>
                    ))} 
                </View>
            </View>
        </SafeAreaView>
    );
};

function Array({keyitem}){
    return(
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            backgroundColor:'#F8F8F8',
            paddingHorizontal:8,
            paddingVertical:7,
            borderRadius:8,
            marginBottom:5,marginRight:5,
        }}>
            <Text style={{fontSize:13,fontFamily:'NotoSansKR-Regular',lineHeight:16,color:'#707070',paddingRight:5}}># {keyitem.title}</Text>
            <TouchableOpacity>
                  <Icon name="close" size={13} color="#707070" />
            </TouchableOpacity>
        </View>
    );
}


export default KeywordSet;