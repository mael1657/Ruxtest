import React from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';

import Header, {ChatDetailHeader} from '../components/header';

const ChatDetail = () => {
    return(
      <SafeAreaView style={{flex:1,backgroundColor: '#F5F5F5'}}>
        <ChatDetailHeader title="채팅"/>
          <ScrollView>

          </ScrollView>
      </SafeAreaView>
    );
;}

export default ChatDetail;
