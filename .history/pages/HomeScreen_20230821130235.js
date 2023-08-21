import React, { useEffect, useState } from 'react'
import { View, TextInput, Button , Text, StyleSheet, ScrollView, Modal, Pressable} from 'react-native'
import ChatListItem from '../components/ChatListItem'
import HomeSearchComponent from '../components/HomeSearchComponent'
import ChatInputComponent from '../components/ChatInputComponent'
import ChatRequest from '../components/ChatRequest'
import FAB from '../components/FAB'
import ChatComponent from '../components/ChatComponent'

export const HomeScreen = ({navigation}) => {
    const [isModalVisible, setIsModalVisble] = useState(false);

    return (
        <View style={styles.container}>
           <Modal transparent={true} visible={isModalVisible}>
             <ChatRequest onPress={()=>setIsModalVisble(false)}/>
           </Modal>
           <ScrollView scrollEnabled={true}>
            <ChatListItem navigation={navigation}/>
            <ChatListItem navigation={navigation}/>
            <ChatListItem navigation={navigation}/>
          
          
          </ScrollView>

          <Pressable onPress={()=>setIsModalVisble(true)}>
          <FAB/>
          </Pressable>
           <ChatComponent />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#26394D',
        
    }

})
