import React, { useEffect, useState } from 'react'
import { View, TextInput, Button , Text, StyleSheet, ScrollView} from 'react-native'
import ChatListItem from '../componets/ChatListItem'
import HomeSearchComponent from '../componets/HomeSearchComponent'
import ChatInputComponent from '../componets/ChatInputComponent'

export const HomeScreen = () => {

    return (
        <View style={styles.container}>
          <ScrollView scrollEnabled={true}>
            <ChatListItem/>
           <ChatInputComponent />
          </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#26394D'
    }

})
