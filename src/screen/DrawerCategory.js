import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {
    DrawerContentScrollView,
    DrawerItem,
  } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const DrawerCategory = ({props}) => {
    return(
      <View style={{flex:1,}}>
        <DrawerContentScrollView {...props}>
            <View>
                <TouchableOpacity>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
      </View>
    );
}
