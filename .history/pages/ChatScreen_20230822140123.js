import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ChatComponent from '../components/ChatComponent'
import ChatInputComponent from '../components/ChatInputComponent'
import KeyboardComponent from '../components/KeyboardComponent'

const ChatScreen = () => {
  const [showEmoGifBoard, setshowEmoGifBoard] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <ChatComponent/>
      <View style={styles.inputs}>
        <ChatInputComponent showEmoGifBoard={(bln)=>setshowEmoGifBoard(bln)} showBoard/>
      </View>
      </View>
      
      <KeyboardComponent showBoard={showEmoGifBoard}/>

    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: '#26394D',
    flex: 1,
    overflow: 'hidden',
   
    
  },
  content:{
    flex: 1,
    paddingBottom: 60

  },
  inputs: {
    position: 'absolute',
    bottom : 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    
  }
})

export default ChatScreen