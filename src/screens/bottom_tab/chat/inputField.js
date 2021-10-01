/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Image,
    FlatList,
    ImageBackground,
    ActivityIndicator,
    ScrollView} from 'react-native'
import theme from '../../../theme';
import {Fonts} from '../../../utils/Fonts';
import {
    button,
    verctor
    } from '../../../assets';
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import styles from '../../Signin/styles';
  import LinearGradient from 'react-native-linear-gradient';


 function InputField() {
    return (
        <View style={{
            borderTopWidth:0.3,
            borderTopColor:'#E1E3E6',
            position:'absolute',
            bottom:0,
            alignSelf:'flex-end',
            width:'100%',
            height:56,
            backgroundColor: 'rgba(255, 255, 255, 0.93)'
             }}>
            {/* <View style={{marginTop: responsiveScreenHeight(1.5)}}></View> */}
            <View style={{
                flexDirection:'row'
            }}>
                <TouchableOpacity style={{
                    marginTop:18,
                    marginLeft:11,
                    marginBottom:19
                }}>
                    <Image
                        source={verctor}
                        style={{width:18,height:19}}
                    />
                </TouchableOpacity>
                <View style={{
                    marginLeft:11,
                    marginTop:8,
                    marginBottom:12,
                    width:315,
                    height:40,
                    borderWidth:0.5,
                    borderColor:'rgba(225, 227, 230, 1)',
                    borderRadius:8,
                    alignItems:'center'
                }}>
                    <TextInput
                        style={[styles.labelStyle,{marginLeft:16,color: theme.colors.labelColor,height:50}]}
                    />
                </View>
                <TouchableOpacity>
                    <Image
                        source={button}
                        style={{width:40,height:40,margin:8}}
                    />
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default InputField;