import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useStatus, useRef, useState} from 'react'
import { Camera } from 'expo-camera'


const CameraComponent = () => {
  const camera = useRef();
  const [hasPermmisions, setHasPermissions] = useState(false);

  useEffect(())
  return (
    <View style={styles.container}>
      
    </View>
  )
}

export default CameraComponent

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})