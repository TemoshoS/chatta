import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MediaPicker = () => {
  return (
    <View style={styles.mediaPickerContainer}>
              <View style={styles.mediaPicker}>
                <View style={styles.iconContainer}>
                  <TouchableOpacity>
                    <MaterialIcons name='camera' size={30} color='#FFF' style={styles.icons} />
                  </TouchableOpacity>
                </View>

                <View style={styles.iconContainer}>
                  <TouchableOpacity>
                    <FontAwesome name='microphone' size={30} color='#FFF' style={styles.icons} />
                  </TouchableOpacity>
                </View>

              </View>
            </View>
  )
}

export default MediaPicker

const styles = StyleSheet.create({})