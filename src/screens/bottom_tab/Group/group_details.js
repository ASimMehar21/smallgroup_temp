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
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {add, userg, userg2, userm, editdetail} from '../../../assets';
import {Fonts} from '../../../utils/Fonts';
import styles from './styles';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import HeaderCenterComponent from '../../../components/HeaderCenterComponent';
import HeaderLeftComponent from '../../../components/HeaderLeftComponent';
import HeaderRight from '../../../components/HeaderRight';
import {Header} from 'react-native-elements';

const group_details = props => {
  const [ownername, setownername] = useState('');
  const [groupname, setgroupname] = useState('');
  const [groupCode, setgroupCode] = useState('1234');
  const [owneremail, setowneremail] = useState('dummy@gmail.com');
  const [groupDetail, setgroupDetail] = useState([]);
  useEffect(() => {
    const data = props?.route?.params?.groupDetail;
    console.log('details', data);
    if (data) {
      setgroupname(data?.groupname);
      setgroupCode(data?.groupcode);
      // setowneremail()
      setownername(data?.ownername);
      setgroupDetail(data);
    }
  }, []);
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
            onPress={() =>
              props.navigation.navigate('EditDetails', {groupDetail})
            }
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
                  width: 32,
                  fontSize: 16,
                  marginTop: 5,
                  textAlign: 'center',
                  color: theme.colors.txtblue,
                },
              ]}>
              Edit
            </Text>
          </TouchableOpacity>
        }
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.divider, {marginTop: 32}]} />
          <View>
            <Text
              style={[
                styles.labelStyle,
                {
                  alignSelf: 'flex-start',
                  fontSize: 12,
                  color: theme.colors.labelColor,
                  marginTop: 6,
                },
              ]}>
              Group Name
            </Text>
            <Text style={[styles.email, {color: theme.colors.gray}]}>
              {`${groupname}`}
            </Text>
            <View style={[styles.divider, {marginTop: 6}]} />
            <Text
              style={[
                styles.labelStyle,
                {
                  alignSelf: 'flex-start',
                  fontSize: 12,
                  color: theme.colors.labelColor,
                  marginTop: 12,
                },
              ]}>
              Group Code
            </Text>
            <Text style={[styles.email, {color: theme.colors.gray}]}>
              {`${groupCode}`}
            </Text>
            <View style={[styles.divider, {marginTop: 6}]} />
            <Text
              style={[
                styles.labelStyle,
                {
                  alignSelf: 'flex-start',
                  fontSize: 12,
                  color: theme.colors.labelColor,
                  marginTop: 12,
                },
              ]}>
              Owner
            </Text>
            <Text style={[styles.email, {color: theme.colors.gray}]}>
              {`${ownername}`}
            </Text>
            <View style={[styles.divider, {marginTop: 6}]} />
            <Text
              style={[
                styles.labelStyle,
                {
                  alignSelf: 'flex-start',
                  fontSize: 12,
                  color: theme.colors.labelColor,
                  marginTop: 12,
                },
              ]}>
              Owner Contact
            </Text>
            <Text style={[styles.email, {color: theme.colors.gray}]}>
              {`${owneremail}`}
            </Text>
          </View>
          <View style={[styles.divider, {marginTop: 6}]} />
          {/* <TouchableOpacity  style={styles.btn} >
                    <Text style={styles.email,{fontSize:18,color:theme.colors.labelColor}}>Save</Text>
                </TouchableOpacity> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default group_details;
