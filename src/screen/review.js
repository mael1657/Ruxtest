import React from 'react';
import {SafeAreaView, View, Text, Button, ScrollView, Image, TextInput, Dimensions} from 'react-native';

import Header, {DetailHead, ReviewHeader} from '../components/header';
import Footer from '../components/footer';
import Product from '../components/product';
import BotLine from '../components/bottomline';
import Btn, {BtnFull} from '../components/button';
import Rv_List from '../components/ReviewListitem';
import ReviewDetail from '../screen/reviewdetail';

export const Width = Dimensions.get('window').width / 4 - 10

export const ReviewWrite = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <DetailHead title="리뷰 작성"/>
            <ScrollView>
                <View style={{padding:20,}}>
                    <Product/>
                </View>
                <BotLine/>
                <View style={{padding:20,}}>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        borderBottomWidth:1,
                        borderBottomColor:'#eee',
                        paddingBottom:10,
                    }}>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>별점</Text>
                        <Text><Text style={{color:'#477DD1'}}>4.0</Text>/5</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingTop:20,paddingBottom:30,}}>
                        <Image style={{resizeMode:'cover',marginHorizontal:3,}} source={require('../images/review_star.png')}/>
                        <Image style={{resizeMode:'cover',marginHorizontal:3,}} source={require('../images/review_star.png')}/>
                        <Image style={{resizeMode:'cover',marginHorizontal:3,}} source={require('../images/review_star.png')}/>
                        <Image style={{resizeMode:'cover',marginHorizontal:3,}} source={require('../images/review_star.png')}/>
                        <Image style={{resizeMode:'cover',marginHorizontal:3,}} source={require('../images/review_star_none.png')}/>
                    </View>
                    <View>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>상세한 후기</Text>
                        <TextInput
                          style={{
                              borderWidth:1,
                              borderColor:'#eee',
                              borderRadius:10,
                              textAlignVertical:'top'
                          }}
                          placeholder="구매하신 상품의 후기를 작성해주세요."
                          placeholderTextColor="#C9C9C9"
                          numberOfLines={8}
                          multiline={true}
                        />
                        <View style={{flexDirection:'row-reverse'}}>
                            <Text style={{fontSize:13,color:'#c9c9c9'}}>0 / 최소 20자</Text>
                        </View>
                    </View>
                    <View style={{paddingBottom:20,}}>
                        <Text>
                            <Text style={{fontSize:16,fontWeight:'bold'}}>사진을 올려주세요</Text>
                            <Text style={{fontSize:13,color:"#c9c9c9"}}> (선택)</Text>
                        </Text>
                        <View style={{flexDirection:'row',paddingTop:20,}}>
                            <View style={{
                                justifyContent:'center',
                                alignItems:'center',
                                width:Width,
                                height:Width,
                                borderWidth:1,
                                borderColor:'#C9C9C9',
                                borderRadius:10,
                                borderStyle:'dashed',
                                marginRight:10,
                                }}>
                                <View style={{width:31,height:28,marginBottom:10,}}>
                                    <Image style={{resizeMode:'contain',width:'auto'}} source={require('../images/camera.png')}/>
                                </View>
                                <Text style={{fontSize:10,color:'#B7B7B7'}}>0/5</Text>
                            </View>
                            <View style={{
                                justifyContent:'center',
                                alignItems:'center',
                                width:Width,
                                height:Width,
                                borderWidth:1,
                                borderColor:'#C9C9C9',
                                borderRadius:10,
                                borderStyle:'dashed',
                                marginRight:10,
                                }}>
                                <Image style={{resizeMode:'cover'}}source={require('../images/camera_plus.png')}/>
                            </View>
                        </View>
                    </View>
                    <BtnFull title="리뷰 등록"/>
                </View>
            </ScrollView>
            <Footer/>
        </SafeAreaView>
    );
};

export const ReviewComplete = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <DetailHead title="리뷰 작성"/>
            <View style={{flex:1,}}>
                <View  style={{justifyContent:'center',alignItems:'center',height:70,backgroundColor:'#F8F8F8'}}>
                    <Text style={{fontSize:13,color:'#444'}}>리뷰 작성이 완료되었습니다.</Text>
                </View>
                <BotLine/>
                <View style={{padding:20,}}>
                  <Product/>
                </View>
                <View style={{paddingHorizontal:20,}}>
                  <BtnFull title="리뷰 목록"/>
                </View>
            </View>
            <Footer/>
        </SafeAreaView>
    );
};

export const ReviewList = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <ReviewHeader title="리뷰"/>
            <View style={{flex:1,padding:10,paddingBottom:0}}>
                <Rv_List/>
            </View>
        </SafeAreaView> 
    );
};


const Review = ({navigation}) => {
    return(
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <View style={{marginBottom:10,}}>
            <Button title="리뷰 작성" onPress={()=> navigation.navigate('ReviewWrite')}/>
        </View>
        <View style={{marginBottom:10,}}>
            <Button title="리뷰 작성 완료" onPress={()=> navigation.navigate('ReviewComplete')}/>
        </View>
        <View style={{marginBottom:10,}}>
            <Button title="리뷰 목록" onPress={()=> navigation.navigate('ReviewList')}/>
        </View>
        <View style={{marginBottom:10,}}>
            <Button title="리뷰 상세" onPress={()=> navigation.navigate('Rv_Detail')}/>
        </View>
    </SafeAreaView>
    );
}

export default Review;