import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,  useRef, useState} from 'react'
import { Camera } from 'expo-camera'
import { TouchableOpacity } from 'react-native';
import { EvilIcons} from '@expo/vector-icons'


const CameraComponent = ({closeCam}) => {
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
        <TouchableOpacity onPress={()=> closeCam()}>
         <EvilIcons name='close' size={24} color='rgb(230, 230, 230)' style={styles.closeIcon}/>
        </TouchableOpacity>
        <View style={styles.bottom}>

          <TouchableOpacity></TouchableOpacity>
          <View style={styles.capture}>

          </View>

        </View>

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
    width: '100%',
    justifyContent: 'space-between',
  },
  closeIcon:{
    padding: 10,
  },
  bottom:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
  },
  capture:{
    borderColor: '#FFF',
    borderWidth: 3,
    height: 60,
    width: 60,
    borderRadius: 30,
  }
})