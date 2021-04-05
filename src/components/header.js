import React,{Component,useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import styles from '../style/style';
import HeadDropdown from './Select';


const Header = () => {

  const [tab, setTab] = useState('buyer');

  return(

    <View style={styles.header}>
        <View style={styles.header01}>
            <TouchableOpacity>
                <Image
                style={{width:120,height:60,resizeMode:'contain',}}
                source={require('../images/logo01.png')}
                />
            </TouchableOpacity>
            <View style={{width:70,height:50,justifyContent:'space-between',flexDirection:'row',paddingTop:10,}}>
                <TouchableOpacity style={{width:30,height:30}}>
                    <Image
                    style={{width:30,height:30,resizeMode:'contain'}}
                    source={require('../images/img_hd01.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{width:30,height:30}}>
                    <Image
                    style={{width:30,height:30,resizeMode:'contain'}}
                    source={require('../images/img_hd02.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.header02}>
            <TouchableOpacity
            accessibilityRole="button"
            style={{flexDirection:'row',alignItems:'center'}}>
                    <Image
                    style={{width:40,height:40,resizeMode:'contain',}}
                    source={require('../images/img_cate.png')}
                    />
                <Text style={{fontSize:18,fontWeight:'bold',paddingLeft:8,}}>상품 카테고리</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',backgroundColor:'#DEDEDE',borderRadius:8,width:120,height:40,justifyContent:'space-between',alignItems:'center'}}>
                <TouchableOpacity
                onPress ={ () => setTab('buyer')}
                style={{backgroundColor: tab === 'buyer' ? '#477DD1' : '#DEDEDE',width:60,height:40,borderRadius:8,justifyContent:'center',alignItems:'center',}}>
                    <Text style={{color: tab === 'buyer' ? '#fff' : '#999' ,fontWeight:'bold',}}>구매자</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress ={ () => setTab('seller')}
                style={{backgroundColor: tab === 'seller' ? '#477DD1' : '#DEDEDE',width:60,height:40,borderRadius:8,justifyContent:'center',alignItems:'center',}}>
                    <Text style={{color: tab === 'seller' ? '#fff' : '#999' , fontWeight:'bold',}}>판매자</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export const HeaderA = () => {
  return(
    <View style={styles.header}>
        <View style={styles.header01}>
            <TouchableOpacity>
                <Image
                style={{width:120,height:60,resizeMode:'contain',}}
                source={require('../images/logo01.png')}
                />
            </TouchableOpacity>
            <View style={{width:30,height:50,justifyContent:'space-between',flexDirection:'row',paddingTop:10,}}>
                <TouchableOpacity style={{width:30,height:30}}>
                    <Image
                    style={{width:30,height:30,resizeMode:'contain'}}
                    source={require('../images/img_hd02.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'space-between',alignItems: 'center',paddingHorizontal: 15,paddingVertical: 10,}}>
              <HeadDropdown/>
            <View style={{flex:2, flexDirection: 'row',borderColor:'#eee',borderWidth:1,borderRadius:8,height:35,justifyContent:'space-between',alignItems: 'center',paddingHorizontal: 6,}}>
              <TextInput
                placeholder="상품명을 입력하세요"
                style={{height:35,alignItems: 'center',fontSize:12,lineHeight: 15,}}
              />
              <TouchableOpacity>
                  <Image
                  style={{resizeMode: 'contain',width:20,}}
                  source={require('../images/img_hd01.png')}/>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{flexDirection: 'row', borderRadius: 8,backgroundColor: "#477DD1",height:35,alignItems: 'center',justifyContent: 'center',width:70,marginLeft:5,}}>
              <Text style={{color:'#fff',paddingRight: 5,}}>필터</Text>
              <Image source={require('../images/ico_filter.png')}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header;
