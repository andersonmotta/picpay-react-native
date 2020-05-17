import 'react-native-gesture-handler';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import NavigationService from '~/services/navigation';

import { store, persistor } from './store';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer
          ref={(navigatorRef) => NavigationService.setNavigator(navigatorRef)}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
