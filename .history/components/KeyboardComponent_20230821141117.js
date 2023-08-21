import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EmojiPicker from 'rn-emoji-keyboard'

const KeyboardComponent = () => {
    const captureEmoji =(ev)=>{
        console.log(ev);
    }
  return (
    <View style={styles.container}>
      <EmojiPicker 
      onEmojiSelected={captureEmoji}
      />
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