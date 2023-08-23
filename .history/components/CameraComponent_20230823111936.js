import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React,{useEffect,  useRef, useState} from 'react'
import { Camera } from 'expo-camera'
import { TouchableOpacity } from 'react-native';
import { EvilIcons, MaterialIcons} from '@expo/vector-icons'
import { Image } from 'react-native';


const CameraComponent = ({closeCam}) => {
  const camera = useRef();
  const [hasPermmisions, setHasPermissions] = useState(false);
  const [pic, setPic] = useState()

  useEffect(()=>{
    (async()=>{
      const {status} = await Camera.getCameraPermissionsAsync();
      setHasPermissions(status === 'granted')
    })

  },[])

  const takePicture = ()=>{
    const options ={
      base64: true,
      exif: false,
      quality: 1
    }

    const pic = camera.current.takePictureAsync(options);
    setPic(pic);
  }  

  const sendPic=()=>{

  }

  if(pic){
    return(
      <View style={styles.imgCont}>
        <Image 
        source={{uri: 'data:image/jpg;base64,' + pic.base64}}
        style={styles.image}
        />
        <View style={styles.sendCont}>
          <TouchableOpacity onPress={()=>sendPic()}>
          <MaterialIcons name='send' size={24} style={styles.sendIcon} />
          </TouchableOpacity>

        </View>

      </View>
    )
  }

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

          <TouchableOpacity onPress={()=>takePicture()}>
            <View style={styles.capture}>

          </View>
          </TouchableOpacity>
          

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
  },
  imgCont: {
    flex: 1,
    width: '100%',
  },
  image:{
    height: Dimensions.get('window').
  },
  sendCont:{
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#FFF',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendIcon:{
    color: '#272727',
  }
})