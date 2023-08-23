import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const MediaPicker = ({isVisible}) => {
    
  return (
    <>
    {
        isVisible &&       <View style={styles.mediaPickerContainer}>
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

    }
    </>

  )
}

export default MediaPicker

const styles = StyleSheet.create({})