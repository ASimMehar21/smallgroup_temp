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
import {edit, background,next} from '../../assets';
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
const profile = props => {
  const {height} = Dimensions.get('window');
  const [loading, setLoading] = useState(false);
  const [url, seturl] = useState();
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
        var mapped = source.map(item => seturl(item.uri));
        // seturl(source.);
      }
    });
  };
  async function imgePicker() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      //   this.setState({img: res.uri});

      console.log(res.uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header
        backgroundColor="white"
        containerStyle={{borderBottomWidth: 0,alignSelf:'center'}}
        leftComponent={<HeaderLeftComponent navigation={navigation} />}
        rightComponent={<HeaderRight image={next} style={{width:112,height:48,left:responsiveScreenWidth(2.4)}} />}
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
          disabled={loading}
          onPress={() => navigation.navigate('setup')}
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
              Add Photo
            </Text>
          )}
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
export default profile;
