import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'

export default function ChatInputComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <View style={styles.emoji}/>
        <TextInput placeholder={'Type a message'} style={styles.textInput}/>
        <View style={styles.camera}/>
        <View style={styles.clip}/>

      </View>
      <View style={styles.micContainer}>
        <View style={styles.mic}/>
        
        
        </View> 
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        justifyContent: 'center',
        flexDirection: 'row'
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
        height: 21,
        width: 21,
        backgroundColor: '#4F4F4F',
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
        height: 21,
        width:21,
        backgroundColor:'#4F4F4F',
        

    }
})