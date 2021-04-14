import React, {Component,useState} from 'react';

import {View,StyleSheet} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import {Ionicons} from 'react-native-vector-icons';

const Selector = () => {

  const [classfi, setClassifi] = useState('newer');

  return(
    <View style={{borderWidth: 1,borderColor: '#eee',borderRadius: 8,height:35,flex:1,marginRight:5,justifyContent: 'center'}}>
      <Picker
          style={{}}
          itemStyle={{lineHeight:10,fontSize:10,}}
          selectedValue={classfi}
          onValueChange={(itemValue,itemIndex) => setClassifi(itemValue)}
          mode='dropdown'
        >
          <Picker.Item label= '인기많은순' value= '인기많은순' />
          <Picker.Item label= '리뷰많은순' value= '리뷰많은순' />
          <Picker.Item label= '낮은 가격순' value= '낮은 가격순'/>
          <Picker.Item label= '높은 가격순' value= '높은 가격순' />
        </Picker>
    </View>
  );
};

export const DealType = () => {
  const placeholder = {
    label: '거래유형 선택',
    value: null,
    color:'#555',
  }
  return(
      <View style={{borderColor:"#eee",borderWidth:1,width:150,height:40,justifyContent: 'center'}}>
        <RNPickerSelect
            itemStyle={{fontSize:10,}}
            onValueChange={(value) => console.log(value)}
            placeholder={placeholder}
            items={[
              { label: '카테고리1', value: '카테고리1' },
              { label: '카테고리2', value: '카테고리2' },
              { label: '카테고리3', value: '카테고리3' },
            ]}
        />
      </View>
  );
};

export const DealType2 = () => {
  const placeholder = {
    label: '거래방식 선택',
    value: null,
    color:'#7E7E7E',
  }
  return(
      <View style={{flex:1, borderColor:"#eee",borderWidth:1,borderRadius:8,height:35,justifyContent: 'center',marginRight:5,}}>
        <RNPickerSelect
            itemStyle={{fontSize:10,}}
            onValueChange={(value) => console.log(value)}
            placeholder={placeholder}
            items={[
              { label: '카테고리1', value: '카테고리1' },
              { label: '카테고리2', value: '카테고리2' },
              { label: '카테고리3', value: '카테고리3' },
            ]}
        />
      </View>
  );
};

export const LocationSelect = () => {
  const placeholder = {
    label: '배송지 선택',
    value: null,
    color:'#555',
  };
  return(
    <View style={{borderColor:"#eee",borderWidth:1,borderRadius:5,height:40,justifyContent: 'center'}}>
      <RNPickerSelect
          itemStyle={{fontSize:10,}}
          onValueChange={(value) => console.log(value)}
          placeholder={placeholder}
          items={[
            { label: '카테고리1', value: '카테고리1' },
            { label: '카테고리2', value: '카테고리2' },
            { label: '카테고리3', value: '카테고리3' },
          ]}
      />
    </View>
  );
};

export const PaymentType = () => {
  const placeholder = {
    label: '결제 수단 선택',
    value: null,
    color:'#555',
  }
  return(
      <View style={{borderColor:"#eee",borderWidth:1,width:129,height:28,justifyContent: 'center'}}>
        <RNPickerSelect
            itemStyle={{fontSize:10,}}
            onValueChange={(value) => console.log(value)}
            placeholder={placeholder}
            items={[
              { label: '카테고리1', value: '카테고리1' },
              { label: '카테고리2', value: '카테고리2' },
              { label: '카테고리3', value: '카테고리3' },
            ]}
        />
      </View>
  );
};

export const ReviewSelect = () => {
  const placeholder = {
    label: '제품명',
    value: null,
    color:'#555',
  }
  return(
      <View style={{borderColor:"#eee",borderWidth:1,flex:1,height:35,justifyContent: 'center',borderRadius:8,marginRight:5,}}>
        <RNPickerSelect
            itemStyle={{fontSize:10,}}
            onValueChange={(value) => console.log(value)}
            placeholder={placeholder}
            items={[
              { label: '카테고리1', value: '카테고리1' },
              { label: '카테고리2', value: '카테고리2' },
              { label: '카테고리3', value: '카테고리3' },
            ]}
        />
      </View>
  );
};

export const DeliverySelect = () => {
  const placeholder = {
    label: '택배사',
    value: null,
    color:'#555',
  }
  return(
      <View style={{borderColor:"#eee",borderWidth:1,flex:1,height:35,justifyContent: 'center',borderRadius:8}}>
        <RNPickerSelect
            itemStyle={{fontSize:10,}}
            onValueChange={(value) => console.log(value)}
            placeholder={placeholder}
            items={[
              { label: '카테고리1', value: '카테고리1' },
              { label: '카테고리2', value: '카테고리2' },
              { label: '카테고리3', value: '카테고리3' },
            ]}
        />
      </View>
  );
};


const styles = StyleSheet.create({
  selectItem:{
    fontSize:12,
  }
})

export default Selector;
