import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {EmojiKeyboard} from 'rn-emoji-keyboard'

const KeyboardComponent = () => {
    const captureEmoji =(ev)=>{
        console.log(ev);
    }
  return (
    <View style={styles.container}>
      <EmojiKeyboard 
      onEmojiSelected={captureEmoji}
      styles={{
        conta
      }}
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