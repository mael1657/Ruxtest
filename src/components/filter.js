import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {FtrBrand, FtrCategory, FtrType, FtrPrice} from './filterItem';

const PrdFilter = () => {
    return(
        <SafeAreaView style={{flex:1,paddingHorizontal:20,}}>
            <ScrollView>
                <Text style={{fontSize:18,fontFamily:'NotoSansKR-Bold',lineHeight:20,}}>쇼핑몰 필터</Text>
                <View style={{paddingBottom:30,}}>
                    <Text style={styles.title}>브랜드 
                    <Text style={{fontSize:12,color:'#B7B7B7'}}>  (선택1)</Text></Text>
                    <View style={{flexDirection:'row',flexWrap:'wrap',}}>
                        <FtrBrand/>

                    </View>
                </View>
                <View style={{paddingBottom:30,}}>
                    <Text style={styles.title}>카테고리 
                    <Text style={{fontSize:12,color:'#B7B7B7'}}>  (선택1)</Text></Text>
                    <View style={{flexDirection:'row',flexWrap:'wrap',}}>
                        <FtrCategory/>

                    </View>
                </View>
                <View style={{paddingBottom:30,}}>
                    <Text style={styles.title}>거래유형</Text>
                    <View style={{flexDirection:'row',flexWrap:'wrap',}}>
                        <FtrType/>
                    </View>
                </View>
                <View style={{marginBottom:10,}}>
                   <Text style={styles.title}>가격대</Text>
                   <View style={{flex:1}}>
                       <FtrPrice/>
                   </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',}}>
                        <Icon name="refresh-outline" size={20} color="#444" style={{marginRight:5,}}/>
                        <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium'}}>필터 초기화</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{
                            backgroundColor:'#447DD1',
                            height:45,
                            width:200,
                            justifyContent:'center',
                            alignItems:'center',
                            borderRadius:8,
                        }}>
                        <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',color:'#fff'}}>선택완료</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title:{
        fontFamily:'NotoSansKR-Medium',
        color:'#999999',
        fontSize:14,
    }
})

export default PrdFilter;