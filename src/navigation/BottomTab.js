/* eslint-disable prettier/prettier */
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';

import theme from '../theme';
import {createStackNavigator} from '@react-navigation/stack';
import {
  calender,
  cloud,
  person,
  people,
  message,
  } from '../assets/index'

import Chat from '../screens/bottom_tab/chat/index'
import Event from '../screens/bottom_tab/Create_event/index'
import Prayer from '../screens/bottom_tab/Prayers/index'
import Group from '../screens/bottom_tab/Group/index'
import Profile from '../screens/bottom_tab/profile/index'
import Member from '../screens/bottom_tab/Group/member'
import Details from '../screens/bottom_tab/Group/group_details'
import EditDetails from '../screens/bottom_tab/Group/edit_details'

import {Alert,Image} from 'react-native';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

//Home Stack
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
//Challenges Stack
const groupStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Group"
        component={Group}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Member"
        component={Member}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditDetails"
        component={EditDetails}
        options={{headerShown: false}}
      />
      {/*<Stack.Screen
        name="SearchDetail"
        component={SearchDetail}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};
//Camera Stack
const CameraStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
//Chat Stack
const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Conversation"
        component={Conversation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
//Notif Stack
const NotificationStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotificationDetail"
        component={NotificationDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const INITIAL_ROUTE_NAME = 'Chat';

function BottomTabNavigator({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      activeColor={theme.colors.txtcolor}
      inactiveColor={theme.colors.labelColor}
      backBehavior="initialRoute"
      // labeled={false}
      tabBarOptions={{
        // activeBackgroundColor:"rgba(78, 115, 248, 0.08)",
        activeBackgroundColor:"red",
        
        // activeTintColor: txtcolor,
        // headerShown: false,
      }}
      barStyle={{backgroundColor: 'white'}}>
        
      <Tab.Screen
        name="Chat"
        component={HomeStack}
        options={{
          // tabBarColor:'rgba(78, 115, 248, 0.08)',
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, size}) => (
            <Image source ={message} style={{width:24,height:24,tintColor:color}}  />
          ),
        }}
      />
      <Tab.Screen
        name="Event"
        component={Event}
        options={{
          tabBarIcon: ({color}) => (
            <Image source ={calender} style={{width:24,height:24,tintColor:color}} />

          ),
        }}
      />
      <Tab.Screen
        name="Prayer"
        component={Prayer}
        options={{
          tabBarLabel: 'Prayer',
          tabBarIcon: ({color}) => (
            <Image source ={cloud} style={{width:24,height:24,tintColor:color}}  />

          ),
        }}
      />

      <Tab.Screen
        name="Group"
        children={groupStack}
        options={{
          tabBarIcon: ({color}) => (
            <Image source ={people} style={{width:24,height:24,tintColor:color}} />

          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Image source ={person} 
            style={{width:24,height:24,tintColor:color}} />

          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
