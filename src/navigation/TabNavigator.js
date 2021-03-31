import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {
    MainStack,
    ChatStack,
    EstimateStack,
    MypageStack,
} from './StackNavigator';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const BottomTabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={MainStack} options={{tabBarLabel:'홈으로'}}/>
            <Tab.Screen name="Estimate" component={EstimateStack} options={{tabBarLabel:'내 견적'}}/>
            <Tab.Screen name="Chat" component={ChatStack} options={{tabBarLabel:'채팅'}}/>
            <Tab.Screen name="Mypage" component={MypageStack} options={{tabBarLabel:'마이페이지'}}/>
        </Tab.Navigator>
    );
};

const TabNavigator = () => {
    return(
        <Stack.TabNavigator screenOptions={{headerShown: false}}>

        </Stack.TabNavigator>
    );
};

export default TabNavigator;