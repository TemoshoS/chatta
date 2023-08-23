import { StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, Modal } from 'react-native'
import React,{useRef, useState} from 'react'
import {MaterialIcons,EvilIcons, FontAwesome, Ionicons} from '@expo/vector-icons'
import { Camera } from 'expo-camera';
import CameraComponent from './CameraComponent';

export default function ChatInputComponent({
    showEmoGifBoard, isBoardVisible, message, setMessage, sendMessage, recordAudio, showMediaPicker, recording}) {
    const inputRef = useRef();
    const [isCamVisible, setIsCamVisible] = useState(false);

    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(5);
    //const [isPaused, setIsPaused] = useState(false)

    const checkCameraPermissions = async()=>{
        try {
            let status
            status = (await Camera.getCameraPermissionsAsync()).status
            if(status !== 'granted') status = (await Camera.requestCameraPermissionsAsync()).status  
            if(status === 'granted') setIsCamVisible(true)
            
        } catch (error) {
            
        }
    }
  return (
    <View style={styles.container}>
        <Modal
        animationType='slide'
        visible={isCamVisible}
        >
            <CameraComponent closeCam={()=> setIsCamVisible(false)}/>
        
        </Modal>
      <View style={styles.leftView}>
       {
        !recording ? (
            <>
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

        <TouchableOpacity onPress={()=> showMediaPicker()}>
        <EvilIcons name='paperclip' size={24} style={styles.clip}/>
        </TouchableOpacity>
        </>
        ) : (
            <View style={styles.recordingCont}>
            <TouchableOpacity>
                <Ionicons name='pause' size={24} color='black' style={styles.pauseicon}/>
            </TouchableOpacity>
            <Text style={styles.text}>Recording...</Text>
            <View style={styles.recordingTime}>
                {hours && <Text style={styles.text}>{hours + ':'}</Text>}
                <Text style={styles.text}>{minutes + ':'}</Text>
                <Text style={styles.text}>{seconds}</Text>
            </View>
            <MaterialIcons name='delete' size={24} color='rgb(120, 100, 80)' style={styles.deleteIcon}/>
            </View>
        )
       }
      </View>
      <View style={styles.micContainer}>
        {
           recording || message ? (
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
        color:'#272727'
    },
    recordingCont:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    pauseicon:{
        marginRight: 10,
        marginLeft: 5,
    },
    recordingTime:{
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 5,
    },
    text: {
        color: '#4F4F4F',
    },
    deleteIcon:{
        marginLeft: 5,
        marginRight: 5
    }
})