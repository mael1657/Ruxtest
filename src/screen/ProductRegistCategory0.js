import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductRegistCategory = ({navigation}) => {
    useEffect(() => {
        const parent = navigation.dangerouslyGetParent();
        parent?.setOptions({ tabBarVisible: false });
        return () => parent?.setOptions({ tabBarVisible: true });
      }, []);
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <View style={{flexDirection:'row',height:60,justifyContent:'space-between',alignItems:'center',borderBottomColor:'#EEEEEE',borderBottomWidth:1,paddingHorizontal:20,}}>
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={30} color="#aaa"/>
                </TouchableOpacity>
                <Text style={{fontSize:18,fontFamily:'NotoSansKR-Bold'}}>카테고리 선택</Text>
                <TouchableOpacity 
                style={{}}
                onPress={() => navigation.navigate('Main')}>
                    <Icon name="close" size={30} color="#AAAAAA"/>
                </TouchableOpacity>

            </View>
            <View style={{flex:1}}>
            <TouchableOpacity 
                onPress={() => navigation.navigate('ProductRegistCategory1')}
                style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    padding:20,
                    borderBottomWidth:1,
                    borderBottomColor:'#eee',
                }}>
                <Text style={{fontSize:16,fontFamily:'NotoSansKR-Bold',lineHeight:20,}}>WOMEN</Text>
                <Icon name="ios-chevron-forward" size={20} color="#D8D8D8"/>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => navigation.navigate('ProductRegistCategory1')}
                style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    padding:20,
                    borderBottomWidth:1,
                    borderBottomColor:'#eee',
                }}>
                <Text style={{fontSize:16,fontFamily:'NotoSansKR-Bold',lineHeight:20,}}>MEN</Text>
                <Icon name="ios-chevron-forward" size={20} color="#D8D8D8"/>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => navigation.navigate('ProductRegistCategory1')}
                style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    padding:20,
                    borderBottomWidth:1,
                    borderBottomColor:'#eee',
                }}>
                <Text style={{fontSize:16,fontFamily:'NotoSansKR-Bold',lineHeight:20,}}>KIDS</Text>
                <Icon name="ios-chevron-forward" size={20} color="#D8D8D8"/>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => navigation.navigate('ProductRegistCategory1')}
                style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    padding:20,
                    borderBottomWidth:1,
                    borderBottomColor:'#eee',
                }}>
                <Text style={{fontSize:16,fontFamily:'NotoSansKR-Bold',lineHeight:20,}}>UNISEX</Text>
                <Icon name="ios-chevron-forward" size={20} color="#D8D8D8"/>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ProductRegistCategory;