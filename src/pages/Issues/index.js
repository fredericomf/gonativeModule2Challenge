import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator, FlatList, TouchableOpacity, Text, View,
} from 'react-native';

import Header from '~/components/Header';

import IssueItem from './IssueItem';

import api from '~/services/api';

import styles from './styles';

export default class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    filterName: 'all',
    issues: [],
    loading: false,
  };

  async componentDidMount() {
    this.applyFilterAndUpdateIssuesData('all');
  }

  updateIssuesData = async (repositoryName) => {
    const issuesData = await api.get(`/repos/${repositoryName}/issues`);

    const { filterName } = this.state;

    const issues = issuesData.data.filter((issue) => {
      if (filterName === 'all') {
        return true;
      }

      return issue.state === filterName;
    });

    this.setState({ issues, loading: false });
  };

  async applyFilterAndUpdateIssuesData(filterName) {
    this.setState({
      filterName,
    });

    this.setState({ loading: true });
    const { navigation } = this.props;
    const { organization, name } = navigation.getParam('data');
    await this.updateIssuesData(`${organization}/${name}`);
  }

  renderListItem = ({ item }) => <IssueItem data={item} />;

  renderList = () => {
    const { issues } = this.state;

    /**
     * STUDY_NOTES:
     * FlatList is most indicated to introduce lists with React Native.
     * keyExtractor: As known, RN map need a unique key value to optimize updates. This key is recomended to be a string.
     * renderItem: A component to render the data.
     * onRefresh: Action triggered when user drag list start above it.
     *
     */
    return (
      <FlatList
        data={issues}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
      />
    );
  };

  render() {
    const { navigation } = this.props;
    const { filterName, loading } = this.state;

    const data = navigation.getParam('data');

    return (
      <View style={styles.container}>
        <Header title={data.name} previousFrame="Repositories" />

        <View style={styles.filter}>
          <TouchableOpacity
            style={[styles.button, styles.left]}
            onPress={() => {
              this.applyFilterAndUpdateIssuesData('all');
            }}
          >
            <Text style={filterName === 'all' ? styles.selectedButtonText : styles.buttonText}>
              Todas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.center]}
            onPress={() => {
              this.applyFilterAndUpdateIssuesData('open');
            }}
          >
            <Text style={filterName === 'open' ? styles.selectedButtonText : styles.buttonText}>
              Abertas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.right]}
            onPress={() => {
              this.applyFilterAndUpdateIssuesData('close');
            }}
          >
            <Text style={filterName === 'close' ? styles.selectedButtonText : styles.buttonText}>
              Fechadas
            </Text>
          </TouchableOpacity>
        </View>

        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
