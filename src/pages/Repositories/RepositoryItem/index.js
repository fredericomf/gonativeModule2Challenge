import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListItem from '~/components/ListItem';

export default class RepositoryItem extends Component {
  static propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string,
      organization: PropTypes.string,
      avatar: PropTypes.string,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  navigateToIssues = () => {
    const { data, navigation } = this.props;

    navigation.navigate('Issues');
  };

  render() {
    const { data } = this.props;

    return (
      <ListItem
        title={data.name}
        subTitle={data.organization}
        image={data.avatar}
        onPress={this.navigateToIssues}
      />
    );
  }
}
