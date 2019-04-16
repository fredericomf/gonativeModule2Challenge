import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Linking } from 'react-native';

import ListItem from '~/components/ListItem';

export default class IssueItem extends Component {
  static propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string,
      organization: PropTypes.string,
      avatar: PropTypes.string,
    }).isRequired,
  };

  openIssue = async (url) => {
    await Linking.openURL(url);
  };

  render() {
    const { data } = this.props;

    return (
      <ListItem
        title={data.title}
        subTitle={data.user.login}
        image={data.user.avatar_url}
        onPress={() => this.openIssue(data.html_url)}
      />
    );
  }
}
