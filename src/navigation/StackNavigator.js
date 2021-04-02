import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerNavigator from '../navigation/DrawerNavigator';

import MainScreen from '../screen/main';
import EstimateScreen from '../screen/estimate';
import ChatScreen from '../screen/chat';
import MypageScreen from '../screen/mypage';

const Stack = createStackNavigator();

export const MainStack = () => {
    return(
        <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
            <Stack.Screen name="Main" component={DrawerNavigator}/>
        </Stack.Navigator>
    );
};

export const EstimateStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Estimate" component={EstimateScreen}/>
        </Stack.Navigator>
    );
};

export const ChatStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Chat" component={ChatScreen}/>
        </Stack.Navigator>
    );
};

export const MypageStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Mypage" component={MypageScreen}/>
        </Stack.Navigator>
    );
};

const StackNavigation = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default StackNavigation;
