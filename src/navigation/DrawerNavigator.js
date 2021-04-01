import React from 'react';
import {Dimensions} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import TabNavigator, {BottomTabNavigator} from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
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
