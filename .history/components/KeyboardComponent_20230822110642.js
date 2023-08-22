import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState, useEffect} from 'react'
import {EmojiKeyboard} from 'rn-emoji-keyboard'

const KeyboardComponent = () => {
    const [emoji, setEmoji] = useState('')
    const [showEmoBoard, setShowEmoBoard] = useState(false)
    const [gifs, setGifs] = useState([])
    const [show]

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
      {/* <EmojiKeyboard 
      onEmojiSelected={captureEmoji}
      enableSearchBar
      styles={{
        container:{
            borderRadius: 0
        }
      }}
      /> */}
      <FlatList 
          data={gifs}
          numColumns={3}
          renderItem={(item)=>(
            <View style={styles.gifContainer}>
              <TouchableOpacity onPress={()=> setSelectedGif(item.item.images.original.url)}>
                <Image source={{uri: item.item.images.original.url}} style={styles.gif}/>
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
    },
    gifContainer:{
      height: 110,
      padding:  5,
      width: '33%',

    },
    gif:{
      height: 100,
      width: (Dimensions.get('window').width -30)/3,
    }
})