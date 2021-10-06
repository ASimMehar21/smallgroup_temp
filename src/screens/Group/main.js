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
import AsyncStorage from '@react-native-community/async-storage';
import theme from '../../theme';
import styles from './styles';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from 'react-native-elements';
import HeaderLeftComponent from '../../components/HeaderLeftComponent';
import HeaderRight from '../../components/HeaderRight';
import {cg, cgc, jg, jgc} from '../../assets';
import {Fonts} from '../../utils/Fonts';
const main = props => {
  const [createGroup, setcreateGroup] = useState(false);
  const [joinGroup, setjoinGroup] = useState(false);
  const {height} = Dimensions.get('window');
  const [loading, setLoading] = useState(false);
  const [screen, setscreen] = useState('');
  const navigation = props.navigation;
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header
        backgroundColor="white"
        containerStyle={{borderBottomWidth: 0}}
        leftComponent={<HeaderLeftComponent navigation={navigation} />}
        // rightComponent={<HeaderRight onPress={navigation} />}
      />
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          flex: 1,
        }}>
        <View
          style={{
            flex: 0.2,
          }}></View>
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
            {`Join or Create \n a Group`}
          </Text>
          <Text style={styles.smallheaderText}>Life is better with others</Text>
        </View>
        <View
          style={{
            flex: 0.2,
          }}></View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setcreateGroup(!createGroup),
                setjoinGroup(false),
                setscreen('createGroup');
            }}
            style={{width: '100%', alignSelf: 'center', alignItems: 'center'}}>
            <Image
              source={createGroup ? cgc : cg}
              resizeMode="contain"
              style={{
                height: responsiveHeight(18),
                width: responsiveScreenWidth(90),
                // backgroundColor: 'tomato',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setcreateGroup(false),
                setjoinGroup(!joinGroup),
                setscreen('joinGroup');
            }}
            style={{
              width: '100%',
              alignSelf: 'center',
              alignItems: 'center',
              top: 10,
            }}>
            <Image
              source={joinGroup ? jgc : jg}
              resizeMode="contain"
              style={{
                height: responsiveHeight(18),
                width: responsiveScreenWidth(90),
                // backgroundColor: 'tomato',
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: responsiveHeight(8),
            width: '100%',
          }}>
          <LinearGradient
            colors={
              createGroup || joinGroup
                ? ['#6989FE', '#3C64F4']
                : ['#6989FE', '#3C64F4']
            }
            locations={createGroup && joinGroup ? [0, 1] : [1, 1]}
            style={[
              styles.nextButtonStyle,
              {opacity: createGroup || joinGroup ? 1 : 0.4},
            ]}>
            <TouchableOpacity
              activeOpacity={0.7}
              disabled={screen == '' ? true : false}
              onPress={() => {
                // cg
                //   ? navigation.navigate('createGroup')
                //   :
                navigation.navigate(screen);
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
      </View>
    </View>
  );
};
export default main;
