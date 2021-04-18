import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';

import DrawerNavigator from './src/navigation/DrawerNavigator';
import {BottomTabNavigator} from './src/navigation/TabNavigator';
import {
  setCustomText,
} from 'react-native-global-props';

const App = () => {
  return (
    <>
      <StatusBar hidden={false} />
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;

Text.defaultProps = Text.defaultProps || {}
Text.defaultProps.allowFontScaling = false