/* eslint-disable prettier/prettier */
import React, {useEffect, useState, useRef} from 'react';
import {View, LogBox, PermissionsAndroid, NativeModules} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import SignupScreen from '../screens/SignupScreen';

import BottomTab from './BottomTab';
import Signin from '../screens/Signin';
import Splash from '../screens/Splash';

//redux
// import {connect} from 'react-redux';

const Stack = createStackNavigator();

function AppNav({}) {
  let initial = 'Root';

  useEffect(() => {}, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initial}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false, animationEnabled: true}}
        />

        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{headerShown: false, animationEnabled: true}}
        />

        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            headerShown: false,
            animationEnabled: true,
          }}
        />

        <Stack.Screen name="Root" options={{headerShown: false}}>
          {props => <BottomTab {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const mapStateToProps = state => {
//   const {user, isLoggedIn, token} = state.auth;
//   return {
//     user,
//     isLoggedIn,
//     token,
//   };
// };
// export default connect(mapStateToProps, {getLocation})(AppNav);
export default AppNav;
