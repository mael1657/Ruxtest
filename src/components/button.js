import React from 'react';
import {TouchableOpacity,Text,View} from 'react-native';

export const BtnFull = ({title}) => {
    return(
        <TouchableOpacity style={{
            width:'100%',
            height:57,
            borderRadius:8,
            backgroundColor:'#477DD1',
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>{title}</Text>
        </TouchableOpacity>
    );
};

const Btn = () => {
    return(
        <View>
            <Text></Text>
        </View>
    );
};

export default Btn;