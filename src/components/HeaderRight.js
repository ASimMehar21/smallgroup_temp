import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import {drawer} from '../assets';
import theme from '../theme';
import {Fonts} from '../utils/Fonts';

const HeaderRight = ({name, icon, type, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {type === 'icon' ? (
        <Image
          source={icon}
          style={{height: 20, width: 20, tintColor: theme.colors.gray}}
        />
      ) : (
        <Text style={styles.textStyle}>{name}</Text>
      )}
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
