/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import styles from '../style/style';

const Footer = () => {
  return(
    <View style={styles.footer}>
      <Image source={require('../images/logo01.png')} style={{tintColor:'gray', opacity:0.7,marginBottom:20,}}/>
      <View style={{flexDirection:'column',marginBottom:20,}}>
        <Text style={styles.footText}>상호명 / 대표자 최태준 / 개인정보보호책임자 김성준</Text>
        <Text style={styles.footText}>사업자등록번호 123-45-67893</Text>
        <Text style={styles.footText}>통신판매업 신고번호 : 2021-서울강남-01234</Text>
        <Text style={styles.footText}>서울특별시 강남구 봉은사로 1</Text>
        <Text style={styles.footText}>고객센터 : 070-1234-5678 / fax : 07012345678</Text>
      </View>
      <Text style={styles.footText}>COPYRIGHT © 2021 DEALMATE LTD ALL RIGHTS RESERVED</Text>
    </View>
  );
}

export default Footer;
