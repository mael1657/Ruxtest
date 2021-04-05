/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../style/style';

const Footer = () => {
  return(
    <View style={styles.bottomTabNav}>
       <TouchableOpacity style={{alignItems:'center'}}>
          <Image source={require('../images/menu01.png')} style={{resizeMode:'contain',}}/>
          <Text style={{color:'#444'}}>홈으로</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{alignItems:'center'}}>
          <Image source={require('../images/menu02.png')} style={{resizeMode:'contain',}}/>
          <Text style={{color:'#999'}}>내 견적</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{alignItems:'center'}}>
          <Image source={require('../images/menu03.png')} style={{resizeMode:'contain',}}/>
          <Text style={{color:'#999'}}>채팅</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{alignItems:'center'}}>
          <Image source={require('../images/menu04.png')} style={{resizeMode:'contain',}}/>
          <Text style={{color:'#999'}}>마이페이지</Text>
       </TouchableOpacity>
    </View>
  );
}

export default Footer;
