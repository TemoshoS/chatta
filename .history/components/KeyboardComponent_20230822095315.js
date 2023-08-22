import { StyleSheet, Text, View } from 'react-native'
import React,{useState, useEffect} from 'react'
import {EmojiKeyboard} from 'rn-emoji-keyboard'

const KeyboardComponent = () => {
    const [emoji, setEmoji] = useState('')
    const [showEmoBoard, setShowEmoBoard] = useState(false)

    const captureEmoji =(ev)=>{
        console.log(ev);
        setEmoji(ev.emoji);
    }

    useEffect(()=>{
      fetch

    },[])

  return (
    <View style={styles.container}>
      <EmojiKeyboard 
      onEmojiSelected={captureEmoji}
      enableSearchBar
      styles={{
        container:{
            borderRadius: 0
        }
      }}
      />
      <View style={styles.keyboardToggle}>

      </View>
    </View>
  )
}

export default KeyboardComponent

const styles = StyleSheet.create({
    container:{
        flex: 1,
        maxHeight: '40%'
    },
    keyboardToggle:{
        height: 50,
        flexDirection: 'row',
        width: '100%'
    }
})