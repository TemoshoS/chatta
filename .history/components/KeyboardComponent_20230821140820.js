import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EmojiPicker from 'rn-emoji-keyboard'

const KeyboardComponent = () => {
    const captureEmoji =(ev)=>{
        console.log(ev);
    }
  return (
    <View>
      <EmojiPicker 
      onEmojiSelected={handlePick}
      />
    </View>
  )
}

export default KeyboardComponent

const styles = StyleSheet.create({})