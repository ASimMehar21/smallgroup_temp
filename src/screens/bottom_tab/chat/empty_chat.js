/* eslint-disable prettier/prettier */
import React from 'react'
import {View,Text,Image,ScrollView} from 'react-native'
import theme from '../../../theme';
import {Fonts} from '../../../utils/Fonts';
import {lilg} from '../../../assets';
import styles from '../../Signin/styles';
import { LinearTextGradient } from "react-native-text-gradient";

 function EmptyChat({text}) {
    return (
        // <ScrollView>
        <View style={{flex:1,alignItems:'center',backgroundColor:'white',justifyContent:'center',alignSelf:'center'}}>
                    
            <View style={{width:273,height:120,alignItems:'center'}}> 
                <LinearTextGradient
                    style={[styles.headerText,{textAlign:'center'}]}
                    locations={[0, 1]}
                    colors={["#6989FE", "#3C64F4"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    >
                        <Text>
                           {text}
                        </Text>
                </LinearTextGradient>
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
        // </ScrollView>
    )
}

export default EmptyChat;