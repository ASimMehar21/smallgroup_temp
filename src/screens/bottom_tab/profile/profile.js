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
  ImageBackground,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import theme from '../../../theme';
import {Fonts} from '../../../utils/Fonts';
import {userg, userg2, done, doc, download, lilg, userm} from '../../../assets';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import styles from './syles';
import LinearGradient from 'react-native-linear-gradient';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Detail from './Details';
import Setting from './setting';
import {LinearTextGradient} from 'react-native-text-gradient';
import HeaderCenterComponent from '../../../components/HeaderCenterComponent';
import HeaderLeftComponent from '../../../components/HeaderLeftComponent';
import HeaderRight from '../../../components/HeaderRight';
import {Header} from 'react-native-elements';
const Tab = createMaterialTopTabNavigator();

export default function Profile(props) {
  const [tog1, settog1] = useState(true);
  const [tog2, settog2] = useState(false);
  const [existing, setExisting] = useState(false);

  return (
    <View style={[styles.container]}>
      <Header
          backgroundColor="white"
          containerStyle={{borderBottomWidth: 0,alignSelf:'center',borderBottomWidth:0.5,borderBottomColor:'#F1F2F3'}}
          centerComponent={<HeaderCenterComponent name = {'Profile'} />}
          // leftComponent={<HeaderLeftComponent navigation={props.navigation} />}
          rightComponent={
          <TouchableOpacity onPress={()=>setExisting(!existing)}  style={{alignSelf:'flex-end',marginTop:12,right: responsiveScreenWidth(2.4),alignItems:'center'}} >
              {existing?
                <Text style={[styles.inputStyles,{
                    width:'auto',fontSize:16,marginTop:5,textAlign:'center',color:theme.colors.txtblue
                }]}
                >Save
                </Text>
              :
                <Text style={[styles.inputStyles,{
                    width:'auto',fontSize:16,marginTop:5,textAlign:'center',color:theme.colors.txtblue
                }]}
                >Edit
                </Text>
              }
              
          </TouchableOpacity>}
      />
      <Image source={userg2} style={styles.img} />
      <View>
        <Text style={styles.labelStyle}>Brianna Louise</Text>
        <Text
          style={[
            styles.labelStyle,
            {fontSize: 16, color: theme.colors.labelColor, marginTop: 0},
          ]}>
          Owner
        </Text>
      </View>
      <View style={styles.tabview}>
        {tog1 ? (
          <>
            <TouchableOpacity style={styles.activeTab}>
              <LinearTextGradient
                style={styles.tabtext}
                locations={[0, 1]}
                colors={['#6989FE', '#3C64F4']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Text>Details</Text>
              </LinearTextGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => settog1(false)}
              style={styles.offtab}>
              <Text style={[styles.tabtext, {color: theme.colors.labelColor}]}>
                Settings
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => settog1(true)}
              style={styles.offtab}>
              <Text style={[styles.tabtext, {color: theme.colors.labelColor}]}>
                Details
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.activeTab}>
              <LinearTextGradient
                style={styles.tabtext}
                locations={[0, 1]}
                colors={['#6989FE', '#3C64F4']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Text>Settings</Text>
              </LinearTextGradient>
            </TouchableOpacity>
          </>
        )}
        {/* <Tab.Navigator
            tabBarOptions={{
                indicatorStyle: { opacity:0 },
                activeTintColor: 'rgba(105, 137, 254, 1)',
                inactiveTintColor: '#757D8A',
                // pressColor: 'gray',
                labelStyle: { fontSize: 16, fontWeight: '700',fontFamily:Fonts.DMBold },
                // activeTabStyle: {
                //     fontWeight: 'bold',
                //     backgroundColor: 'red',
                // },
                tabStyle: { margin:4,height:40,backgroundColor:'white',borderRadius:8  },
                style: { height:52,width:343,alignSelf:'center', backgroundColor:'#F8F8F8',borderRadius:8,marginTop:17 },
            }}>
                <Tab.Screen name="Details" component={Detail} />
                <Tab.Screen name="Settings" component={Setting} />
            </Tab.Navigator> */}
      </View>
      <View style={{flex: 1}}>
        {tog1 ? <Detail edit = {(edit)=>setExisting(edit)} props={props} /> : <Setting props={props} />}
      </View>
    </View>
  );
}
