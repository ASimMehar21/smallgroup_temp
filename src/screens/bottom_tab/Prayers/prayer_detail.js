/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
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
  Modal,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import theme from '../../../theme';
import {Fonts} from '../../../utils/Fonts';
import {
  userg,
  userg2,
  download,
  done,
  seeMore,
  option,
  share,
  doc,
  userm,
} from '../../../assets';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import styles from '../../Signin/styles';
import stylesp from './styles';
import LinearGradient from 'react-native-linear-gradient';
import HeaderCenterComponent from '../../../components/HeaderCenterComponent';
import HeaderLeftComponent from '../../../components/HeaderLeftComponent';
import {Header} from 'react-native-elements';
import Input from '../chat/inputField';
import {useIsFocused} from '@react-navigation/native';
const chat = [
  {
    img: require('../../../assets/images/Userpic.png'),
    name: 'Rachel Richards ❤️',
    time: '23:25 PM',
    textmsg: 'Here we go! ☺️',
    msgtype: 'sender',
    media: [],
    file: [],
  },
  {
    img: require('../../../assets/images/Userpicg.png'),
    name: 'Brianna B',
    time: '23:25 PM',
    textmsg: 'Hey! Can you remind me where we’re meeting this week?',
    msgtype: 'sender',
    media: [],
    file: [],
  },
  {
    img: '',
    name: 'You',
    time: '23:25 PM',
    textmsg: 'Here we go! ☺️',
    msgtype: 'you',
    media: {},
    file: [],
  },
  {
    img: require('../../../assets/images/Userpic4s.png'),
    name: 'Roman Bellic',
    time: '23:25 PM',
    textmsg: 'Hey guys check this out!',
    msgtype: 'sender',
    file: [],

    media: [
      {
        type: 'image.jpg',
        imag: require('../../../assets/images/car.jpg'),
        title: "Guy's Truck",
        size: '2.6 MB',
      },
      {
        type: 'image.jpg',
        imag: require('../../../assets/images/car.jpg'),
        title: "Guy's Truck",
        size: '2.6 MB',
      },
    ],
  },
  {
    img: require('../../../assets/images/Userpic.png'),
    name: 'Rachel Richards ❤️',
    time: '23:25 PM',
    textmsg: 'Here are the teaching notes',
    msgtype: 'sender',
    media: [],
    file: [
      {
        img: require('../../../assets/images/doc.png'),
        title: 'Notes.doc',
        size: '43 MB',
        time: '19:31 PM',
      },
    ],
  },
  {
    img: require('../../../assets/images/Userpicg.png'),
    name: 'Brianna B',
    time: '23:25 PM',
    textmsg:
      'Hey guys! Here’s the reminder that we’re meeting at our house tonight!',
    msgtype: 'sender',
    media: [],
    file: [],
  },
  {
    img: '',
    name: 'You',
    time: '23:25 PM',
    textmsg: 'Awesome! Thanks!',
    msgtype: 'you',
    media: [],
    file: [],
  },
  {
    img: require('../../../assets/images/Userpic4s.png'),
    name: 'Taylor Cox',
    time: '23:25 PM',
    textmsg:
      'Hey, Could you guys please pray for my grandpa? Here’s more details.',
    msgtype: 'sender',
    media: [],
    file: [],
  },
  {
    img: require('../../../assets/images/Userpic.png'),
    name: 'Rachel Richards ❤️',
    time: '23:25 PM',
    textmsg: 'Yes! thanks for asking!',
    msgtype: 'sender',
    media: [],
    file: [],
  },
];

const prayer_detail = props => {
  const [modalVisible, setmodalVisible] = useState(false);
  const isFocused = useIsFocused();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rid, setrid] = useState('');
  const [responses, setresponses] = useState([]);
  useEffect(() => {
    const data = props?.route?.params?.item;
    console.log('See More==>', data);
    if (data) {
      setTitle(data?.title);
      setDescription(data?.description);
      setrid(data?.userID);
      setresponses(data?.responses);
    }
  }, [isFocused]);
  return (
    <View style={{flex: 1, backgroundColor: '#FFFF'}}>
      <Header
        backgroundColor="white"
        containerStyle={{borderBottomWidth: 0, justifyContent: 'center'}}
        centerComponent={<HeaderCenterComponent name={'Prayer Details'} />}
        leftComponent={<HeaderLeftComponent navigation={props.navigation} />}
        // rightComponent={<HeaderRight onPress={navigation} />}
      />
      <View style={[styles.divider, {marginTop: 0, width: '100%'}]} />

      <View style={stylesp.container}>
        <View
          style={{
            maxWidth: '100%',
            marginTop: 16,
            borderRadius: 8,
            margin: 8,
            padding: 24,
            borderWidth: 1,
            borderColor: theme.colors.borderColor,
            backgroundColor: '#F8F8F8',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                width: '95%',
                fontFamily: Fonts.DMBold,
                color: theme.colors.gray,
                fontSize: 16,
                fontWeight: '700',
              }}>
              {`${title}`}
            </Text>
            <TouchableOpacity onPress={() => setmodalVisible(true)}>
              <Image source={option} style={{width: 24, height: 24}} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              marginTop: 12,
              fontFamily: Fonts.DMRegular,
              color: theme.colors.gray,
              fontSize: 16,
              fontWeight: '400',
            }}>
            {`${description}`}
          </Text>
        </View>
        <FlatList
          style={[styles.container, {marginBottom: 60}]}
          showsVerticalScrollIndicator={false}
          data={chat}
          renderItem={({item, index}) => (
            <View>
              {item.msgtype === 'sender' ? (
                <View style={{width: '100%', marginTop: 16}}>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={item.img} style={{width: 40, height: 40}} />
                    <View>
                      <View style={{flexDirection: 'row', marginLeft: 8}}>
                        <Text
                          style={{
                            fontFamily: Fonts.DMMedium,
                            color: theme.colors.gray,
                            fontSize: 16,
                            fontWeight: '700',
                          }}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            marginLeft: 10,
                            alignSelf: 'center',
                            fontFamily: Fonts.DMMedium,
                            color: theme.colors.labelColor,
                            fontSize: 14,
                            fontWeight: 'normal',
                          }}>
                          {item.time}
                        </Text>
                      </View>
                      <View
                        style={{
                          maxWidth: '93%',
                          borderRadius: 8,
                          margin: 8,
                          borderWidth: 1,
                          borderColor: theme.colors.borderColor,
                        }}>
                        <Text
                          style={{
                            marginTop: 4,
                            marginBottom: 4,
                            marginLeft: 8,
                            marginRight: 8,
                            fontFamily: Fonts.DMMedium,
                            color: theme.colors.gray,
                            fontSize: 16,
                            fontWeight: 'normal',
                          }}>
                          {item.textmsg}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ) : (
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    marginTop: 16,
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                  }}>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: 8,
                        justifyContent: 'flex-end',
                      }}>
                      <Text
                        style={{
                          fontFamily: Fonts.DMMedium,
                          color: theme.colors.gray,
                          fontSize: 16,
                          fontWeight: '700',
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          marginLeft: 10,
                          marginRight: 10,
                          alignSelf: 'center',
                          fontFamily: Fonts.DMMedium,
                          color: theme.colors.labelColor,
                          fontSize: 14,
                          fontWeight: 'normal',
                        }}>
                        {item.time}
                      </Text>
                      <Image
                        source={done}
                        style={{
                          width: 16,
                          height: 16,
                          tintColor: '#0892d0',
                          alignSelf: 'center',
                        }}
                      />
                    </View>
                    <View
                      style={{
                        width: 'auto',
                        borderRadius: 8,
                        margin: 8,
                        borderWidth: 1,
                        borderColor: theme.colors.borderColor,
                      }}>
                      <Text
                        style={{
                          marginTop: 4,
                          marginBottom: 4,
                          marginLeft: 8,
                          marginRight: 8,
                          fontFamily: Fonts.DMMedium,
                          color: theme.colors.gray,
                          fontSize: 16,
                          fontWeight: 'normal',
                        }}>
                        {item.textmsg}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          )}
        />
      </View>
      <Input />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // style={{ backgroundColor:'rgba(64, 77, 97, 1)' }}
        onRequestClose={() => {
          setmodalVisible(!modalVisible);
        }}>
        <View style={stylesp.centeredView}>
          <View style={[stylesp.modalView, {height: 248}]}>
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
                  Options
                </Text>
              </View>
              <TouchableOpacity
                style={{flex: 0.2}}
                onPress={() => setmodalVisible(!modalVisible)}>
                {/* <Text style={[styles.tabtext,{margin:12,fontFamily:Fonts.DMRegular,fontWeight:'400',color:theme.colors.txtblue}]}>Cancel</Text> */}
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', marginTop: 24}}>
              <TouchableOpacity style={{width: '90%', alignItems: 'center'}}>
                <Image source={share} style={{width: '100%', height: 48}} />
              </TouchableOpacity>
              <TouchableOpacity style={[stylesp.btn, {width: '90%'}]}>
                <Text
                  style={
                    (stylesp.email,
                    {fontSize: 18, color: theme.colors.labelColor})
                  }>
                  Edit My Prayer
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default prayer_detail;
