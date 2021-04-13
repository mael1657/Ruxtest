import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import TabNavigator, {BottomTabNavigator} from './TabNavigator';
import StackNavigation, {PrdStack, ReviewStack} from './StackNavigator';

import Icon from 'react-native-vector-icons/Ionicons';


import PrdList from '../screen/PrdList';
import Tracking from '../screen/tracking';
import Backbutton from '../components/backbutton';

const Drawer = createDrawerNavigator();



const DrawerNavigator = () => {
    return (
        <Drawer.Navigator 
        drawerContent={props => <CustomDrawerContent {...props}/>}
        drawerStyle={{width:'80%'}}
        >
            <Drawer.Screen name="Home" component={BottomTabNavigator}/>
            <Drawer.Screen name="상품목록" component={PrdStack}/>
            <Drawer.Screen name="운송장 조회" component={Tracking}/>
            <Drawer.Screen name="리뷰" component={ReviewStack}/>
        </Drawer.Navigator>
    );
};

function CustomDrawerContent(props) {
    return(
        <View style={{flex:1,}}>
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
                            <Text style={{fontSize:13,color:'#fff'}}>로그인</Text>
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
                            <Text style={{fontSize:13,color:'#477DD1'}}>회원가입</Text>
                        </TouchableOpacity>
                        <Backbutton/>
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
                    <DrawerItemList {...props}/>
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
                        <Text style={{fontSize:16,fontWeight:'bold'}}>WOMEN</Text>
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
                        <Text style={{fontSize:16,fontWeight:'bold'}}>MEN</Text>
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
                        <Text style={{fontSize:16,fontWeight:'bold'}}>KIDS</Text>
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
                        <Text style={{fontSize:16,fontWeight:'bold'}}>UNISEX</Text>
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
                <Text style={{color:'#fff'}}>찜 목록 보러가기</Text>
                <View style={{width:24,height:24,backgroundColor:'#fff',justifyContent:'center',alignItems:'center',borderRadius:24,marginLeft:10,}}>
                    <Text style={{color:'#477DD1'}}>8</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};



export default DrawerNavigator;
