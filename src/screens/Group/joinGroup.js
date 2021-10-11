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
//redux
import {connect} from 'react-redux';
import {groupJoin} from '../../redux/actions/group';
const joinGroup = props => {
  const [createGroup, setcreateGroup] = useState(false);
  const [joinGroup, setjoinGroup] = useState(false);
  const [show, setshow] = useState(false);
  const {height} = Dimensions.get('window');
  const [code, setcode] = useState('');
  const [groupName, setgroupName] = useState('');
  const [groupMember, setgroupMember] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, seterr] = useState(false);
  const navigation = props.navigation;
  async function onJoin() {
    const params = {groupcode: code};
    seterr(false);
    const res = await props.groupJoin(params);
    setLoading(false);
    console.log('Api response', res?.data);
    if (res?.status) {
      seterr(false);
      setLoading(false);
      console.log('joinGroupData', res?.data);
      setgroupName(res?.data?.groupname);
      setgroupName(res?.data?.groupMembers);
      setshow(true);
    } else {
      setLoading(false);
      seterr(true);
      setshow(false);
    }
  }
  function oncontinue() {
    console.log('here con');
    setLoading(false);
    props.navigation.navigate('setup');
  }
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
        <View style={{marginTop: responsiveScreenHeight(13)}}></View>

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
            Join a Group
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
            Enter the code shared with you by the Group Owner. (It’s on the
            “Group” tab if they can’t find it.)
          </Text>
        </View>
        <View style={{marginTop: responsiveScreenHeight(5)}}></View>
        <View
          style={[
            styles.maincontainer,
            {borderColor: err ? 'red' : theme.colors.borderColor},
          ]}>
          <View style={styles.textInputStyle}>
            <FloatingLabelInput
              label={'Group Code'}
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
        {err ? (
          <Text
            style={{
              fontFamily: Fonts.DMRegular,
              fontSize: 14,
              fontWeight: '400',
              color: 'red',
              marginTop: 5,
            }}>
            Bummer. That doesn’t look right. Try another one.
          </Text>
        ) : (
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
        )}
        {show ? (
          <View
            style={{
              borderWidth: 1,
              marginTop: responsiveScreenHeight(5),
              width: '100%',
              height: 92,
              borderRadius: 8,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                alignSelf: 'center',
                justifyContent: 'space-between',
                marginTop: 15,
              }}>
              <Text
                style={
                  styles.mediumheaderText
                }>{`${props.joinGroupData.groupname}`}</Text>
              <Image
                source={check}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: theme.colors.labelColor,
                }}
              />
            </View>
            <Text
              style={{
                flexDirection: 'row',
                width: '90%',
                alignSelf: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                fontFamily: Fonts.DMRegular,
                fontSize: 16,
                fontWeight: '400',
                color: theme.colors.labelColor,
              }}>
              {`${props.joinGroupData.groupMembers.length}`}
            </Text>
          </View>
        ) : (
          <View
            style={{
              marginTop: responsiveScreenHeight(5),
              width: '100%',
              height: 92,
              // borderRadius: 8,
            }}></View>
        )}
        <View
          style={{
            width: '100%',
            marginTop: responsiveScreenHeight(18),
          }}>
          <LinearGradient
            colors={
              code !== '' ? ['#6989FE', '#3C64F4'] : ['#6989FE', '#3C64F4']
            }
            locations={createGroup && joinGroup ? [0, 1] : [1, 1]}
            style={[styles.nextButtonStyle, {opacity: code !== '' ? 1 : 0.4}]}>
            <TouchableOpacity
              activeOpacity={0.7}
              disabled={code === '' ? true : false}
              // onPress={() => navigation.navigate('setup')}
              onPress={() => {
                show ? oncontinue() : onJoin(), setLoading(true);
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
                  Continue
                </Text>
              )}
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => {
  const {
    status,
    message,
    isLoading,
    errMsg,
    isSuccess,
    joinGroupData,
    isgroup,
  } = state.group;
  return {
    status,
    message,
    isLoading,
    errMsg,
    isSuccess,
    joinGroupData,
    isgroup,
  };
};
export default connect(mapStateToProps, {groupJoin})(joinGroup);
