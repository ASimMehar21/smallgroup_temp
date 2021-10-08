/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React , {useState} from 'react'
import { View,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Image,
    Modal,
    FlatList,
    ImageBackground,
    ActivityIndicator,
    ScrollView,
    PermissionsAndroid,
    KeyboardAvoidingView} from 'react-native'
import theme from '../../../theme';
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
  } from 'react-native-responsive-dimensions';
  import {
    invite,
    email_icon, 
    close, 
    next,
    add,
    userg,
    userg2,
    userm,
    arrow,
    cross,
    create
} from '../../../assets';
import {Fonts} from '../../../utils/Fonts';
import styles from './styles';
import stylesg from '../../Group/styles';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import LinearGradient from 'react-native-linear-gradient';
import HeaderCenterComponent from '../../../components/HeaderCenterComponent';
import HeaderLeftComponent from '../../../components/HeaderLeftComponent';
import HeaderRight from '../../../components/HeaderRight';
import {Header} from 'react-native-elements';
import DropdownHead from '../../../components/DropdownHeader';
import { Calendar } from 'react-native-calendars'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Snackbar from 'react-native-snackbar';
import AsyncStorage from '@react-native-community/async-storage';

import Contacts from 'react-native-contacts';
//redux
import {connect} from 'react-redux';
import {emailInvitation} from '../../redux/actions/group';

export default function Group(props) {

    const [modalVisible, setmodalVisible] = useState(false)
    const [modalInvite, setmodalInvite] = useState(false)
    const [code, setcode] = useState('');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [contacts, setcontacts] = useState([]);
    const [loadingContacts, setLoadingContacts] = useState(false);

    // useEffect(() => {
    //     const code = props.route.params.code;
    //     console.log(code);
    //     AsyncStorage.setItem('code', code);
    //   }, []);


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
        //   await props.emailInvitation(params, props.userData._id);
    
          setLoading(false);
          setmodalInvite(false)
        //   navigation.navigate('profile');
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
        <ScrollView style={{backgroundColor:'white'}}>
            <Header 
                backgroundColor="white"
                containerStyle={{borderBottomWidth: 0,alignSelf:'center',height:48,borderBottomWidth:0.3,borderBottomColor:'#E1E3E6'}}
                centerComponent={<DropdownHead />}
                rightComponent={<HeaderRight onPress={()=>{
                    setmodalVisible(false),
                    setmodalInvite(true)
                }}  image={create} style={{width:32,height:32,marginTop:12}} />}
            />
            <View style={styles.container}>
                <Text style={[styles.tabtext,{color:theme.colors.textHeader,marginTop:responsiveScreenHeight(3)}]} >People</Text>
                <View style={{flexDirection:'row',marginTop:12,flex:1}}>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Member')} style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:0.3}}>
                        <Image 
                            source={userg2}
                            style={{width:40,height:40}}
                        />
                    </View>
                    <View style={{flex:2,flexDirection:'row'}}>
                        <Text style={[styles.tabtext,{color:theme.colors.gray,left:10,alignSelf:'center'}]}>Brianna Louise</Text>
                    </View>
                    <View style={{flex:0.18,justifyContent:'center'}}>
                        <Image 
                            source={arrow}
                            style={{width:16,height:14,alignSelf:'center'}}
                    />
                    </View>
                </TouchableOpacity>
            
            </View>
                <View style={styles.divider} />
                <View style={{flexDirection:'row',marginTop:8,flex:1}}>
                    <TouchableOpacity onPress={()=> props.navigation.navigate('Member')} style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:0.3}}>
                            <Image 
                                source={userg2}
                                style={{width:40,height:40}}
                            />
                        </View>
                        <View style={{flex:2,flexDirection:'row'}}>
                            <Text style={[styles.tabtext,{color:theme.colors.gray,left:10,alignSelf:'center'}]}>Brianna Louise</Text>
                        </View>
                        <View style={{flex:0.18,justifyContent:'center'}}>
                            <Image 
                                source={arrow}
                                style={{width:16,height:14,alignSelf:'center'}}
                        />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.divider} />
                <View style={{flexDirection:'row',marginTop:8,flex:1}}>
                    <TouchableOpacity onPress={()=> props.navigation.navigate('Member')} style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:0.3}}>
                            <Image 
                                source={userg2}
                                style={{width:40,height:40}}
                            />
                        </View>
                        <View style={{flex:2,flexDirection:'row'}}>
                            <Text style={[styles.tabtext,{color:theme.colors.gray,left:10,alignSelf:'center'}]}>Brianna Louise</Text>
                        </View>
                        <View style={{flex:0.18,justifyContent:'center'}}>
                            <Image 
                                source={arrow}
                                style={{width:16,height:14,alignSelf:'center'}}
                        />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.divider} />
                <View style={{flexDirection:'row',marginTop:8,flex:1}}>
                    <TouchableOpacity onPress={()=> props.navigation.navigate('Member')} style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:0.3}}>
                            <Image 
                                source={userg2}
                                style={{width:40,height:40}}
                            />
                        </View>
                        <View style={{flex:2,flexDirection:'row'}}>
                            <Text style={[styles.tabtext,{color:theme.colors.gray,left:10,alignSelf:'center'}]}>Brianna Louise</Text>
                        </View>
                        <View style={{flex:0.18,justifyContent:'center'}}>
                            <Image 
                                source={arrow}
                                style={{width:16,height:14,alignSelf:'center'}}
                        />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.divider} />
                <View style={{flexDirection:'row',marginTop:8,flex:1}}>
                    <TouchableOpacity onPress={()=> props.navigation.navigate('Member')} style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:0.3}}>
                            <Image 
                                source={userg2}
                                style={{width:40,height:40}}
                            />
                        </View>
                        <View style={{flex:2,flexDirection:'row'}}>
                            <Text style={[styles.tabtext,{color:theme.colors.gray,left:10,alignSelf:'center'}]}>Brianna Louise</Text>
                        </View>
                        <View style={{flex:0.18,justifyContent:'center'}}>
                            <Image 
                                source={arrow}
                                style={{width:16,height:14,alignSelf:'center'}}
                        />
                        </View>
                    </TouchableOpacity>
                
                </View>
                <View style={styles.divider} />
                <View style={{flexDirection:'row',marginTop:8,flex:1}}>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Member')} style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:0.3}}>
                        <Image 
                            source={userg2}
                            style={{width:40,height:40}}
                        />
                    </View>
                    <View style={{flex:2,flexDirection:'row'}}>
                        <Text style={[styles.tabtext,{color:theme.colors.gray,left:10,alignSelf:'center'}]}>Brianna Louise</Text>
                    </View>
                    <View style={{flex:0.18,justifyContent:'center'}}>
                        <Image 
                            source={arrow}
                            style={{width:16,height:14,alignSelf:'center'}}
                    />
                    </View>
                </TouchableOpacity>
            
            </View>
                <View style={styles.divider} />
                    <Text style={[styles.tabtext,{color:theme.colors.textHeader,marginTop:40}]} >Settings</Text>
                    <TouchableOpacity onPress={()=> props.navigation.navigate('Details')}  style={{flexDirection:'row',marginTop:16}}>
                        <Text style={[styles.inputStyles,{fontSize:18,width:'95%'}]}>Group Details</Text>
                        <Image 
                            source={arrow}
                            style={{width:16,height:14}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=> setmodalVisible(true)} style={{flexDirection:'row',marginTop:28}}>
                        <Text style={[styles.inputStyles,{fontSize:18,width:'95%'}]}>Create a New Group</Text>
                        <Image 
                            source={add}
                            style={{width:16,height:16,alignSelf:'center'}}
                        />
                    </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                // style={{ backgroundColor:'rgba(64, 77, 97, 1)' }}
                onRequestClose={() => {
                    setmodalVisible(!modalVisible)
                }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{width:'100%',height:48,flexDirection:'row',backgroundColor:'white',borderTopLeftRadius:15,borderTopRightRadius:5}}>
                            <TouchableOpacity style={{flex:0.2,alignItems:'center',alignSelf:'center'}} onPress={()=> setmodalVisible(!modalVisible)}>
                                <Text style={[styles.tabtext,{height:'auto',fontFamily:Fonts.DMRegular,fontWeight:'400',color:theme.colors.txtblue}]}>Cancel</Text>
                            </TouchableOpacity>
                            <View style={{flex:0.6,alignItems:'center',alignSelf:'center'}}>
                                <Text style={[styles.tabtext,{height:'auto',fontSize:18,fontFamily:Fonts.DMBold,color:theme.colors.textHeader}]}>Create a New Group</Text>
                            </View>
                            <TouchableOpacity style={{flex:0.2}} onPress={()=> setmodalVisible(!modalVisible)}>
                                {/* <Text style={[styles.tabtext,{margin:12,fontFamily:Fonts.DMRegular,fontWeight:'400',color:theme.colors.txtblue}]}>Cancel</Text> */}
                            </TouchableOpacity>
                        </View>
    
                        <View style={[styles.divider,{marginTop:0}]} />
                    <KeyboardAwareScrollView>
                        <View style={{width:'90%',alignItems:'center',alignSelf:'center',marginTop:24}}>
                        <View style={stylesg.maincontainer}>
                            <View style={stylesg.textInputStyle}>
                                <FloatingLabelInput
                                label={'Group Name'}
                                value={code}
                                onChangeText={value => setcode(value)}
                                containerStyles={{padding: 5}}
                                labelStyles={stylesg.labelStyle}
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
                            {/* <Text
                            style={{
                                fontFamily: Fonts.DMRegular,
                                fontSize: 14,
                                fontWeight: '400',
                                color: theme.colors.labelColor,
                                marginTop: 5,
                            }}>
                            This is a 9-character code like “AB1CD34HG”
                            </Text> */}

                            <View
                            style={{
                                // borderWidth: 1,
                                marginTop: responsiveScreenHeight(5),
                                width: '100%',
                                // height: 224,
                                borderRadius: 8,
                                backgroundColor: '#dbe3fd',
                            }}>
                            <View
                                style={{
                                width: '90%',
                                alignSelf: 'center',
                                justifyContent: 'space-between',
                                marginTop: 20,
                                }}>
                                <Text
                                style={[stylesg.mediumheaderText, {color: theme.colors.txtcolor}]}>
                                Start with a 3 week free trial
                                </Text>
                                <Text
                                style={{
                                    marginTop: 5,
                                    fontFamily: Fonts.DMRegular,
                                    fontSize: 16,
                                    fontWeight: '400',
                                    color: theme.colors.labelColor,
                                    textAlign: 'left',
                                }}>
                                {`To ensure we can continue to provide great tools for you, each new group will cover a tiny cost.`}
                                </Text>
                                <Text
                                style={{
                                    marginTop: 20,
                                    fontFamily: Fonts.DMBold,
                                    fontSize: 16,
                                    fontWeight: '700',
                                    color: theme.colors.labelColor,
                                    textAlign: 'left',
                                }}>
                                {`Creating a new group will start an additional subscription.`}
                                </Text>
                                <LinearGradient
                                colors={
                                    code !== '' ? ['#6989FE', '#3C64F4'] : ['#6989FE', '#3C64F4']
                                }
                                locations={code !== '' ? [0, 1] : [1, 1]}
                                style={[
                                    stylesg.nextButtonStyle,
                                    {
                                    opacity: code !== '' ? 1 : 0.4,
                                    marginTop: responsiveHeight(6),
                                    bottom: 20,
                                    },
                                ]}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    disabled={code === '' ? true : false}
                                    // onPress={() => props.navigation.navigate('Invite')}
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
                                        Subscribe for $9.99 / year
                                    </Text>
                                    )}
                                </TouchableOpacity>
                                </LinearGradient>
                            </View>
                            </View>
                            <Text
                            style={{
                                fontFamily: Fonts.DMBold,
                                fontSize: 14,
                                fontWeight: '400',
                                color: theme.colors.txtcolor,
                                marginTop: responsiveScreenHeight(3),
                                alignSelf: 'center',
                            }}>
                            Redeem Code
                            </Text>
                        </View>
                    </KeyboardAwareScrollView>
                    </View>
                </View>
            </Modal>
        
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalInvite}
                // style={{ backgroundColor:'rgba(64, 77, 97, 1)' }}
                onRequestClose={() => {
                    setmodalInvite(!modalInvite)
                }}
                >
                  <View style={styles.centeredView}>
                    <View style={[styles.modalView,{height:436}]}>
                        <View style={{width:'100%',height:48,flexDirection:'row',backgroundColor:'white',borderTopLeftRadius:15,borderTopRightRadius:5}}>
                            <TouchableOpacity style={{flex:0.2,alignItems:'center',alignSelf:'center'}} onPress={()=> setmodalInvite(!modalInvite)}>
                                <Text style={[styles.tabtext,{height:'auto',fontFamily:Fonts.DMRegular,fontWeight:'400',color:theme.colors.txtblue}]}>Cancel</Text>
                            </TouchableOpacity>
                            <View style={{flex:0.6,alignItems:'center',alignSelf:'center'}}>
                                <Text style={[styles.tabtext,{height:'auto',fontSize:18,fontFamily:Fonts.DMBold,color:theme.colors.textHeader}]}>Invite Others</Text>
                            </View>
                            <TouchableOpacity style={{flex:0.2}} onPress={()=> setmodalInvite(!modalInvite)}>
                                {/* <Text style={[styles.tabtext,{margin:12,fontFamily:Fonts.DMRegular,fontWeight:'400',color:theme.colors.txtblue}]}>Cancel</Text> */}
                            </TouchableOpacity>
                        </View>
    
                        <View style={[styles.divider,{marginTop:0}]} />
                        <ScrollView>
                        <View style={{width:'90%',alignItems:'center',alignSelf:'center',marginTop:24}}>
                        <View style={stylesg.maincontainer}>
                            <View style={stylesg.textInputStyle}>
                                <FloatingLabelInput
                                label={'Email(s)'}
                                value={email}
                                onChangeText={value => setEmail(value)}
                                containerStyles={{padding: 5}}
                                labelStyles={stylesg.labelStyle}
                                inputStyles={{width: '100%'}}
                                onSubmitEditing={() => console.log('here')}
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
                                stylesg.nextButtonStyle,
                                {
                                    width:'100%',
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
                                    stylesg.nextButtonStyle,
                                    {
                                        width:'100%',
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
                                    <Text style={[stylesg.namestyle, {marginBottom: 3}]}>
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
                            style={[stylesg.nextButtonStyle, {width:'100%',opacity: email === '' ? 0.4 : 1}]}>
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
                                stylesg.nextButtonStyle,
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
                        </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        
        
        </ScrollView>
    )
}
