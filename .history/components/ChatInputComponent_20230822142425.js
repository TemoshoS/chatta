import { StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native'
import React from 'react'
import {MaterialIcons,EvilIcons, FontAwesome} from '@expo/vector-icons'

export default function ChatInputComponent({showEmoGifBoard, isBoardVisible}) {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        {
            isBoardVisible ? (
                      <TouchableOpacity onPress={() => showEmoGifBoard(false)}>
                          <MaterialIcons name='keyboard' size={24} style={styles.emoji} />
                      </TouchableOpacity>

            ) : (
                          <TouchableOpacity onPress={() => {showEmoGifBoard(true); Keyboard.dismiss()}}>
                              <MaterialIcons name='emoji-emotions' size={24} style={styles.emoji} />
                          </TouchableOpacity>
            )
        }
        
       
        <TextInput placeholder={'Type a message'} style={styles.textInput}/>
        <MaterialIcons name='camera-alt' size={24} style={styles.emoji}/>
        <EvilIcons name='paperclip' size={24} style={styles.emoji}/>

      </View>
      <View style={styles.micContainer}>
      <FontAwesome name='microphone' size={24} style={styles.mic}/>
        
        
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
        backgroundColor:'#4F4F4F',
        marginHorizontal: 10

    },
    clip:{
        height: 21,
        width:21,
        backgroundColor:'#4F4F4F'

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