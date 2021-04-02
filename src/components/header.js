import React,{Component,useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from '../style/style';


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

export default Header;
