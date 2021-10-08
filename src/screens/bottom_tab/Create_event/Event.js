/* eslint-disable no-dupe-keys */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  Modal,
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
import {
  right,
  left,
  add,
  option,
  share,
  cross,
  down,
  create,
} from '../../../assets';
import {Fonts} from '../../../utils/Fonts';
import styles from './styles';
import stylem from '../../Signin/styles';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import HeaderCenterComponent from '../../../components/HeaderCenterComponent';
import HeaderLeftComponent from '../../../components/HeaderLeftComponent';
import HeaderRight from '../../../components/HeaderRight';
import {Header} from 'react-native-elements';
import DropdownHead from '../../../components/DropdownHeader';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
//redux
import {connect} from 'react-redux';
import {
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent,
} from '../../../redux/actions/calendarAction';
const _today = moment().format(_format);
const _format1 = 'YYYY-MM-DD';
const _format = 'LL';
import Snackbar from 'react-native-snackbar';
import {useIsFocused} from '@react-navigation/native';
const initialState = {
  [_today]: {disabled: false},
};

const events = [
  {
    start: '7:00 PM',
    ends: '9:00 PM ',
    Title: 'Weekly Community Group',
    address: '1234 Street Name, City, ST 12345',
  },
  {
    start: '7:00 PM',
    ends: '9:00 PM ',
    Title: 'Weekly Community Group',
    address: '1234 Street Name, City, ST 12345',
  },
];

function Events(props) {
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);
  const [exsisting, setexsisting] = useState(false);
  const [location, setLocation] = useState('');
  const [repeats, setRepeats] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const {height} = Dimensions.get('window');
  const [emailMessage, setemailMessage] = useState('');
  const [passwordMessage, setpasswordMessage] = useState('');
  const [confirmMessage, setconfirmMessage] = useState('');
  const [fNameMessage, setfNameMessage] = useState('');
  const [lNameMessage, setlNameMessage] = useState('');
  const [events, setevents] = useState([]);
  const [eventId, seteventId] = useState();
  const [Id, setId] = useState();
  const [modalVisible, setmodalVisible] = useState(false);
  const [createEvent, setCreateEvent] = useState(false);
  const [markedDays, setmarkedDays] = useState([]);
  const [_markedDates, set_markedDates] = useState(initialState);
  const dot = {key: 'dot', color: '#4E73F8', selectedDotColor: '#4E73F8'};
  useEffect(() => {
    setLoading(false);
    setRepeats('');
    setTitle('');
    setLocation('');
    setEnd('');
    setStart('');
    getevent();
  }, [isFocused]);
  async function onDaySelect(day) {
    // console.log(day);
    // const _selectedDay2 = moment(day.dateString).format(_format);
    // if (markedDays.indexOf(_selectedDay2) === -1) markedDays.push(_selectedDay2);
    // this.state.markedDays.push(_selectedDay2)

    const _selectedDay1 = moment(day.dateString).format(_format1);

    let selected = true;
    let marked = true;
    let dots = [dot];

    if (_markedDates[_selectedDay1]) {
      // Already in marked dates, so reverse current marked state
      selected = !_markedDates[_selectedDay1].selected;
      marked = !_markedDates[_selectedDay1].marked;
    }

    // Create a new object using object property spread since it should be immutable
    // Reading: https://davidwalsh.name/merge-objects
    const updatedMarkedDates = {
      ..._markedDates,
      ...{[_selectedDay1]: {dots, selected}},
    };

    // Triggers component to render again, picking up the new state
    set_markedDates(updatedMarkedDates);
  }
  async function getevent() {
    const uid = props.userData._id;
    console.log(props.userData._id);
    // return;
    await props.getEvent(uid);
    console.log('Event_DATA \n', props.activityData);
    setevents(props.activityData);
  }
  async function onevent() {
    const params = {
      start: 'Wed Oct 06 2021 14:20:52 GMT+0500 (Pakistan Standard Time)',
      end: 'Wed Oct 06 2021 14:20:52 GMT+0500 (Pakistan Standard Time)',
      title: title,
      location: location,
      repeats: ['Every Tuesday', 'Every Thursday'],
      description: description,
      userID: props.userData._id,
    };
    await props.createEvent(params);
    if (props.isSuccess) {
      setLoading(false);
      setRepeats('');
      setTitle('');
      setLocation('');
      setEnd('');
      setStart('');
      setTimeout(() => {
        Snackbar.show({
          text: 'Event created succesfully',
          backgroundColor: theme.colors.primary,
          textColor: 'white',
        });
      }, 2000);

      setCreateEvent(false);
    } else {
      setLoading(false);
      Snackbar.show({
        text: JSON.stringify(props.message),
        backgroundColor: '#F14336',
        textColor: 'white',
      });
    }
  }
  async function onUpdateevent() {
    console.log('items');
    const params = {
      start: 'Wed Oct 06 2021 14:20:52 GMT+0500 (Pakistan Standard Time)',
      end: 'Wed Oct 06 2021 14:20:52 GMT+0500 (Pakistan Standard Time)',
      title: title,
      location: location,
      repeats: ['Every Tuesday', 'Every Thursday'],
      description: description,
      userID: props.userData._id,
    };
    await props.updateEvent(params, eventId._id);
    if (props.isSuccess) {
      setLoading(false);
      setRepeats('');
      setTitle('');
      setLocation('');
      setEnd('');
      setStart('');
      setmodalVisible(false);
      setTimeout(() => {
        Snackbar.show({
          text: 'Event updated succesfully',
          backgroundColor: theme.colors.primary,
          textColor: 'white',
        });
      }, 1000);

      setCreateEvent(false);
    } else {
      setmodalVisible(false);
      setLoading(false);
      Snackbar.show({
        text: JSON.stringify(props.message),
        backgroundColor: '#F14336',
        textColor: 'white',
      });
    }
  }
  async function ondeleteEvent() {
    await props.deleteEvent(eventId._id);
    if (props.isSuccess) {
      setLoading(false);
      setRepeats('');
      setTitle('');
      setLocation('');
      setEnd('');
      setStart('');
      setmodalVisible(false);
      setTimeout(() => {
        Snackbar.show({
          text: 'Event deleted succesfully',
          backgroundColor: theme.colors.primary,
          textColor: 'white',
        });
      }, 1000);

      setCreateEvent(false);
    } else {
      setmodalVisible(false);
      setLoading(false);
      Snackbar.show({
        text: JSON.stringify(props.message),
        backgroundColor: '#F14336',
        textColor: 'white',
      });
    }
  }
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header
        backgroundColor="white"
        containerStyle={{
          borderBottomWidth: 0,
          alignSelf: 'center',
          height: 48,
          borderBottomWidth: 0.3,
          borderBottomColor: '#E1E3E6',
        }}
        centerComponent={<DropdownHead />}
        rightComponent={
          <HeaderRight
            onPress={() => {
              setexsisting(false),
              setCreateEvent(true)
            }}
            image={create}
            style={{width: 32, height: 32, marginTop: 12}}
          />
        }
      />
      <View style={{paddingTop: 16}}>
        <Calendar
          horizontal={true}
          onDayPress={day => onDaySelect(day)}
          // markedDates={{ [this.state.markedDay]: { selected: true } }}
          markedDates={_markedDates}
          // markedDates={markedDate}
          markingType={'multi-dot'}
          // pastScrollRange={24}
          // futureScrollRange={24}
          enableSwipeMonths={true}
          // hideExtraDays={true}
          scrollEnabled={true}
          renderArrow={direction => (
            <Image
              source={direction === 'left' ? left : right}
              style={{width: 7, height: 14}}
            />
          )}
          headerStyle={{
            height: 52,
            backgroundColor: '#F8F8F8',
          }}
          todayButtonStyle={{
            width: 40,
            height: 40,
            backgroundColor: theme.colors.txtblue,
          }}
          // markingType={'multi-dot'}
          style={{
            // borderWidth: 1,
            // borderColor: 'gray',
            margin: 10,
            // elevation: 5,
            height: 330,
          }}
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: theme.colors.labelColor,
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: 'rgba(78, 115, 248, 0.24)',
            selectedDayTextColor: '#6989FE',
            todayTextColor: '#6989FE',
            dayTextColor: theme.colors.gray,
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: 'red',
            arrowColor: theme.colors.labelColor,
            arrowStyle: {
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
              backgroundColor: 'white',
              // borderWidth:1,
              width: 24,
              height: 24,
              elevation: 5,
            },

            disabledArrowColor: '#d9e1e8',
            monthTextColor: theme.colors.textHeader,
            indicatorColor: 'green',
            textDayFontFamily: Fonts.DMBold,
            textMonthFontFamily: Fonts.DMBold,
            textDayHeaderFontFamily: Fonts.DMRegular,
            textDayFontWeight: '700',
            textMonthFontWeight: '700',
            textDayHeaderFontWeight: '400',
            textDayFontSize: 14,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 15,
            // textDayHeaderc: 16
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Text style={[styles.inputStyles, {width: '90%'}]}>Events</Text>
        <TouchableOpacity
          onPress={() => {
            setexsisting(false);
            setCreateEvent(true);
          }}>
          <Image source={add} style={{width: 16, height: 16}} />
        </TouchableOpacity>
      </View>
      <FlatList
        style={[styles.container, {marginTop: 18}]}
        showsVerticalScrollIndicator={false}
        data={events}
        renderItem={({item, index}) => (
          <View
            style={{
              maxWidth: '95%',
              backgroundColor: '#F2F2FC',
              borderLeftWidth: 5,
              borderLeftColor: '#6989FE',
              borderRadius: 8,
              margin: 8,
              padding: 24,
              // borderWidth:1,
              // borderColor:theme.colors.borderColor
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={[styles.inputStyles, {fontSize: 12, width: '95%'}]}>
                {moment(item.start).format('h:mm')} -{' '}
                {moment(item.ends).format('LT')}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setmodalVisible(true), seteventId(item);
                }}>
                <Image source={option} style={{width: 24, height: 24}} />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                // marginTop:-8,
                fontFamily: Fonts.DMMedium,
                color: theme.colors.txtblue,
                fontSize: 14,
                fontWeight: '500',
              }}>
              {item.title}
            </Text>
            <View
              style={{
                marginTop: 4,
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}>
              <Text style={[styles.inputStyles, {fontSize: 12}]}>
                {item.location}
              </Text>
            </View>
          </View>
        )}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // style={{ backgroundColor:'rgba(64, 77, 97, 1)' }}
        onRequestClose={() => {
          setmodalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, {height: 248}]}>
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
                onPress={() => {
                  setexsisting(false);
                  setmodalVisible(false);
                }}>
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
              <TouchableOpacity
                onPress={() => {
                  setexsisting(true);
                  setmodalVisible(false);
                    setCreateEvent(true);
                    setTitle(eventId._id),
                    setLocation(eventId.location),
                    setDescription(eventId.description),
                    setTitle(eventId.title);
                }}
                style={[styles.btn, {width: '90%'}]}>
                <Text
                  style={
                    (styles.email,
                    {fontSize: 18, color: theme.colors.labelColor})
                  }>
                  Edit My Event
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={createEvent}
        // style={{ backgroundColor:'rgba(64, 77, 97, 1)' }}
        onRequestClose={() => {
          setCreateEvent(!createEvent);
        }}>
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              {
                height: exsisting ? 560 : 472,
              },
            ]}>
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
                onPress={() => {
                  setexsisting(false)
                  setCreateEvent(false)
                }}>
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
                  Event Details
                </Text>
              </View>
              <TouchableOpacity
                style={{flex: 0.2, alignItems: 'center', alignSelf: 'center'}}
                // onPress={() => setCreateEvent(false)}
                onPress={() => {
                  exsisting ? onUpdateevent() : onevent(), setLoading(true);
                }}
                >
                {exsisting ? (
                  loading ? (
                    <ActivityIndicator
                      animating
                      color={theme.colors.primary}
                      size={25}
                    />
                  ) : (
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
                      Save
                    </Text>
                  )
                ) : loading ? (
                  <ActivityIndicator
                    animating
                    color={theme.colors.primary}
                    size={25}
                  />
                ) : (
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
                    Add
                  </Text>
                )}

              </TouchableOpacity>
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={[stylem.container, {backgroundColor: '#F8F8F8'}]}
              contentContainerStyle={{justifyContent: 'center'}}
              keyboardShouldPersistTaps="handled">
              <View style={{marginTop: responsiveScreenHeight(4)}}></View>
              <View
                style={[
                  stylem.maincontainer,
                  {
                    borderColor:
                      emailMessage !== '' ? 'tomato' : theme.colors.borderColor,
                  },
                ]}>
                <View style={stylem.textInputStyle}>
                  <FloatingLabelInput
                    label={'Title'}
                    value={title}
                    onChangeText={value => setTitle(value)}
                    containerStyles={{padding: 5}}
                    labelStyles={stylem.labelStyle}
                    inputStyles={{width: '100%'}}
                  />
                </View>
                {title !== '' ? (
                  <TouchableOpacity onPress={() => setTitle('')}>
                    <Image
                      source={cross}
                      style={{height: 24, width: 24, marginRight: 10}}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>

              <View style={{marginTop: responsiveScreenHeight(1)}}></View>
              <View
                style={[
                  stylem.maincontainer,
                  {
                    borderColor:
                      emailMessage !== '' ? 'tomato' : theme.colors.borderColor,
                  },
                ]}>
                <View style={stylem.textInputStyle}>
                  <FloatingLabelInput
                    label={'Location'}
                    value={location}
                    onChangeText={value => setLocation(value)}
                    containerStyles={{padding: 5}}
                    labelStyles={stylem.labelStyle}
                    inputStyles={{width: '100%'}}
                  />
                </View>
                {location !== '' ? (
                  <TouchableOpacity onPress={() => setLocation('')}>
                    <Image
                      source={cross}
                      style={{height: 24, width: 24, marginRight: 10}}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>

              <View style={{marginTop: responsiveScreenHeight(1)}}></View>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{width: '48%'}}>
                  <View
                    style={[
                      stylem.nameField,
                      {
                        borderColor:
                          fNameMessage !== ''
                            ? 'tomato'
                            : theme.colors.borderColor,
                      },
                    ]}>
                    <View style={stylem.nametext}>
                      <FloatingLabelInput
                        label={'Starts'}
                        value={start}
                        onChangeText={value => setStart(value)}
                        containerStyles={{padding: 5}}
                        labelStyles={stylem.labelStyle}
                        inputStyles={{width: '100%'}}
                      />
                    </View>
                  </View>
                  {/* {fNameMessage !== '' && <Errors errors={fNameMessage} />} */}
                </View>
                <View style={{width: '48%'}}>
                  <View
                    style={[
                      stylem.nameField,
                      {
                        borderColor:
                          lNameMessage !== ''
                            ? 'tomato'
                            : theme.colors.borderColor,
                      },
                    ]}>
                    <View style={stylem.textInputStyle}>
                      <FloatingLabelInput
                        label={'Ends'}
                        value={end}
                        onChangeText={value => setEnd(value)}
                        containerStyles={{padding: 5}}
                        labelStyles={stylem.labelStyle}
                        inputStyles={{width: '100%'}}
                      />
                    </View>
                  </View>
                  {/* {lNameMessage !== '' && <Errors errors={lNameMessage} />} */}
                </View>
              </View>

              <View style={{marginTop: responsiveScreenHeight(1)}}></View>

              <View
                style={[
                  stylem.maincontainer,
                  {
                    borderColor:
                      emailMessage !== '' ? 'tomato' : theme.colors.borderColor,
                  },
                ]}>
                <View style={stylem.textInputStyle}>
                  <FloatingLabelInput
                    label={'Repeats'}
                    value={repeats}
                    onChangeText={value => setRepeats(value)}
                    containerStyles={{padding: 5}}
                    labelStyles={stylem.labelStyle}
                    inputStyles={{width: '100%'}}
                  />
                </View>
                {repeats !== '' ? (
                  <TouchableOpacity onPress={() => setRepeats('')}>
                    <Image
                      source={cross}
                      style={{height: 24, width: 24, marginRight: 10}}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity>
                    <Image
                      source={down}
                      style={{height: 24, width: 24, marginRight: 10}}
                    />
                  </TouchableOpacity>
                )}
              </View>

              <View style={{marginTop: responsiveScreenHeight(1)}}></View>
              <View
                style={[
                  stylem.maincontainer,
                  {
                    borderColor:
                      emailMessage !== '' ? 'tomato' : theme.colors.borderColor,
                  },
                ]}>
                <View style={stylem.textInputStyle}>
                  <FloatingLabelInput
                    label={'Description'}
                    value={description}
                    multiline={true}
                    onChangeText={value => setDescription(value)}
                    containerStyles={{padding: 5, height: 80}}
                    labelStyles={stylem.labelStyle}
                    inputStyles={{width: '100%'}}
                  />
                </View>
                {description !== '' ? (
                  <TouchableOpacity onPress={() => setDescription('')}>
                    <Image
                      source={cross}
                      style={{height: 24, width: 24, marginRight: 10}}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>
              {exsisting ? (
                <TouchableOpacity
                  onPress={() => {
                    ondeleteEvent(), 
                    setLoading(true)}}>
                  <Text
                    style={[
                      styles.inputStyles,
                      {
                        marginTop: 32,
                        textAlign: 'center',
                        fontWeight: '700',
                        fontFamily: Fonts.DMBold,
                        color: '#FF5959',
                      },
                    ]}>
                    Delete this Event
                  </Text>
                </TouchableOpacity>
              ) : (
                <></>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

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
const mapStateToProps = state => {
  const {userData} = state.auth;
  const {status, message, isLoading, errMsg, isSuccess, activityData} =
    state.events;
  return {
    status,
    message,
    isLoading,
    errMsg,
    isSuccess,
    userData,
    activityData,
  };
};
export default connect(mapStateToProps, {
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent,
})(Events);
