import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Text, TouchableOpacity,StyleSheet,TextInput, Touchable} from 'react-native';
import {DetailHead} from '../components/header';
import {DefaultPicker} from '../components/Select';
import Icon from 'react-native-vector-icons/Ionicons';

const brandPicker = [
    {label: '티파니', value:'티파니'},
    {label: '지방시', value:'지방시'},
    {label: '프라다', value:'프라다'},
  ]

const categoryPicker = [
{label: '의류', value:'의류'},
{label: '가방', value:'가벙'},
{label: '신발', value:'신발'},
]
const paymentPicker = [
    {label: '신용카드', value:'신용카드'},
    {label: '무통장입금', value:'무통장입금'},
    {label: '가상계좌', value:'가상계좌'},
    ]
const pakageitem = {
    case: false,
    guarantee: false,
    tag: false,
    receipt: false,
    etc: false,
}



const AppraiseWrite = ({navigation}) => {
    const [pakage, setPakage] = useState(pakageitem);
    const [itemdata, setItemdata] = useState([
        {
            id:1,
            title:'셔츠',
        },
        {
            id:2,
            title:'블라우스',
        },
        {
            id:3,
            title:'스웨터',
        },
        {
            id:4,
            title:'맨투맨',
        },
        {
            id:5,
            title:'티셔츠',
        },
        {
            id:6,
            title:'목티',
        },
        {
            id:7,
            title:'반팔',
        },
        {
            id:8,
            title:'아우터',
        },
    ])
    const [data_1,setData_1] = useState([
        {
            id:1,
            title:'백화점',
            state:false
        },
        {
            id:2,
            title:'아울렛',
            state:false
        },
        {
            id:3,
            title:'편집샵',
            state:false
        },
        {
            id:4,
            title:'인터넷',
            state:false
        },
        {
            id:5,
            title:'중고거래',
            state:false
        },
        {
            id:6,
            title:'모릅니다',
            state:false
        },
    ]) ;
    
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
            <DetailHead title="감정신청"/>
            <ScrollView style={{flex:1,}}>
                <View style={{padding:20,paddingBottom:60,}}>
                    {/* 신청자 정보 */}
                    <View> 
                        <Text 
                        style={{
                            fontSize:15,
                            fontFamily:'NotoSansKR-Bold',
                            lineHeight:20,
                            paddingBottom:20,
                        }}>신청자 정보</Text>
                        <View style={styles.contbox}>
                            <Text style={styles.contitle}>이름<Text style={styles.contsubtitle}>(필수)</Text></Text>
                            <TextInput
                            style={styles.inputstyle}
                            placeholder="이름을 입력하세요"
                            placeholderTextColor="#C9C9C9"
                            />
                        </View>
                        <View style={styles.contbox}>
                            <Text style={styles.contitle}>전화번호<Text style={styles.contsubtitle}>(필수)</Text></Text>
                            <TextInput
                            style={styles.inputstyle}
                            placeholder="전화번호를 입력하세요"
                            placeholderTextColor="#C9C9C9"
                            />
                        </View>
                        <View style={styles.contbox}>
                            <Text style={styles.contitle}>주소</Text>
                            <View style={{flexDirection:'row',}}>
                                <TextInput
                                style={[styles.inputstyle, {flex:1}]}
                                placeholder="주소를 입력하세요"
                                placeholderTextColor="#C9C9C9"
                                />
                                <TouchableOpacity 
                                style={{
                                    backgroundColor:'#447DD1',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    height:35,
                                    borderRadius:8,
                                    width:80,
                                    marginLeft:5,
                                }}>
                                    <Text  style={{fontSize:13,fontFamily:'NotoSansKR-Medium',color:'#fff',lineHeight:20,}}>주소검색</Text>
                                </TouchableOpacity>
                            </View>
                            <TextInput style={styles.inputstyle}/>
                            <TextInput style={styles.inputstyle}/>
                        </View>
                    </View>
                    {/* 상품 정보 */}
                    <View>
                        <Text 
                            style={{
                                fontSize:15,
                                fontFamily:'NotoSansKR-Bold',
                                lineHeight:20,
                                paddingBottom:20,
                            }}>상품 정보</Text>
                            <View style={styles.contbox}>
                              <Text style={styles.contitle}>상품명<Text style={styles.contsubtitle}>(필수)</Text></Text>
                              <TextInput 
                              style={styles.inputstyle}
                              placeholder="상품명을 입력하세요"
                              placeholderTextColor="#C9C9C9"
                              />
                            </View>
                            <View style={styles.contbox}>
                              <Text style={styles.contitle}>브랜드<Text style={styles.contsubtitle}>(필수)</Text></Text>
                              <DefaultPicker 
                              placeholder="브랜드 선택"
                              picker={brandPicker}
                              />
                            </View>
                            <View style={styles.contbox}>
                              <Text style={styles.contitle}>카테고리<Text style={styles.contsubtitle}>(필수)</Text></Text>
                              <DefaultPicker 
                              placeholder="카테고리 선택"
                              picker={categoryPicker}
                              />
                            </View>
                            <View style={styles.contbox}>
                              <Text style={styles.contitle}>품목<Text style={styles.contsubtitle}>(필수)</Text></Text>
                              <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                                {itemdata.map((element, key) => (
                                    <TouchableOpacity
                                    key={key}
                                    onPress={() => setItemdata(itemdata.map(data=>{
                                        if(data.id == element.id){
                                            return{...data, state:true}
                                        } else {
                                            return{...data, state:false}
                                        }
                                    }))}
                                    style={{
                                        paddingHorizontal:20,
                                        paddingVertical:8,
                                        backgroundColor:element.state === false ? '#fff' : '#447DD1',
                                        borderWidth:1,
                                        borderColor:'#447DD1',
                                        borderRadius:8,
                                        justifyContent:'center',
                                        alignItems:'center',
                                        marginRight:5,
                                        marginBottom:5,
                                    }}
                                    >
                                        <Text style={{
                                            fontSize:13,
                                            fontFamily:'NotoSansKR-Medium',
                                            lineHeight:16,
                                            color: element.state === false ? '#447DD1' : '#fff', 
                                        }}>{element.title}</Text>
                                    </TouchableOpacity>
                                ))}
                              </View>
                            </View>
                            <View style={styles.contbox}>
                                <Text style={styles.contitle}>구매시기를 아시나요?</Text>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{width:100,marginRight:10,}}>
                                        <DefaultPicker picker={brandPicker} placeholder="연도 선택"/>
                                    </View>
                                    <View style={{width:100,}}>
                                        <DefaultPicker picker={brandPicker} placeholder="월 선택"/>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.contbox}>
                                <Text style={styles.contitle}>어디서 구매하셨나요? <Text style={styles.seltext}> (선택1)</Text></Text>
                                <View>
                                    {data_1.map((element,key)=>(
                                        <TouchableOpacity 
                                            key={key}
                                            onPress={() => setData_1(data_1.map(data=>{
                                                if(data.id === element.id){
                                                    return {...data,state:true}
                                                }else{
                                                    return {...data,state:false}
                                                }
                                            }))}
                                            style={{flex:1,height:40,backgroundColor: element.state === false ? '#F8F8F8' : '#447DD1' ,paddingLeft:20,justifyContent:'center',borderBottomColor:'#eee',borderBottomWidth:1,}}>
                                            <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',color: element.state === false ? '#222' : '#fff'}}>{element.title}</Text>
                                        </TouchableOpacity>
                                    ))}
                                    {/* <TouchableOpacity 
                                    onPress={() => setStorechoice({...storechoice, outletSelect: !storechoice.outletSelect})}
                                    style={{flex:1,height:40,backgroundColor: storechoice.outletSelect === false ? '#F8F8F8' : '#447DD1' ,paddingLeft:20,justifyContent:'center',borderBottomColor:'#eee',borderBottomWidth:1,}}>
                                        <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',color: storechoice.outletSelect === false ? '#222' : '#fff'}}>아울렛</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{flex:1,height:40,backgroundColor:'#F8F8F8',paddingLeft:20,justifyContent:'center',borderBottomColor:'#eee',borderBottomWidth:1,}}>
                                        <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',}}>편집샵</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{flex:1,height:40,backgroundColor:'#F8F8F8',paddingLeft:20,justifyContent:'center',borderBottomColor:'#eee',borderBottomWidth:1,}}>
                                        <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',}}>인터넷(병행수입, 직구)</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{flex:1,height:40,backgroundColor:'#F8F8F8',paddingLeft:20,justifyContent:'center'}}>
                                        <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',}}>중고거래</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{flex:1,height:40,backgroundColor:'#F8F8F8',paddingLeft:20,justifyContent:'center',}}>
                                        <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',}}>모릅니다</Text>
                                    </TouchableOpacity> */}
                                </View>
                            </View>
                            <View style={styles.contbox}>
                                <Text style={styles.contitle}>구성품이 있나요? <Text style={styles.seltext}> (다중 선택 가능)</Text></Text>
                                <View>
                                    <TouchableOpacity 
                                    onPress={() => setPakage({...pakage, case: !pakage.case})}
                                    style={{flex:1,height:40,backgroundColor: pakage.case === false ? '#F8F8F8' : '#447DD1' ,paddingLeft:20,justifyContent:'center',borderBottomColor:'#eee',borderBottomWidth:1,}}>
                                        <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',color: pakage.case === false ? '#222' : '#fff'}}>케이스</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                    onPress={() => setPakage({...pakage, guarantee: !pakage.guarantee})}
                                    style={{flex:1,height:40,backgroundColor: pakage.guarantee === false ? '#F8F8F8' : '#447DD1' ,paddingLeft:20,justifyContent:'center',borderBottomColor:'#eee',borderBottomWidth:1,}}>
                                        <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',color: pakage.guarantee === false ? '#222' : '#fff'}}>정품보증서</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                    onPress={() => setPakage({...pakage, tag: !pakage.tag})}
                                    style={{flex:1,height:40,backgroundColor: pakage.tag === false ? '#F8F8F8' : '#447DD1' ,paddingLeft:20,justifyContent:'center',borderBottomColor:'#eee',borderBottomWidth:1,}}>
                                        <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',color: pakage.tag === false ? '#222' : '#fff'}}>택</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                    onPress={() => setPakage({...pakage, receipt: !pakage.receipt})}
                                    style={{flex:1,height:40,backgroundColor: pakage.receipt === false ? '#F8F8F8' : '#447DD1' ,paddingLeft:20,justifyContent:'center',borderBottomColor:'#eee',borderBottomWidth:1,}}>
                                        <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',color: pakage.receipt === false ? '#222' : '#fff'}}>영수증</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                    onPress={() => setPakage({...pakage, etc: !pakage.etc})}
                                    style={{flex:1,height:40,backgroundColor: pakage.etc === false ? '#F8F8F8' : '#447DD1' ,paddingLeft:20,justifyContent:'center'}}>
                                        <Text style={{fontSize:14,fontFamily:'NotoSansKR-Medium',color: pakage.etc === false ? '#222' : '#fff'}}>기타</Text>
                                    </TouchableOpacity>
                                    { pakage.etc && (
                                        <View style={{flexDirection:'row',flex:1,alignItems:'center',paddingTop:10,}}>
                                        <Icon name="md-return-down-forward-sharp" size={20} color="#c9c9c9"/>
                                        <TextInput
                                            style={{borderColor:'#eee',borderWidth:1,borderRadius:8,height:35,padding:0,paddingLeft:10,flexGrow:1,marginLeft:10,}}
                                            placeholder="구성품 입력"
                                            placeholderTextColor="#c9c9c9"
                                        />
                                    </View>
                                    )}
                                </View>
                            </View>
                            <View style={styles.contbox}>
                              <Text style={styles.contitle}>기타문의</Text>
                              <TextInput 
                              style={[styles.inputstyle, {height:'auto',textAlignVertical:'top',paddingVertical:10,}]}
                              placeholder="문의사항을 남겨주세요"
                              placeholderTextColor="#C9C9C9"
                              numberOfLines={10}
                              multiline={true}
                              />
                            </View>
                            <View style={styles.contbox}>
                              <Text style={styles.contitle}>감정 신청 비용<Text style={styles.contsubtitle}> (다중 선택 가능)</Text></Text>
                              <DefaultPicker 
                              placeholder="결제 방법 선택"
                              picker={paymentPicker}
                              />
                              <View style={[styles.graybox, {marginTop:10,}]}>
                                <Text style={styles.grayboxtext}>※ 감정 비용이 “가격 상담”일 경우, 전화로 상담 진행합니다.</Text>
                                <Text style={styles.grayboxtext}>※ 신청 완료하시면 결제가 진행됩니다.</Text>
                            </View>
                            </View>
                            <TouchableOpacity 
                            style={{
                                backgroundColor:'#447DD1',
                                borderRadius:8,
                                height:58,
                                width:'100%',
                                justifyContent:'center',
                                alignItems:'center',
                            }}>
                                <Text style={{
                                    fontSize:16,
                                    fontFamily:'NotoSansKR-Medium',
                                    color:'#fff'
                                }}>신청완료</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    contbox:{
        paddingBottom:20,
    },
    contitle:{
        fontSize:14,
        fontFamily:'NotoSansKR-Medium',
        lineHeight:20,
        paddingBottom:10,
    },
    contsubtitle: {
        fontSize:12,
        fontFamily:'NotoSansKR-Regular',
        lineHeight:16,
        color:'#999',
    },
    inputstyle: {
        fontSize:13,
        borderWidth:1,
        borderColor:'#eee',
        borderRadius:8,
        height:35,
        paddingLeft:10,
        paddingVertical:0,
        marginBottom:5,
        color:'#222'
    },
    graybox: {
        backgroundColor: '#EBEBEB',
        borderRadius: 9,
        padding:10,
    },
    grayboxtext:{
        fontSize:13,
        fontFamily:'NotoSansKR-Medium',
        lineHeight:20,
    },

});

export default AppraiseWrite;