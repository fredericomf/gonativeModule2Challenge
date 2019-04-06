import React from 'react';
import { Text, View } from 'react-native';

import Header from '~/components/Header';

import styles from './styles';

const Issues = () => (
  <View>
    <Header title="NAME OF REPOSITORY" previousFrame="Repositories" />
    <Text>Issues page</Text>
  </View>
);

export default Issues;
