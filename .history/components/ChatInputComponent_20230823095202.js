import { StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native'
import React,{useRef} from 'react'
import {MaterialIcons,EvilIcons, FontAwesome} from '@expo/vector-icons'

export default function ChatInputComponent({
    showEmoGifBoard, isBoardVisible, message, setMessage, sendMessage, recordAudio}) {
    const inputRef = useRef();
  return (
    <View style={styles.container}>
        <Modal
      <View style={styles.leftView}>
        {
            isBoardVisible ? (
                      <TouchableOpacity onPress={() => {showEmoGifBoard(false); inputRef.current.focus()}}>
                          <MaterialIcons name='keyboard' size={24} style={styles.emoji} />
                      </TouchableOpacity>

            ) : (
                          <TouchableOpacity onPress={() => {showEmoGifBoard(true); Keyboard.dismiss()}}>
                              <MaterialIcons name='emoji-emotions' size={24} style={styles.emoji} />
                          </TouchableOpacity>
            )
        }
        
       
              <TextInput
                  ref={inputRef}
                  placeholder={'Type a message'}
                  style={styles.textInput}
                  onChangeText={(text)=>setMessage(text)}
                  value={message}
              />
        <MaterialIcons name='camera-alt' size={24} style={styles.camera}/>
        <EvilIcons name='paperclip' size={24} style={styles.clip}/>

      </View>
      <View style={styles.micContainer}>
        {
            message ? (
                <TouchableOpacity onPress={()=>sendMessage()}>
                    <MaterialIcons name='send' size={24} style={styles.mic}/>
                </TouchableOpacity>

            ) : (
                <TouchableOpacity onPress={()=>recordAudio}>
                    <FontAwesome name='microphone' size={24} style={styles.mic}/>
                </TouchableOpacity>

            )
        }
      
        
        
        </View> 
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%'
    },
    leftView:{
        height: 42,
        flex: 1,
        borderRadius:21,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center'

    },
    emoji:{
        //height: 21,
        width: 21,
        color: '#272727',
        marginRight: 10

    },
    textInput:{
        fonrSize: 15,
        color: '#4F4F4F',
        flex: 1

    },
    camera:{
        height: 21,
        width:21,
        marginLeft: 10,
        marginRight: 20

    },
    clip:{
        height: 21,
        width:21,
       

    },
    micContainer:{
        height: 42,
        width: 42,
        borderRadius: 21,
        backgroundColor: '#FFF',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems:'center'


    },
    mic:{
        justifyContent:'center',
        alignItems:'center'
        

    }
})