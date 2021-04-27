import React, {useState}from 'react';
import {SafeAreaView,ScrollView, View,Text,Image,TouchableOpacity, Dimensions, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {DefaultPicker} from '../components/Select';

import {DetailHead} from '../components/header';

const classPicker = [
    {label:'개인', value:'개인'},
    {label:'개인', value:'개인'},
    {label:'개인', value:'개인'},
]

const Register = ({navigation}) => {
    const [check, setCheck] = useState(false);
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <DetailHead title="회원가입"/>
            <ScrollView>
                <View style={{padding:20,paddingBottom:30,}}>
                    {/* 회원 정보 */}
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>아이디 <Text style={styles.seltext}>(필수)</Text></Text>
                        <TextInput
                        style={styles.inputstyle}
                        placeholder="아이디"
                        placeholderTextColor="#C9C9C9"
                        />
                    </View>
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>비밀번호 <Text style={styles.seltext}>(필수)</Text></Text>
                        <TextInput
                        style={styles.inputstyle}
                        placeholder="비밀번호"
                        placeholderTextColor="#C9C9C9"
                        secureTextEntry={true}
                        />
                        <TextInput
                        style={styles.inputstyle}
                        placeholder="비밀번호 확인"
                        placeholderTextColor="#C9C9C9"
                        secureTextEntry={true}
                        />
                        <Text style={{fontSize:13,fontFamily:'NotoSansKR-Regular',lineHeight:20,color:'#aaa',paddingLeft:10,}}>비밀번호가 일치합니다.</Text>
                        <Text style={{fontSize:13,fontFamily:'NotoSansKR-Regular',lineHeight:20,color:'#FC6060',paddingLeft:10,}}>비밀번호가 일치하지 않습니다.</Text>
                    </View>
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>주소</Text>
                        <View style={{flexDirection: 'row',}}>
                        <TextInput
                            style={[styles.inputstyle, {flex:1}]}
                            placeholder="주소를 입력해주세요."
                            placeholderTextColor="#C9C9C9"
                        />
                        <TouchableOpacity style={{height:35,width:100,backgroundColor: '#477DD1',borderRadius:8,justifyContent: 'center',alignItems: 'center',marginLeft:5,}}>
                            <Text style={{color:'#fff',fontSize:13,fontWeight:'bold',}}>주소 찾기</Text>
                        </TouchableOpacity>
                        </View>
                        <TextInput
                        style={styles.inputstyle}
                        />
                        <TextInput
                        style={styles.inputstyle}
                        placeholder="상세주소"
                        placeholderTextColor="#C9C9C9"
                        />
                    </View>
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>휴대폰 번호 <Text style={styles.seltext}>(필수)</Text></Text>
                        <Text style={{position:'absolute',top:2,right:5,fontSize:13,fontFamily:'NotoSansKR-Regular',lineHeight:20,color:'#447DD1'}}>인증완료</Text>
                        <TextInput
                        style={styles.inputstyle}
                        placeholder="휴대폰 번호"
                        placeholderTextColor="#C9C9C9"
                        />
                        <TouchableOpacity 
                         style={{
                            backgroundColor:'#447DD1',
                            width:'100%',
                            height:35,
                            justifyContent:'center',
                            alignItems:'center',
                            borderRadius:8,
                         }}>
                            <Text style={{fontSize:15,color:'#fff',fontFamily:'NotoSansKR-Medium',lineHeight:20,}}>휴대폰 인증</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* 회원정보 끝 */}
                {/* 판매자 정보 */}
                <View style={{paddingHorizontal:20,paddingBottom:30,}}>
                    <Text style={{fontSize:16,fontFamily:'NotoSansKR-Bold',lineHeight:20,paddingBottom:15,}}>판매자 정보</Text>
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>계좌</Text>
                        <Text style={{position:'absolute',top:2,right:5,fontSize:13,fontFamily:'NotoSansKR-Regular',lineHeight:20,color:'#447DD1'}}>인증완료</Text>
                        <TextInput
                        style={styles.inputstyle}
                        placeholder="은행명"
                        placeholderTextColor="#C9C9C9"
                        />
                        <TextInput
                        style={styles.inputstyle}
                        placeholder="계좌번호"
                        placeholderTextColor="#C9C9C9"
                        keyboardType="numeric"
                        />
                        <TextInput
                        style={styles.inputstyle}
                        placeholder="예금주"
                        placeholderTextColor="#C9C9C9"
                        />
                        <TouchableOpacity 
                         style={{
                            backgroundColor:'#447DD1',
                            width:'100%',
                            height:35,
                            justifyContent:'center',
                            alignItems:'center',
                            borderRadius:8,
                         }}>
                            <Text style={{fontSize:15,color:'#fff',fontFamily:'NotoSansKR-Medium',lineHeight:20,}}>계좌 인증</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{paddingHorizontal:20,paddingBottom:30,}}>
                    <Text style={{fontSize:16,fontFamily:'NotoSansKR-Bold',lineHeight:20,paddingBottom:15,}}>사업자 정보</Text>
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>구분</Text>
                        <View>
                            <DefaultPicker placeholder="개인" picker={classPicker}/>
                        </View>
                    </View>
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>사업자 등록 번호</Text>
                        <TextInput
                        style={styles.inputstyle}
                        placeholder="사업자 등록 번호"
                        placeholderTextColor="#C9C9C9"
                        />
                    </View>
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>사업자 등록증</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:10,}}>
                            <TextInput
                            style={[styles.inputstyle, {flex:1,marginBottom:0,}]}
                            placeholder="사업자 등록 번호"
                            placeholderTextColor="#C9C9C9"
                            />
                            <TouchableOpacity style={{
                                backgroundColor:'#447DD1',
                                borderRadius:8,
                                height:35,
                                width:100,
                                justifyContent:'center',
                                alignItems:'center',
                                marginLeft:5,
                            }}>
                                <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',lineHeight:20,color:'#fff'}}>파일 선택</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>통신 판매업 번호</Text>
                        <TextInput
                        style={styles.inputstyle}
                        placeholder="통신 판매업 번호"
                        placeholderTextColor="#C9C9C9"
                        />
                    </View>
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>업태/업종</Text>
                        <TextInput
                        style={styles.inputstyle}
                        placeholder="업태/업종"
                        placeholderTextColor="#C9C9C9"
                        />
                    </View>
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>대표자명</Text>
                        <TextInput
                        style={styles.inputstyle}
                        placeholder="대표자명"
                        placeholderTextColor="#C9C9C9"
                        />
                    </View>
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>사업장 연락처</Text>
                        <TextInput
                        style={styles.inputstyle}
                        placeholder="사업장 연락처"
                        placeholderTextColor="#C9C9C9"
                        />
                    </View>
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>대표자 연락처</Text>
                        <TextInput
                        style={styles.inputstyle}
                        placeholder="대표자 연락처"
                        placeholderTextColor="#C9C9C9"
                        />
                    </View>
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>이메일 주소</Text>
                        <TextInput
                        style={styles.inputstyle}
                        placeholder="이메일 주소"
                        placeholderTextColor="#C9C9C9"
                        />
                    </View>
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>사업장 주소</Text>
                        <View style={{flexDirection: 'row',}}>
                        <TextInput
                            style={[styles.inputstyle, {flex:1}]}
                            placeholder="주소를 입력해주세요."
                            placeholderTextColor="#C9C9C9"
                        />
                        <TouchableOpacity style={{height:35,width:100,backgroundColor: '#477DD1',borderRadius:8,justifyContent: 'center',alignItems: 'center',marginLeft:5,}}>
                            <Text style={{color:'#fff',fontSize:13,fontWeight:'bold',}}>주소 찾기</Text>
                        </TouchableOpacity>
                        </View>
                        <TextInput
                        style={styles.inputstyle}
                        />
                        <TextInput
                        style={styles.inputstyle}
                        placeholder="상세주소"
                        placeholderTextColor="#C9C9C9"
                        />
                    </View>
                </View>
                <View style={{paddingHorizontal:20,paddingBottom:20,}}>
                    <TouchableOpacity 
                    style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        backgroundColor:'#EBEBEB',
                        paddingVertical:8,
                        paddingHorizontal:12,
                        marginBottom:10,
                    }}> 
                        <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium'}}>개인정보 처리방침</Text>
                        <Icon name="arrow-forward-ios" size={20} color="#aaa"/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        backgroundColor:'#EBEBEB',
                        paddingVertical:8,
                        paddingHorizontal:12,
                        marginBottom:20,
                    }}> 
                        <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium'}}>딜메이트 이용약관</Text>
                        <Icon name="arrow-forward-ios" size={20} color="#aaa"/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => setCheck(!check)}
                    style={{flexDirection:'row',flex:1,justifyContent:'center',alignItems:'center',marginBottom:15,}}>
                            {check === false ? <Icon name="check-box-outline-blank" size={24} color="#eee"/>
                                            : <Icon name="check-box" size={24} color="#447DD1"/> }
                            <Text style={{
                                fontSize:13,
                                fontFamily:'NotoSansKR-Medium',
                                lineHeight:16,
                                paddingLeft:5,
                            }}>위의 글을 모두 읽고 동의합니다.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{
                        backgroundColor: check === false ? '#eee' : '#447DD1',
                        height:56,
                        width:'100%',
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:8,
                    }}
                    onPress={check === false ? null : () => navigation.navigate('RegisterFinish')}
                    
                    >
                        <Text style={{
                            fontSize:16,
                            color:check === false ? '#999' : '#fff',
                            fontFamily:'NotoSansKR-Medium',
                        }}>다음</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    contbox:{
        paddingBottom:20,
    },
    contitle: {
        fontSize:14,
        fontFamily:'NotoSansKR-Medium',
        lineHeight:20,
        paddingBottom:10,
    },
    inputstyle: {
        fontSize:13,
        borderWidth:1,
        borderColor:'#eee',
        borderRadius:8,
        height:35,
        paddingLeft:10,
        paddingVertical:0,
        marginBottom:5,
    },
    graybox: {
        backgroundColor: '#EBEBEB',
        borderRadius: 9,
        padding:10,
    },
    grayboxtext:{
        fontSize:13,
        fontFamily:'NotoSansKR-Medium',
        lineHeight:20,
    },
    seltext:{
        fontSize:12,
        color:'#999',
        fontFamily:'NotoSansKR-Regular',
    }
})

export default Register;