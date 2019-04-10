import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '~/components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '~/services/api';

import {
  ActivityIndicator,
  AsyncStorage,
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import RepositoryItem from './RepositoryItem';

import styles from './styles';

export default class Repositories extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    loading: false,
    repositoryName: '',
    error: false,
    repositories: [],
  };

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    const repositoriesData = await AsyncStorage.getItem('@GitIssue:repositoryData');

    if (repositoriesData) {
      const repositories = JSON.parse(repositoriesData);
      this.setState({ repositories });
    }
  };

  getRepositoryData = async (repositoryName) => {
    const repositoryData = await api.get(`/repos/${repositoryName}`);
    const { id, name, organization } = repositoryData.data;

    const mainData = {
      id,
      name,
      organization: organization.login,
      avatar: organization.avatar_url,
    };
    return mainData;
  };

  saveRepository = async (repositoryData) => {
    this.setState({ repositories: [...this.state.repositories, repositoryData] });
    await AsyncStorage.setItem('@GitIssue:repositoryData', JSON.stringify(this.state.repositories));
  };

  searchRepositories = async () => {
    const { repositoryName } = this.state;

    const { loading } = this.state;

    if (!loading) {
      this.setState({ loading: true });

      try {
        const repositoryData = await this.getRepositoryData(repositoryName);

        if (!this.repositoryExists(repositoryData)) {
          await this.saveRepository(repositoryData);
        }
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  };

  repositoryExists = ({ id }) => {
    const { repositories } = this.state;

    if (repositories) {
      return repositories.find(repository => repository.id === id) && true;
    }

    return false;
  };

  renderListItem = ({ item }) => {
    const { navigation } = this.props;

    return <RepositoryItem data={item} navigation={navigation} />;
  };

  renderList = () => {
    const { repositories } = this.state;

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
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
      />
    );
  };

  render() {
    const { loading, repositoryName } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Git Issues" />

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar novo repositório"
            underlineColorAndroid="transparent"
            value={repositoryName}
            onChangeText={(text) => {
              this.setState({ repositoryName: text });
            }}
          />

          <TouchableOpacity style={styles.button} onPress={this.searchRepositories}>
            {loading ? (
              <ActivityIndicator size="small" color="#000" />
            ) : (
              <Icon name="plus" style={styles.buttonIcon} />
            )}
          </TouchableOpacity>
        </View>

        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
