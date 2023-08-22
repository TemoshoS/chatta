import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState, useEffect} from 'react'
import {EmojiKeyboard} from 'rn-emoji-keyboard'
import { EvilIcons, Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';

const KeyboardComponent = ({showBoard}) => {
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
      fetch('https://api.giphy.com/v1/gifs/search?q=messi&api_key=6TWpiJzILZuqxHc5aPa7JWZ11YTGdNqx')
      .then(res => res.json())
      .then(res =>{
        console.log(res);
        setGifs(res.data)
      })

    },[])

  return (
    <>
    {
       showBoard && ()
    }
    
    </>
    
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
    },
    input:{
      height: 46,
      backgroundColor: 'rgb(50, 50, 50, 0.1)',
      width: '100%',
      padding: 10,
      color: 'rgb(230,230,230)'
    },
    closeIcon: {
      position: 'absolute',
      right: 10,
      top: 10
    }
})