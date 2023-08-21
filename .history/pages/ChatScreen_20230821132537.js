import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ChatComponent from '../components/ChatComponent'
import ChatInputComponent from '../components/ChatInputComponent'

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <ChatComponent/>
      <ChatInputComponent/>

    </View>
  )
}
const styles = StyleSheet.create({
  
})

export default ChatScreen