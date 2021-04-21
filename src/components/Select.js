import React, {Component,useState} from 'react';

import {View,StyleSheet} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import {Ionicons} from 'react-native-vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

const Selector = () => {
  return(
    <View style={{zIndex:999999999,flex:1}}>
      <DropDownPicker
        items={[
          {label: '인기상품순', value:'a', },
          {label: '리뷰많은순', value:'b', },
          {label: '낮은 가격순', value:'c', },
        ]}
        defaultValue='a'
        containerStyle={{height:35,flex:1,backgroundColor:'#fff',marginRight:5,}}
        style={{borderWidth:1,borderColor:'#eee',borderRadius:8,backgroundColor:'#fff',}}
        dropDownStyle={{borderColor:'#eee',borderWidth:1,}}
        globalTextStyle={{fontSize:11,lineHeight:12,fontFamily:'NotoSansKR-Regular',}}
        labelStyle={{color:'#7E7E7E'}}
        onValueChange={(value) => onValSelect(value)}
        arrowSize={11}
        
      />
    </View>
  );
};


export const DefaultPicker = ({picker, placeholder}) => {
  return(
    <DropDownPicker
      items={picker}
      placeholder={placeholder}
      placeholderStyle={{color:'#C9C9C9'}}
      style={{borderWidth:1,borderColor:'#eee',borderRadius:8,backgroundColor:'#fff',height:35,}}
      containerStyle={{height:35,}}
      dropDownStyle={{borderColor:'#eee',borderWidth:1,}}
      globalTextStyle={{fontSize:11,lineHeight:12,fontFamily:'NotoSansKR-Regular'}}
      itemStyle={{justifyContent:'flex-start'}}
      arrowStyle={{position:'absolute',top:0,right:0,}}
      arrowColor="#447DD1"
      zIndex={50000}
      defaultNull
      onChangeItem={(item) => console.log(item.label, item.value)}
    />
  );
};


const styles = StyleSheet.create({
  selectItem:{
    fontSize:12,
  }
})

export default Selector;
