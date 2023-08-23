import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,  useRef, useState} from 'react'
import { Camera } from 'expo-camera'


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
      ref
       >

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