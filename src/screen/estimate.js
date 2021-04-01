import React from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';

import styles from '../style/style';
import Header from '../components/header';
import EstList from '../components/estimateList'

function EstimateScreen ({navigation}) {
    return(
        <View style={{flex:1,backgroundColor:'#fff',}}>
            <Header/>
            <ScrollView style={{flex:1,paddingHorizontal:15,}}>
                <EstList/>
            </ScrollView>
        </View>
    )
}
export default EstimateScreen;