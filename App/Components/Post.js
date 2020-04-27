import React, { Component } from 'react';
import ReadMore from './Cont';
import Like from './Like';

import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaViewBase,
} from 'react-native';


class Post extends Component {

  render() {
    const { title,
      reviewed,
      reviewedText,
      reviewedImage,
      text,
      likes,
      imageUrl } = this.props.item;

    return (
      <View style={styles.post}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.titleText} >
            {title}
          </Text>
          <Image
            style={{ width: 20, height: 20, marginLeft: 'auto' }}
            source={require('../images/menu.png')}
          />
          <Image />


        </View>

        <Text style={styles.subText} >
          Reviewed By
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.reviewedText} >
            <Text style={{ fontWeight: 'bold', color: 'black' }}>
              {reviewed},
          </Text >
            {reviewedText}
          </Text>

          <Image style={styles.reviewedImage} source={{ uri: reviewedImage }} />
        </View>
        <ReadMore text={text} style={styles.cardText} />
        <Image style={styles.postImage}
          source={{ uri: imageUrl }}
        />
        <Like likes={likes} />
      </View>
    );
  };
}

const mapStateToProps = state => {
  return { posts: state.posts }
}

const styles = StyleSheet.create({
  reviewedImage: {
    width: 40,
    height: 40,
    borderRadius: 50,

  },
  cardBody: {
    color: 'red'
  },
  reviewedText: {
    marginBottom: 13,
    fontSize: 11,
    color: '#666666',
    width:'90%'
  },

  subText: {
    fontSize: 10,
    color: '#bfbfbf',
    marginBottom: 4
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10
  },
  post: {
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: "white",
    padding: 10,
    paddingBottom: 0

  },
  postImage: {
    height: 200,
    borderWidth: 0,
    borderRadius: 12,
  }
});

export default Post;