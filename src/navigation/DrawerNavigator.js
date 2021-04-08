import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import TabNavigator, {BottomTabNavigator} from './TabNavigator';
import StackNavigation, {PrdStack} from './StackNavigator';


// import {DrawerCategory} from '../screen/DrawerCategory';
import MainScreen from '../screen/main';
import PrdList from '../screen/PrdList';

const Drawer = createDrawerNavigator();




const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={BottomTabNavigator}/>
            <Drawer.Screen name="상품목록" component={PrdStack}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
