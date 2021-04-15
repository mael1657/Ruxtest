import React, {useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {MypageHeader} from '../components/header';

const CustomerCenter = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <MypageHeader/>
            <View style={{width:'100%',height:60,justifyContent:'center',paddingLeft:20,}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>고객센터</Text>
            </View>
            <View style={{flex:1}}>
                <TouchableOpacity 
                    style={styles.item}
                    onPress={() => navigation.navigate('Useredit')}
                    >
                    <Text style={{fontSize:15,}}>사기방지 가이드</Text>
                    <Icon name="chevron-forward" size={20} color="#AAAAAA"/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.item}
                    onPress={() => navigation.navigate('Useredit')}
                    >
                    <Text style={{fontSize:15,}}>공지사항</Text>
                    <Icon name="chevron-forward" size={20} color="#AAAAAA"/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.item}
                    onPress={() => navigation.navigate('Useredit')}
                    >
                    <Text style={{fontSize:15,}}>1:1 문의</Text>
                    <Icon name="chevron-forward" size={20} color="#AAAAAA"/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.item}
                    onPress={() => navigation.navigate('Useredit')}
                    >
                    <Text style={{fontSize:15,}}>FAQ</Text>
                    <Icon name="chevron-forward" size={20} color="#AAAAAA"/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.item}
                    onPress={() => navigation.navigate('Useredit')}
                    >
                    <Text style={{fontSize:15,}}>개인정보처리방침</Text>
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
                    <Text style={{fontSize:15,}}>이용약관</Text>
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

export default CustomerCenter;