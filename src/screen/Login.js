import React, {useEffect,useState} from 'react';
import {SafeAreaView,View,Text,Image,TouchableOpacity, Dimensions, TextInput} from 'react-native';
import axios from 'axios';
import API_CALL from '../ApiCall';


const Width = Dimensions.get('window').width;
const Logo = (Width / 2) - 40;
const Halfbox = (Width - 50) / 2;
const Threebox = (Width - 40) / 3;
const BoxHeight = (Dimensions.get('window').height) / 4;


const Login = ({navigation}) => {

    const [mt_id,setId] = useState('');
    const [mt_pwd,setPwd] = useState('');

    useEffect(()=>{
        getUserData()
    },[])

    const getUserData = async () =>{
        const form = new FormData()
        form.append('method', 'proc_login_member')
        form.append('mt_id', mt_id)
        form.append('mt_pwd', mt_pwd)
        form.append('mt_app_token', 1)

        const url = 'http://dmonster1566.cafe24.com'
        const params = '/json/proc_json.php'

        const api = await API_CALL(url+params, form, false)

    }




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
            <View style={{height:BoxHeight,paddingHorizontal:20}}>
                <TextInput
                style={{borderColor:'#eee',borderWidth:1,borderRadius:8,height:58,paddingLeft:20,fontSize:15,marginBottom:10,}}
                placeholder="아이디"
                placeholderTextColor="#C9C9C9"
                value={mt_id}
                onChangeText={text => setId(text)}
                />
                <TextInput
                style={{borderColor:'#eee',borderWidth:1,borderRadius:8,height:58,paddingLeft:20,fontSize:15,marginBottom:20,}}
                placeholder="비밀번호"
                placeholderTextColor="#C9C9C9"
                secureTextEntry={true}
                value={mt_pwd}
                onChangeText={text => setPwd(text)}
                />
                <TouchableOpacity 
                style={{
                    backgroundColor:'#447DD1',
                    justifyContent:'center',
                    alignItems:'center',
                    height:58,
                    borderRadius:8,}}
                    onPress={()=> getUserData()}>
                    <Text style={{
                        fontSize:18,
                        fontFamily:'NotoSansKR-Medium',
                        color:'#fff',
                    }}>로그인</Text>
                </TouchableOpacity>
                <View 
                style={{
                    flexDirection:'row',
                    justifyContent:'center',alignItems:'center',marginTop:20,}}>
                        <TouchableOpacity 
                        onPress={() => navigation.navigate('RegisterAgree')}
                        style={{width:Threebox,alignItems:'center',height:20,justifyContent:'center'}}>
                            <Text style={{
                                fontSize:14,
                                fontFamily:'NotoSansKR-Regular',
                                lineHeight:20,
                                color:'#888888'
                            }}>회원가입</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:Threebox,height:20,justifyContent:'center',alignItems:'center',borderLeftColor:'#eee',borderLeftWidth:1,borderRightColor:'#eee',borderRightWidth:1}}>
                            <Text style={{
                                fontSize:14,
                                fontFamily:'NotoSansKR-Regular',
                                lineHeight:20,
                                color:'#888888'
                            }}>아이디찾기</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:Threebox,alignItems:'center',height:20,justifyContent:'center'}}>
                            <Text style={{
                                fontSize:14,
                                fontFamily:'NotoSansKR-Regular',
                                lineHeight:20,
                                color:'#888888'
                            }}>비밀번호 찾기</Text>
                        </TouchableOpacity>
                </View>
            </View>
            <View style={{height:BoxHeight,paddingHorizontal:20,justifyContent:'center',alignItems:'center'}}>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:20,}}>
                    <View style={{flex:1,height:1,backgroundColor:'#eee'}}></View>
                    <Text style={{fontSize:15,fontFamily:'NotoSansKR-Bold',color:'#555',paddingHorizontal:20,}}>로그인 및 회원가입</Text>
                    <View style={{flex:1,height:1,backgroundColor:'#eee'}}></View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
                    <TouchableOpacity style={{flexDirection:'row',width:Halfbox,height:50,backgroundColor:'#F4F4F4',justifyContent:'space-between',alignItems:'center',overflow:'hidden',marginRight:5,paddingHorizontal:15,}}>
                        <View style={{width:28,height:28,}}>
                            <Image
                            style={{resizeMode:'contain',width:'100%',height:'100%'}}
                            source={require('../images/ico_login01.png')}
                            />
                        </View>
                        <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',color:'#888'}}>네이버 로그인</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',width:Halfbox,height:50,backgroundColor:'#F4F4F4',justifyContent:'space-between',alignItems:'center',overflow:'hidden',marginLeft:5,paddingHorizontal:15,}}>
                        <View style={{width:28,height:28,}}>
                            <Image
                            style={{resizeMode:'contain',width:'100%',height:'100%'}}
                            source={require('../images/ico_login02.png')}
                            />
                        </View>
                        <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',color:'#888'}}>애플 로그인</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;