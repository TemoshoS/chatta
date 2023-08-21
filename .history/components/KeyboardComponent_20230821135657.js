import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EmojiKeyboard from 'rn-emoji-keyboard'

export default function KeyboardComponent() {
  return (
    <View style={styles.container}>
        <EmojiKeyboard
          onEmoji
        />
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        maxHeight: '40%'
    }
})