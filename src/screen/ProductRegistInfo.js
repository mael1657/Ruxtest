import React from 'react';
import {SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DefaultPicker} from '../components/Select';

const brandPicker = [
    {label: '티파니', value:'티파니'},
    {label: '지방시', value:'지방시'},
    {label: '프라다', value:'프라다'},
  ]




const ProductRegistInfo = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <View style={{flexDirection:'row',height:60,justifyContent:'space-between',alignItems:'center',borderBottomColor:'#EEEEEE',borderBottomWidth:1,paddingHorizontal:20,}}>
                    <TouchableOpacity 
                        onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" size={30} color="#aaa"/>
                    </TouchableOpacity>
                    <Text style={{fontSize:18,fontFamily:'NotoSansKR-Bold'}}>상품 정보 입력</Text>
                    <View style={{width:30,height:30,}}></View>
                </View>
            <ScrollView>
                <View style={{padding:20,}}>
                    <Text style={{fontSize:15,fontFamily:'NotoSansKR-Bold',lineHeight:20,paddingBottom:20,}}>상품 정보</Text>
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>상품명을 알고 계신가요?</Text>
                        <TextInput
                            placeholder="상품명 입력"
                            placeholderTextColor="#C9C9C9"
                            style={styles.inputstyle}
                        />
                        <View style={styles.graybox}>
                            <Text style={styles.grayboxtext}>※브랜드명은 쓰지 않아도 되며 상품과 관련없는 경우 불량게시물로 간주됩니다.</Text>
                        </View>
                    </View>
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>브랜드</Text>
                        <View style={{}}>
                            <DefaultPicker picker={brandPicker} placeholder="브랜드 선택"/>
                        </View>
                    </View>
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>사이즈가 어떻게 되나요?</Text>
                        <TextInput
                            placeholder="사이즈 입력"
                            placeholderTextColor="#C9C9C9"
                            style={styles.inputstyle}
                        />
                    </View>
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>구매시기를 아시나요?</Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:100,marginRight:10,}}>
                                <DefaultPicker picker={brandPicker} placeholder="연도 선택"/>
                            </View>
                            <View style={{width:100,}}>
                                <DefaultPicker picker={brandPicker} placeholder="월 선택"/>
                            </View>
                        </View>
                        
                    </View>
                </View>
            </ScrollView>
            <View style={{flexDirection:'row',height:60,position:'absolute',bottom:0,left:0,right:0,}}>
                <TouchableOpacity 
                    style={{
                        flex:1,
                        backgroundColor:'#EBEBEB',
                        justifyContent:'center',
                        alignItems:'center',
                        borderRightWidth:1,
                        borderRightColor:'#fff',
                    }}
                    >
                    <Text style={{fontSize:16,fontFamily:'NotoSansKR-Medium'}}>등록 취소</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{
                        flex:1,
                        backgroundColor:'#EBEBEB',
                        justifyContent:'center',
                        alignItems:'center',
                    }}
                    >
                    <Text style={{fontSize:16,fontFamily:'NotoSansKR-Medium'}}>상품 등록</Text>
                </TouchableOpacity>
            </View>
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
})

export default ProductRegistInfo;