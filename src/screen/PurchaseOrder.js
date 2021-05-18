import React, {useState, useEffect} from 'react';
import {SafeAreaView,ScrollView,View,Text,TouchableOpacity,StyleSheet,TextInput, Alert, Keyboard,Modal, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import Postcode from '@actbase/react-daum-postcode';
import Icon from 'react-native-vector-icons/Ionicons'

import Header, {DetailHead} from '../components/header';
import Footer from '../components/footer';
import Product from '../components/product';
import Selector, {DefaultPicker} from '../components/Select';
import API_CALL from '../ApiCall';


const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const Boxwidth = Width - 40;
const Boxheight = Height - 100;

const PurchaseOrder = (props) => {

  const {route} = props
  const {navigation} = props
  const {params} = route
  console.log("params",params)

  const {member} = useSelector(state => state.login)

  const [orderItem, setOrderItem] = useState({})



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
  const [mdi_type, setMdi_type] = useState(['주문자와 동일','최근배송지','신규배송지'])
  var dvrArr = mdi_type.map((arr, index) => {
    return { key: index, label: arr, value: index+1 }
  });
  const [ot_rmemo, setOt_rmemo] = useState('')
  const [ot_pay_type, setOt_pay_type] = useState(['카드','가상계좌','계좌이체'])
  var crdArr = ot_pay_type.map((arr, index) => {
    return { key: index, label: arr, value: index+1 }
  });
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

  const [orderAdd, setOrderAdd] = useState({})

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

    const api = await API_CALL(url+path, form, true)
    const { data } = api;
    const {item, result, message} = data;
    console.log(api)
    console.log('AddItem',item)
    try{
      if(result === "0") return Alert.alert("no result",message)
      if(result === "1"){
    
        setOrderAdd(item[0])
        Alert.alert("Got it")
      }
    }catch(e){
      console.log(e)
      Alert.alert("Catch!")
    }
  }
  console.log('orderAdd', orderAdd)

  //----------------------------------------------------------------------------
  const onPressDvr = (val) => {
    pickerPress(false);
    setDvr(val);
  }
  const pickerPress = (bool) => {
    setIsVisible(!isVisible)
    Keyboard.dismiss();
  }
  const [isVisible, setIsVisible] = useState(false);
  const [dvr, setDvr] = useState(1);

  const onPressCrd = (val) => {
    pickerPress(false);
    setCrd(val);
  }
  const crdPress = (bool) => {
    setCrdvisible(!crdVisible)
  }
  const [crdVisible, setCrdvisible] = useState(false);
  const [crd, setCrd] = useState(1);
  

   // 주소검색 API -------------------------------------------------------------
   const handleComplete = (data) => {
    let zipcode = data.zonecode;
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
        if (data.bname !== '') {
            extraAddress += data.bname;
        }
        if (data.buildingName !=='') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
        }
        fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    console.log(fullAddress)
    setOt_rzip(zipcode)
    setOt_radd1(fullAddress)
    setPostcode(false)
}
const [postcode,setPostcode] = useState(false);


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
          <View style={[styles.inputWrap]}>
            <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',paddingBottom:10,lineHeight:17,}}>배송지 선택</Text>
            <View style={{flex:1}}>
              {/* <DefaultPicker placeholder="배송지 선택" picker={location}/> */}
              <TouchableOpacity 
              onPress={() => pickerPress(true)}
              style={{borderColor:'#eee',borderWidth:1,borderRadius:8,height:35,width:120,paddingHorizontal:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}
              >
                <Text>{dvrArr[(dvr-1)].label}</Text>
                {isVisible ? <Icon name="caret-up" size={14} color="#447DD1" />: <Icon name="caret-down" size={14} color="#447DD1" />}
              </TouchableOpacity>
              {isVisible ? <View style={{width: 120, position: 'absolute', top: 35, left: 0, paddingBottom: 10,paddingLeft:10, backgroundColor: '#fff', justifyContent: 'center', zIndex: 10,borderColor:'#eee',borderWidth:1}}>
                <ScrollView style={{height:120}}>
                  {dvrArr.map((arr, index) => {
                    return <TouchableOpacity key={index} style={{}} onPress={() => onPressDvr(arr.value)}>
                        <Text style={{lineHeight: 40, flex: 1,color: dvr==arr.value?'#447DD1':'#222'}}>{arr.label}</Text>
                      </TouchableOpacity>
                  })}
                </ScrollView>
              </View>: null}
            </View>
          </View>
          <View style={styles.inputWrap}>
            <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',paddingBottom:10,lineHeight:17,}}>이름</Text>
            <TextInput
              style={{borderWidth:1,borderColor:'#eee',borderRadius:6,height:40,paddingHorizontal:20,}}
              placeholder="홍길동"
              placeholderTextColor="#C9C9C9"
              onChangeText={text => setOt_rname(text)}
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',paddingBottom:10,lineHeight:17,}}>전화번호</Text>
            <TextInput
              style={{borderWidth:1,borderColor:'#eee',borderRadius:6,height:40,paddingHorizontal:20,}}
              placeholder="051-123-4567"
              keyboardType="numeric"
              placeholderTextColor="#C9C9C9"
              onChangeText={text => setOt_rtel(text)}
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',paddingBottom:10,lineHeight:17,}}>핸드폰</Text>
            <TextInput
              style={{borderWidth:1,borderColor:'#eee',borderRadius:6,height:40,paddingHorizontal:20,}}
              placeholder="010-1234-5678"
              keyboardType="numeric"
              placeholderTextColor="#C9C9C9"
              onChangeText={text => setOt_rhp(text)}
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',paddingBottom:10,lineHeight:17,}}>주소</Text>
            <View style={{flexDirection: 'row',paddingBottom:10,}}>
              <TextInput
                style={{borderWidth:1,borderColor:'#eee',borderRadius:6,height:40,paddingHorizontal:20,flex:3,color:'#222'}}
                placeholder="주소를 입력해주세요."
                placeholderTextColor="#C9C9C9"
                editable={false}
                value={ot_rzip}
                onChangeText={text => setOt_rzip(text)}
              />
              <TouchableOpacity 
              onPress={() => setPostcode(!postcode)}
              style={{backgroundColor: '#477DD1',borderRadius:8,justifyContent: 'center',alignItems: 'center',flex:1,marginLeft:10,}}>
                  <Text style={{color:'#fff',fontSize:13,fontWeight:'bold',}}>주소 검색</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={{borderWidth:1,borderColor:'#eee',borderRadius:6,height:40,paddingHorizontal:20,marginBottom:10,color:'#222'}}
              placeholder="상세주소"
              placeholderTextColor="#C9C9C9"
              value={ot_radd1}
              onChangeText={text => setOt_radd1(text)}
            />
            <TextInput
              style={{borderWidth:1,borderColor:'#eee',borderRadius:6,height:40,paddingHorizontal:20,color:'#222'}}
              placeholder="상세주소"
              placeholderTextColor="#C9C9C9"
              value={ot_radd2}
              onChangeText={text => setOt_radd2(text)}
            />
            <Modal
                         transparent={true}
                         animationType="fade"
                         visible={postcode}
                         onRequestClose={() =>  setPostcode(false)}
                        >
                            <View style={{position:'absolute',top:0,left:0,right:0,bottom:0,backgroundColor:'rgba(0,0,0,0.7)'}}>
                                <View style={{width:Width,height:Height,justifyContent:'center',alignItems:'center'}}>
                                    <Postcode
                                        style={{ width:Boxwidth, height:Boxheight, marginBottom:10, }}
                                        jsOptions={{ animated: true }}
                                        // onSelected={data => alert(JSON.stringify(data))}
                                        onSelected={handleComplete}
                                        
                                    />
                                </View>
                            </View>
                        </Modal>
          </View>
          <View style={styles.inputWrap}>
            <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',paddingBottom:10,lineHeight:17,}}>전하실 말씀</Text>
            <TextInput
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
                <Text style={{fontSize:13,fontFamily:'NotoSansKR-Regular',lineHeight:20,}}>{orderItem.ct_delivery_type}</Text>
              </View>
              <View style={styles.payinfo}>
                <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:20,}}>주문금액</Text>
                <Text style={{fontSize:13,fontFamily:'NotoSansKR-Regular',lineHeight:20,}}>{orderItem.pt_price}원</Text>
              </View>
              <View style={styles.payinfo}>
                <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:20,}}>배송비</Text>
                <Text style={{fontSize:13,fontFamily:'NotoSansKR-Regular',lineHeight:20,}}>{orderItem.ct_delivery_default_price}원</Text>
              </View>
              <View style={styles.payinfo}>
                <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:20,}}>수수료</Text>
                <Text style={{fontSize:13,fontFamily:'NotoSansKR-Regular',lineHeight:20,}}>{orderItem.commission}원</Text>
              </View>
              <View style={styles.payinfo}>
                <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:20,}}>결제수단</Text>
                <View style={{width:150,}}>
                  {/* <DefaultPicker placeholder="신용카드" picker={payment}/> */}
                    <TouchableOpacity 
                    onPress={() => crdPress(true)}
                    style={{borderColor:'#eee',borderWidth:1,borderRadius:8,height:35,width:150,paddingHorizontal:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}
                    >
                      <Text>{crdArr[(crd-1)].label}</Text>
                      {crdVisible ? <Icon name="caret-up" size={14} color="#447DD1" />: <Icon name="caret-down" size={14} color="#447DD1" />}
                    </TouchableOpacity>
                    {crdVisible ? <View style={{width: 150, position: 'absolute', top: 35, left: 0, paddingBottom: 10,paddingLeft:10, backgroundColor: '#fff', justifyContent: 'center', zIndex: 10,borderColor:'#eee',borderWidth:1}}>
                      <ScrollView style={{height:120}}>
                        {crdArr.map((arr, index) => {
                          return <TouchableOpacity key={index} style={{}} onPress={() => onPressCrd(arr.value)}>
                              <Text style={{lineHeight: 40, flex: 1,color: crd==arr.value?'#447DD1':'#222'}}>{arr.label}</Text>
                            </TouchableOpacity>
                        })}
                      </ScrollView>
                    </View>: null}
                </View>
              </View>
            </View>
            <View style={{backgroundColor:'#EBEBEB',flexDirection:'row',justifyContent: 'space-between',padding:12,}}>
              <Text style={{fontSize:16,fontFamily:'NotoSansKR-Medium',lineHeight:20,}}>총 주문 금액</Text>
              <Text style={{fontSize:16,fontFamily:'NotoSansKR-Medium',lineHeight:20,}}>{orderItem.total_price}원</Text>
            </View>
            <View style={{flexDirection: 'row',backgroundColor: '#477DD1',borderBottomLeftRadius:10,borderBottomRightRadius:10,}}>
              <TouchableOpacity 
              onPress={()=> navigation.goBack(Alert.alert("취소하셨습니다."))}
              style={{width:'50%',height:57,justifyContent: 'center',alignItems: 'center',borderRightWidth:1,borderRightColor:'#fff',}}>
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
