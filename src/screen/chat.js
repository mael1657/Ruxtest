 import React from 'react';
import {View,Text,SafeAreaView,Image,TouchableOpacity} from 'react-native';

import styles from '../style/style';
import Header, {ChatHeader} from '../components/header';
import ChatList from '../components/ChatList';

const ChatScreen = ({navigation}) => {
    return(
    <SafeAreaView style={{flex:1,backgroundColor: '#fff',}}>
        <ChatHeader title="채팅"/>
        <View style={{flex:1,paddingHorizontal: 20,}}>
          <ChatList/>
        </View>
    </SafeAreaView>
    )
}

export default ChatScreen
