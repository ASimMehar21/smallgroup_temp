/* eslint-disable prettier/prettier */
import React from 'react'
import {View,Text} from 'react-native'
import EmptyChat from './empty_chat'

export default function Chat() {
    return (
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <EmptyChat/>
            {/* <Text>chat</Text> */}
            
        </View>
    )
}
