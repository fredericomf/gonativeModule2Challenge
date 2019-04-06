import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '~/components/ListItem';

const RepositoryItem = ({ data }) => <ListItem title={data.name} subTitle={data.organization} />;

RepositoryItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    organization: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
};

export default RepositoryItem;
