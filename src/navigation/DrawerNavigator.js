import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import TabNavigator, {BottomTabNavigator} from './TabNavigator';
import StackNavigation, {PrdStack, ReviewStack} from './StackNavigator';


import PrdList from '../screen/PrdList';
import Tracking from '../screen/tracking';

const Drawer = createDrawerNavigator();




const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={BottomTabNavigator}/>
            <Drawer.Screen name="상품목록" component={PrdStack}/>
            <Drawer.Screen name="운송장 조회" component={Tracking}/>
            <Drawer.Screen name="리뷰" component={ReviewStack}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
