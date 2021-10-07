/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {drawer} from '../assets';
import theme from '../theme';
import {Fonts} from '../utils/Fonts';

const HeaderCenterComponent = ({name}) => {
  return (
    <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center',width:150,height:48}}>
      <Text style={styles.textStyle}>{name}</Text>
    </View>
  );
};
export default HeaderCenterComponent;
export const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    // backgroundColor:'red',
    // alignSelf:'center',
    fontFamily: Fonts.DMBold,
    color: theme.colors.textHeader,
  },
});
