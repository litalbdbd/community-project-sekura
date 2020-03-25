
import React, { Component } from 'react';
import ReadMore from './Cont';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      content: true
    }
  }

  render() {
    let flag = 1;
    let { text } = this.props;

    return (
      <>
        <Text style={styles.titleText} >
          HERE IS THE TITLE
            </Text>
        <View>
          <View style={styles.cardLabel}>
          </View>
          <View style={styles.card}>
            <View style={styles.cardBody}>
              <ReadMore text={text} style={styles.cardText} />
            </View>
          </View>
        </View>
        <Image
          style={{ height: 250, borderWidth: 1 }}
          source={{ uri: 'https://dianasuemi.com/wp-content/uploads/2017/08/QwupPdD.png' }}
        />
      </>
    );
  };
}

const styles = StyleSheet.create({

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
});

export default Post;
