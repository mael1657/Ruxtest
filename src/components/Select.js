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
          {label: '인기상품순', value:'인기상품순', },
          {label: '리뷰많은순', value:'리뷰많은순', },
          {label: '낮은 가격순', value:'낮은 가격순', },
        ]}
        defaultValue='인기상품순'
        containerStyle={{height:35,flex:1,backgroundColor:'#fff',marginRight:5,}}
        style={{borderWidth:1,borderColor:'#eee',borderRadius:8,backgroundColor:'#fff',}}
        dropDownStyle={{borderColor:'#eee',borderWidth:1,}}
        globalTextStyle={{fontSize:11,lineHeight:12,fontFamily:'NotoSansKR-Regular',}}
        labelStyle={{color:'#7E7E7E'}}
        arrowSize={11}
      />
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
      <View style={{position:'relative',zIndex:999999}}>
          <DropDownPicker
            items={[
              {label: '거래방식 선택', value:'거래방식 선택', },
              {label: '리뷰많은순', value:'리뷰많은순', },
              {label: '낮은 가격순', value:'낮은 가격순', },
            ]}
            defaultValue='거래방식 선택'
            containerStyle={{height:35,backgroundColor:'#fff',width:150,}}
            style={{borderWidth:1,borderColor:'#eee',borderRadius:8,backgroundColor:'#fff',marginRight:5,}}
            dropDownStyle={{borderColor:'#eee',borderWidth:1,}}
            globalTextStyle={{fontSize:11,lineHeight:12,fontFamily:'NotoSansKR-Regular'}}
            itemStyle={{justifyContent:'flex-start'}}
            labelStyle={{color:'#7E7E7E'}}
            arrowSize={11}
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
    <View style={{position:'relative',zIndex:999999999,flex:1}}>
        <DropDownPicker
          items={[
            {label: '거래방식 선택', value:'거래방식 선택', },
            {label: '리뷰많은순', value:'리뷰많은순', },
            {label: '낮은 가격순', value:'낮은 가격순', },
          ]}
          defaultValue='거래방식 선택'
          containerStyle={{height:35,flex:1,backgroundColor:'#fff'}}
          style={{borderWidth:1,borderColor:'#eee',borderRadius:8,backgroundColor:'#fff',marginRight:5,}}
          dropDownStyle={{borderColor:'#eee',borderWidth:1,}}
          globalTextStyle={{fontSize:11,lineHeight:12,fontFamily:'NotoSansKR-Regular'}}
          itemStyle={{justifyContent:'flex-start'}}
          labelStyle={{color:'#7E7E7E'}}
          arrowSize={11}
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
    <View style={{position:'relative',zIndex:999999999,flex:1}}>
      <DropDownPicker
        items={[
          {label: '배송지선택', value:'배송지선택', },
          {label: '리뷰많은순', value:'리뷰많은순', },
          {label: '낮은 가격순', value:'낮은 가격순', },
        ]}
        defaultValue='배송지선택'
        containerStyle={{height:35,flex:1,backgroundColor:'#fff'}}
        style={{borderWidth:1,borderColor:'#eee',borderRadius:8,backgroundColor:'#fff',}}
        dropDownStyle={{borderColor:'#eee',borderWidth:1,}}
        globalTextStyle={{fontSize:11,lineHeight:12,fontFamily:'NotoSansKR-Regular'}}
        itemStyle={{justifyContent:'flex-start'}}
        labelStyle={{color:'#7E7E7E'}}
        arrowSize={11}
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
    <View style={{position:'relative',zIndex:999999999}}>
      <DropDownPicker
        items={[
          {label: '신용카드', value:'신용카드', },
          {label: '무통장입금', value:'무통장입금', },
          {label: '가상계좌', value:'가상계좌', },
        ]}
        defaultValue='신용카드'
        containerStyle={{height:35,width:150,backgroundColor:'#fff'}}
        style={{borderWidth:1,borderColor:'#eee',borderRadius:8,backgroundColor:'#fff',}}
        dropDownStyle={{borderColor:'#eee',borderWidth:1,}}
        globalTextStyle={{fontSize:11,lineHeight:12,fontFamily:'NotoSansKR-Regular'}}
        itemStyle={{justifyContent:'flex-start'}}
        labelStyle={{color:'#7E7E7E'}}
        arrowSize={11}
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
