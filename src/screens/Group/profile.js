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
  ImageBackground,
} from 'react-native';
import {Header} from 'react-native-elements';
import theme from '../../theme';
import {Fonts} from '../../utils/Fonts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {edit, background, next} from '../../assets';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import HeaderLeftComponent from '../../components/HeaderLeftComponent';
import HeaderRight from '../../components/HeaderRight';
import * as ImagePicker from 'react-native-image-picker';
import {requestPermission} from 'react-native-contacts';
import DocumentPicker from 'react-native-document-picker';
import {connect} from 'react-redux';
import {CreateGroup} from '../../redux/actions/group';
import ImgToBase64 from 'react-native-image-base64';
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-community/async-storage';
import Snackbar from 'react-native-snackbar';
const profile = props => {
  const {height} = Dimensions.get('window');
  const [loading, setLoading] = useState(false);
  const [url, seturl] = useState();
  const [baseurl, setbaseurl] = useState();
  const [contacts, setcontacts] = useState([
    {id: 0, name: 'Dianne Johnson', mail: 'dianne99@email.com'},
    {id: 0, name: 'Dianne Johnson', mail: 'dianne99@email.com'},
    {id: 0, name: 'Dianne Johnson', mail: 'dianne99@email.com'},
  ]);
  const navigation = props.navigation;
  const requestImagePermission = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      //   console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = response.assets;

        console.log('response', source);
        var mapped = source.map(item => {
          seturl(item.uri),
            RNFS.readFile(item.uri, 'base64').then(
              res => setbaseurl(`data:image/png;base64,${res}`),
              console.log('baseurl', baseurl),
            );
        });
        console.log('uri', JSON.stringify(url));
      }
    });
  };
  async function groupCreation() {
    console.log('User Data', props.userData);
    const groupName = await AsyncStorage.getItem('code');
    console.log(groupName);
    const params = {
      ownername: props.userData.firstName + props.userData.lastName,
      groupname: groupName ? groupName : '',
      groupdisplaypicture: baseurl,
    };
    const id = props.userData._id;
    await props.CreateGroup(params, id);
    // if (props.isSuccess) {
    setLoading(false);
    navigation.navigate('setup');
    // Snackbar.show({
    //   text: 'Group created succesfully',
    //   backgroundColor: theme.colors.primary,
    //   textColor: 'white',
    // });
    // } else {
    //   setLoading(false);
    //   Snackbar.show({
    //     text: JSON.stringify(props.message),
    //     backgroundColor: '#F14336',
    //     textColor: 'white',
    //   });
    // }
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header
        backgroundColor="white"
        containerStyle={{borderBottomWidth: 0}}
        leftComponent={<HeaderLeftComponent navigation={navigation} />}
        rightComponent={
          <HeaderRight
            onPress={() => groupCreation()}
            image={next}
            style={{height: 48, width: 118, left: responsiveScreenWidth(2.4)}}
          />
        }
      />
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
          Add a Photo
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
          Nice hair day today!
        </Text>
      </View>
      <View style={{marginTop: responsiveScreenHeight(8)}}></View>
      <TouchableOpacity
        style={{alignSelf: 'center'}}
        onPress={requestImagePermission}>
        <ImageBackground
          // resizeMode="contain"
          source={url ? {uri: url} : background}
          borderRadius={36}
          style={{
            height: 72,
            width: 72,
            justifyContent: 'center',
            borderRadius: 36,
            // backgroundColor: 'tomato',
          }}>
          {!url && (
            <Text
              style={[
                styles.mediumheaderText,
                {color: theme.colors.txtcolor, alignSelf: 'center'},
              ]}>
              BL
            </Text>
          )}
        </ImageBackground>
        <LinearGradient
          colors={['#6989FE', '#3C64F4']}
          style={{
            height: 27,
            width: 27,
            backgroundColor: '#3C64F4',
            borderRadius: 13.5,
            bottom: responsiveScreenHeight(3),
            alignSelf: 'flex-end',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            <Image
              source={edit}
              style={{
                height: 12,
                width: 12,
              }}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <LinearGradient
        colors={['#6989FE', '#3C64F4']}
        style={[
          styles.nextButtonStyle,
          {
            alignSelf: 'center',
            width: '90%',
            position: 'absolute',
            bottom: responsiveHeight(9),
          },
        ]}>
        <TouchableOpacity
          activeOpacity={0.7}
          disabled={baseurl ? false : true}
          // onPress={() => navigation.navigate('setup')}
          onPress={() => {
            groupCreation(), setLoading(true);
          }}
          // style={styles.nextButtonStyle}
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
              {baseurl ? 'Continue' : 'Add Photo'}
            </Text>
          )}
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
const mapStateToProps = state => {
  const {userData} = state.auth;
  const {status, message, isLoading, errMsg, isSuccess} = state.group;
  return {status, message, isLoading, errMsg, isSuccess, userData};
};
export default connect(mapStateToProps, {CreateGroup})(profile);
