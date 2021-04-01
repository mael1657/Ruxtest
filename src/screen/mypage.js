import React from 'react';
import {View,Text} from 'react-native';

import styles from '../style/style';
import Header from '../components/header';

const MypageScreen = () => {
    return(
    <View>
        <Header/>
        <View style={{flex:1, justifyContent: 'center',alignItems:'center',}}>
            <Text>MypageScreen</Text>
        </View>
    </View>
    )
}

export default MypageScreen