import React, { Component } from 'react';
import ReadMore from './Cont';
import Like from './Like';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';


class Post extends Component {

  render() {
    const { title,
      subTitle,
      text,
      likes,
      imageUrl } = this.props.item;

    return (
      <View style={styles.post}>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.titleText} >
            {title}
          </Text>
          <Image
            style={{ width: 20, height: 20, marginLeft:'auto' }}
            source={require('../images/menu.png')}
          />
          <Image />
        </View>
        <Text style={styles.subText} >
          {subTitle}
        </Text>
        <View style={styles.cardBody}>
          <ReadMore text={text} style={styles.cardText} />
        </View>
        <Image style={styles.postImage}
          source={{ uri: imageUrl }}
        />
        <Like likes={likes}  />
      </View>
    );
  };
}

const mapStateToProps = state => {
  return { posts: state.posts }
}

const styles = StyleSheet.create({
  subText: {
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
    fontWeight: "bold",
    alignSelf:'flex-start'
  },
  post: {
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: "white",
    padding: 10,

  },
  postImage: {
    height: 250,
    borderWidth: 0,
    borderRadius: 12,

  }
});

export default Post;