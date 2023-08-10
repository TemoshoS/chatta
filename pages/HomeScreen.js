import React, { useEffect, useState } from 'react'
import { View, TextInput, Button , Text, StyleSheet, ScrollView, Modal, Pressable} from 'react-native'
import ChatListItem from '../components/ChatListItem'
import HomeSearchComponent from '../components/HomeSearchComponent'
import ChatInputComponent from '../components/ChatInputComponent'
import ChatRequest from '../components/ChatRequest'
import FAB from '../components/FAB'
import ChatComponent from '../components/ChatComponent'

export const HomeScreen = () => {
    const [isModalVisible, setIsModalVisble] = useState(false);

    return (
        <View style={styles.container}>
          {/* <ScrollView scrollEnabled={true}>
            <ChatListItem/>
           <ChatInputComponent />
           <Modal transparent={true} visible={isModalVisible}>
             <ChatRequest onPress={()=>setIsModalVisble(false)}/>
           </Modal>
          
          </ScrollView>

          <Pressable onPress={()=>setIsModalVisble(true)}>
          <FAB/>
          </Pressable>*/}
          <ChatComponent />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#26394D',
        width: '100%'
    }

})
