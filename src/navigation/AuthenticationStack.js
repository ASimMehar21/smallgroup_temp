import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import Signin from '../screens/Signin';
import Splash from '../screens/Splash';
import {MainBundlePath} from 'react-native-fs';
import main from '../screens/Group/main';
import createGroup from '../screens/Group/createGroup';
import joinGroup from '../screens/Group/joinGroup';
import Invite from '../screens/Group/Invite';
import profile from '../screens/Group/profile';
import setup from '../screens/Group/setup';

const Stack = createStackNavigator();

const AuthenticationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        animationTypeForReplace: 'pop',
        headerShown: false,
      }}>
      <Stack.Screen component={Splash} name="Splash" />
      <Stack.Screen component={Signin} name="Signin" />
      <Stack.Screen component={SignupScreen} name="Signup" />
      <Stack.Screen component={main} name="main" />
      <Stack.Screen component={createGroup} name="createGroup" />
      <Stack.Screen component={joinGroup} name="joinGroup" />
      <Stack.Screen component={Invite} name="Invite" />
      <Stack.Screen component={profile} name="profile" />
      <Stack.Screen component={setup} name="setup" />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
