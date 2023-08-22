import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState, useEffect} from 'react'
import {EmojiKeyboard} from 'rn-emoji-keyboard'

const KeyboardComponent = () => {
    const [emoji, setEmoji] = useState('')
    const [showEmoBoard, setShowEmoBoard] = useState(false)
    const [gifs, setGifs] = useState([])

    const captureEmoji =(ev)=>{
        console.log(ev);
        setEmoji(ev.emoji);
    }

    useEffect(()=>{
      fetch('https://api.giphy.com/v1/gifs/search?q=eggs&api_key=6TWpiJzILZuqxHc5aPa7JWZ11YTGdNqx')
      .then(res => res.json())
      .then(res =>{
        console.log(res);
        setGifs(res.data)
      })

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
      <FlatList 
          data={gifs}
          renderItem={(item)=>(
            <View>
              <TouchableOpacity>
                <Image source={{uri: item.images.original.uri}} style={/>
              </TouchableOpacity>

              </View>
          )}
      
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