import React from 'react';
import {SafeAreaView,View,Text,Image,TouchableOpacity, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Logo = (Width / 2) - 40;
const BoxHeight = (Dimensions.get('window').height) / 4;

const RegisterAgree = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <View style={{height:BoxHeight,paddingHorizontal:20,justifyContent:'center',alignItems:'center'}}>
                <View style={{width:Logo}}>
                    <Image
                    source={require('../images/logo01.png')}
                    style={{resizeMode:'contain',width:'100%',}}
                    />
                </View>
            </View>
            <View style={{height:BoxHeight,paddingHorizontal:20,}}>
                <RegisterBtn 
                title="네이버 아이디로 회원가입" 
                image={require('../images/ico_login01.png')}
                />
                <RegisterBtn 
                title="애플 아이디로 회원가입" 
                image={require('../images/ico_login02.png')}
                />
                <RegisterBtn 
                title="일반 회원가입"
                onPress={() => navigation.navigate('Register')}/>
            </View>
            <View style={{
                height:50,
                paddingHorizontal:20,
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center'
                }}>
                <Text style={{fontSize:14,fontFamily:'NotoSansKR-Regular',color:'#888'}}>이미 가입된 회원인가요?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',color:'#333'}}> 로그인</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};


const RegisterBtn = ({title,image,onPress}) => {
    RegisterBtn.defaultProps = {
        title: '일반 회원가입'
    }
    return(
        <TouchableOpacity 
        onPress={onPress}
        style={{width:'100%',height:58,flexDirection:'row',backgroundColor:'#F4F4F4',justifyContent:'center',alignItems:'center',marginBottom:10,}}>
            <View style={{width:30,height:30,marginRight:15,position:'absolute',top:15,left:20,}}>
                <Image
                style={{resizeMode:'contain',width:'100%',height:'100%'}}
                source={image}
                />
            </View>
            <Text style={{
                fontSize:16,
                fontFamily:'NotoSansKR-Medium',
                color:'#888',
            }}>{title}</Text>
        </TouchableOpacity>
    );
};

export default RegisterAgree;