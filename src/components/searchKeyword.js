import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export const Sch_history = () => {
    const schItems= [
        {
            id:1,
            title:'명품백',
        },
        {
            id:2,
            title:'가방',
        },
        {
            id:3,
            title:'지갑',
        },
        {
            id:4,
            title:'오버핏 후드티',
        },
    ]
    return(
        <>
            {schItems.map((schItem) => ( <HistoryItem key={schItem.id} schItem={schItem}/>))}
        </>
    );
};

function HistoryItem({schItem}){
    return(
        <View style={{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            borderWidth:1,
            borderColor:'#eee',
            borderRadius:7,
            paddingHorizontal:8,
            paddingVertical:5,
            marginRight:5,
            marginBottom:5,
            }}>
            <TouchableOpacity>
                <Text style={{fontFamily:'NotoSansKR-Medium',fontSize:13,lineHeight:20,paddingRight:5,color:'#707070'}}># {schItem.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="close" size={14} color="#707070"/>
            </TouchableOpacity>
        </View>
    );
}; 


export const Key_alert = () => {
    const alertItems= [
        {
            id:1,
            title:'명품백',
        },
        {
            id:2,
            title:'시계',
        },
        {
            id:3,
            title:'트위드',
        },
        {
            id:4,
            title:'쥬얼리',
        },
        {
            id:5,
            title:'오버핏 후드티',
        },
        {
            id:6,
            title:'반지갑',
        },
        {
            id:7,
            title:'단화',
        },
        {
            id:8,
            title:'장화',
        },
        {
            id:9,
            title:'스커트',
        },
        {
            id:10,
            title:'언더웨어',
        },
    ]
    return(
        <>
            {alertItems.map((alertItem) => ( <AlertItem key={alertItem.id} alertItem={alertItem}/>))}
        </>
    );
};

function AlertItem({alertItem}){
    return(
        <View style={{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#F8F8F8',
            borderRadius:7,
            paddingHorizontal:8,
            paddingVertical:5,
            marginRight:5,
            marginBottom:5,
            }}>
            <TouchableOpacity>
                <Text style={{fontFamily:'NotoSansKR-Medium',fontSize:13,lineHeight:20,paddingRight:5,color:'#707070'}}># {alertItem.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="close" size={14} color="#707070"/>
            </TouchableOpacity>
        </View>
    );
}; 