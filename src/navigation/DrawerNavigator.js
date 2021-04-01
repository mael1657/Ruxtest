import React from 'react';
import {View, Text, Dimensions} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import TabNavigator, {BottomTabNavigator} from './TabNavigator';

const Drawer = createDrawerNavigator();





function DrawerNavigator() {
    return(
        <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="left"
        drawerType="front"
        >
            <Drawer.Screen name="Home" component={BottomTabNavigator}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
