import React, {useState, useEffect} from 'react';
import {SafeAreaView,View,ScrollView,Text,Dimensions } from 'react-native';
import HTML from "react-native-render-html";

import API_CALL from '../ApiCall';
import {DetailHead} from '../components/header';

const TermsOfService = () => {
    const contentWidth = Dimensions.get('window').width;

    const [item, setItem] = useState('')
    useEffect(()=>{
        getTerms()
    },[])

    const getTerms = async () =>{
        const form = new FormData();
        form.append('method', 'proc_terms')

        const url = 'http://dmonster1566.cafe24.com'
        const params = '/json/proc_json.php'

        const api = await API_CALL(url+params, form, false)
        console.log(api)
        const { data : { method, result, message , count, item} } = api;

        setItem(item)

    }
    console.log('item', item)
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <DetailHead title="이용약관"/>
            <ScrollView>
                <View style={{padding:20,}}>
                    <HTML source={{html:item}}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default TermsOfService;