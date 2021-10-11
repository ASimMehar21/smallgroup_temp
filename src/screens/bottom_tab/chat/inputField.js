/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */

import React from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
// import {TextInput} from 'react-native-paper';
import theme from '../../../theme';
import {Fonts} from '../../../utils/Fonts';
import {button, verctor} from '../../../assets';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import styles from '../../Signin/styles';
import LinearGradient from 'react-native-linear-gradient';

function InputField({onChangeText, onPress, disabled, loading}) {
  return (
    <View
      style={{
        borderTopWidth: 0.3,
        borderTopColor: '#E1E3E6',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'flex-end',
        // justifyContent:'center',
        // alignItems:'center',
        width: '100%',
        height: 56,
        backgroundColor: 'rgba(255, 255, 255, 0.93)',
      }}>
      {/* <View style={{marginTop: responsiveScreenHeight(1.5)}}></View> */}
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            width: '10%',
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor:'red'
            // marginTop:18,
            // marginLeft:11,
            // marginBottom:19
          }}>
          <Image source={verctor} style={{width: 18, height: 19}} />
        </TouchableOpacity>
        <View
          style={{
            // marginLeft:11,
            // marginTop:8,
            alignSelf: 'center',
            // backgroundColor:'red',
            // marginBottom:12,
            width: '77%',
            // width:315,
            height: 40,
            borderWidth: 0.5,
            borderColor: 'rgba(225, 227, 230, 1)',
            borderRadius: 8,
            alignItems:'center'
          }}>
          <TextInput
            multiline
            onChangeText={onChangeText}
            placeholder={'Type your message'}
            placeholderTextColor={theme.colors.gray}
            style={[
              styles.labelStyle,
              {
                backgroundColor:'white',
                // margin: 10,
                width: '90%',
                color: theme.colors.labelColor,
                height: 'auto',
              },
            ]}
          />
        </View>
        <TouchableOpacity
          disabled={disabled}
          onPress={onPress}
          style={{
            width: '12%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {loading ? (
            <ActivityIndicator
              animating
              color={theme.colors.primary}
              size={25}
            />
          ) : (
            <Image source={button} style={{width: 40, height: 40, margin: 8}} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default InputField;
