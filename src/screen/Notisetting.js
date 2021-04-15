import React, {useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {MypageHeader} from '../components/header';

const NotiSetting = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <MypageHeader/>
            <View style={{width:'100%',height:60,justifyContent:'center',paddingLeft:20,}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>알림설정</Text>
            </View>
            <View style={{flex:1}}>
                <TouchableOpacity 
                    style={styles.item}
                    onPress={() => navigation.navigate('KeywordSet')}
                    >
                    <Text style={{fontSize:15,}}>키워드 알림 설정</Text>
                    <Icon name="chevron-forward" size={20} color="#AAAAAA"/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{
                        backgroundColor:'#F8F8F8',
                        flexDirection:'row',
                        height:50,
                        justifyContent:'space-between',
                        alignItems:'center',
                        paddingHorizontal:20,
                        borderBottomColor:'#eee',
                        borderBottomWidth:0,
                    }}
                    onPress={() => navigation.navigate('Useredit')}
                    >
                    <Text style={{fontSize:15,}}>위시리스트 알림 설정</Text>
                    <Icon name="chevron-forward" size={20} color="#AAAAAA"/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    item:{
        backgroundColor:'#F8F8F8',
        flexDirection:'row',
        height:50,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        borderBottomColor:'#eee',
        borderBottomWidth:1,
    }
})

export default NotiSetting;