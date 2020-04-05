import React from 'react';
require('react-native').unstable_enableLogBox();
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import '~/config/ReactotronConfig';
import Routes from '~/routes';
import { StatusBar } from 'react-native';
import { store, persistor } from '~/store';
export default function src() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
