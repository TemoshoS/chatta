import { StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, Modal } from 'react-native'
import React,{useRef, useState} from 'react'
import {MaterialIcons,EvilIcons, FontAwesome} from '@expo/vector-icons'
import { Camera } from 'expo-camera';
import CameraComponent from './CameraComponent';

export default function ChatInputComponent({
    showEmoGifBoard, isBoardVisible, message, setMessage, sendMessage, recordAudio}) {
    const inputRef = useRef();
    const [isCamVisible, setCamVisible] = useState(false);

    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(5);
    //const [isPaused, setIsPaused] = useState(false)

    const checkCameraPermissions = async()=>{
        try {
            let status
            status = (await Camera.getCameraPermissionsAsync()).status
            console.log(status);
            if(status !== 'granted')
            
        } catch (error) {
            
        }
    }
  return (
    <View style={styles.container}>
        <Modal
        animationType='slide'
        visible={isCamVisible}
        >
            <CameraComponent closeCam={()=> setCamVisible(false)}/>
        
        </Modal>
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
        <TouchableOpacity onPress={()=>checkCameraPermissions()}>
            <MaterialIcons name='camera-alt' size={24} style={styles.camera}/>
        </TouchableOpacity>
        
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