import React from 'react'
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from 'react-native'

export default function RegisterScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.appName}>Chatta</Text>

            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.innerContainer}>
                    <View style={styles.inputContainer}>

                        <TextInput style={styles.textInput} placeholder='Email' />
                        <TextInput style={styles.textInput} placeholder='Name' />
                        <TextInput style={styles.textInput} placeholder='Password' />
                        <TextInput style={styles.textInput} placeholder='Confirm password' />
                    </View>
                    <View style={styles.actionContainer}>
                        <TouchableOpacity style={styles.actionButton}>
                            <Text style={styles.signUp}>Sign Up</Text>
                        </TouchableOpacity>
                        <View style={styles.registerdSec}>
                            <Text style={styles.registerdText}>Registered?</Text>
                            <Text style={styles.signInText}>Sign In</Text>
                        </View>
                    </View>


                </View>


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#26394D',
        paddingVertical: 80,
        alignItems: 'center'
    },
    topContainer: {
        flex: 1.2,
        justifyContent: 'center',
        alignItems: 'center'

    },
    appName: {
        fontSize: 54,
        fontWeight: 'bold',
        color: '#FFF',
        fontFamily: 'BerkshireSwash-Regular'
    },
    bottomContainer: {
        flex: 2.8,
        justifyContent: 'center',
        minHeight: 420
        
    },
    innerContainer:{
        padding: 20,
        height: 420,
        width: 320,
        backgroundColor: '#FFF',
        borderRadius: 25

    },
    inputContainer: {
        flex: 3,


    },
    textInput: {
        height: 46,
        borderRadius: 15,
        borderColor: '#1EA0E5',
        borderWidth: 1,
        padding: 10,
        marginVertical: 10

    },
    actionContainer: {
        flex: 1

    },
    actionButton: {

        backgroundColor: '#1EA0E5',
        fontWeight: 'bold',
        borderRadius: 15,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center'

    },
    signUp: {
        fontSize: 17,
        color: '#FFF',
        fontWeight: 'bold'

    },
    registerdSec: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    registerdText: {
        fontSize: 16

    },
    signInText: {
        color: '#1EA0E5',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 10

    }
})