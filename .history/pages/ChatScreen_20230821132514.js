import { View, Text, StyleSheet } from 'react-native'
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
const 

export default ChatScreen