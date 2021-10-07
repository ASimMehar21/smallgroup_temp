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
  PermissionsAndroid,
} from 'react-native';
import {Header} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import theme from '../../theme';
import {Fonts} from '../../utils/Fonts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Snackbar from 'react-native-snackbar';
import styles from './styles';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {cross, invite, email_icon, close, next} from '../../assets';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import HeaderLeftComponent from '../../components/HeaderLeftComponent';
import HeaderRight from '../../components/HeaderRight';
import Contacts from 'react-native-contacts';
//redux
import {connect} from 'react-redux';
import {emailInvitation} from '../../redux/actions/group';
const Invite = props => {
  const [createGroup, setcreateGroup] = useState(false);
  const [joinGroup, setjoinGroup] = useState(false);
  const {height} = Dimensions.get('window');
  const [email, setemail] = useState('');
  const [loading, setLoading] = useState(false);
  const [contacts, setcontacts] = useState([]);
  const [loadingContacts, setLoadingContacts] = useState(false);

  const navigation = props.navigation;
  useEffect(() => {
    const code = props.route.params.code;
    console.log(code);
    AsyncStorage.setItem('code', code);
  }, []);
  function cont() {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      }).then(() => {
        loadContacts();
      });
    } else {
      setLoadingContacts(false);
      // loadContacts();
    }
  }
  const loadContacts = () => {
    var arr = [];
    Contacts.getAll().then(contacts => {
      contacts.map((item, index) => {
        item.emailAddresses.map(items => {
          if (items.email !== null) {
            arr.push({
              id: index,
              mail: items.email,
              name: item.displayName,
            });
          }
        });
      });
      setcontacts(arr);
      console.log('contacts', arr);
      setLoadingContacts(false);
    });
  };
  async function onInvitation() {
    const mails = email.split(',');
    console.log('User Data', props.userData);
    console.log(mails);
    const params = {
      invitedMembers: mails,
    };
    try {
      await props.emailInvitation(params, props.userData._id);

      setLoading(false);
      navigation.navigate('profile');
      Snackbar.show({
        text: 'Invitation Send Succesfully',
        backgroundColor: theme.colors.primary,
        textColor: 'white',
      });
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header
        backgroundColor="white"
        containerStyle={{borderBottomWidth: 0}}
        leftComponent={<HeaderLeftComponent navigation={navigation} />}
        rightComponent={
          <HeaderRight
            onPress={() => navigation.navigate('profile')}
            image={next}
            style={{height: 48, width: 118, left: responsiveScreenWidth(2.4)}}
          />
        }
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
            Invite Others
          </Text>
        </View>
        <View style={{marginTop: responsiveScreenHeight(8)}}></View>
        <View style={styles.maincontainer}>
          <View style={styles.textInputStyle}>
            <FloatingLabelInput
              label={'Email(s)'}
              value={email}
              onChangeText={value => setemail(value)}
              containerStyles={{padding: 5}}
              labelStyles={styles.labelStyle}
              inputStyles={{width: '100%'}}
              onSubmitEditing={() => console.log('here')}
            />
          </View>
          {email !== '' ? (
            <TouchableOpacity onPress={() => setemail('')}>
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
          Add multiple emails separated with a comma
        </Text>

        <TouchableOpacity
          style={[
            styles.nextButtonStyle,
            {
              borderWidth: 1,
              borderColor: theme.colors.txtcolor,
              marginTop: responsiveHeight(2),
            },
          ]}
          // activeOpacity={0.7}
          // disabled={email === '' ? true : false}
          onPress={cont}>
          {loading ? (
            <ActivityIndicator animating color={'white'} size={25} />
          ) : (
            <Text
              style={{
                fontSize: 18,
                fontFamily: Fonts.DMMedium,
                color: theme.colors.txtcolor,
                textAlign: 'center',
                fontWeight: '500',
              }}>
              Or, add from contacts
            </Text>
          )}
        </TouchableOpacity>

        {contacts &&
          contacts.map((item, index) => (
            <View
              key={index}
              style={[
                styles.nextButtonStyle,
                {
                  backgroundColor: '#dbe3fd',
                  borderRadius: 8,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
              ]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={email_icon}
                  style={{width: 20, height: 16}}
                  resizeMode="contain"
                />
                <View style={{left: 10, alignContent: 'center'}}>
                  <Text style={[styles.namestyle, {marginBottom: 3}]}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontFamily: Fonts.DMRegular,
                      fontSize: 14,
                      fontWeight: '400',
                      color: theme.colors.labelColor,
                    }}>
                    {item.mail}
                  </Text>
                </View>
              </View>
              <TouchableOpacity>
                <Image
                  source={close}
                  style={{width: 12, height: 12}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          ))}

        <LinearGradient
          colors={
            email === '' ? ['#6989FE', '#3C64F4'] : ['#6989FE', '#3C64F4']
          }
          locations={email !== '' ? [0, 1] : [1, 1]}
          style={[styles.nextButtonStyle, {opacity: email === '' ? 0.4 : 1}]}>
          <TouchableOpacity
            activeOpacity={0.7}
            disabled={email === '' ? true : false}
            // onPress={() => navigation.navigate('profile')}
            onPress={() => {
              setLoading(true), onInvitation();
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
                Send Invitation and Continue
              </Text>
            )}
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity
          style={[
            styles.nextButtonStyle,
            {
              borderWidth: 1,
              borderColor: '#E1E3E6',
              backgroundColor: '#F8F8F8',
              width: '100%',
              marginBottom: contacts ? 8 : 0,
            },
          ]}
          activeOpacity={0.7}
          disabled={email === '' ? true : false}
          //   onPress={() => navigation.navigate('main')}
        >
          {loading ? (
            <ActivityIndicator animating color={'white'} size={25} />
          ) : (
            <View
              style={{
                flexDirection: 'row',
                width: responsiveScreenWidth(60),
                alignSelf: 'center',
                // backgroundColor: 'tomato',
                justifyContent: 'center',
                // left: 5,
              }}>
              <Image
                source={invite}
                style={{height: 18, width: 18, alignSelf: 'center'}}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: Fonts.DMMedium,
                  color: theme.colors.labelColor,
                  textAlign: 'center',
                  fontWeight: '500',
                  marginLeft: 7,
                }}>
                Or, copy invitation link
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => {
  const {userData} = state.auth;
  const {status, message, isLoading, errMsg, isSuccess} = state.group;
  return {status, message, isLoading, errMsg, isSuccess, userData};
};
export default connect(mapStateToProps, {emailInvitation})(Invite);
