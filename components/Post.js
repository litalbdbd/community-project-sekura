import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ReadMore from './Cont';
import Like from './Like';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { types } from '@babel/core';

class Post extends Component {
  render() {
    const { title,
      subTitle,
      text,
      likes,
      liked,
      imageUrl } = this.props.item;

    return (
      <View style= {styles.post}>
        <Text style={styles.titleText} >
          {title}
        </Text>
        <Text style={styles.subText} >
          {subTitle}
        </Text>
            <View style={styles.cardBody}>
              <ReadMore text={text} style={styles.cardText} />
            </View>
        <Image
          style={{ height: 250, borderWidth: 1 }}
          source={{ uri: imageUrl }}
        />
        <Like likes={likes} liked={liked} handleLikePress={this.props.handleLikePress} />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  subText:{
    fontSize: 23,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  baseText: {
    fontSize: 20,
    fontFamily: 'Cochin',
    marginVertical: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  post:{
  marginBottom:15,
  marginTop:15,
    backgroundColor:"white",
    padding:15
  }
});

export default Post;
