import React, {useEffect,useState,useCallback} from 'react';
import {SafeAreaView,View,Text,Image,TouchableOpacity, Dimensions, TextInput, Alert} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import API_CALL from '../ApiCall';
import AsyncStorage from "@react-native-community/async-storage"

import Icon from 'react-native-vector-icons/MaterialIcons'

const Width = Dimensions.get('window').width;
const Logo = (Width / 2) - 40;
const Halfbox = (Width - 50) / 2;
const Threebox = (Width - 40) / 3;
const BoxHeight = (Dimensions.get('window').height) / 4;


const Login = ({navigation}) => {

    const [autocheck, setAutocheck] = useState(false);

    const dispatch = useDispatch()

    const { member } = useSelector(state => state.login)
    const {isLoggedin} = useSelector(state => state.users)

    const [mt_id ,setId] = useState('');
    const [mt_pwd ,setPwd] = useState('');
    const [mt_app_token ,setApp_token] = useState('');

    console.log('isLoggedin',isLoggedin)
    const getUserData = async () =>{
        const form = new FormData()
        form.append('method', 'proc_login_member')

        form.append('mt_id', mt_id)
        form.append('mt_pwd', mt_pwd)

        form.append('mt_app_token', 1)

        

        const url = 'http://dmonster1566.cafe24.com'
        const params = '/json/proc_json.php'
        try{

        
            const api = await API_CALL(url+params, form, false)
            console.log(api)
            const { data } = api;
            const { item, result } = data;
            if(result === "0") return Alert.alert('제목', "로그인에 실패했습니다.")
            if(result === "1" && item){
                console.log(item)
                dispatch({
                    type : 'LOGIN',
                    payload : item[0]
                })
                // TODO: 토큰값 넣기 
                dispatch({
                    type : 'auth'
                })
                
                const saveLogin = { method : 'proc_login_member', mt_id, mt_pwd, mt_app_token : 1 }
                autocheck === false 
                ? null
                : await AsyncStorage.setItem('saveLogin', JSON.stringify(saveLogin))
                Alert.alert('제목', "로그인되었습니다")
                navigation.navigate('Home')    

            }
        }catch(e){
            console.log(e)
            Alert.alert('제목', "로그인에 실패했습니다. 에러")    
        }
    }


    console.log("mem", member)

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
            <View style={{height:BoxHeight,paddingHorizontal:20,marginBottom:20}}>
                <TextInput
                style={{borderColor:'#eee',borderWidth:1,borderRadius:8,height:58,paddingLeft:20,fontSize:15,marginBottom:10,}}
                placeholder="아이디"
                placeholderTextColor="#C9C9C9"
                value={mt_id}
                onChangeText={text => setId(text)}
                />
                <TextInput
                style={{borderColor:'#eee',borderWidth:1,borderRadius:8,height:58,paddingLeft:20,fontSize:15,marginBottom:10,}}
                placeholder="비밀번호"
                placeholderTextColor="#C9C9C9"
                secureTextEntry={true}
                value={mt_pwd}
                onChangeText={text => setPwd(text)}
                />
                <TouchableOpacity
                    onPress={()=> setAutocheck(!autocheck)}
                    style={{flexDirection:'row',alignItems:'center',marginBottom:10,}}
                >
                    {autocheck === false 
                    ? <Icon name="check-box-outline-blank" size={24} color='#eee' />
                    : <Icon name="check-box" size={24} color="#447DD1"/>}
                    
                    <Text style={{marginLeft:4,fontFamily:'NotoSansKR-Medium',lineHeight:20,color:'#888'}}>자동 로그인</Text>
                </TouchableOpacity>
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