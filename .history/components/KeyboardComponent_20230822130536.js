import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState, useEffect} from 'react'
import {EmojiKeyboard} from 'rn-emoji-keyboard'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';

const KeyboardComponent = () => {
    const [emoji, setEmoji] = useState('')
    const [showEmoBoard, setShowEmoBoard] = useState(false)
    const [gifs, setGifs] = useState([])
    const [showGifBoard, setShowGifBoard] = useState(true)
    const [showSearchInput, setShowSearchInput] = useState(false)

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
      {
        showEmoBoard &&
        (<EmojiKeyboard
          onEmojiSelected={captureEmoji}
          enableSearchBar
          styles={{
            container: {
              borderRadius: 0
            }
          }}
        />)}
      {
        showGifBoard && (
          <FlatList
            data={gifs}
            numColumns={3}
            renderItem={(item) => (
              <View style={styles.gifContainer}>
                <TouchableOpacity onPress={() => setSelectedGif(item.item.images.original.url)}>
                  <Image source={{ uri: item.item.images.original.url }} style={styles.gif} />
                </TouchableOpacity>

              </View>
            )}

          />
        )}

        {
          showSearchInput ? (
          <View style={styles.keyboardToggle}>
            <View style={styles.searchIcon}>
              <TouchableOpacity onPress={() => setShowSearchInput(false)}>
                <MaterialIcons name='search' size={24} color={'white'} style={[styles.icon]} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => { setShowEmoBoard(true), setShowGifBoard(false) }}>
              <MaterialIcons name="emoji-emotions" size={24} color="white" style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setShowEmoBoard(false), setShowGifBoard(true) }}>
              <MaterialIcons name='gif' size={24} color='white' style={styles.icon} />
            </TouchableOpacity>




          </View>
            
          ) : (
            <View style={styles.keyboardToggle}>
              <TextI

            </View>
          )
        }
      
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
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchIcon:{
      position: 'absolute',
      left: 5
    },
    icon:{
      margin: 10
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