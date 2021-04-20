import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export const FtrBrand = () => {
    const brandItems=[
        {
            id:1,
            title:'샤넬'
        },
        {
            id:2,
            title:'발렌시아가'
        },
        {
            id:3,
            title:'지방시'
        },
        {
            id:4,
            title:'생로랑'
        },
        {
            id:5,
            title:'구찌'
        },
        {
            id:6,
            title:'샤넬'
        },
    ]
    return(
        <>
        {brandItems.map((brandItem) => ( <BrandItem key={brandItem.id} brandItem={brandItem}/> ))}
        <TouchableOpacity
            style={{
                backgroundColor:'#447DD1',
                borderRadius:8,
                paddingHorizontal:20,
                paddingVertical:10,
                marginRight:5,
                marginBottom:5,
            }}
        >
            <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:20,color:'#fff'}}>더보기</Text>
        </TouchableOpacity>
        </>
    );
};

function BrandItem({brandItem}){
    return(
        <TouchableOpacity 
            style={{
                borderWidth:1,
                borderColor:'#eee',
                borderRadius:8,
                paddingHorizontal:20,
                paddingVertical:10,
                marginRight:5,
                marginBottom:5,
            }}
            >
                <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:18}}>{brandItem.title}</Text>
            </TouchableOpacity>
    );
};

export const FtrCategory = () => {
    const categoryItems=[
        {
            id:1,
            title:'신발'
        },
        {
            id:2,
            title:'스포츠웨어'
        },
        {
            id:3,
            title:'원피스'
        },
        {
            id:4,
            title:'스커트'
        },
        {
            id:5,
            title:'코트'
        },
        {
            id:6,
            title:'패딩'
        },
        {
            id:7,
            title:'스웨터'
        },
    ]
    return(
        <>
        {categoryItems.map((categoryItem) => ( <CategoryItem key={categoryItem.id} categoryItem={categoryItem}/> ))}
        <TouchableOpacity
            style={{
                backgroundColor:'#447DD1',
                borderRadius:8,
                paddingHorizontal:20,
                paddingVertical:10,
                marginRight:5,
                marginBottom:5,
            }}
        >
            <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:20,color:'#fff'}}>더보기</Text>
        </TouchableOpacity>
        </>
    );
};

function CategoryItem({categoryItem}){
    return(
        <TouchableOpacity 
            style={{
                borderWidth:1,
                borderColor:'#eee',
                borderRadius:8,
                paddingHorizontal:20,
                paddingVertical:10,
                marginRight:5,
                marginBottom:5,
            }}
            >
                <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:18}}>{categoryItem.title}</Text>
            </TouchableOpacity>
    );
};

export const FtrType = () => {
    const typeItems=[
        {
            id:1,
            title:'즉시구매'
        },
        {
            id:2,
            title:'직거래'
        },
        {
            id:3,
            title:'택배거래'
        },
        {
            id:4,
            title:'중개거래'
        },
    ]
    return(
        <>
        {typeItems.map((typeItem) => ( <TypeItem key={typeItem.id} typeItem={typeItem}/> ))}
        </>
    );
};

function TypeItem({typeItem}){
    return(
        <TouchableOpacity 
            style={{
                borderWidth:1,
                borderColor:'#eee',
                borderRadius:8,
                paddingHorizontal:20,
                paddingVertical:10,
                marginRight:5,
                marginBottom:5,
            }}
            >
                <Text style={{fontSize:13,fontFamily:'NotoSansKR-Medium',lineHeight:18}}>{typeItem.title}</Text>
            </TouchableOpacity>
    );
};

export const FtrPrice = () => {
    const priceItems=[
        {
            id:1,
            price:'300,000원 미만'
        },
        {
            id:2,
            price:'300,000원 이상  500,000원 미만'
        },
        {
            id:3,
            price:'500,000원 이상  1,000,000원 미만'
        },
        {
            id:4,
            price:'1,000,000원 이상 1,500,000원 미만'
        },
        {
            id:5,
            price:'1,500,000원 이상'
        },
    ]
    return(
        <>
        {priceItems.map((priceItem) => ( <PriceItem key={priceItem.id} priceItem={priceItem}/> ))}

        </>
    );
};

function PriceItem({priceItem}){
    return(
        <TouchableOpacity 
        style={{
            borderWidth:1,
            borderColor:'#eee',
            borderRadius:8,
            marginBottom:5,
            paddingHorizontal:20,
            height:36,
            justifyContent:'center',
        }}>
            <Text style={{fontFamily:'NotoSansKR-Medium',fontSize:13,lineHeight:18,color:'#444444'}}>{priceItem.price}</Text>
        </TouchableOpacity>
    );
};