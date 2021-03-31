import React, {Component,useState} from 'react';
import {View, Text, Image} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import styles from '../style/style';

export default class SellerSlide extends React.Component {

    constructor(props){
                    super(props);
                    this.state = {
                      activeIndex:0,
                      SellerItems: [
                {
                    id: 1,
                    image: require('../images/slide_seller01.png'),
                },
                {
                    id:  2,
                    image: require('../images/slide_seller01.png'),
                },
            ]
        }
    };

    _renderItem = ({item, index}) => {
        return(
            <View style={styles.wrapper} showsPagination={false} autoplay={true}>
                  <View style={styles.slide}>
                        <Image
                        key={index}
                        source={item.image}
                        resizeMode={'contain'}
                        style={{width:'100%',height:'100%'}}
                        />
                  </View>
            </View>
        );
    };

    render () {
        return(
        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
            <Carousel
                loop={true}
                layout={"default"}
                ref={ref => this.carousel = ref}
                data={this.state.SellerItems}
                renderItem={this._renderItem}
                sliderWidth={350}
                itemWidth={350}
            />
        </View>
        );
    };

};
