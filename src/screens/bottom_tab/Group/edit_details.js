/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import theme from '../../../theme';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {
  save_change,
  ownership,
  transfer,
  current,
  others,
} from '../../../assets';
import {Fonts} from '../../../utils/Fonts';
import styles from './styles';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Scope} from '@babel/traverse';
import HeaderCenterComponent from '../../../components/HeaderCenterComponent';
import HeaderLeftComponent from '../../../components/HeaderLeftComponent';
import HeaderRight from '../../../components/HeaderRight';
import {Header} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Snackbar from 'react-native-snackbar';
//redux
import {connect} from 'react-redux';
import {updategroup} from '../../../redux/actions/group';
const edit_details = props => {
  const [gname, setgname] = useState('');
  const [gcode, setgcode] = useState('');
  const [owner, setowner] = useState('');
  const [contact, setcontact] = useState('');
  const [modalVisible, setmodalVisible] = useState('');
  const [loading, setloading] = useState(false);
  const [groupid, setgroupid] = useState('');
  useEffect(() => {
    const data = props?.route?.params?.groupDetail;
    console.log('details edit', data);
    if (data) {
      setgname(data?.groupname);
      setowner(data?.ownername);
      setgcode(data?.groupcode);
      setgroupid(data?._id);
    }
  }, []);
  // function modal_Visible (visible)  {
  //     this.setState({ModalVisible : visible });
  // }
  async function onupdate() {
    const param = {
      ownername: owner,
      groupname: gname,
    };
    await props.updategroup(param, groupid);

    setTimeout(() => {
      Snackbar.show({
        text: 'Group updated succesfully',
        backgroundColor: theme.colors.primary,
        textColor: 'white',
      });
      setmodalVisible(true);
      setloading(false);
    }, 1000);
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header
        backgroundColor="white"
        containerStyle={{
          borderBottomWidth: 0,
          alignSelf: 'center',
          borderBottomWidth: 0.5,
          borderBottomColor: '#F1F2F3',
        }}
        centerComponent={<HeaderCenterComponent name={'Group Details'} />}
        leftComponent={<HeaderLeftComponent navigation={props.navigation} />}
        rightComponent={
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              marginTop: 12,
              right: responsiveScreenWidth(2.4),
              alignItems: 'center',
            }}>
            <Text
              style={[
                styles.inputStyles,
                {
                  width: 'auto',
                  fontSize: 16,
                  marginTop: 5,
                  textAlign: 'center',
                  color: theme.colors.txtblue,
                },
              ]}>
              Save
            </Text>
          </TouchableOpacity>
        }
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.textInputStyle, {width: '100%', marginTop: 24}]}>
            <FloatingLabelInput
              label={'Group Name'}
              value={gname}
              onChangeText={value => setgname(value)}
              containerStyles={{padding: 5}}
              // labelStyles={styles.labelStyle}
              labelStyles={styles.labelStyles}
              inputStyles={styles.inputStyles}
            />
          </View>

          <View style={[styles.textInputStyle, {width: '100%', marginTop: 16}]}>
            <FloatingLabelInput
              label={'Group Code'}
              value={gcode}
              onChangeText={value => setgcode(value)}
              containerStyles={{padding: 5}}
              // labelStyles={styles.labelStyle}
              labelStyles={styles.labelStyles}
              inputStyles={styles.inputStyles}
            />
          </View>

          <View style={[styles.textInputStyle, {width: '100%', marginTop: 16}]}>
            <FloatingLabelInput
              label={'Owner'}
              value={owner}
              onChangeText={value => setowner(value)}
              containerStyles={{padding: 5}}
              // labelStyles={styles.labelStyle}
              labelStyles={styles.labelStyles}
              inputStyles={styles.inputStyles}
            />
          </View>

          <View style={[styles.textInputStyle, {width: '100%', marginTop: 16}]}>
            <FloatingLabelInput
              label={'Owner Contact'}
              value={contact}
              onChangeText={value => setcontact(value)}
              containerStyles={{padding: 5}}
              // labelStyles={styles.labelStyle}
              labelStyles={styles.labelStyles}
              inputStyles={styles.inputStyles}
            />
          </View>
          {/* <TouchableOpacity style={{marginTop:40}}>
                <Image
                    source={save_change}
                    style={{width:'100%',height:48}}
                />
            </TouchableOpacity> */}
          <LinearGradient
            colors={['#6989FE', '#3C64F4']}
            style={[styles.btn, {borderWidth: 0, marginTop: 40}]}>
            <TouchableOpacity
              onPress={() => {
                onupdate(), setloading(true);
              }}>
              {loading ? (
                <ActivityIndicator animating color={'white'} size={25} />
              ) : (
                <Text style={(styles.email, {fontSize: 18, color: 'white'})}>
                  Save Changes
                </Text>
              )}
            </TouchableOpacity>
          </LinearGradient>
          <TouchableOpacity
            onPress={() => setmodalVisible(true)}
            style={[styles.btn, {marginTop: 16}]}>
            <Text
              style={
                (styles.email, {fontSize: 18, color: theme.colors.labelColor})
              }>
              Transfer Ownership
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // style={{ backgroundColor:'rgba(64, 77, 97, 1)' }}
        onRequestClose={() => {
          setmodalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <ScrollView style={{}}> */}
            <View
              style={{
                width: '100%',
                height: 48,
                flexDirection: 'row',
                backgroundColor: 'white',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 5,
              }}>
              <TouchableOpacity
                style={{flex: 0.2, alignItems: 'center', alignSelf: 'center'}}
                onPress={() => setmodalVisible(!modalVisible)}>
                <Text
                  style={[
                    styles.tabtext,
                    {
                      height: 'auto',
                      fontFamily: Fonts.DMRegular,
                      fontWeight: '400',
                      color: theme.colors.txtblue,
                    },
                  ]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <View
                style={{flex: 0.6, alignItems: 'center', alignSelf: 'center'}}>
                <Text
                  style={[
                    styles.tabtext,
                    {
                      height: 'auto',
                      fontSize: 18,
                      fontFamily: Fonts.DMBold,
                      color: theme.colors.textHeader,
                    },
                  ]}>
                  Transfer Ownership
                </Text>
              </View>
              <TouchableOpacity style={{flex: 0.2}}>
                {/* <Text style={[styles.tabtext,{margin:12,fontFamily:Fonts.DMRegular,fontWeight:'400',color:theme.colors.txtblue}]}>Cancel</Text> */}
              </TouchableOpacity>
            </View>

            <View style={[styles.divider, {marginTop: 0}]} />
            <ScrollView style={{}}>
              <View style={{marginTop: 24, alignItems: 'center'}}>
                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      justifyContent: 'flex-start',
                      flexDirection: 'row',
                      borderColor: '#6989FE',
                      borderWidth: 1,
                      backgroundColor: 'rgba(78, 115, 248, 0.08)',
                      marginTop: 0,
                      width: 372,
                    },
                  ]}>
                  <Image
                    source={current}
                    style={{width: 24, height: 28, marginLeft: 16}}
                  />
                  <Text
                    style={
                      (styles.email,
                      {
                        fontSize: 18,
                        color: theme.colors.labelColor,
                        marginLeft: 8,
                        marginBottom: 5,
                      })
                    }>
                    Brianna Louise (Current)
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      backgroundColor: 'white',
                      justifyContent: 'flex-start',
                      flexDirection: 'row',
                      marginTop: 8,
                      width: 372,
                    },
                  ]}>
                  <Image
                    source={others}
                    style={{width: 28, height: 28, marginLeft: 16}}
                  />
                  <Text
                    style={
                      (styles.email,
                      {
                        marginLeft: 8,
                        fontSize: 18,
                        color: theme.colors.labelColor,
                      })
                    }>
                    David C.
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      backgroundColor: 'white',
                      justifyContent: 'flex-start',
                      flexDirection: 'row',
                      marginTop: 8,
                      width: 372,
                    },
                  ]}>
                  <Image
                    source={others}
                    style={{width: 28, height: 28, marginLeft: 16}}
                  />
                  <Text
                    style={
                      (styles.email,
                      {
                        marginLeft: 8,
                        fontSize: 18,
                        color: theme.colors.labelColor,
                      })
                    }>
                    David C.
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      backgroundColor: 'white',
                      justifyContent: 'flex-start',
                      flexDirection: 'row',
                      marginTop: 8,
                      width: 372,
                    },
                  ]}>
                  <Image
                    source={others}
                    style={{width: 28, height: 28, marginLeft: 16}}
                  />
                  <Text
                    style={
                      (styles.email,
                      {
                        marginLeft: 8,
                        fontSize: 18,
                        color: theme.colors.labelColor,
                      })
                    }>
                    David C.
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      backgroundColor: 'white',
                      justifyContent: 'flex-start',
                      flexDirection: 'row',
                      marginTop: 8,
                      width: 372,
                    },
                  ]}>
                  <Image
                    source={others}
                    style={{width: 28, height: 28, marginLeft: 16}}
                  />
                  <Text
                    style={
                      (styles.email,
                      {
                        marginLeft: 8,
                        fontSize: 18,
                        color: theme.colors.labelColor,
                      })
                    }>
                    David C.
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      backgroundColor: 'white',
                      justifyContent: 'flex-start',
                      flexDirection: 'row',
                      marginTop: 8,
                      width: 372,
                    },
                  ]}>
                  <Image
                    source={others}
                    style={{width: 28, height: 28, marginLeft: 16}}
                  />
                  <Text
                    style={
                      (styles.email,
                      {
                        marginLeft: 8,
                        fontSize: 18,
                        color: theme.colors.labelColor,
                      })
                    }>
                    David C.
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      backgroundColor: 'white',
                      justifyContent: 'flex-start',
                      flexDirection: 'row',
                      marginTop: 8,
                      width: 372,
                    },
                  ]}>
                  <Image
                    source={others}
                    style={{width: 28, height: 28, marginLeft: 16}}
                  />
                  <Text
                    style={
                      (styles.email,
                      {
                        marginLeft: 8,
                        fontSize: 18,
                        color: theme.colors.labelColor,
                      })
                    }>
                    David C.
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      backgroundColor: 'white',
                      justifyContent: 'flex-start',
                      flexDirection: 'row',
                      marginTop: 8,
                      width: 372,
                    },
                  ]}>
                  <Image
                    source={others}
                    style={{width: 28, height: 28, marginLeft: 16}}
                  />
                  <Text
                    style={
                      (styles.email,
                      {
                        marginLeft: 8,
                        fontSize: 18,
                        color: theme.colors.labelColor,
                      })
                    }>
                    David C.
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      backgroundColor: 'white',
                      justifyContent: 'flex-start',
                      flexDirection: 'row',
                      marginTop: 8,
                      width: 372,
                    },
                  ]}>
                  <Image
                    source={others}
                    style={{width: 28, height: 28, marginLeft: 16}}
                  />
                  <Text
                    style={
                      (styles.email,
                      {
                        marginLeft: 8,
                        fontSize: 18,
                        color: theme.colors.labelColor,
                      })
                    }>
                    David C.
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>

            {/* <TouchableOpacity style={{alignItems:'center',marginBottom:50,marginTop:32}}>
                        <Image
                            source={transfer}
                            style={{width:372,height:48}}
                        />
                    </TouchableOpacity> */}

            <LinearGradient
              colors={['#6989FE', '#3C64F4']}
              style={[
                styles.btn,
                {
                  borderWidth: 0,
                  marginTop: 32,
                  marginBottom: 50,
                  width: 372,
                  alignSelf: 'center',
                },
              ]}>
              <TouchableOpacity onPress={() => setmodalVisible(false)}>
                <Text style={(styles.email, {fontSize: 18, color: 'white'})}>
                  Transfer Ownership
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            {/* </ScrollView> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const mapStateToProps = state => {
  const {userData} = state.auth;
  const {status, message, isLoading, errMsg, isSuccess, all_group_data} =
    state.group;
  return {
    status,
    message,
    isLoading,
    errMsg,
    isSuccess,
    userData,
    all_group_data,
  };
};
export default connect(mapStateToProps, {
  updategroup,
})(edit_details);
