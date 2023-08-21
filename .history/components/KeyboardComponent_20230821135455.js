import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EmojiPicker from 'rn-emoji-keyboard'

export default function KeyboardComponent() {
  return (
    <View style={styles.container}>
        <EmojiPicker/>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        maxHeight: '40%'
    }
})