/* eslint-disable prettier/prettier */
import React from 'react'
import {View,Text} from 'react-native'
import EmptyChat from './empty_chat'
import ChatList from './chatList'
import InputField from './inputField'
import styles from '../../Signin/styles';

export default function Chat() {
    return (
        <View style={{flex:1}}>
            <ChatList/>
            {/* <EmptyChat/> */}
            {/* <View style={styles.divider} /> */}
            <InputField/>
            
        </View>
    )
}
