import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const ListItem = ({ title, subTitle }) => (
  <View style={styles.container}>
    <Image />
    <View style={styles.info}>
      <Text style={styles.title} text={title} />
      <Text style={styles.subTitle} text={subTitle} />
    </View>
    <Icon name="chevron-right" style={styles.icon} />
  </View>
);

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default ListItem;
