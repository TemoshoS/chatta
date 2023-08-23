import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import ChatComponent from '../components/ChatComponent'
import ChatInputComponent from '../components/ChatInputComponent'
import KeyboardComponent from '../components/KeyboardComponent'
import { TouchableOpacity } from 'react-native'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'

const ChatScreen = () => {
  const [showEmoGifBoard, setshowEmoGifBoard] = useState(false)
  const [msg, setMsg] = useState('')
  const handleEmoji =(emo)=>{
    console.log(emo.emoji);
    setMsg(msg =>{
      return msg += emo.emoji
    })

  }
  const sendMessage=()=>{

  }
  const recordAudio=()=>{

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
        <View>
          <View>
            <View style>
              <TouchableOpacity>
                <MaterialIcons name='camera' size={30} color='#FFF' style={styles.icons}/>
              </TouchableOpacity>

              <TouchableOpacity>
                <FontAwesome name='microphone' size={30} color='#FFF' style={styles.icons}/>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      <View style={styles.inputs}>
        <ChatInputComponent 
        message={msg} 
        setMessage={(text)=>setMsg(text)} 
        showEmoGifBoard={(bln)=>setshowEmoGifBoard(bln)} 
        isBoardVisible={showEmoGifBoard}
        sendMessage={()=>sendMessage()}
        recordAudio={()=>recordAudio()}
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