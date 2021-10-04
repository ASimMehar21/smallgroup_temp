/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
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
import AsyncStorage from '@react-native-community/async-storage';
import theme from '../../theme';
import {Fonts} from '../../utils/Fonts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Snackbar from 'react-native-snackbar';
import styles from './styles';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {cross, fb, gb} from '../../assets';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
const Signin = props => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const {height} = Dimensions.get('window');
  const navigation = props.navigation;
  return (
    <View
      style={{flex: 1, backgroundColor: 'white'}}
      // contentContainerStyle={{flexGrow: 1, flex: 1}}
    >
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={{marginTop: responsiveScreenHeight(13)}}></View>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.headerText}>Hey there!</Text>
          <Text style={styles.smallheaderText}>Sign in to continue</Text>
        </View>
        <View style={{marginTop: responsiveScreenHeight(5)}}></View>
        <View style={styles.maincontainer}>
          <View style={styles.textInputStyle}>
            <FloatingLabelInput
              label={'Your Email'}
              value={email}
              onChangeText={value => setEmail(value)}
              containerStyles={{padding: 5}}
              labelStyles={styles.labelStyle}
              inputStyles={{width: '100%'}}
            />
          </View>
          {email !== '' ? (
            <TouchableOpacity onPress={() => setEmail('')}>
              <Image
                source={cross}
                style={{height: 24, width: 24, marginRight: 10}}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={{marginTop: responsiveScreenHeight(1)}}></View>
        <View style={styles.maincontainer}>
          <View style={styles.textInputStyle}>
            <FloatingLabelInput
              label={'Password'}
              value={password}
              secureTextEntry
              onChangeText={value => setPassword(value)}
              containerStyles={{
                padding: 5,
              }}
              labelStyles={styles.labelStyle}
              inputStyles={{width: '100%'}}
            />
          </View>
          {password !== '' ? (
            <TouchableOpacity onPress={() => setPassword('')}>
              <Image
                source={cross}
                style={{height: 24, width: 24, marginRight: 10}}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <View>
          <LinearGradient
            colors={['#6989FE', '#3C64F4']}
            style={styles.nextButtonStyle}>
            <TouchableOpacity
              activeOpacity={0.7}
              disabled={loading}
              // style={styles.nextButtonStyle}
              onPress={() => alert('Sign in')}>
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
                  Sign in
                </Text>
              )}
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={styles.dividercontainer}>
          <View style={styles.divider}></View>
          <View>
            <Text style={styles.dividertxt}>OR</Text>
          </View>
          <View style={styles.divider}></View>
        </View>
        <View
          style={{
            width: '100%',
            marginTop: 5,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: theme.colors.borderColor,
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: responsiveScreenWidth(65),
              padding: 15,
              justifyContent: 'space-between',
            }}>
            <Image
              source={gb}
              style={{
                width: 16,
                height: 16,
              }}
              resizeMode="contain"
            />
            <Text style={styles.dividertxt}>Log in with Google</Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            marginTop: 7,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: theme.colors.borderColor,
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: responsiveScreenWidth(65),
              padding: 12,
              justifyContent: 'space-between',
            }}>
            <Image
              source={fb}
              style={{
                width: 20.22,
                height: 24,
              }}
              resizeMode="contain"
            />
            <Text style={styles.dividertxt}>Log in with Apple</Text>
          </View>
        </View>
        <View
          style={{alignSelf: 'center', marginTop: responsiveScreenHeight(2)}}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                fontFamily: Fonts.DMBold,
                color: theme.colors.txtcolor,
                textAlign: 'center',
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center', marginTop: 5}}
            onPress={() => navigation.navigate('Signup')}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                fontFamily: Fonts.DMBold,
                color: theme.colors.labelColor,
              }}>
              Don’t have a account?{' '}
              <Text
                style={{
                  color: theme.colors.txtcolor,
                  fontSize: 14,
                  fontWeight: '700',
                  fontFamily: Fonts.DMBold,
                }}>
                Sign up
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: responsiveScreenHeight(20),
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              fontFamily: Fonts.DMBold,
              color: theme.colors.labelColor,

              textAlign: 'justify',
            }}>
            By continuing you agree with Our{' '}
            <Text
              style={{
                color: theme.colors.txtcolor,
                fontSize: 14,
                fontWeight: '700',
                fontFamily: Fonts.DMBold,
              }}>
              Legal Stuff
            </Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Signin;
