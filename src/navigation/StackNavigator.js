import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator,CardStyleInterpolators,TransitionPresets} from '@react-navigation/stack';

import DrawerNavigator from '../navigation/DrawerNavigator';

import MainScreen from '../screen/main';
import EstimateScreen from '../screen/estimate';
import ChatScreen from '../screen/chat';
import MypageScreen from '../screen/mypage';
import PrdList from '../screen/PrdList';
import PrdDetail from '../screen/PrdDetail';
import Bidding from '../screen/bidding';
import BidFinish from '../screen/BidFinish';
import EstDetail from '../screen/EstDetail';
import EstCheck from '../screen/EstCheck';
import PurchaseOrder from '../screen/PurchaseOrder';
import ChatDetail from '../screen/ChatDetail';

const Stack = createStackNavigator();

export const MainStack = () => {
    return(
        <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
            <Stack.Screen name="Main" component={MainScreen}/>
        </Stack.Navigator>
    );
};

export const EstimateStack = () => {
    return(
        <Stack.Navigator
            screenOptions={{
              headerShown: false,
              gestureEnabled: true,
              gestureDirection:"horizontal",
              ...TransitionPresets.SlideFromRightIOS,
              // cardStyleInterpolator:
              // CardStyleInterpolators.forHorizontalIOS
            }}
          >
            <Stack.Screen name="Estimate" component={EstimateScreen}/>
            <Stack.Screen name="EstDetail" component={EstDetail}/>
            <Stack.Screen name="EstCheck" component={EstCheck}/>
        </Stack.Navigator>
    );
};

export const ChatStack = () => {
    return(
        <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection:"horizontal",
          ...TransitionPresets.SlideFromRightIOS,
          // cardStyleInterpolator:
          // CardStyleInterpolators.forHorizontalIOS
        }}
        >
            <Stack.Screen name="Chat" component={ChatScreen}/>
            <Stack.Screen name="ChatDetail" component={ChatDetail}/>
            <Stack.Screen name="PurchaseOrder" component={PurchaseOrder}/>
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

export const PrdStack = ({navigation}) => {
    return(
      <Stack.Navigator
        initialRouteName="PrdList"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection:"horizontal",
          ...TransitionPresets.SlideFromRightIOS,
          // cardStyleInterpolator:
          // CardStyleInterpolators.forHorizontalIOS
        }}
      >
        <Stack.Screen name="PrdList" component={PrdList}/>
        <Stack.Screen name="PrdDetail" component={PrdDetail} options={{title:'상품 정보'}}/>
        <Stack.Screen name="Bidding" component={Bidding}/>
        <Stack.Screen name="BidFinish" component={BidFinish}/>
        <Stack.Screen name="PurchaseOrder" component={PurchaseOrder}/>
      </Stack.Navigator>
    );
};

const StackNavigation = () => {
  return(
    <View>
      <Text></Text>
    </View>
  );
};

export default StackNavigation;
