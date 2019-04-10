import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, Text, TouchableOpacity, View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const ListItem = ({
  title, subTitle, image, onPress,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.actionButton}>
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <Icon name="angle-right" style={styles.icon} />
    </View>
  </TouchableOpacity>
);

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ListItem;
