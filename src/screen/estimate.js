import React from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity, FlatList} from 'react-native';

import styles from '../style/style';
import Header, {EstHeader} from '../components/header';
import EstList from '../components/estimateList'

function EstimateScreen ({navigation}) {
    return(
        <View style={{flex:1,backgroundColor:'#fff',}}>
            <EstHeader title="내 견적"/>
            <EstList/>
        </View>
    )
}
export default EstimateScreen;
