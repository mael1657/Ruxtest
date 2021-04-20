import React from 'react';
import {View, Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions, TextInput, Image} from 'react-native';
import {DefaultHead} from '../components/header';
import Icon from 'react-native-vector-icons/Ionicons'
import TransList from '../components/transitem';

export const Width = Dimensions.get('window').width;
export const Threebox = Width / 3 - 17;
export const Box = Width / 2 - 22;

const Transaction = () => {
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <DefaultHead/>
            <View style={{paddingHorizontal:20,paddingBottom:10,}}>
                <View style={{justifyContent:'center',alignItems:'center',height:60,}}>
                    <Text style={{fontSize:18,fontFamily:'NotoSansKR-Bold'}}>거래내역</Text>
                </View>
                <View 
                    style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        paddingBottom:5,
                        }}>
                    <TouchableOpacity 
                        style={{
                            width:Threebox,
                            height:35,
                            borderRadius:8,
                            borderWidth:1,
                            backgroundColor:'#447DD1',
                            justifyContent:'center',
                            alignItems:'center',
                            }}>
                        <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',lineHeight:20,color:'#fff'}}>구매</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{
                            width:Threebox,
                            height:35,
                            borderRadius:8,
                            borderWidth:1,
                            borderColor:'#447DD1',
                            justifyContent:'center',
                            alignItems:'center',
                            }}>
                        <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',lineHeight:20,color:'#447DD1'}}>판매</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{
                            width:Threebox,
                            height:35,
                            borderRadius:8,
                            borderWidth:1,
                            borderColor:'#447DD1',
                            justifyContent:'center',
                            alignItems:'center',
                            }}>
                        <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',lineHeight:20,color:'#447DD1'}}>정산</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:5,}}>
                    <TouchableOpacity 
                        style={{
                            width:Box,
                            height:35,
                            borderRadius:8,
                            borderWidth:1,
                            backgroundColor:'#447DD1',
                            justifyContent:'center',
                            alignItems:'center',
                            }}>
                        <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',lineHeight:20,color:'#fff'}}>거래중</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{
                            width:Box,
                            height:35,
                            borderRadius:8,
                            borderWidth:1,
                            borderColor:'#447DD1',
                            justifyContent:'center',
                            alignItems:'center',
                            }}>
                        <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',lineHeight:20,color:'#447DD1'}}>거래완료</Text>
                    </TouchableOpacity>
                </View>
                <View 
                    style={{
                        borderWidth:1,
                        borderColor:'#eee',
                        borderRadius:8,
                        width:'100%',
                        height:35,
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        paddingHorizontal:10,
                    }}>
                    <TextInput 
                        placeholder="제품명을 입력해주세요."
                        style={{padding:0,}}/>
                    <TouchableOpacity style={{width:24,height:24,}}>
                        <Icon name="search" size={24} color="#447DD1"/>
                    </TouchableOpacity>
                </View>
            </View>
                <View style={{paddingHorizontal:20,flex:1 }}>
                    <TransList/>
                </View>
        </SafeAreaView>
    );
};

export default Transaction;