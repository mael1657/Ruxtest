import React from 'react';
import {View,TouchableOpacity,Text,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {DrawerContentScrollView,} from '@react-navigation/drawer';
import Backbutton from '../components/backbutton';

const CustomDrawer = (props, {navigation}) => {
    return(
        <>
             <DrawerContentScrollView {...props}>
                <View style={{paddingHorizontal:10,flex:1}}>
                    <View style={{
                        flexDirection:'row',
                        paddingTop:5,
                        borderBottomWidth:1,
                        borderBottomColor:'#eee',
                        paddingBottom:10,
                        alignItems:'center'
                        }}>
                        <TouchableOpacity 
                        style={{
                            backgroundColor:'#477DD1',
                            borderRadius:8,
                            height:35,
                            paddingHorizontal:15,
                            justifyContent:'center',
                            alignItems:'center',
                            marginRight:10,
                        }}>
                            <Text style={{fontSize:13,color:'#fff',fontFamily:'NotoSansKR-Regular',lineHeight:20}}>로그인</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{
                            backgroundColor:'#fff',
                            borderWidth:1,
                            borderColor:'#477DD1',
                            borderRadius:8,
                            height:35,
                            paddingHorizontal:15,
                            justifyContent:'center',
                            alignItems:'center',
                            marginRight:10,
                        }}>
                            <Text style={{fontSize:13,color:'#477DD1',fontFamily:'NotoSansKR-Regular',lineHeight:20}}>회원가입</Text>
                        </TouchableOpacity>
                        <Backbutton onPress={() => props.navigation.closeDrawer()}/>
                    </View>
                    {/* <DrawerItem 
                    label="WOMEN" 
                    onPress={() => {}}
                    
                    >
                        <Text>WOMEN</Text>
                        <Icon name="ios-chevron-forward" size={20} color="#eee"/>
                    </DrawerItem>
                    <DrawerItem label="MEN" onPress={() => {}}/>
                    <DrawerItem label="KIDS" onPress={() => {}}/>
                    <DrawerItem label="UNISEX" onPress={() => {}}/> */}
                    <TouchableOpacity 
                        style={{
                            flexDirection:'row',
                            justifyContent:'space-between',
                            alignItems:'center',
                            paddingVertical:20,
                            borderBottomWidth:1,
                            borderBottomColor:'#eee',
                        }}>
                        <Text style={{fontSize:16,fontFamily:'NotoSansKR-Bold',lineHeight:20,}}>WOMEN</Text>
                        <Icon name="ios-chevron-forward" size={20} color="#D8D8D8"/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => {}}
                        style={{
                            flexDirection:'row',
                            justifyContent:'space-between',
                            alignItems:'center',
                            paddingVertical:20,
                            borderBottomWidth:1,
                            borderBottomColor:'#eee',
                        }}>
                        <Text style={{fontSize:16,fontFamily:'NotoSansKR-Bold',lineHeight:20,}}>MEN</Text>
                        <Icon name="ios-chevron-forward" size={20} color="#D8D8D8"/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => {}}
                        style={{
                            flexDirection:'row',
                            justifyContent:'space-between',
                            alignItems:'center',
                            paddingVertical:20,
                            borderBottomWidth:1,
                            borderBottomColor:'#eee',
                        }}>
                        <Text style={{fontSize:16,fontFamily:'NotoSansKR-Bold',lineHeight:20,}}>KIDS</Text>
                        <Icon name="ios-chevron-forward" size={20} color="#D8D8D8"/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => {}}
                        style={{
                            flexDirection:'row',
                            justifyContent:'space-between',
                            alignItems:'center',
                            paddingVertical:20,
                            borderBottomWidth:1,
                            borderBottomColor:'#eee',
                        }}>
                        <Text style={{fontSize:16,fontFamily:'NotoSansKR-Bold',lineHeight:20,}}>UNISEX</Text>
                        <Icon name="ios-chevron-forward" size={20} color="#D8D8D8"/>
                    </TouchableOpacity>
                </View>
            </DrawerContentScrollView>
            <TouchableOpacity
                style={{
                    backgroundColor:'#477DD1',
                    height:62,
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                <Text style={{color:'#fff',fontFamily:'NotoSansKR-Regular',lineHeight:20,fontSize:14,}}>찜 목록 보러가기</Text>
                <View style={{width:24,height:24,backgroundColor:'#fff',justifyContent:'center',alignItems:'center',borderRadius:24,marginLeft:10,}}>
                    <Text style={{color:'#477DD1'}}>8</Text>
                </View>
            </TouchableOpacity>
        </>
    );
};

export default CustomDrawer;