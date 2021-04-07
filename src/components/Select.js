import React, {Component,useState} from 'react';

import {View,StyleSheet} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';

const HeadDropdown = () => {

  const [classfi, setClassifi] = useState('newer');

  return(
    <View style={{borderWidth: 1,borderColor: '#eee',borderRadius: 8,height:35,flex:1,marginRight:5,}}>
      <Picker
          style={{}}
          selectedValue={classfi}
          onValueChange={(itemValue,itemIndex) => setClassifi(itemValue)}
          mode='dropdown'
        >
          <Picker.Item label= '인기많은순' value= '인기많은순' style={styles.selectItem}/>
          <Picker.Item label= '리뷰많은순' value= '리뷰많은순' style={styles.selectItem}/>
          <Picker.Item label= '낮은 가격순' value= '낮은 가격순' style={styles.selectItem}/>
          <Picker.Item label= '높은 가격순' value= '높은 가격순' style={styles.selectItem}/>
        </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  selectItem:{
    fontSize:12,
  }
})

export default HeadDropdown;
