import React,{useState,useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import styles from '../style/style';
import {DefaultPicker, DealType2, ReviewSelect} from './Select';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Search from './search';
// import PrdFilter from './filter';
import {FtrBrand, FtrCategory, FtrType, FtrPrice} from './filterItem';
import {useSelector,useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import API_CALL from '../ApiCall';
 
const prdPicker= [
  {label:'인기상품순' , value:'인기상품순'},
  {label:'인기상품순' , value:'인기상품순'},
  {label:'인기상품순' , value:'인기상품순'},
]

const reviewPicker= [
  {label:'제품명' , value:'제품명'},
  {label:'제품명' , value:'제품명'},
  {label:'제품명' , value:'제품명'},
]

const estPicker= [
  {label:'직거래' , value:'직거래'},
  {label:'택배거래' , value:'택배거래'},
  {label:'안전거래' , value:'안전거래'},
]

const Height = Dimensions.get('window').height - 70;


const Header = () => {
  const navigation = useNavigation(); 

  const dispatch = useDispatch();

  const [tab, setTab] = useState('buyer');
  const {member} = useSelector(state => state.login)
  // console.log('before', member)
  const [mb_type,setMb_type] = useState('')

  // useEffect(()=>{
   
  // },[])
  


  


  const setMemType = async (mb_type) => {
    console.log("m", member)
    console.log(mb_type)
    const form = new FormData
    form.append('method','proc_seller_change')
    form.append('mt_idx',member.mt_idx)
    form.append('mb_type',mb_type)
    const url = 'http://dmonster1566.cafe24.com'
    const params = '/json/proc_json.php'
    try{
      const api = await API_CALL(url+params, form, false)
      console.log(api)
      const { data } = api;
      const { item, result } = data;
      if(result === '0') return Alert.alert("제목","전환 실패")
      if(result === '1') {
        console.log("item", item[0])
        const memberConvert = Object.assign({} ,member)
        console.log(JSON.stringify(memberConvert))
        dispatch({
          type:'LOGIN',
          payload: item[0]
        })

        // const saveType = {mathod: 'proc_seller_change', mt_idx: member.mt_idx , mb_type }
        // await AsyncStorage.setItem('saveType', JSON.stringify(saveType))
        const saveLogin = {mb_type}
        await AsyncStorage.setItem('saveLogin',JSON.stringify(saveLogin))
        setMb_type(mb_type)
        Alert.alert("제목","전환 성공")
      }
    }
    catch(e){
      console.log(e)
      Alert.alert("제목","전환 실패 에러")
    }
  
  }

  return(

    <View style={styles.header}>
        <DefaultHead/>
        <View style={styles.header02}>
            <TouchableOpacity 
            accessibilityRole="button"
            onPress={() => navigation.openDrawer()}
            style={{flexDirection:'row',alignItems:'center'}}>
                    <Image
                    style={{width:40,height:40,resizeMode:'contain',}}
                    source={require('../images/img_cate.png')}
                    />
                <Text style={{fontSize:17,paddingLeft:8,fontFamily:'NotoSansKR-Bold'}}>상품 카테고리</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',backgroundColor:'#DEDEDE',borderRadius:8,width:120,height:40,justifyContent:'space-between',alignItems:'center'}}>
                <TouchableOpacity
                onPress ={ () => setMemType('B')}
                style={{backgroundColor: mb_type === 'B' ? '#477DD1' : '#DEDEDE',width:60,height:40,borderRadius:8,justifyContent:'center',alignItems:'center',}}>
                    <Text style={{color: mb_type === 'B' ? '#fff' : '#999' ,fontFamily:'NotoSansKR-Medium',}}>구매자</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress ={ () => setMemType('S')}
                style={{backgroundColor: mb_type === 'S' ? '#477DD1' : '#DEDEDE',width:60,height:40,borderRadius:8,justifyContent:'center',alignItems:'center',}}>
                    <Text style={{color: mb_type === 'S' ? '#fff' : '#999' ,fontFamily:'NotoSansKR-Medium',}}>판매자</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export const HeaderA = () => {
  const[modalOpen, setModalOpen] = useState(false);

  return(
    <>
      <View style={styles.header,{zIndex:999}}>
          <DefaultHead/>
          <View style={{flexDirection:'row', justifyContent: 'space-between',alignItems: 'center',paddingHorizontal: 15,paddingVertical: 10,height:45}}>
                <View style={{width:100,marginRight:5,}}>
                  <DefaultPicker picker={prdPicker} placeholder="인기상품순"/>
                </View>
              <View style={{flex:2, flexDirection: 'row',borderColor:'#eee',borderWidth:1,borderRadius:8,height:35,justifyContent:'space-between',alignItems: 'center',paddingHorizontal: 6,}}>
                <TextInput
                  placeholder="상품명을 입력하세요"
                  style={{height:35,alignItems:'center',fontSize:12,lineHeight:14,padding:0,flex:1,}}
                  placeholderTextColor={'#C9C9C9'}
                />
                <TouchableOpacity>
                    <Image
                    style={{resizeMode: 'contain',width:20,}}
                    source={require('../images/img_hd01.png')}/>
                </TouchableOpacity>
              </View>
              <TouchableOpacity 
              style={{flexDirection: 'row', borderRadius: 8,backgroundColor: "#477DD1",height:35,alignItems: 'center',justifyContent: 'center',width:70,marginLeft:5,}}
              onPress={() => setModalOpen(true)}
              >
                <Text style={{color:'#fff',paddingRight: 5,fontFamily:'NotoSansKR-Medium',lineHeight:20}}>필터</Text>
                <View style={{width:12,}}>
                  <Image 
                  style={{resizeMode:'contain',width:'100%'}}
                  source={require('../images/ico_filter.png')}/>
                </View>
              </TouchableOpacity>
          </View>
      </View>
      <Modal 
        visible={modalOpen} 
        animationType={"slide"}
        transparent={true}
        style={{flex:1}}
        onRequestClose={() => setModalOpen(false)}
      >
        <View 
          style={{
            position:'absolute',
            top:0,bottom:0,left:0,right:0,
            backgroundColor:'rgba(0,0,0,0.4)', 
            justifyContent:'flex-end',
            }}>
              <View style={{
              paddingHorizontal:20,
              paddingTop:20,
              backgroundColor:'#fff',
              height:Height,
              borderTopLeftRadius:10,
              borderTopRightRadius:10,
              }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                  <Text style={{fontSize:18,fontFamily:'NotoSansKR-Bold',lineHeight:20,}}>쇼핑몰 필터</Text>
                  <View style={{paddingBottom:30,}}>
                      <Text style={{
                        fontFamily:'NotoSansKR-Medium',
                        color:'#999999',
                        fontSize:14,
                      }}>브랜드 
                      <Text style={{fontSize:12,color:'#B7B7B7'}}>  (선택1)</Text></Text>
                      <View style={{flexDirection:'row',flexWrap:'wrap',}}>
                          <FtrBrand/>

                      </View>
                  </View>
                  <View style={{paddingBottom:30,}}>
                      <Text style={{
                        fontFamily:'NotoSansKR-Medium',
                        color:'#999999',
                        fontSize:14,
                      }}>카테고리 
                      <Text style={{fontSize:12,color:'#B7B7B7'}}>  (선택1)</Text></Text>
                      <View style={{flexDirection:'row',flexWrap:'wrap',}}>
                          <FtrCategory/>

                      </View>
                  </View>
                  <View style={{paddingBottom:30,}}>
                      <Text style={{
                        fontFamily:'NotoSansKR-Medium',
                        color:'#999999',
                        fontSize:14,
                      }}>거래유형</Text>
                      <View style={{flexDirection:'row',flexWrap:'wrap',}}>
                          <FtrType/>
                      </View>
                  </View>
                  <View style={{marginBottom:10,}}>
                    <Text style={{
                      fontFamily:'NotoSansKR-Medium',
                      color:'#999999',
                      fontSize:14,
                    }}>가격대</Text>
                    <View style={{flex:1}}>
                        <FtrPrice/>
                    </View>
                  </View>
                  <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:20,}}>
                      <TouchableOpacity style={{flexDirection:'row',alignItems:'center',}}>
                          <Icon name="refresh-outline" size={20} color="#444" style={{marginRight:5,}}/>
                          <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium'}}>필터 초기화</Text>
                      </TouchableOpacity>
                      <TouchableOpacity 
                        onPress={() => setModalOpen(false)}
                          style={{
                              backgroundColor:'#447DD1',
                              height:45,
                              width:200,
                              justifyContent:'center',
                              alignItems:'center',
                              borderRadius:8,
                          }}>
                          <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',color:'#fff'}}>선택완료</Text>
                      </TouchableOpacity>
                  </View>
              </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};

export const DetailHead = ({title}) => {
  const navigation = useNavigation();
  return(
    <View style={{flexDirection:'row',justifyContent: 'center', alignItems:'center',backgroundColor: '#fff',height:62,borderBottomWidth:1,borderBottomColor: '#eee',}}>
      <Text style={{fontSize:18,fontFamily:'NotoSansKR-Bold',}}>{title}</Text>
      <TouchableOpacity
        style={{position:'absolute',left:15,}}
        onPress={() => navigation.goBack()}>
        <Image source={require('../images/head_arr.png')}/>
      </TouchableOpacity>
    </View>
  );
};

export const EstHeader = ({title}) => {

  const [tab, setTab] = useState('buyer');

  return(
    <View style={styles.header , {paddingBottom:10,}}>
        <DefaultHead/>
        <View style={{alignItems: 'center',justifyContent: 'center',height:50,}}>
          <Text style={{fontSize:18,fontFamily:'NotoSansKR-Bold',}}>{title}</Text>
        </View>
        <View style={{
                paddingBottom:5,
                paddingLeft:15,
                paddingRight:15,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
            }}>
              <View style={{flex:1,marginRight:5,}}>
                <DefaultPicker placeholder="거래방식 선택" picker={estPicker}/>
              </View>
            <View style={{flexDirection:'row',backgroundColor:'#DEDEDE',borderRadius:8,width:120,height:35,justifyContent:'space-between',alignItems:'center'}}>
                <TouchableOpacity
                onPress ={ () => setTab('buyer')}
                style={{backgroundColor: tab === 'buyer' ? '#477DD1' : '#DEDEDE',width:60,height:35,borderRadius:8,justifyContent:'center',alignItems:'center',}}>
                    <Text style={{color: tab === 'buyer' ? '#fff' : '#999' ,fontFamily:'NotoSansKR-Medium',lineHeight:20}}>구매자</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress ={ () => setTab('seller')}
                style={{backgroundColor: tab === 'seller' ? '#477DD1' : '#DEDEDE',width:60,height:35,borderRadius:8,justifyContent:'center',alignItems:'center',}}>
                    <Text style={{color: tab === 'seller' ? '#fff' : '#999' ,fontFamily:'NotoSansKR-Medium',lineHeight:20}}>판매자</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{marginHorizontal: 15,borderWidth:1,borderColor:'#eee',borderRadius:8,height:35,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',paddingHorizontal: 10}}>
          <TextInput
            style={{height:35,paddingVertical: 0,justifyContent:'center',flex:1,fontSize:13}}
            placeholder="제품명을 입력해주세요."
            placeholderTextColor="#C9C9C9"
          />
          <Icon name="search" size={20} color="#477DD1"/>
        </View>
    </View>
  );
};

export const ChatHeader =({title})=> {

  const [tab, setTab] = useState('buyer');

  return(
    <View style={styles.header, {paddingBottom:10,}}>
        <DefaultHead/>
        <View style={{alignItems: 'center',justifyContent: 'center',height:50,}}>
          <Text style={{fontSize:18,fontFamily:'NotoSansKR-Bold'}}>{title}</Text>
        </View>
        <View style={{
                paddingBottom:5,
                paddingLeft:15,
                paddingRight:15,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
            }}>
            <View style={{flex:1,marginRight:5,borderWidth:1,borderColor:'#eee',borderRadius:8,height:35,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',paddingHorizontal: 10}}>
              <TextInput
                style={{height:35,paddingVertical: 0,justifyContent:'center',flex:1,fontSize:13}}
                placeholder="제품명을 입력해주세요."
                placeholderTextColor="#C9C9C9"
              />
              <Icon name="search" size={20} color="#477DD1"/>
            </View>
            <View style={{flexDirection:'row',backgroundColor:'#DEDEDE',borderRadius:8,width:120,height:35,justifyContent:'space-between',alignItems:'center'}}>
            <TouchableOpacity
                onPress ={ () => setTab('buyer')}
                style={{backgroundColor: tab === 'buyer' ? '#477DD1' : '#DEDEDE',width:60,height:35,borderRadius:8,justifyContent:'center',alignItems:'center',}}>
                    <Text style={{color: tab === 'buyer' ? '#fff' : '#999' ,fontFamily:'NotoSansKR-Medium',lineHeight:20}}>구매자</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress ={ () => setTab('seller')}
                style={{backgroundColor: tab === 'seller' ? '#477DD1' : '#DEDEDE',width:60,height:35,borderRadius:8,justifyContent:'center',alignItems:'center',}}>
                    <Text style={{color: tab === 'seller' ? '#fff' : '#999' ,fontFamily:'NotoSansKR-Medium',lineHeight:20}}>판매자</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

export const ChatDetailHeader = ({title}) => {
  const navigation = useNavigation();
  return(
    <View>
      <View style={{flexDirection:'row',justifyContent: 'center', alignItems:'center',backgroundColor: '#fff',height:62,borderBottomWidth:1,borderBottomColor: '#eee',}}>
        <Text style={{fontSize:18,fontFamily:'NotoSansKR-Bold'}}>{title}</Text>
        <TouchableOpacity
          style={{position:'absolute',left:15,}}
          onPress={() => navigation.goBack()}>
          <Image source={require('../images/head_arr.png')}/>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',}}>
        <TouchableOpacity style={{flex:1,flexDirection:'row',justifyContent: 'space-between',alignItems:'center',height:48,backgroundColor: '#EBEBEB',paddingHorizontal:20,borderRightWidth:1,borderRightColor:'#fff'}}>
          <Text style={{fontSize:16,fontFamily:'NotoSansKR-Bold'}}>프로필 정보</Text>
          <Icon name="chevron-forward" size={20} color="#333"/>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1,flexDirection:'row',justifyContent: 'space-between',alignItems:'center',height:48,backgroundColor: '#EBEBEB',paddingHorizontal:20,}}>
          <Text style={{fontSize:16,fontFamily:'NotoSansKR-Bold'}}>사기 방지 가이드</Text>
          <Icon name="chevron-forward" size={20} color="#333"/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const MypageHeader = () => {
  return(
    <View style={styles.header}>
        <DefaultHead/>
    </View>
  );
};

export const ReviewHeader = ({title}) => {
  const [tab, setTab] = useState('buyer');
  return(
    <View style={styles.header, {zIndex:999}}>
        <DefaultHead/>
        <View style={{alignItems: 'center',justifyContent: 'center',height:50,}}>
          <Text style={{fontSize:18,fontFamily:'NotoSansKR-Bold'}}>{title}</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:20,}}>
          <TouchableOpacity
          onPress ={ () => setTab('buyer')}
          style={{
            backgroundColor: tab === 'buyer' ? '#477DD1' : '#fff',
            flex:1,
            height:35,
            borderRadius:8,
            justifyContent:'center',
            alignItems:'center',
            borderWidth:1,
            borderColor:'#477DD1',
            marginRight:5,
            }}>
              <Text style={{color: tab === 'buyer' ? '#fff' : '#477DD1' ,fontFamily:'NotoSansKR-Medium',fontSize:14,lineHeight:20,}}>구매자</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress ={ () => setTab('seller')}
          style={{
            backgroundColor: tab === 'seller' ? '#477DD1' : '#fff',
            flex:1,
            height:35,
            borderRadius:8,
            justifyContent:'center',
            alignItems:'center',
            borderWidth:1,
            borderColor:'#477DD1',
            }}>
              <Text style={{color: tab === 'seller' ? '#fff' : '#477DD1' ,fontFamily:'NotoSansKR-Medium',fontSize:14,lineHeight:20,}}>판매자</Text>
          </TouchableOpacity>
      </View>
      <View style={{width:'100%',height:45,backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:20}}>
        <View style={{flex:1,marginRight:5,}}>
          <DefaultPicker picker={reviewPicker} placeholder="제품명"/>
        </View>
        <View style={{flex:2,borderWidth:1,borderColor:'#eee',borderRadius:8,height:35,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',paddingHorizontal: 10}}>
              <TextInput
                style={{height:35,paddingVertical: 0,justifyContent:'center',flex:1,fontSize:13,}}
                placeholder="제품명을 입력해주세요."
                placeholderTextColor="#C9C9C9"
              />
              <Icon name="search" size={20} color="#477DD1"/>
            </View>
      </View>
    </View>
  );
};

export const FavoriteHeader = ({title}) => {
  return(
    <View style={styles.header}>
      <DefaultHead/>
        <View style={{flexDirection:'row',justifyContent: 'center', alignItems:'center',backgroundColor: '#fff',height:62}}>
          <Text style={{fontSize:18,fontFamily:'NotoSansKR-Bold'}}>{title}</Text>
        </View>
        <View style={{
          paddingHorizontal:20,paddingBottom:10,
        }}>
          <View style={{width:'100%',borderWidth:1,borderColor:'#eee',borderRadius:8,height:35,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',paddingHorizontal: 10}}>
            <TextInput
              style={{height:35,paddingVertical: 0,justifyContent:'center',flex:1,fontFamily:'NotoSansKR-Regular',fontSize:13,}}
              placeholder="제품명을 입력해주세요."
              placeholderTextColor="#C9C9C9"
            />
            <Icon name="search" size={20} color="#477DD1"/>
          </View>
        </View>
    </View>
  );
};

export const AppraiseHeader = ({title}) =>{
  return(
    <View style={styles.header}>
      <DefaultHead/>
       <View style={{flexDirection:'row',justifyContent: 'center', alignItems:'center',backgroundColor: '#fff',height:62}}>
          <Text style={{fontSize:18,fontFamily:'NotoSansKR-Bold'}}>{title}</Text>
          <TouchableOpacity 
          style={{
            position:'absolute',
            top:14,
            right:20,
            backgroundColor:'#447DD1',
            width:98,
            height:35,
            borderRadius:8,
            justifyContent:'center',
            alignItems:'center'
            }}>
            <Text style={{
              fontSize:14,
              fontFamily:'NotoSansKR-Medium',
              lineHeight:20,
              color:'#fff'
            }}>신청서 작성</Text>
          </TouchableOpacity>
        </View>
        <View 
        style={{
          flexDirection:'row',
          backgroundColor:'#fff',
          paddingHorizontal:20,
          paddingBottom:10,
          width:'100%',
          alignItems:'center'
        }}>
          <View style={{flex:4,marginRight:5,}}>
             <DefaultPicker placeholder="제품명" />
          </View>
          <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            borderWidth:1,
            borderColor:'#eee',
            borderRadius:8,
            height:35,
            flex:6,
            }}>
            <TextInput
            placeholder="제품명을 입력해주세요."
            placeholderTextColor="#C9C9C9"
            style={{height:35,padding:0,paddingLeft:10,width:'80%'}}
            />
            <TouchableOpacity style={{width:30,}}>
              <Icon name="search" size={24} color="#447DD1"/>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
};

export const RPHeader = ({title}) => {
  return(
    <View style={styles.header, {zIndex:999}}>
        <DefaultHead/>
        <View style={{alignItems: 'center',justifyContent: 'center',height:50,}}>
          <Text style={{fontSize:18,fontFamily:'NotoSansKR-Bold'}}>{title}</Text>
        </View>
      <View style={{width:'100%',height:45,backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:20}}>
        <View style={{flex:1,marginRight:5,}}>
          <DefaultPicker picker={reviewPicker} placeholder="제품명"/>
        </View>
        <View style={{flex:2,borderWidth:1,borderColor:'#eee',borderRadius:8,height:35,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',paddingHorizontal: 10}}>
              <TextInput
                style={{height:35,paddingVertical: 0,justifyContent:'center',flex:1,fontSize:13,}}
                placeholder="제품명을 입력해주세요."
                placeholderTextColor="#C9C9C9"
              />
              <Icon name="search" size={20} color="#477DD1"/>
            </View>
      </View>
    </View>
  );
};

export const DefaultHead = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return(
    <>
    <View style={styles.header01}>
        <View>
            <Image
            style={{width:120,height:60,resizeMode:'contain',}}
            source={require('../images/logo01.png')}
            />
        </View>
        <View style={{width:70,height:50,justifyContent:'space-between',flexDirection:'row',paddingTop:10,}}>
            <TouchableOpacity 
            style={{width:30,height:30}}
            onPress={() => setModalOpen(true)}
            >
                <Image
                style={{width:30,height:30,resizeMode:'contain'}}
                source={require('../images/img_hd01.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={{width:30,height:30}}>
                <Image
                style={{width:30,height:30,resizeMode:'contain'}}
                source={require('../images/img_hd02.png')}
                />
            </TouchableOpacity>
        </View>
    </View>
    <Modal visible={modalOpen} animationType="slide">
      <TouchableOpacity 
        style={{width:24,height:24,justifyContent:'center',alignItems:'center',alignSelf:'flex-end',marginRight:20,marginTop:20,}}
        onPress={() => setModalOpen(false)}
        >
            <Icon name="close" size={24} color="#AAAAAA"/>
      </TouchableOpacity>
      <Search/>
    </Modal>
    </>
  );
};



export default Header;
