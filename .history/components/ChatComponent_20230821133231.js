import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'

export default function ChatComponent() {
    const userID = 'test1'
    const texts = [
        {
            text: 'Hi there', userID: userID
        },
        {
            text: 'why here', userID: '123456'
        },
        {
            text: 'why here', userID: '123456'
        },
        {
            text: 'why here', userID: '123456'
        },
        {
            text: 'why are we here', userID: userID
        },
        {
            text: 'what is with this darkness', userID: '123456'
        },
        {
            text: 'woah is me', userID: userID
        },
        {
            text: 'okay', userID: userID
        }
    ]
    const renderItem = ({item, index}) => {
        return(
            <View >
                <View style={[
                    styles.contentHolder,
                    item.userID === userID ? styles.rightContent : styles.leftContent,
                    texts[index-1]?.userID === item.userID ? {marginBottom: -5} : null
                    ]}>

               
                <View style={[
                    styles.textBox,
                    item.userID === userID ? styles.rightText : styles.leftText,
                    texts[index-1]?.userID === item.userID ? {borderRadius: 15} : null

                    ]}>
                    <Text style={styles.text}>{item.text}</Text>
                 </View>
                 <View style={styles.timeSent}>
                        <Text style={styles.whiteText}>1:39 PH</Text>
                        {

                            item.userID === userID && (<>
                                <Entypo name='dot-single' color='#FFF' size={16} />
                                <Text style={styles.whiteText}>Sent</Text>
                            </>)
                        }
                    


                 </View>
                </View>
            </View>
        )

    }
    return (
        <View style={styles.container}>
            <FlatList
                data={texts}
                renderItem = {renderItem}
                contentContainerStyle={{flexDirection: 'column-reverse'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        overflow: ''
       

    },
    contentHolder:{
        width: 280,
        marginVertical: 10
       

    },
    textBox:{
        padding: 10,
        width: 280,
        //margin: 10
    },
    rightContent:{
        alignSelf: 'flex-end'
        

    },
    leftContent:{

    },
    text:{
        color: '#EBEBEB',
        fontSize: 15

    },
    rightText:{
        borderRadius: 15,
        borderBottomRightRadius: 0,
        backgroundColor: '#3F5973',
        
    },
    leftText:{
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        backgroundColor: '#1EADE5'
    },
    timeSent:{
        flexDirection: 'row',
        alignSelf:'flex-end'

    },
    whiteText:{
        color: '#E4E4E4',
        fontSize: 12
    }
})