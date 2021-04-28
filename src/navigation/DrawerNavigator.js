import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import TabNavigator, {BottomTabNavigator} from './TabNavigator';
import StackNavigation, {PrdStack, ReviewStack} from './StackNavigator';

import Icon from 'react-native-vector-icons/Ionicons';


import Backbutton from '../components/backbutton';

import CustomDrawer from '../components/customdrawer';
import Category from '../screen/category';
import FavoriteList from '../screen/favoritelist';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const DrawerNavigator = ({navigation}) => {
    return (
        <Drawer.Navigator 
        drawerContent={props => <CustomDrawerContent {...props}/>}
        drawerStyle={{width:'80%'}}
        screenOptions={{
            swipeEnabled:false,
        }}
        >
            <Drawer.Screen name="Home" component={BottomTabNavigator}/>
        </Drawer.Navigator>
    );
};

function CustomDrawerContent(props) {
    return(
        <View style={{flex:1,}}>
            <CustomDrawer {...props}/>
        </View>
    );
};



export default DrawerNavigator;
