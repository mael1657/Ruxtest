import React,{useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
} from 'react-native';
import styles from '../style/style';
import Selector, {DealType2, ReviewSelect} from './Select';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Search from './search';
import PrdFilter from './filter';


const Header = () => {
  const navigation = useNavigation(); 

  const [tab, setTab] = useState('buyer');

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
                onPress ={ () => setTab('buyer')}
                style={{backgroundColor: tab === 'buyer' ? '#477DD1' : '#DEDEDE',width:60,height:40,borderRadius:8,justifyContent:'center',alignItems:'center',}}>
                    <Text style={{color: tab === 'buyer' ? '#fff' : '#999' ,fontFamily:'NotoSansKR-Medium',}}>구매자</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress ={ () => setTab('seller')}
                style={{backgroundColor: tab === 'seller' ? '#477DD1' : '#DEDEDE',width:60,height:40,borderRadius:8,justifyContent:'center',alignItems:'center',}}>
                    <Text style={{color: tab === 'seller' ? '#fff' : '#999' ,fontFamily:'NotoSansKR-Medium',}}>판매자</Text>
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
      <View style={styles.header, {zIndex:9999}}>
          <DefaultHead/>
          <View style={{flexDirection:'row', justifyContent: 'space-between',alignItems: 'center',paddingHorizontal: 15,paddingVertical: 10,zIndex:99999999}}>
                <Selector/>
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
      >
        <View 
          style={{
            position:'absolute',
            top:0,bottom:0,left:0,right:0,
            backgroundColor:'rgba(0,0,0,0.4)',
            justifyContent:'flex-end',
            }}>
            <TouchableOpacity 
              onPress={() => setModalOpen(false)}
              style={{alignSelf:'flex-end',paddingRight:20,paddingTop:20,}}
            >
              <Icon name="close" size={24} color="#aaaaaa"/>
            </TouchableOpacity>
            <PrdFilter/>
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
            <DealType2/>
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
        <ReviewSelect/>
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

export const DefaultHead = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return(
    <>
    <View style={styles.header01}>
        <TouchableOpacity>
            <Image
            style={{width:120,height:60,resizeMode:'contain',}}
            source={require('../images/logo01.png')}
            />
        </TouchableOpacity>
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
