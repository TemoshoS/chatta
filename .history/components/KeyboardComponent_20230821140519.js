import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function KeyboardComponent() {
  return (
    <View style={styles.container}>
      <Text>KeyboardComponent</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        maxHeight: '40%'
    }
})