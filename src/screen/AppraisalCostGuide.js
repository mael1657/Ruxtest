import React from 'react';
import {SafeAreaView,ScrollView, View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AppraisalCostGuide = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#F8F8F8'}}>
            <View style={{backgroundColor:'#fff',flexDirection:'row',height:60,justifyContent:'space-between',alignItems:'center',borderBottomColor:'#EEEEEE',borderBottomWidth:1,paddingHorizontal:20,}}>
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={30} color="#aaa"/>
                </TouchableOpacity>
                <Text style={{fontSize:18,fontFamily:'NotoSansKR-Bold'}}>감정 비용 안내 </Text>
                <View style={{width:30,height:30,}}></View>
            </View>
            <ScrollView>
                <View style={{backgroundColor:'#EBEBEB',padding:20,}}>
                    <Text>※ 일반 감정 비용은 대부분의 브랜드의 겨우, 일괄적으로 29,000원입니다. 단, 일부 고가 상품 및 감정이 까다로운 품의 경우, 추가금을 받고 있습니다.</Text>
                </View>
                <View style={{padding:20}}>
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>※ 가방/잡화 감정 비용</Text>
                        <View>
                            <View style={styles.bg_wrap}>
                                <View style={[styles.bg01 , styles.bd01]}>
                                    <Text style={styles.bg01_txt}>일반브랜드</Text>
                                </View>
                                <View style={[styles.bg01 , styles.bd01]}>
                                    <Text style={styles.bg01_txt}>샤넬</Text>
                                </View>
                                <View style={styles.bg01}>
                                    <Text style={styles.bg01_txt}>에르메스</Text>
                                </View>
                            </View>
                            <View style={styles.bg_wrap}>
                                <View style={[styles.bg02, styles.bd02]}>
                                    <Text style={styles.bg02_txt}>29,000원</Text>
                                </View>
                                <View style={[styles.bg02, styles.bd02]}>
                                    <Text style={styles.bg02_txt}>39,000원</Text>
                                </View>
                                <View style={styles.bg02}>
                                    <Text style={styles.bg02_txt}>49,000원</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>※ 시계/쥬얼리 감정 비용</Text>
                        <View>
                            <View style={styles.bg_wrap}>
                                <View style={[styles.bg01 , styles.bd01]}>
                                    <Text style={styles.bg01_txt}>일반브랜드</Text>
                                </View>
                                <View style={[styles.bg01, {flex:2}]}>
                                    <Text style={styles.bg01_txt}>태그호이어, 로렉스 이상의 고가품</Text>
                                </View>
                            </View>
                            <View style={styles.bg_wrap}>
                                <View style={[styles.bg02, styles.bd02]}>
                                    <Text style={styles.bg02_txt}>29,000원</Text>
                                </View>
                                <View style={[styles.bg02, {flex:2}]}>
                                    <Text style={styles.bg02_txt}>49,800원</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contbox}>
                        <Text style={styles.contitle}>※ 시계/쥬얼리 감정 비용</Text>
                        <View>
                            <View style={styles.bg_wrap}>
                                <View style={[styles.bg01 , styles.bd01, {flex:2}]}>
                                    <Text style={styles.bg01_txt}>나이키, 아디다스, 컨버스 등 일반 슈즈</Text>
                                </View>
                                <View style={styles.bg01}>
                                    <Text style={styles.bg01_txt}>리미티드 슈즈</Text>
                                </View>
                            </View>
                            <View style={styles.bg_wrap}>
                                <View style={[styles.bg02, styles.bd02, {flex:2}]}>
                                    <Text style={styles.bg02_txt}>39,000원</Text>
                                </View>
                                <View style={styles.bg02}>
                                    <Text style={styles.bg02_txt}>49,800원</Text>
                                </View>
                            </View> 
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    contbox:{
        paddingBottom:30,
    },
    contitle: {
        fontSize:16,
        fontFamily:'NotoSansKR-Medium',
        lineHeight:20,
        paddingBottom:10,
    },
    bg_wrap:{
        flexDirection:'row',
    },
    bg01:{
        height:44,
        flex:1,
        backgroundColor:'#ebebeb',
        justifyContent:'center',
        alignItems:'center',
    },
    bg01_txt: {
        fontSize:15,
        fontFamily:'NotoSansKR-Medium',
        lineHeight:20,
    },
    bd01:{
        borderRightColor:'#ccc',
        borderRightWidth:1,
    },
    bg02:{
        height:44,
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    bg02_txt: {
        fontSize:15,
        fontFamily:'NotoSansKR-Regular',
        lineHeight:20,
    },
    bd02:{
        borderRightColor:'#eee',
        borderRightWidth:1,
    },
})


export default AppraisalCostGuide;