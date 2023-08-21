import { View, Text, Style } from 'react-native'
import React from 'react'
import ChatComponent from '../components/ChatComponent'
import ChatInputComponent from '../components/ChatInputComponent'

const ChatScreen = () => {
  return (
    <View style={Styles.container}>
      <ChatComponent/>
      <ChatInputComponent/>

    </View>
  )
}

export default ChatScreen