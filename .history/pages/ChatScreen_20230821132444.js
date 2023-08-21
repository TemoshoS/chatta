import { View, Text } from 'react-native'
import React from 'react'
import ChatComponent from '../components/ChatComponent'
import ChatInputComponent from '../components/ChatInputComponent'

const ChatScreen = () => {
  return (
    <View style={Style}>
      <ChatComponent/>
      <ChatInputComponent/>

    </View>
  )
}

export default ChatScreen