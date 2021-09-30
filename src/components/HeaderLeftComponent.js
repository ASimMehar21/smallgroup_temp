import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import {back} from '../assets';
import theme from '../theme';
import {Button} from 'react-native-elements';
import {Fonts} from '../utils/Fonts';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
const HeaderLeftComponent = ({navigation}) => {
  return (
    <View style={{right: responsiveScreenWidth(2.4)}}>
      <TouchableWithoutFeedback
        activeOpacity={0}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image source={back} resizeMode={'contain'} style={styles.drawerIcon} />
        {/* <Text style={styles.txt}>Back</Text> */}
      </TouchableWithoutFeedback>
    </View>
  );
};

export default HeaderLeftComponent;

const styles = StyleSheet.create({
  drawerIcon: {
    height: 48,
    width: 112,

    // tintColor: theme.colors.lightGray,
  },
  txt: {
    fontFamily: Fonts.DMRegular,
    fontSize: 16,
    fontWeight: '400',
    color: theme.colors.txtcolor,
  },
});
