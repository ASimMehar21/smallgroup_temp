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
import styles from '../Signin/styles';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {cross, fb, gb} from '../../assets';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
const SignupScreen = props => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const {height} = Dimensions.get('window');
  const navigation = props.navigation;
  return (
    <View
      style={{flex: 1, backgroundColor: 'white'}}
      // contentContainerStyle={{flexGrow: 1, flex: 1}}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={{justifyContent: 'center'}}
        keyboardShouldPersistTaps="handled">
        <View style={{marginTop: responsiveScreenHeight(10)}}></View>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.headerText}>Let’s get started</Text>
          <Text style={styles.smallheaderText}>Create a new account</Text>
        </View>
        <View style={{marginTop: responsiveScreenHeight(5)}}></View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.nameField}>
            <View style={styles.nametext}>
              <FloatingLabelInput
                label={'First Name'}
                value={fName}
                onChangeText={value => setfName(value)}
                containerStyles={{padding: 5}}
                labelStyles={styles.labelStyle}
                inputStyles={{width: '100%'}}
              />
            </View>
          </View>
          <View style={[styles.nameField]}>
            <View style={styles.textInputStyle}>
              <FloatingLabelInput
                label={'Last Name'}
                value={lName}
                onChangeText={value => setlName(value)}
                containerStyles={{padding: 5}}
                labelStyles={styles.labelStyle}
                inputStyles={{width: '100%'}}
              />
            </View>
          </View>
        </View>
        <View style={{marginTop: responsiveScreenHeight(1)}}></View>
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
        </View>
        <View style={{marginTop: responsiveScreenHeight(1)}}></View>
        <View style={styles.maincontainer}>
          <View style={styles.textInputStyle}>
            <FloatingLabelInput
              label={'Confirm Password'}
              secureTextEntry={true}
              value={confirmpassword}
              onChangeText={value => setconfirmPassword(value)}
              containerStyles={{padding: 5}}
              labelStyles={styles.labelStyle}
              inputStyles={{width: '100%'}}
            />
          </View>
        </View>

        <View>
          <LinearGradient
            colors={
              email !== '' &&
              password !== '' &&
              confirmpassword !== '' &&
              lName !== '' &&
              fName !== ''
                ? ['#6989FE', '#3C64F4']
                : ['#6989FE', '#3C64F4']
            }
            locations={
              email !== '' &&
              password !== '' &&
              confirmpassword !== '' &&
              lName !== '' &&
              fName !== ''
                ? [0, 1]
                : [1, 1]
            }
            style={[
              styles.nextButtonStyle,
              {
                opacity:
                  email !== '' &&
                  password !== '' &&
                  confirmpassword !== '' &&
                  lName !== '' &&
                  fName !== ''
                    ? 1
                    : 0.4,
              },
            ]}>
            <TouchableOpacity
              activeOpacity={0.7}
              disabled={loading}
              onPress={() => navigation.navigate('main')}>
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
                  Sign up
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
            <Text style={styles.dividertxt}>Sign up with Google</Text>
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
            <Text style={styles.dividertxt}>Sign up with Apple</Text>
          </View>
        </View>
        <View
          style={{alignSelf: 'center', marginTop: responsiveScreenHeight(1)}}>
          <TouchableOpacity
            style={{alignItems: 'center', marginTop: 5}}
            onPress={() => navigation.navigate('Signin')}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                fontFamily: Fonts.DMBold,
                color: theme.colors.labelColor,
              }}>
              Already have an account?{' '}
              <Text
                style={{
                  color: theme.colors.txtcolor,
                  fontSize: 14,
                  fontWeight: '700',
                  fontFamily: Fonts.DMBold,
                }}>
                Sign in
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: responsiveScreenHeight(11),
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

export default SignupScreen;
