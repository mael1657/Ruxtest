import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//컴포넌트
import ProductRegistBrandList from '../components/ProductRegistBrandList';

const ProductRegistBrand = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <View >
                <View style={{flexDirection:'row',height:60,justifyContent:'space-between',alignItems:'center',borderBottomColor:'#EEEEEE',borderBottomWidth:1,paddingHorizontal:20,}}>
                    <TouchableOpacity 
                        onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" size={30} color="#aaa"/>
                    </TouchableOpacity>
                    <Text style={{fontSize:18,fontFamily:'NotoSansKR-Bold'}}>브랜드 선택</Text>
                    <View style={{width:30,height:30,}}></View>
                </View>
                <View 
                    style={{
                        borderWidth:1,
                        borderColor:'#eee',
                        borderRadius:8,
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'space-between',
                        height:35,
                        paddingHorizontal:10,
                        marginHorizontal:20,
                        marginVertical:10,
                    }}>
                    <TextInput
                        style={{padding:0,color:'#222'}}
                        placeholder="제품명을 입력해주세요."
                        placeholderTextColor="#aaa"

                    />
                    <TouchableOpacity>
                      <Icon name="search" size={24} color="#447DD1"/>
                    </TouchableOpacity>
                </View>
            </View>
            <ProductRegistBrandList/>
        </SafeAreaView>
    );
};

export default ProductRegistBrand;