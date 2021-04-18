import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack';


import Header from '../components/header';
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
import Review, { ReviewWrite, ReviewComplete, ReviewList } from '../screen/review';
import ReviewDetail from '../screen/reviewdetail';
import FavoriteList from '../screen/favoritelist';
import DeliveryCheck from '../screen/deliverycheck';
import Setting from '../screen/setting';
import Useredit from '../screen/useredit';
import CustomerCenter from '../screen/customercenter';
import NotiSetting from '../screen/Notisetting';
import KeywordSet from '../screen/keywordset';

const Stack = createStackNavigator();

export const MainStack = () => {
    return(
        <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
            <Stack.Screen name="Main" component={MainScreen}/>
            <Stack.Screen name="PrdList" component={PrdList}/>
            <Stack.Screen name="PrdDetail" component={PrdDetail}/>
            <Stack.Screen name="Bidding" component={Bidding}/>
            <Stack.Screen name="BidFinish" component={BidFinish}/>
            <Stack.Screen name="PurchaseOrder" component={PurchaseOrder}/>
            <Stack.Screen name="Review" component={Review}/>
            <Stack.Screen name="ReviewWrite" component={ReviewWrite}/>
            <Stack.Screen name="ReviewComplete" component={ReviewComplete}/>
            <Stack.Screen name="ReviewList" component={ReviewList}/>
            <Stack.Screen name="ReviewDetail" component={ReviewDetail}/>
            <Stack.Screen name="head" component={Header}/>
        </Stack.Navigator>
    );
};

export const EstimateStack = () => {
    return(
        <Stack.Navigator
            screenOptions={{
              headerShown: false,}}
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
          headerShown: false,// CardStyleInterpolators.forHorizontalIOS
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
            <Stack.Screen name="FavoriteList" component={FavoriteList}/>
            <Stack.Screen name="PrdDetail" component={PrdDetail}/>
            <Stack.Screen name="DeliveryCheck" component={DeliveryCheck}/>
            <Stack.Screen name="Setting" component={Setting}/>
            <Stack.Screen name="Useredit" component={Useredit}/>
            <Stack.Screen name="CustomerCenter" component={CustomerCenter}/>
            <Stack.Screen name="NotiSetting" component={NotiSetting}/>
            <Stack.Screen name="KeywordSet" component={KeywordSet}/>
            <Stack.Screen name="Review" component={Review}/>
            <Stack.Screen name="ReviewWrite" component={ReviewWrite}/>
            <Stack.Screen name="ReviewComplete" component={ReviewComplete}/>
            <Stack.Screen name="ReviewList" component={ReviewList}/>
            <Stack.Screen name="ReviewDetail" component={ReviewDetail}/>
        </Stack.Navigator>
    );
};

export const PrdStack = ({navigation}) => {
    return(
      <Stack.Navigator
        initialRouteName="PrdList"
        screenOptions={{
          headerShown: false,}}
      >
        <Stack.Screen name="PrdList" component={PrdList}/>
        <Stack.Screen name="PrdDetail" component={PrdDetail}/>
        <Stack.Screen name="Bidding" component={Bidding}/>
        <Stack.Screen name="BidFinish" component={BidFinish}/>
        <Stack.Screen name="PurchaseOrder" component={PurchaseOrder}/>
      </Stack.Navigator>
    );
};

export const ReviewStack = () => {
  return(
    <Stack.Navigator
      initialRouteName="Review"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Review" component={Review}/>
      <Stack.Screen name="ReviewWrite" component={ReviewWrite}/>
      <Stack.Screen name="ReviewComplete" component={ReviewComplete}/>
      <Stack.Screen name="ReviewList" component={ReviewList}/>
      <Stack.Screen name="ReviewDetail" component={ReviewDetail}/>
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
