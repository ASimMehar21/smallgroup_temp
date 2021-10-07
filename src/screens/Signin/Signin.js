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
import {cross, lfb, lgb} from '../../assets';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
//redux
import {connect} from 'react-redux';
import {loginUser, Googlelogin, logoOut} from '../../redux/actions/auth';
import {useIsFocused} from '@react-navigation/native';
const Signin = props => {
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const {height} = Dimensions.get('window');
  const [emailMessage, setemailMessage] = useState('');
  const [passwordMessage, setpasswordMessage] = useState('');
  const navigation = props.navigation;
  useEffect(async () => {
    await props.logoOut();
    GoogleSignin.configure({
      webClientId:
        '237114661060-g9vl5km5n8juo3u8e80tin1rtpchm8v3.apps.googleusercontent.com',
      offlineAccess: true,
      client_type: 3,
      // iosClientId:
      //   '664178336819-pfg0mvocbu3sml19e499di4145i0qmvv.apps.googleusercontent.com',
    });
  }, [isFocused]);
  async function onGoogleLoginPress() {
    try {
      await GoogleSignin.hasPlayServices();
      const googlePromise = await GoogleSignin.signIn();
      const userInfo = (await GoogleSignin.getCurrentUser().then(googlePromise))
        .user;
      if (userInfo) {
        const params = {
          google_UID: userInfo.id,
          email: userInfo.email,
          firstName: userInfo.givenName,
          lastName: userInfo.familyName,
          image: userInfo.photo,
        };
        console.log(userInfo);
        await props.Googlelogin(params);
        if (props.isSuccess) {
          setLoading(false);
          navigation.navigate('Root');
          console.log('tokens', props.token);
          Snackbar.show({
            text: JSON.stringify(props.message),
            backgroundColor: theme.colors.primary,
            textColor: 'white',
          });
        } else {
          setLoading(false);
          // await GoogleSignin.revokeAccess();
          Snackbar.show({
            text: JSON.stringify(props.message),
            backgroundColor: '#F14336',
            textColor: 'white',
          });
        }
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
        alert(error);
      }
    }
  }
  async function onLogin() {
    setemailMessage('');
    setpasswordMessage('');
    try {
      if (email !== '' && password !== '') {
        const params = {
          email: email,
          password: password,
        };
        const re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailValid = re.test(email);

        if (emailValid) {
          await props.loginUser(params);
          setemailMessage('');
          setpasswordMessage('');
          if (props.isSuccess) {
            setLoading(false);
            navigation.navigate('Root');
            console.log('tokens', props.token);
            Snackbar.show({
              text: 'Sign in succesfully',
              backgroundColor: theme.colors.primary,
              textColor: 'white',
            });
          } else {
            setLoading(false);
            Snackbar.show({
              text: JSON.stringify(props.message),
              backgroundColor: '#F14336',
              textColor: 'white',
            });
          }
        } else {
          setLoading(false);
          setemailMessage('Kindly enter correct email');
          return false;
        }
      } else {
        setLoading(false);
        if (email === '' && password === '') {
          setemailMessage('Kindly enter email');
          setpasswordMessage('Kindly enter password');
        }

        if (email === '') {
          setemailMessage('Kindly enter email');
        }
        if (password === '') {
          setpasswordMessage('Kindly enter password');
        }
        return false;
      }
    } catch (err) {
      setLoading(false);

      Snackbar.show({
        text: err.message,
        backgroundColor: '#F14336',
        textColor: 'white',
      });
      return false;
    }
  }
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
        <View
          style={[
            styles.maincontainer,
            {
              borderColor:
                emailMessage !== '' ? 'tomato' : theme.colors.borderColor,
            },
          ]}>
          <View style={styles.textInputStyle}>
            <FloatingLabelInput
              label={'Your Email'}
              value={email}
              onChangeText={value => setEmail(value.trim())}
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
        {emailMessage !== '' && <Errors errors={emailMessage} />}
        <View style={{marginTop: responsiveScreenHeight(1)}}></View>
        <View
          style={[
            styles.maincontainer,
            {
              borderColor:
                passwordMessage !== '' ? 'tomato' : theme.colors.borderColor,
            },
          ]}>
          <View style={styles.textInputStyle}>
            <FloatingLabelInput
              label={'Password'}
              value={password}
              autoCapitalize="none"
              secureTextEntry
              onChangeText={value => setPassword(value.trim())}
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
        {passwordMessage !== '' && <Errors errors={passwordMessage} />}
        <View>
          <LinearGradient
            colors={['#6989FE', '#3C64F4']}
            style={styles.nextButtonStyle}>
            <TouchableOpacity
              activeOpacity={0.7}
              disabled={loading}
              // style={styles.nextButtonStyle}
              onPress={() => {
                setLoading(true), onLogin();
              }}>
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
        <TouchableOpacity
          onPress={onGoogleLoginPress}
          style={{
            width: '100%',
            marginTop: 5,
            // borderWidth: 1,
            // borderRadius: 8,
            // borderColor: theme.colors.borderColor,
          }}>
          {/* <View
            style={{
              flexDirection: 'row',
              width: '50%',
              padding: 15,
              justifyContent: 'space-between',
            }}> */}
          <Image
            source={lgb}
            style={{
              width: '100%',
              height: 50,
            }}
            resizeMode="stretch"
          />
          {/* <Text style={styles.dividertxt}>Log in with Google</Text>
          </View> */}
        </TouchableOpacity>

        <View
          style={{
            width: '100%',
            marginTop: 7,
            // borderWidth: 1,
            // borderRadius: 8,
            // borderColor: theme.colors.borderColor,
          }}>
          {/* <View
            style={{
              flexDirection: 'row',
              width: responsiveScreenWidth(65),
              padding: 12,
              justifyContent: 'space-between',
            }}> */}
          <Image
            source={lfb}
            style={{
              width: '100%',
              height: 50,
            }}
            resizeMode="stretch"
          />
          {/* <Text style={styles.dividertxt}>Log in with Apple</Text>
          </View> */}
        </View>
        <View
          style={{alignSelf: 'center', marginTop: responsiveScreenHeight(1)}}>
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
            marginTop: responsiveScreenHeight(18),
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
const mapStateToProps = state => {
  const {status, message, isLoading, errMsg, isSuccess, token} = state.auth;
  return {status, message, isLoading, errMsg, isSuccess, token};
};
export default connect(mapStateToProps, {loginUser, Googlelogin, logoOut})(
  Signin,
);
export function Errors({errors}) {
  return (
    <Text
      style={{
        fontSize: 12,
        fontWeight: 'bold',
        width: '95%',
        alignSelf: 'center',
        marginTop: 5,
        color: 'red',
      }}>
      {errors}
    </Text>
  );
}
