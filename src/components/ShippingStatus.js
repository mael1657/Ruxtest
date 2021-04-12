import React from 'react';
import {View,Text,} from 'react-native';



const ShippingStatus = ({time, location, status}) => {
    return(
        <View style={{
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
            borderBottomWidth:1,
            borderBottomColor:'#eee',
            paddingBottom:15,
            paddingTop:15,
            }}>
            <Text style={{fontSize:14,width:100,textAlign:'center'}}>{time}</Text>
            <Text style={{fontSize:14,width:100,textAlign:'center'}}>{location}</Text>
            <Text style={{fontSize:14,width:100,textAlign:'center'}}>{status}</Text>
        </View>
    );
};

export default ShippingStatus;