import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import "~/config/ReactotronConfig";
import "~/config/DevToolsConfig";

import { styles } from "./styles";

import Post from "~/components/Post";

class Index extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Aprendendo ReactJS",
        owner: "Lucas Lima",
        content:
          "Lorem ipsum sem praesent aliquam quisque aliquam iaculis etiam, vestibulum ante dictum non consequat."
      },
      {
        id: 2,
        title: "Aprendendo React Native",
        owner: "Diego Fernandes",
        content:
          "Lorem ipsum sem praesent aliquam quisque aliquam iaculis etiam, vestibulum ante dictum non consequat donec netus consectetur felis, class cubilia dapibus eros habitasse elit scelerisque."
      },
      {
        id: 3,
        title: "Aprendendo Node",
        owner: "Victor Sales",
        content:
          "Lorem ipsum sem praesent aliquam quisque aliquam iaculis etiam, vestibulum ante dictum non consequat donec netus consectetur felis, class cubilia dapibus eros habitasse elit scelerisque."
      },
      {
        id: 4,
        title: "Aprendendo Node",
        owner: "Victor Sales",
        content:
          "Lorem ipsum sem praesent aliquam quisque aliquam iaculis etiam, vestibulum ante dictum non consequat donec netus consectetur felis, class cubilia dapibus eros habitasse elit scelerisque."
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>GoNative pp</Text>
        </View>
        <ScrollView>
          {posts.map(post => (
            <Post key={post.id} postData={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Index;
