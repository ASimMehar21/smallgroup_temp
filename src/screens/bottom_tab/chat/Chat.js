/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import EmptyChat from './empty_chat';
import ChatList from './chatList';
import InputField from './inputField';
import styles from '../../Signin/styles';
import {Header} from 'react-native-elements';
import DropdownHead from '../../../components/DropdownHeader';
import HeaderRight from '../../../components/HeaderRight';
import {add} from '../../../assets/index'
export default function Chat(props) {
  return (
    <View style={{flex: 1,backgroundColor:'white'}}>
      <Header 
        backgroundColor="white"
        containerStyle={{borderBottomWidth: 0,alignSelf:'center',height:48,borderBottomWidth:0.3,borderBottomColor:'#E1E3E6'}}
        centerComponent={<DropdownHead />}
        // rightComponent={<HeaderRight navigation={props.navigation} image={add} />}
       />
      <ChatList />
      {/* <EmptyChat text = { 'What a nice place to start a conversation!'}/> */}
      {/* <View style={styles.divider} /> */}
      <InputField />
    </View>
  );
}
