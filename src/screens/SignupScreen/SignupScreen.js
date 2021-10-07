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
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
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
import {registerUser, Googlelogin} from '../../redux/actions/auth';
import {connect} from 'react-redux';
const SignupScreen = props => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const {height} = Dimensions.get('window');
  const [emailMessage, setemailMessage] = useState('');
  const [passwordMessage, setpasswordMessage] = useState('');
  const [confirmMessage, setconfirmMessage] = useState('');
  const [fNameMessage, setfNameMessage] = useState('');
  const [lNameMessage, setlNameMessage] = useState('');
  const navigation = props.navigation;
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '237114661060-g9vl5km5n8juo3u8e80tin1rtpchm8v3.apps.googleusercontent.com',
      offlineAccess: true,
      client_type: 3,
      // iosClientId:
      //   '664178336819-pfg0mvocbu3sml19e499di4145i0qmvv.apps.googleusercontent.com',
    });
  }, []);
  async function onGoogleSignupPress() {
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
        console.log(props.isSuccess);
        await props.Googlelogin(params);
        if (props.isSuccess) {
          setLoading(false);
          navigation.navigate('main');
          console.log('tokens', props.token);
          Snackbar.show({
            text: 'SignUp Succesfully',
            backgroundColor: theme.colors.primary,
            textColor: 'white',
          });
        } else {
          setLoading(false);
          // GoogleSignin.revokeAccess();
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
  async function onregister() {
    setconfirmMessage('');
    setemailMessage('');
    setfNameMessage('');
    setlNameMessage('');
    setconfirmMessage('');
    if (
      password !== '' &&
      confirmpassword !== '' &&
      fName !== '' &&
      lName !== '' &&
      email !== ''
    ) {
      const params = {
        firstName: fName,
        lastName: lName,
        email: email,
        password: password,
      };
      if (password === confirmpassword) {
        const re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailValid = re.test(email);

        if (emailValid) {
          await props.registerUser(params);
          if (props.isSuccess) {
            setLoading(false);
            navigation.navigate('main');
            Snackbar.show({
              text: props.message,
              backgroundColor: theme.colors.primary,
              textColor: theme.colors.secondary,
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
        }
      } else {
        setLoading(false);
        setconfirmMessage('Both passwords Must be match');
      }
    } else {
      setLoading(false);
      if (
        password === '' &&
        confirmpassword === '' &&
        fName === '' &&
        lName === ''
      ) {
        setconfirmMessage('Kindly enter confirm password');
        setemailMessage('Kindly enter email');
        setpasswordMessage('Kindly enter password');
        setfNameMessage('Kindly enter first name');
        setlNameMessage('Kindly enter last name');
      }

      if (email === '') {
        setemailMessage('Kindly enter email');
      }
      if (password === '') {
        setpasswordMessage('Kindly enter password');
      }
      if (lName == '') {
        setlNameMessage('Kindly enter last name');
      }
      if (fName) {
        setfNameMessage('Kindly enter first name');
      }
      if (confirmpassword === '') {
        setconfirmMessage('Kindly enter confirm password');
      }
      return false;
    }
  }
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
          <View style={{width: '48%'}}>
            <View
              style={[
                styles.nameField,
                {
                  borderColor:
                    fNameMessage !== '' ? 'tomato' : theme.colors.borderColor,
                },
              ]}>
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
            {fNameMessage !== '' && <Errors errors={fNameMessage} />}
          </View>
          <View style={{width: '48%'}}>
            <View
              style={[
                styles.nameField,
                {
                  borderColor:
                    lNameMessage !== '' ? 'tomato' : theme.colors.borderColor,
                },
              ]}>
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
            {lNameMessage !== '' && <Errors errors={lNameMessage} />}
          </View>
        </View>
        <View style={{marginTop: responsiveScreenHeight(1)}}></View>
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
              onChangeText={value => setEmail(value)}
              containerStyles={{padding: 5}}
              labelStyles={styles.labelStyle}
              inputStyles={{width: '100%'}}
            />
          </View>
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
        {passwordMessage !== '' && <Errors errors={passwordMessage} />}
        <View style={{marginTop: responsiveScreenHeight(1)}}></View>
        <View
          style={[
            styles.maincontainer,
            {
              borderColor:
                confirmMessage !== '' ? 'tomato' : theme.colors.borderColor,
            },
          ]}>
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
          {confirmMessage !== '' && <Errors errors={confirmMessage} />}
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
              onPress={() => {
                setLoading(true), onregister();
              }}
              // onPress={() => navigation.navigate('main')}
            >
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
        <TouchableOpacity
          onPress={onGoogleSignupPress}
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
            source={gb}
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
            source={fb}
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

// export default SignupScreen;
const mapStateToProps = state => {
  const {status, message, isLoading, errMsg, isSuccess, token} = state.auth;
  return {status, message, isLoading, errMsg, isSuccess, token};
};
export default connect(mapStateToProps, {registerUser, Googlelogin})(
  SignupScreen,
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
