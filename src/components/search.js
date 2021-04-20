import React, {useState} from 'react';
import {View, Text, TouchableOpacity,TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {Sch_history, Key_alert} from '../components/searchKeyword';

const Search = () => {
    const [modalOpen, setModalOpen] = useState(true);
    const [keyword, setKeyword] = useState('on');
    return(
        <View style={{flex:1,padding:20,}}>
            <View style={{paddingBottom:15,}}>
                <Text style={{fontFamily:'NotoSansKR-Bold',fontSize:16,lineHeight:20,paddingBottom:15,}}>키워드 검색</Text>
                <View style={{
                    height:45,
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    borderWidth:1,
                    borderColor:'#eee',
                    borderRadius:8,
                    paddingLeft:10,}}>
                        <Text style={{fontSize:20,color:'#707070',fontFamily:'NotoSansKR-Regular',lineHeight:24,}}>#</Text>
                        <TextInput
                            style={{flex:1,fontSize:13,}}
                            placeholder="키워드를 입력해주세요."
                            placeholderTextColor="#C9C9C9"
                        /> 
                        <TouchableOpacity style={{width:40,justifyContent:'center',alignItems:'center'}}>
                            <Icon name="search" size={24} color="#477DD1"/>
                        </TouchableOpacity>
                </View>
            </View>
            <View style={{borderBottomWidth:1,borderBottomColor:'#eee',paddingBottom:50,marginBottom:20,}}>
                <Text style={{fontFamily:'NotoSansKR-Medium',fontSize:13,color:'#999999',lineHeight:18,paddingBottom:15,}}>검색기록</Text>
                <View style={{flexDirection:'row',flexWrap:'wrap',}}>
                    <Sch_history/>
                </View>
            </View>
            <View>
                <Text style={{fontSize:16,fontFamily:'NotoSansKR-Bold'}}>키워드 알림 설정</Text>
                <View style={{
                    flexDirection:'row',
                    width:100,
                    backgroundColor:'#DEDEDE',
                    borderRadius:8,
                    height:30,
                    marginBottom:15,
                    }}>
                    <TouchableOpacity 
                    onPress={() => setKeyword('on')}
                    style={{
                        width:50,
                        height:30,
                        borderRadius:8,
                        backgroundColor: keyword === 'on' ? '#477DD1' : null, 
                        alignItems:'center',
                        justifyContent:'center'
                        }}>
                        <Text style={{color:keyword === 'on' ? '#fff' : '#B5B5B5',fontFamily:'NotoSansKR-Medium',lineHeight:24,}}>ON</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => setKeyword('off')}
                    style={{
                        width:50,
                        height:30,
                        borderRadius:8,
                        alignItems:'center',
                        justifyContent:'center',
                        backgroundColor: keyword === 'off' ? '#477DD1' : null,
                        }}>
                        <Text style={{color:keyword === 'off' ? '#fff' : '#B5B5B5' ,fontFamily:'NotoSansKR-Medium',lineHeight:24,}}>OFF</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <View style={{
                        height:45,
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        borderWidth:1,
                        borderColor:'#eee',
                        borderRadius:8,
                        paddingLeft:10,
                        flex:1,
                        marginRight:5,}}>
                            <Text style={{fontSize:20,color:'#707070',fontFamily:'NotoSansKR-Regular',lineHeight:24,}}>#</Text>
                            <TextInput
                                style={{flex:1,fontSize:13,}}
                                placeholder="키워드를 입력해주세요."
                                placeholderTextColor="#C9C9C9"
                            /> 
                    </View>
                    <TouchableOpacity style={{
                        height:45,
                        width:100,
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:'#447DD1',
                        borderRadius:8,
                    }}>
                        <Text style={{color:'#fff',fontFamily:'NotoSansKR-Medium',fontSize:14,}}>키워드 추가</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:15,}}>
                    <View style={{flexDirection:'row', flexWrap:'wrap',}}>
                        <Key_alert/>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Search;