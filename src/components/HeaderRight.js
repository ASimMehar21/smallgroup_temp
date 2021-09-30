import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
import {next} from '../assets';
import theme from '../theme';
import {Fonts} from '../utils/Fonts';

const HeaderRight = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={next}
        style={{
          height: 48,
          width: 112,
          left: responsiveScreenWidth(2.4),
        }}
      />
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
