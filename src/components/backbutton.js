import React from 'react';
import {TouchableOpacity} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';


const Backbutton = ({onPress}) => {
    return(
        <TouchableOpacity 
            style={{
                position:'absolute',
                top:12,right:0,
            }}
            >
            <Icon name="ios-close-sharp" size={20} color="#D8D8D8"/>
        </TouchableOpacity>
    );
};

export default Backbutton;