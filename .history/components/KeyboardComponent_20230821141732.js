import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {EmojiKeyboard} from 'rn-emoji-keyboard'

const KeyboardComponent = () => {
    const [emoji, setEmoji] = useState('')

    const captureEmoji =(ev)=>{
        console.log(ev);
        setEmoji(ev.)
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