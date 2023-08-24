import { View, Text, StyleSheet, Dimensions ,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import ChatComponent from '../components/ChatComponent'
import ChatInputComponent from '../components/ChatInputComponent'
import KeyboardComponent from '../components/KeyboardComponent'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import MediaPicker from '../components/MediaPicker'
import {Audio} from 'expo-av'

const ChatScreen = () => {
  const [showEmoGifBoard, setshowEmoGifBoard] = useState(false)
  const [msg, setMsg] = useState('')
  const [recording, setRecording] = useState(false)
  const [showMediaPicker, setShowMediaPicker] = useState(false)
  const handleEmoji =(emo)=>{
    console.log(emo.emoji);
    setMsg(msg =>{
      return msg += emo.emoji
    })

  }
  const sendMessage=()=>{

  }
  const recordAudio=()=>{
    Audio.requestPermissionsAsync()
    const rec = new Audio.Recording();
    rec.prepareToRecordAsync();
    setRecording(true)

  }
  useEffect(()=>{
    console.log(msg)
  },[msg])
  const handleGif =(url)=>{
    console.log(url);

  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <ChatComponent/>

      <MediaPicker isVisible={showMediaPicker}/>
    
      <View style={styles.inputs}>
        <ChatInputComponent 
        message={msg} 
        setMessage={(text)=>setMsg(text)} 
        showEmoGifBoard={(bln)=>setshowEmoGifBoard(bln)} 
        isBoardVisible={showEmoGifBoard}
        sendMessage={()=>sendMessage()}
        recordAudio={()=>recordAudio()}
        showMediaPicker={()=>setShowMediaPicker(!showMediaPicker)}
        recording={recording}
        />
      </View>
      </View>
      
      <KeyboardComponent
       isBoardVisible={showEmoGifBoard} 
       handleEmoji={(emo)=>handleEmoji(emo)}
       handleGif={(url)=>handleGif(url)}
       />

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