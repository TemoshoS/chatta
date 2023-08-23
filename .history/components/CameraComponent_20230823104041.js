import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,  useRef, useState} from 'react'
import { Camera } from 'expo-camera'
import { TouchableOpacity } from 'react-native';
import { EvilIcons} from '@expo/vector-icons'


const CameraComponent = () => {
  const camera = useRef();
  const [hasPermmisions, setHasPermissions] = useState(false);

  useEffect(()=>{
    (async()=>{
      const {status} = await Camera.getCameraPermissionsAsync();
      setHasPermissions(status === 'granted')
    })

  },[])
  
  return (
    <View style={styles.container}>
      <Camera 
      type='back'
      ref={camera}
      style={styles.camera}
       >
        <TouchableOpacity>
         <EvilIcons name='close' size={24} color='rgb(230, 230, 230)' />
        </TouchableOpacity>

      </Camera>
      
    </View>
  )
}

export default CameraComponent

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  camera:{
    flex: 1,
    width: '100%'
  },
  closeIcon:{
    padding: 10,
  }
})