import React, { Component } from 'react';

// STUDY_NODE: withNavigation is used in cases of is necessary to access the navigation flux.
import { withNavigation } from 'react-navigation';

import PropTypes from 'prop-types';

import {
  AsyncStorage, Text, TouchableOpacity, View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    previousFrame: PropTypes.string,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  signOut = async () => {
    // STUDY_NOTE: It's possible to get navigation because we're using 'withNavigation' method
    const { navigation, previousFrame } = this.props;
    navigation.navigate(previousFrame);
  };

  render() {
    const { title, previousFrame } = this.props;

    return (
      <View style={styles.container}>
        {previousFrame ? (
          <TouchableOpacity onPress={this.signOut}>
            <Icon name="chevron-left" size={16} style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <View style={styles.left} />
        )}

        <Text style={styles.title}>{title}</Text>
        <View style={styles.right} />
      </View>
    );
  }
}

export default withNavigation(Header);
