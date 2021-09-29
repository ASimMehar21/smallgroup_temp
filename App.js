import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persister, store} from './src/redux/store';
import AppNav from './src/navigation/AppNav';
import {View, YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['']);
const App = () => {
  return (
    <View style={{flex: 1}}>
      <AppNav />
    </View>
  );
};
export default App;
