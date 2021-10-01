import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {Header} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import theme from '../../theme';
import {Fonts} from '../../utils/Fonts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Snackbar from 'react-native-snackbar';
import styles from './styles';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {cross, check} from '../../assets';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import HeaderLeftComponent from '../../components/HeaderLeftComponent';
const createGroup = props => {
  const [createGroup, setcreateGroup] = useState(false);
  const [joinGroup, setjoinGroup] = useState(false);
  const {height} = Dimensions.get('window');
  const [code, setcode] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = props.navigation;
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header
        backgroundColor="white"
        containerStyle={{borderBottomWidth: 0}}
        leftComponent={<HeaderLeftComponent navigation={navigation} />}
        // rightComponent={<HeaderRight onPress={navigation} />}
      />
      <ScrollView
        style={{
          width: '90%',
          alignSelf: 'center',
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={{marginTop: responsiveScreenHeight(10)}}></View>

        <View style={{width: '100%'}}>
          <Text
            style={[
              styles.headerText,
              {
                // width: responsiveScreenWidth(50),
                textAlign: 'center',
                alignSelf: 'center',
              },
            ]}>
            Create a Group
          </Text>
          <Text
            style={[
              styles.smallheaderText,
              {
                width: responsiveScreenWidth(63),
                alignSelf: 'center',
                textAlign: 'center',
              },
            ]}>
            It’s where good things happen
          </Text>
        </View>
        <View style={{marginTop: responsiveScreenHeight(8)}}></View>
        <View style={styles.maincontainer}>
          <View style={styles.textInputStyle}>
            <FloatingLabelInput
              label={'New Group Name'}
              value={code}
              onChangeText={value => setcode(value)}
              containerStyles={{padding: 5}}
              labelStyles={styles.labelStyle}
              inputStyles={{width: '100%'}}
            />
          </View>
          {code !== '' ? (
            <TouchableOpacity onPress={() => setcode('')}>
              <Image
                source={cross}
                style={{height: 24, width: 24, marginRight: 10}}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <Text
          style={{
            fontFamily: Fonts.DMRegular,
            fontSize: 14,
            fontWeight: '400',
            color: theme.colors.labelColor,
            marginTop: 5,
          }}>
          This is a 9-character code like “AB1CD34HG”
        </Text>

        <View
          style={{
            // borderWidth: 1,
            marginTop: responsiveScreenHeight(5),
            width: '100%',
            // height: 224,
            borderRadius: 8,
            backgroundColor: '#dbe3fd',
          }}>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text
              style={[styles.mediumheaderText, {color: theme.colors.txtcolor}]}>
              Start with a 3 week free trial
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontFamily: Fonts.DMRegular,
                fontSize: 16,
                fontWeight: '400',
                color: theme.colors.labelColor,
                textAlign: 'left',
              }}>
              {`To ensure we can continue to provide great tools for you, each new group will cover a tiny cost.`}
            </Text>
            <LinearGradient
              colors={
                code !== '' ? ['#6989FE', '#3C64F4'] : ['#6989FE', '#3C64F4']
              }
              locations={code !== '' ? [0, 1] : [1, 1]}
              style={[
                styles.nextButtonStyle,
                {
                  opacity: code !== '' ? 1 : 0.4,
                  marginTop: responsiveHeight(8),
                  bottom: 20,
                },
              ]}>
              <TouchableOpacity
                activeOpacity={0.7}
                disabled={code === '' ? true : false}
                onPress={() => navigation.navigate('Invite')}>
                {loading ? (
                  <ActivityIndicator animating color={'white'} size={25} />
                ) : (
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: Fonts.DMMedium,
                      color: 'white',
                      textAlign: 'center',
                      fontWeight: '500',
                    }}>
                    Subscribe for $9.99 / year
                  </Text>
                )}
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        <Text
          style={{
            fontFamily: Fonts.DMBold,
            fontSize: 14,
            fontWeight: '400',
            color: theme.colors.txtcolor,
            marginTop: responsiveScreenHeight(3),
            alignSelf: 'center',
          }}>
          Redeem Code
        </Text>
      </ScrollView>
    </View>
  );
};
export default createGroup;
