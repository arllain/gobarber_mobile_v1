import React from 'react';
require('react-native').unstable_enableLogBox();
import '~/config/ReactotronConfig';
import Routes from '~/routes';
import { StatusBar } from 'react-native';

export default function src() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
