import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ChatComponent from '../components/ChatComponent'
import ChatInputComponent from '../components/ChatInputComponent'

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <ChatComponent/>
      <View style={}>
        <ChatInputComponent/>
      </View>
      

    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: '#26394D'
  }
})

export default ChatScreen