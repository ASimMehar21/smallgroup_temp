/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
import {next} from '../assets';
import theme from '../theme';
import {Fonts} from '../utils/Fonts';

const HeaderRight = ({onPress, image, style}) => {
  return (
    <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={onPress}>
      <Image source={image} style={style} />
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontFamily: Fonts.GoogleSansBold,
    color: theme.colors.primaryDark,
  },
});
export default HeaderRight;
