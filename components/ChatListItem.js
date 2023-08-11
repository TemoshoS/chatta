import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default function ChatListItem({navigation}) {
    
        return (
            <View style={styles.container}>
                <View style={styles.img} />
                <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate('ChatRoom')} >
                <View style={styles.rightContent}>
                    <View style={styles.topText}>
                        <Text style={styles.contactName}>Temosho</Text>
                        <Text style={styles.time}>14:30</Text>

                    </View>
                    <View style={styles.bottomText}>
                        <Text style={styles.msg}
                        >Hey, I was thinking we could go out for drinks this weekend</Text>
                        <View style={styles.counterContainer}>
                            <Text style={styles.counter}>3</Text>
                        </View>

                    </View>

                </View>

                </TouchableOpacity>
               
            </View>
        )
    
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        padding: 10,
        flexDirection: 'row'

    },
    img: {
        height: 48,
        width: 48,
        borderRadius: 24,
        backgroundColor: '#FFFF'

    },
    touchable:{
        flex: 1

    },
    rightContent: {
        flex: 1,
        paddingVertical: 5,
        marginLeft: 10,
        justifyContent: 'space-evenly'


    },
    topText: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    contactName: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#E6E6E6'

    },
    time: {
        fontSize: 12,
        color: '#FFF'

    },
    bottomText: {
        flexDirection: 'row',
        justifyContent: 'center'

    },
    msg: {
        color: '#CACACA',
        fontSize: 13,
        flex: 1

    },
    counterContainer: {
        height: 16,
        width: 16,
        borderRadius: 8,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10

    },
    counter: {
        color: '#26394D',
        fontSize: 12

    }


})