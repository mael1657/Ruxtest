import React, {Component,useState} from 'react';

import {View} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';


const HeadDropdown = () => {

  const [classfi, setClassifi] = useState('newer');

  return(
    <View style={{borderWidth: 1,borderColor: '#eee',borderRadius: 8,height:35,padding:0,margin:0,flex:1,marginRight:5}}>
      <Picker
          style={{width:'100%',}}
          selectedValue={classfi}
          onValueChange={(itemValue,itemIndex) => setClassifi(itemValue)}>
          <Picker.Item label= '인기많은순' value= '인기많은순' style={{fontSize:12}}/>
          <Picker.Item label= '리뷰많은순' value= '리뷰많은순' style={{fontSize:12}}/>
          <Picker.Item label= '낮은 가격순' value= '낮은 가격순' style={{fontSize:12}}/>
          <Picker.Item label= '높은 가격순' value= '높은 가격순' style={{fontSize:12}}/>
        </Picker>
    </View>
  );
};

export default HeadDropdown;
