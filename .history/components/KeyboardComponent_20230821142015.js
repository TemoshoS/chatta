import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import {EmojiKeyboard} from 'rn-emoji-keyboard'

const KeyboardComponent = () => {
    const [emoji, setEmoji] = useState('')

    const captureEmoji =(ev)=>{
        console.log(ev);
        setEmoji(ev.emoji);
    }
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
      <View style={styles.key}>

      </View>
    </View>
  )
}

export default KeyboardComponent

const styles = StyleSheet.create({
    container:{
        flex: 1,
        maxHeight: '40%'
    }
})