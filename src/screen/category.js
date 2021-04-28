import React, {useState} from 'react';
import {ScrollView, SafeAreaView, View, Text, TouchableOpacity, StyleSheet,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const defaultIsVisible = {
    clothes: false,
    shoes: false,
    bag: false,
    acc: false,
}

const Category = ({navigation}) => {
    const [isVisible, setIsVisible] = useState(defaultIsVisible); 
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
            <ScrollView>
                <View>
                    <TouchableOpacity 
                        onPress={() => setIsVisible({...isVisible, clothes: !isVisible.clothes})}
                        style={styles.depth1}>
                        <Text style={styles.depth1_txt}>의류</Text>
                        { isVisible.clothes === false ? <Icon name="add" size={20} color="#aaa"/>  : <Icon name="remove" size={20} color="#aaa"/>}
                    </TouchableOpacity>
                    {isVisible.clothes && <View>
                            <TouchableOpacity 
                                style={styles.depth2} 
                                onPress={() => navigation.navigate('ProductRegistBrand')}
                            >
                                <Text style={styles.depth2_txt}>코트/패딩</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>탑</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>스웨터</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>블라우스/셔츠</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>원피스</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>팬츠</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>스커트</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>언더웨어/라운지웨어</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>스포츠웨어/아웃도어</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>기타</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                        </View>}
                    <TouchableOpacity 
                        onPress={() => setIsVisible({...isVisible, shoes: !isVisible.shoes})}
                        style={styles.depth1}>
                        <Text style={styles.depth1_txt}>신발</Text>
                        { isVisible.shoes === false ? <Icon name="add" size={20} color="#aaa"/>  : <Icon name="remove" size={20} color="#aaa"/>}
                    </TouchableOpacity>
                    {isVisible.shoes && <View>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>스니커즈</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>로퍼</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>부츠/워커</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>플랫</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>힐</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>드레스슈즈</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>샌들/슬리퍼</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>기타</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                        </View>}
                    <TouchableOpacity 
                        onPress={() => setIsVisible({...isVisible, bag: !isVisible.bag})}
                        style={styles.depth1}>
                        <Text style={styles.depth1_txt}>가방</Text>
                        { isVisible.bag === false ? <Icon name="add" size={20} color="#aaa"/>  : <Icon name="remove" size={20} color="#aaa"/>}
                    </TouchableOpacity>
                    {isVisible.bag && <View>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>크로스백</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>클러치/파우치</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>토트백</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>숄더백</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>백팩</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>더플백</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>러기지백</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>기타</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                        </View>}
                    <TouchableOpacity 
                        onPress={() => setIsVisible({...isVisible, acc: !isVisible.acc})}
                        style={styles.depth1}>
                        <Text style={styles.depth1_txt}>액세서리</Text>
                        { isVisible.acc === false ? <Icon name="add" size={20} color="#aaa"/>  : <Icon name="remove" size={20} color="#aaa"/>}
                    </TouchableOpacity>
                    {isVisible.acc && <View>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>지갑</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>시계</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>벨트</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>목도리/스카프</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>모자</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>장갑</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>주얼리</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>키링</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>아이웨어</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>헤어액세서리</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>손수건</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>양말/스타킹</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.depth2}>
                                <Text style={styles.depth2_txt}>기타</Text>
                                <Icon name="ios-chevron-forward" size={20} color="#aaa"/>
                            </TouchableOpacity>
                        </View>}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    depth1:{
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#eee'
    },
    depth1_txt:{
        fontSize:16,
        fontFamily:'NotoSansKR-Bold',
        lineHeight:20,
    },
    depth2:{
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor:'#F8F8F8',
        borderBottomWidth:1,
        borderBottomColor:'#eee',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    depth2_txt:{
        fontSize:14,
        fontFamily:'NotoSansKR-Medium',
        lineHeight:20,
    },
})

export default Category;