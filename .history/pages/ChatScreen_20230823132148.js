import { View, Text, StyleSheet, Dimensions ,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import ChatComponent from '../components/ChatComponent'
import ChatInputComponent from '../components/ChatInputComponent'
import KeyboardComponent from '../components/KeyboardComponent'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'

const ChatScreen = () => {
  const [showEmoGifBoard, setshowEmoGifBoard] = useState(false)
  const [msg, setMsg] = useState('')
  const [showMediaPicker, setShowMediaPicker] = useState()
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
      {

      }
        <View style={styles.mediaPickerContainer}>
          <View style={styles.mediaPicker}>
            <View style={styles.iconContainer}>
              <TouchableOpacity>
                <MaterialIcons name='camera' size={30} color='#FFF' style={styles.icons} />
              </TouchableOpacity>
            </View>

            <View style={styles.iconContainer}>
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
  mediaPickerContainer:{
    height: 120,
    width: '100%',
    padding: 10,
    position: 'absolute',
    bottom: 60,

  },
  mediaPicker:{
    height: 100,
    width: Dimensions.get('window').width - 20,
    backgroundColor: '#FFF',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center'

  },
  iconContainer:{
    backgroundColor: '#1EA0E5',
    borderRadius: 24,
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20

  },
  icons:{

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