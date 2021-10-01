/* eslint-disable prettier/prettier */
import React from 'react'
import {View,Text,Image} from 'react-native'
import theme from '../../../theme';
import Fonts from '../../../utils/Fonts';
import {lilg} from '../../../assets';


 function EmptyChat() {
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
                    
            <View style={{width:273,height:120,top:247,alignItems:'center'}}> 
                <Text style={{
                    textAlign:'center',
                    alignSelf:'center',
                    fontSize:32,
                    fontWeight:'bold',
                    color:theme.colors.primary,
                    // fontFamily:Fonts.DMBold
                }} 
                >
                What a nice place to start a conversation!
                </Text>
                <View>
                    <Image
                        source={lilg}
                        style={{
                            width:312,
                            height:254,
                            alignSelf:'center'
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

export default EmptyChat;