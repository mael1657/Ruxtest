import React,{useEffect, useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity, TouchableWithoutFeedback, FlatList, Image, StyleSheet,Modal} from 'react-native';

import Header, {HeaderA} from '../components/header';


import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import API_CALL from '../ApiCall';

export const Width = Dimensions.get('window').width;
export const Height = Dimensions.get('window').height;
const PADDING = 15;
const Box = Width / 4;
const HashWidth = (Width - Box) - (PADDING * 2) - 10;

const PrdList = ({navigation}) => {
    return(
      <View style={{flex:1,backgroundColor: '#fff'}}>
        <HeaderA/>
        <View style={{paddingHorizontal:PADDING,flex:1,}}>
          <PrdListItems/>
        </View>
      </View>
      
    );
};


function PrdListItems() {
  const {member} = useSelector(state => state.login)
  
  const [mt_idx, setMt_idx] = useState('')
  const [ct_pid, setCt_pid] = useState('1576')
  const [ct_id, setCt_id] = useState('')
  const [ct_id2, setCt_id2] = useState('')
  const [pt_order_by, setPt_order_by] = useState('')
  const [idx, setIdx] = useState('')
  const [search, setSearch] = useState('')
  const [pt_title, setPt_title] = useState('')
  const [pt_image1, setPt_image1] = useState('')
  const [pt_selling_price, setPt_selling_price] = useState('')
  const [pt_selling_edate, setPt_selling_edate] = useState('')
  const [dday, setDday] = useState('')
  const [pt_tag_list, setPt_tag_list] = useState('')
  const [pt_tag, setPt_tag] = useState('')
  const [zzim_yn,setZzim_yn] = useState('')
  
  const [newitem,setNewitem] = useState([])


  useEffect(() => {
    getNewItem();
  },[])

  const getNewItem = async() => {
    console.log(pt_tag_list)

    const form = new FormData()
    form.append('method','proc_product_list')
    form.append('mt_idx',member.mt_idx)
    form.append('ct_pid',ct_pid)
    form.append('ct_id',ct_id)
    form.append('ct_id2',ct_id2)
    form.append('pt_order_by',pt_order_by)
    form.append('idx',idx)
    form.append('search',search)
    form.append('pt_title',pt_title)
    form.append('pt_image1',pt_image1)
    form.append('pt_selling_price',pt_selling_price)
    form.append('pt_selling_edate',pt_selling_edate)
    form.append('dday',dday)
    form.append('pt_tag_list',pt_tag_list)
    form.append('pt_tag',pt_tag)
    form.append('zzim_yn',zzim_yn)

    const url = 'http://dmonster1566.cafe24.com'
    const path = '/json/proc_json.php'

    const api = await API_CALL(url+path, form, true)
    console.log(api)
  
    const { data : { method, result, message, count, item} } = api;
    setNewitem(item)
    console.log(item)
  }
  console.log("asd", newitem)

  // const renderItems = [
  //   {
  //   id: 1 ,
  //   name: 'MAISON MARGIELA',
  //   image: require('../images/item01.jpg'),
  //   price: "200,000",
  //   date: "10",
  //   },
  // ]

  return(
    <FlatList
        data={newitem}
        style={{flex:1,alignSelf : 'center'}}
        renderItem={({item, index} ) => <PrdItem item={item}/>}
        keyExtractor={(item) => `${item.idx}`}
        numColumns={1}
    />
  );
}

function PrdItem({item}){
  console.log('prd',item)

  const [fav ,setFav] = useState('off');
  const navigation = useNavigation();

  return(
    <TouchableOpacity
      style={{
        Width:Width,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom:10,
        paddingTop:15,
      }}
      onPress={() => navigation.navigate('PrdDetail')}
      >
      <View style={{width:Box,height:Box,borderWidth: 1,borderColor: '#e3e3e3',borderRadius: 8,marginRight:10,padding:10,}}>
        <Image
          style={{resizeMode:'cover',width:'100%',height:'100%'}}
          source={{uri:item.pt_image1}}/>
      </View>
      <View style={{flexGrow:1,}}>
        <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',marginBottom:10,}}>
          <Text style={{fontSize:16,fontFamily:'NotoSansKR-Bold',lineHeight:20,}}>{item.pt_title}</Text>
          <TouchableWithoutFeedback>
            <Image source={fav === 'off' ? require('../images/heart_no.png') : require('../images/heart.png') } />
          </TouchableWithoutFeedback>
        </View>
        <Text style={{fontFamily:'NotoSansKR-Medium',color:'#333',fontSize:13,lineHeight:15,paddingBottom:5,}}>즉시구매 <Text style={{fontFamily:'NotoSansKR-Regular',color:'#555'}}>{item.pt_selling_price}원</Text></Text>
        <Text style={{fontFamily:'NotoSansKR-Medium',color:'#333',fontSize:13,lineHeight:15}}>견적 마감 <Text style={{fontFamily:'NotoSansKR-Regular',color:'#555'}}>{item.pt_selling_edate}일 전</Text></Text>
        <View style={{flexDirection: 'row',flexWrap:'wrap',marginTop:10,width:HashWidth}}>
            {item.pt_tag_list.map((arr, idx) => 
            (
              <View key={idx}>
                <Text style={styles.hashtag}>{arr.tag}</Text>
              </View>
              ))} 
        </View>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  hashtag:{
    backgroundColor: '#F8F8F8',
    fontSize:10,
    fontFamily:'NotoSansKR-Medium',
    lineHeight:15,
    paddingVertical:3,
    paddingHorizontal: 6,
    borderRadius: 7,
    color:'#707070',
    marginRight:4,
    marginBottom:4,
  }
})


export default PrdList;
