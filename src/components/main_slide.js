import React, {Component,useState} from 'react';
import {View, Image, TouchableOpacity, Dimensions} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import styles from '../style/style';

export const Width = Dimensions.get('window').width - 65;

export default class MainSlide extends React.Component {

    constructor(props){
                    super(props);
                    this.state = {
                      activeIndex:0,
                      MainItems: [
                {
                    id: 1,
                    image: require('../images/main_slide01.png'),
                },
                {
                    id:  2,
                    image: require('../images/main_slide02.png'),
                },
            ]
        }
    };

    _renderItem = ({item, index}) => {
        return(
            <View style={{marginBottom:15,height:254,}}>
                  <TouchableOpacity 
                  style={{
                    flex:1,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  }}>
                        <Image
                        key={index}
                        source={item.image}
                        style={{resizeMode:'cover',width:'100%',height:'100%'}}
                        />
                  </TouchableOpacity>
            </View>
        );
    };

    render () {
        return(
        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
            <Carousel
                loop={true}
                autoplay={false}
                layout={"default"}
                ref={ref => this.carousel = ref}
                data={this.state.MainItems}
                renderItem={this._renderItem}
                sliderWidth={Width}
                itemWidth={Width}
            />
        </View>
        );
    };

};
