import React from 'react';
import {View, Text, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import DrawerNavigator from './src/navigation/DrawerNavigator';
import {navigationRef} from './src/navigation/RootNavigation';


const App = () => {
  

  return (
    <>
      <StatusBar hidden={false} />
      <NavigationContainer ref={navigationRef}>
        <DrawerNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
