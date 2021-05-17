import React, {useState, useEffect} from 'react';
import {SafeAreaView,ScrollView,View,Text,TouchableOpacity,StyleSheet,TextInput, Alert} from 'react-native';
import {useSelector} from 'react-redux';

import Header, {DetailHead} from '../components/header';
import Footer from '../components/footer';
import Product from '../components/product';
import Selector, {DefaultPicker} from '../components/Select';
import API_CALL from '../ApiCall';

const location =[
  {label:'주문자와 동일' ,  value:'1'},
  {label:'최근배송지' ,  value:'2'},
  {label:'신규배송지' ,  value:'3'},
]

const payment =[
  {label:'신용카드' ,  value:'신용카드'},
  {label:'신용카드' ,  value:'신용카드'},
  {label:'신용카드' ,  value:'신용카드'},
]

const PurchaseOrder = (props) => {

  const {route} = props
  const {navigation} = props
  const {params} = route
  console.log("params",params)

  const {member} = useSelector(state => state.login)

  const [orderItem, setOrderItem] = useState({})

  const [orderAdd, setOrderAdd] = useState({})

  // 즉시구매
  const [mt_idx, setMt_idx] = useState(member.mt_idx)
  const [idx, setIdx] = useState(params.idx)
  const [ot_code, setOt_code] = useState('')
  const [pt_title, setPt_title] = useState('')
  const [pt_image1, setPt_image1] = useState('')
  const [pt_price, setPt_price] = useState('')
  const [ct_delivery_default_price, setCt_delivery_default_price] = useState('')
  const [commission, setCommission] = useState('')
  const [total_price, setTotal_price] = useState('')
  const [ct_delivery_type, setCt_delivery_type] = useState('')
  const [mt_sms_certify, setMt_sms_certify] = useState('')
  const [ot_rname, setOt_rname] = useState('')
  const [ot_rtel, setOt_rtel] = useState('')
  const [ot_rhp, setOt_rhp] = useState('')
  const [ot_rzip, setOt_rzip] = useState('')
  const [ot_radd1, setOt_radd1] = useState('')
  const [ot_radd2, setOt_radd2] = useState('')

  //주문 폼
  const [mdi_type, setMdi_type] = useState(location)
  const [ot_rmemo, setOt_rmemo] = useState('')
  const [ot_pay_type, setOt_pay_type] = useState('')
  const [ot_price, setOt_price] = useState('')
  const [ot_delivery_charge, setOt_delivery_charge] = useState('')


  useEffect(() => {
    getOrderItem()
  },[])



  const getOrderItem = async() => {
    const form = new FormData()
    
    form.append('method','product_d_buy')
    form.append('mt_idx', mt_idx)
    form.append('idx',idx)
    form.append('ot_code',ot_code)
    form.append('pt_title',pt_title)
    form.append('pt_image1',pt_image1)
    form.append('pt_price',pt_price)
    form.append('ct_delivery_default_price',ct_delivery_default_price)
    form.append('commission',commission)
    form.append('total_price',total_price)
    form.append('ct_delivery_type',ct_delivery_type)
    form.append('mt_sms_certify',mt_sms_certify)
    form.append('ot_rname',ot_rname)
    form.append('ot_rtel',ot_rtel)
    form.append('ot_rhp',ot_rhp)
    form.append('ot_rzip',ot_rzip)
    form.append('ot_radd1',ot_radd1)
    form.append('ot_radd2',ot_radd2)

    const url = 'http://dmonster1566.cafe24.com'
    const path = '/json/proc_json.php'

    const api = await API_CALL(url+path, form, false)
    const {data :{method, result, message, count, item}} = api;

    setOrderItem(item[0])
  }
  console.log("orderItem" , orderItem)

  ///////////////////////////////////////////////////////////////////////////

  //주문하기 폼 

  

  useEffect(() =>{
    getOrderAdd()
  },[])

  const getOrderAdd = async() => {
    const form = new FormData()

    form.append('method','proc_order_add')
    form.append('mt_idx',mt_idx)
    form.append('ot_code',ot_code)
    form.append('mdi_type',mdi_type)
    form.append('ot_rname',ot_rname)
    form.append('ot_rtel',ot_rtel)
    form.append('ot_rhp',ot_rhp)
    form.append('ot_rzip',ot_rzip)
    form.append('ot_radd1',ot_radd1)
    form.append('ot_radd2',ot_radd2)
    form.append('ot_rmemo',ot_rmemo)
    form.append('ot_pay_type',ot_pay_type)
    form.append('ot_price',ot_price)
    form.append('ot_delivery_charge',ot_delivery_charge)

    const url = 'http://dmonster1566.cafe24.com'
    const path = '/json/proc_json.php'
    try{
      if(result === "0") return Alert.alert("no result")
      if(result === "1"){
        const api = await API_CALL(url+path, form, false)
        const {data :{method, result, message, count, item}} = api;
    
        setOrderAdd(item[0])
        console.log('AddItem',item)
        Alert.alert("Got it")
      }
    }catch(e){
      console.log(e)
      Alert.alert("Catch!")
    }
  }
  console.log('orderAdd', orderAdd)


  return(
    <SafeAreaView style={{flex:1,backgroundColor:'#fff',}}>
      <DetailHead title="주문서 작성"/>
      <ScrollView style={{flex:1}}>
        <View style={{paddingHorizontal:20,paddingVertical:10}}>
          <Product {...props} />
        </View>
        <View style={{width:'100%',height:8,backgroundColor: '#eee',borderTopWidth:1,borderTopColor:'#d9d9d9'}}>
        </View>
        <View style={{padding:20,paddingBottom:100,}}>
          <Text style={{fontSize:16,fontFamily:'NotoSansKR-Bold',lineHeight:20,paddingBottom:10,}}>구매자 정보</Text>
          <View style={{flexDirection:'row',flex:1,alignItems: 'center',paddingBottom:10,}}>
            <Text style={{fontSize:15,fontFamily:'NotoSansKR-Bold',paddingRight:20,}}>받으시는 분</Text>
            <TouchableOpacity style={{backgroundColor:'#EBEBEB',paddingHorizontal:12,paddingVertical:6,borderRadius:8,}}>
              <Text style={{fontSize:12,fontFamily:'NotoSansKR-Medium',lineHeight:16,}}>최근 데이터 자동 입력</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.inputWrap,{zIndex:999}]}>
            <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',paddingBottom:10,lineHeight:17,}}>배송지 선택</Text>
            <View style={{}}>
              <DefaultPicker placeholder="배송지 선택" picker={location}/>
            </View>
          </View>
          <View style={styles.inputWrap}>
            <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',paddingBottom:10,lineHeight:17,}}>이름</Text>
            <TextInput
              style={{borderWidth:1,borderColor:'#eee',borderRadius:6,height:40,paddingHorizontal:20,}}
              placeholder="홍길동"
              placeholderTextColor="#C9C9C9"
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',paddingBottom:10,lineHeight:17,}}>전화번호</Text>
            <TextInput
              style={{borderWidth:1,borderColor:'#eee',borderRadius:6,height:40,paddingHorizontal:20,}}
              placeholder="051-123-4567"
              keyboardType="numeric"
              placeholderTextColor="#C9C9C9"
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',paddingBottom:10,lineHeight:17,}}>핸드폰</Text>
            <TextInput
              style={{borderWidth:1,borderColor:'#eee',borderRadius:6,height:40,paddingHorizontal:20,}}
              placeholder="010-1234-5678"
              keyboardType="numeric"
              placeholderTextColor="#C9C9C9"
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',paddingBottom:10,lineHeight:17,}}>주소</Text>
            <View style={{flexDirection: 'row',paddingBottom:10,}}>
              <TextInput
                style={{borderWidth:1,borderColor:'#eee',borderRadius:6,height:40,paddingHorizontal:20,flex:3,}}
                placeholder="주소를 입력해주세요."
                placeholderTextColor="#C9C9C9"
              />
              <TouchableOpacity style={{backgroundColor: '#477DD1',borderRadius:8,justifyContent: 'center',alignItems: 'center',flex:1,marginLeft:10,}}>
                  <Text style={{color:'#fff',fontSize:13,fontWeight:'bold',}}>주소 검색</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={{borderWidth:1,borderColor:'#eee',borderRadius:6,height:40,paddingHorizontal:20,marginBottom:10,}}
            />
            <TextInput
              style={{borderWidth:1,borderColor:'#eee',borderRadius:6,height:40,paddingHorizontal:20,}}
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',paddingBottom:10,lineHeight:17,}}>전하실 말씀</Text>
            <TextInput
              {...props}
              style={{borderWidth:1,borderColor:'#eee',borderRadius:6,paddingHorizontal:20,textAlignVertical:'top',fontSize:13,}}
              numberOfLines={10}
              multiline={true}
              placeholder="내용을 입력해주세요."
              placeholderTextColor="#C9C9C9"
            />
          </View>
          <View style={{borderWidth:1,borderColor:'#eee',borderRadius:10}}>
            <Text style={{padding:12,borderBottomWidth:1,borderBottomColor:'#eee',fontSize:16,fontFamily:'NotoSansKR-Bold',lineHeight:20,}}>결제 정보</Text>
            <View style={{padding:12,}}>
              <View style={styles.payinfo}>
                <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:20,}}>거래유형</Text>
                <Text style={{fontSize:13,fontFamily:'NotoSansKR-Regular',lineHeight:20,}}>택배거래</Text>
              </View>
              <View style={styles.payinfo}>
                <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:20,}}>주문금액</Text>
                <Text style={{fontSize:13,fontFamily:'NotoSansKR-Regular',lineHeight:20,}}>210,000원</Text>
              </View>
              <View style={styles.payinfo}>
                <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:20,}}>배송비</Text>
                <Text style={{fontSize:13,fontFamily:'NotoSansKR-Regular',lineHeight:20,}}>3,000원</Text>
              </View>
              <View style={styles.payinfo}>
                <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:20,}}>수수료</Text>
                <Text style={{fontSize:13,fontFamily:'NotoSansKR-Regular',lineHeight:20,}}>8,400원</Text>
              </View>
              <View style={styles.payinfo}>
                <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:20,}}>결제수단</Text>
                <View style={{width:150,}}>
                  <DefaultPicker placeholder="신용카드" picker={payment}/>
                </View>
              </View>
            </View>
            <View style={{backgroundColor:'#EBEBEB',flexDirection:'row',justifyContent: 'space-between',padding:12,}}>
              <Text style={{fontSize:16,fontFamily:'NotoSansKR-Medium',lineHeight:20,}}>총 주문 금액</Text>
              <Text style={{fontSize:16,fontFamily:'NotoSansKR-Medium',lineHeight:20,}}>221,400원</Text>
            </View>
            <View style={{flexDirection: 'row',backgroundColor: '#477DD1',borderBottomLeftRadius:10,borderBottomRightRadius:10,}}>
              <TouchableOpacity style={{width:'50%',height:57,justifyContent: 'center',alignItems: 'center',borderRightWidth:1,borderRightColor:'#fff',}}>
                <Text style={{color:'#fff',fontSize:16,fontFamily:'NotoSansKR-Bold'}}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{width:'50%',height:57,justifyContent: 'center',alignItems: 'center',}}>
                <Text style={{color:'#fff',fontSize:16,fontFamily:'NotoSansKR-Bold'}}>주문하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputWrap:{
      paddingBottom:10,
  },
  payinfo:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingBottom:10,
  },
})

export default PurchaseOrder;
