import React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Logo = (Width * 0.7) - 40;

const RegisterFinish = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff',}}>
            <View style={{padding:20,}}>
                <View style={{paddingTop:50,paddingBottom:20,}}>
                    <Text style={{fontSize:20,fontFamily:'NotoSansKR-Medium',textAlign:'center',lineHeight:30}}>회원가입 완료</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',marginBottom:30,}}>
                    <View style={{width:Logo,}}>
                        <Image
                            style={{resizeMode:'contain',width:'100%'}}
                            source={require('../images/logo01.png')}
                        />
                    </View>
                </View>
                <View style={{paddingBottom:20,}}>
                    <Text style={{textAlign:'center',fontSize:14,fontFamily:'NotoSansKR-Regular',lineHeight:20,}}>회원가입이 완료되었습니다.</Text>
                    <Text style={{textAlign:'center',fontSize:14,fontFamily:'NotoSansKR-Regular',lineHeight:20,}}>사업자 회원 정보 및 판매자 회원 정보는</Text>
                    <Text style={{textAlign:'center',fontSize:14,fontFamily:'NotoSansKR-Regular',lineHeight:20,}}>관리자의 승인 이후 반영됩니다.</Text>
                </View>
                <View style={{}}>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('Main')}
                    style={{
                        width:'100%',
                        height:58,
                        backgroundColor:'#447DD1',
                        borderRadius:8,
                        justifyContent:'center',
                        alignItems:'center',
                    }}>
                        <Text style={{fontSize:16,fontFamily:'NotoSansKR-Medium',color:'#fff'}}>홈</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default RegisterFinish;