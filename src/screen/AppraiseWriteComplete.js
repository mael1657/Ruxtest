import React from 'react';
import {SafeAreaView, ScrollView, View ,Text, TouchableOpacity,StyleSheet} from 'react-native';
import {DetailHead} from '../components/header';

const AppraiseWriteComplete = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
            <DetailHead title="감정 신청 완료"/>
            <View style={{flex:1,padding:20,}}>
                <Text 
                style={{
                    fontSize:18,
                    fontFamily:'NotoSansKR-Medium',
                    color:'#447DD1'
                }}>감정 신청서 작성<Text style={{color:'#222'}}>이 완료되었습니다.</Text></Text>
                <View style={{paddingBottom:20,}}>
                    <Text style={{fontSize:13,fontFamily:'NotoSansKR-Regular',lineHeight:20,}}>상품을 아래의 주소로 보내주시기 바랍니다.</Text>
                    <Text style={{fontSize:13,fontFamily:'NotoSansKR-Regular',lineHeight:20,}}>신청 결과는 앱을 이용하여 알려드리고 필요 시, 연락드리겠습니다.</Text>
                </View>
                <View style={styles.graybox}>
                    <Text style={styles.grayboxtext}>상품 보낼 주소</Text>
                    <Text style={styles.grayboxtext02}>부산광역시 금정로 225 5층</Text>
                </View>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Appraise')}
                style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>감정신청 내역</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Main')}
                style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>홈으로</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    graybox: {
        backgroundColor: '#F8F8F8',
        padding:20,
        marginBottom:20,
    },
    grayboxtext:{
        fontSize:13,
        fontFamily:'NotoSansKR-Medium',
        lineHeight:20,
    },
    grayboxtext02:{
        fontSize:13,
        fontFamily:'NotoSansKR-Regular',
        lineHeight:20,
    },
    buttonStyle: {
        height:58,
        width:'100%',
        borderRadius:8,
        backgroundColor:'#447DD1',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
    },
    buttonText: {
        color:'#fff',
        fontSize:16,
        fontFamily:'NotoSansKR-Medium',
    }
})

export default AppraiseWriteComplete;

