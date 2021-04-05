import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
  } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

import PrdList from './PrdList';


const DrawerCategory = ({props}) => {
    return(
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    );
}

export default DrawerCategory;
