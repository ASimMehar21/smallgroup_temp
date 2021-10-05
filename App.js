/* eslint-disable prettier/prettier */
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persister, store} from './src/redux/store';
import AppNav from './src/navigation/AppNav';
import {View, YellowBox} from 'react-native';
import theme from './src/theme';
import {ThemeProvider} from 'react-native-elements';
YellowBox.ignoreWarnings(['']);
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <ThemeProvider theme={theme}>
          <AppNav />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
export default App;
