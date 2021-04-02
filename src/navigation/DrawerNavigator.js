import React from 'react';
import {View, Text, Dimensions} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import TabNavigator, {BottomTabNavigator} from './TabNavigator';


import {DrawerCategory} from '../screen/DrawerCategory';
import MainScreen from '../screen/main';

const Drawer = createDrawerNavigator();




const DrawerNavigator = () => {
    return(
        <Drawer.Navigator drawerContent={props => <DrawerCategory {...props} />}>
            <Drawer.Screen name="Home" component={MainScreen}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
