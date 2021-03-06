/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import theme from '../../../theme';
import {Fonts} from '../../../utils/Fonts';
import {cross} from '../../../assets';
import styles from './syles';
import styleg from '../../Signin/styles';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
//redux
import {connect} from 'react-redux';
function Chat(props, {edit}) {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [fNameMessage, setfNameMessage] = useState('');
  const [lNameMessage, setlNameMessage] = useState('');
  const [emailMessage, setemailMessage] = useState('');
  const [passwordMessage, setpasswordMessage] = useState('');
  const [numberMessage, setnumberMessage] = useState('');

  useEffect(() => {
    setEmail(props?.userData?.email);
    setLname(props?.userData?.lastName);
    setFname(props?.userData?.firstName);
    setPassword('*****');
    console.log(props?.userData);
    // setNumber(props?.userData?.phoneNumer);
  }, []);
  return (
    <KeyboardAwareScrollView>
      <ScrollView>
        <View style={styles.tabcontainer}>
          <Text style={[styles.tabtext, {color: theme.colors.textHeader}]}>
            Full name
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 12,
            }}>
            <View style={{width: '48%'}}>
              <View
                style={[
                  styleg.nameField,
                  {
                    height: 48,
                    borderColor:
                      fNameMessage !== '' ? 'tomato' : theme.colors.borderColor,
                  },
                ]}>
                {edit ? (
                  <View style={styleg.nametext}>
                    <FloatingLabelInput
                      label={'First Name'}
                      value={fname}
                      // isFocused={true}
                      onChangeText={value => {
                        setFname(value);
                      }}
                      containerStyles={{padding: 5}}
                      labelStyles={styles.labelStyles}
                      inputStyles={styles.inputStyles}
                    />
                  </View>
                ) : (
                  <View style={styleg.nametext}>
                    <FloatingLabelInput
                      label={'First Name'}
                      value={fname}
                      // isFocused={true}
                      onChangeText={value => {
                        setFname(value);
                      }}
                      containerStyles={{padding: 5}}
                      editable={false}
                      selectTextOnFocus={false}
                      labelStyles={styles.labelStyles}
                      inputStyles={styles.inputStyles}
                    />
                  </View>
                )}

                {fname !== '' ? (
                  <>
                    {edit ? (
                      <TouchableOpacity onPress={() => setFname('')}>
                        <Image
                          source={cross}
                          style={{height: 24, width: 24, marginRight: 10}}
                        />
                      </TouchableOpacity>
                    ) : null}
                  </>
                ) : null}
              </View>
              {fNameMessage !== '' && <Errors errors={fNameMessage} />}
            </View>
            <View style={{width: '48%'}}>
              <View
                style={[
                  styleg.nameField,
                  {
                    height: 48,
                    borderColor:
                      lNameMessage !== '' ? 'tomato' : theme.colors.borderColor,
                  },
                ]}>
                {edit ? (
                  <View style={styleg.nametext}>
                    <FloatingLabelInput
                      label={'Last Name'}
                      value={lname}
                      onChangeText={value => {
                        setLname(value);
                      }}
                      containerStyles={{padding: 5}}
                      labelStyles={styles.labelStyles}
                      inputStyles={styles.inputStyles}
                    />
                  </View>
                ) : (
                  <View style={styleg.nametext}>
                    <FloatingLabelInput
                      label={'Last Name'}
                      value={lname}
                      editable={false}
                      selectTextOnFocus={false}
                      onChangeText={value => {
                        setLname(value);
                      }}
                      containerStyles={{padding: 5}}
                      labelStyles={styles.labelStyles}
                      inputStyles={styles.inputStyles}
                    />
                  </View>
                )}

                {lname !== '' ? (
                  <>
                    {edit ? (
                      <TouchableOpacity onPress={() => setLname('')}>
                        <Image
                          source={cross}
                          style={{height: 24, width: 24, marginRight: 10}}
                        />
                      </TouchableOpacity>
                    ) : null}
                  </>
                ) : null}
              </View>
              {lNameMessage !== '' && <Errors errors={lNameMessage} />}
            </View>
          </View>

          <Text
            style={[
              styles.tabtext,
              {color: theme.colors.textHeader, marginTop: 12},
            ]}>
            Email address
          </Text>
          <View
            style={[
              styleg.nameField,
              {
                marginTop: 12,
                height: 48,
                borderColor:
                  emailMessage !== '' ? 'tomato' : theme.colors.borderColor,
              },
            ]}>
            {edit ? (
              <View style={[styleg.nametext, {}]}>
                <FloatingLabelInput
                  label={'Email Address'}
                  value={email}
                  onChangeText={value => {
                    setEmail(value);
                  }}
                  containerStyles={{padding: 5}}
                  // labelStyles={styles.labelStyle}
                  labelStyles={styles.labelStyles}
                  inputStyles={styles.inputStyles}
                />
              </View>
            ) : (
              <View style={[styleg.nametext, {}]}>
                <FloatingLabelInput
                  label={'Email Address'}
                  value={email}
                  onChangeText={value => {
                    setEmail(value);
                  }}
                  containerStyles={{padding: 5}}
                  editable={false}
                  selectTextOnFocus={false}
                  // labelStyles={styles.labelStyle}
                  labelStyles={styles.labelStyles}
                  inputStyles={styles.inputStyles}
                />
              </View>
            )}

            {email !== '' ? (
              <>
                {edit ? (
                  <TouchableOpacity onPress={() => setEmail('')}>
                    <Image
                      source={cross}
                      style={{height: 24, width: 24, marginRight: 10}}
                    />
                  </TouchableOpacity>
                ) : null}
              </>
            ) : null}
          </View>
          {emailMessage !== '' && <Errors errors={emailMessage} />}
          <Text
            style={[
              styles.tabtext,
              {color: theme.colors.textHeader, marginTop: 24},
            ]}>
            Password
          </Text>
          <View
            style={[
              styleg.nameField,
              {
                marginTop: 12,
                height: 48,
                borderColor:
                  passwordMessage !== '' ? 'tomato' : theme.colors.borderColor,
              },
            ]}>
            {edit ? (
              <View style={[styleg.nametext, {}]}>
                <FloatingLabelInput
                  label={'Password'}
                  value={password}
                  onChangeText={value => {
                    setPassword(value);
                  }}
                  isPassword={true}
                  containerStyles={{padding: 5}}
                  // labelStyles={styles.labelStyle}
                  labelStyles={styles.labelStyles}
                  inputStyles={styles.inputStyles}
                />
              </View>
            ) : (
              <View style={[styleg.nametext, {}]}>
                <FloatingLabelInput
                  label={'Password'}
                  value={password}
                  onChangeText={value => {
                    setPassword(value);
                  }}
                  isPassword={true}
                  containerStyles={{padding: 5}}
                  editable={false}
                  selectTextOnFocus={false}
                  // labelStyles={styles.labelStyle}
                  labelStyles={styles.labelStyles}
                  inputStyles={styles.inputStyles}
                />
              </View>
            )}

            {password !== '' ? (
              <>
                {edit ? (
                  <TouchableOpacity onPress={() => setPassword('')}>
                    <Image
                      source={cross}
                      style={{height: 24, width: 24, marginRight: 10}}
                    />
                  </TouchableOpacity>
                ) : null}
              </>
            ) : null}
          </View>
          {passwordMessage !== '' && <Errors errors={passwordMessage} />}

          <Text
            style={[
              styles.tabtext,
              {color: theme.colors.textHeader, marginTop: 24},
            ]}>
            Phone Number
          </Text>
          <View
            style={[
              styleg.nameField,
              {
                marginTop: 12,
                height: 48,
                marginBottom: 20,
                borderColor:
                  numberMessage !== '' ? 'tomato' : theme.colors.borderColor,
              },
            ]}>
            {edit ? (
              <View style={[styleg.nametext, {}]}>
                <FloatingLabelInput
                  label={'Phone Number'}
                  value={number}
                  onChangeText={value => {
                    setNumber(value);
                  }}
                  containerStyles={{padding: 5}}
                  keyboardType={'phone-pad'}
                  labelStyles={styles.labelStyles}
                  inputStyles={styles.inputStyles}
                />
              </View>
            ) : (
              <View style={[styleg.nametext, {}]}>
                <FloatingLabelInput
                  label={'Phone Number'}
                  value={number}
                  onChangeText={value => {
                    setNumber(value);
                  }}
                  containerStyles={{padding: 5}}
                  keyboardType={'phone-pad'}
                  editable={false}
                  selectTextOnFocus={false}
                  // labelStyles={styles.labelStyle}
                  labelStyles={styles.labelStyles}
                  inputStyles={styles.inputStyles}
                />
              </View>
            )}

            {number !== '' ? (
              <>
                {edit ? (
                  <TouchableOpacity onPress={() => setNumber('')}>
                    <Image
                      source={cross}
                      style={{height: 24, width: 24, marginRight: 10}}
                    />
                  </TouchableOpacity>
                ) : null}
              </>
            ) : null}
          </View>
          {passwordMessage !== '' && <Errors errors={passwordMessage} />}
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
}
const mapStateToProps = state => {
  const {userData} = state.auth;
  return {userData};
};
export default connect(mapStateToProps)(Chat);
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
