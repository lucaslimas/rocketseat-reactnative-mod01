import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { styles } from './styles';

const Post = ({ postData }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{postData.title}</Text>
      <Text style={styles.headerText}>{postData.owner}</Text>
    </View>
    <View>
      <Text style={styles.contentText}>{postData.content}</Text>
    </View>
  </View>
);

Post.propTypes = {
  postData: PropTypes.shape({
    title: PropTypes.string,
    owner: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Post;
