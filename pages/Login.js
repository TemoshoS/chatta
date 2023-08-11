import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View>
      <Text>Login</Text>
      <Button title="Switch" onPress={()=>navigation.navigate('Register',{text: 'fromLogin',id:'6t6gf', time:'12:23:21'})}/>
    </View>
  )
}

const styles = StyleSheet.create({})