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
import {edit, confetti} from '../../assets';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import LottieView from 'lottie-react-native';
const setup = props => {
  const {height} = Dimensions.get('window');
  const [loading, setLoading] = useState(false);
  const [url, seturl] = useState();
  const [contacts, setcontacts] = useState([
    {id: 0, name: 'Dianne Johnson', mail: 'dianne99@email.com'},
    {id: 0, name: 'Dianne Johnson', mail: 'dianne99@email.com'},
    {id: 0, name: 'Dianne Johnson', mail: 'dianne99@email.com'},
  ]);
  const navigation = props.navigation;

  return (
    <View style={{flex: 1, backgroundColor: '#4E73F8'}}>
      <Header
        backgroundColor="#4E73F8"
        containerStyle={{borderBottomWidth: 0}}
      />
      {/* <Confetti
        isEnabled={true}
        imageComponent={ */}
      {/* <ImageBackground
        source={confetti}
        // resizeMode="contain"
        borderRadius={36}
        style={{
          //   justifyContent: 'center',
          backgroundColor: '#4E73F8',
          flex: 1,
          //   opacity: 1,
        }}> */}
      <View style={{marginTop: responsiveScreenHeight(30)}}></View>
      <LottieView
        source={require('../../utils/confetti.json')}
        style={{
          //   height: 300,
          //   width: responsiveScreenHeight(100),
          backgroundColor: '#4E73F8',
          alignSelf: 'center',
          flex: 1,
        }}
        autoPlay
        loop
      />
      <View style={{width: '100%'}}>
        <Text
          style={[
            styles.headerText,
            {
              // width: responsiveScreenWidth(50),
              textAlign: 'center',
              alignSelf: 'center',
              color: 'white',
            },
          ]}>
          Yay! You’re set up!
        </Text>
        <Text
          style={[
            styles.smallheaderText,
            {
              width: responsiveScreenWidth(63),
              alignSelf: 'center',
              textAlign: 'center',
              color: 'white',
            },
          ]}>
          Enjoy a better way to chat, manage events and share prayers with your
          small group.
        </Text>
      </View>

      <View
        style={[
          styles.nextButtonStyle,
          {
            alignSelf: 'center',
            width: '90%',
            position: 'absolute',
            bottom: responsiveHeight(8),
            backgroundColor: '#FFFFFF',
          },
        ]}>
        <TouchableOpacity
          activeOpacity={0.7}
          disabled={loading}
          //   onPress={navigation.navigate('setup')}
          // style={styles.nextButtonStyle}
        >
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
              Let’s go!
            </Text>
          )}
        </TouchableOpacity>
      </View>
      {/* </ImageBackground> */}
      {/* }
      /> */}
    </View>
  );
};
export default setup;
