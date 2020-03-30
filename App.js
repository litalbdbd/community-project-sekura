/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import Post from './components/Post';
import {
  SafeAreaView, FlatList, StyleSheet
} from 'react-native';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const DATA = [
  {
    key: '1',
    title: 'First Item',
    subTitle: 'blabla',
    text: `There are enough articles on this site to fill two books, so it can sometimes be daunting to know where to start. Below are what many consider to be my “greatest hits,” the articles that have been the most popular, the most shared, or had the greatest effect on readers’ lives.
    I’ve listed the best four articles in five different categories below: Understanding Yourself, Emotional Intelligence, Life Purpose, Relationships, and Self-Discipline.`,
    likes: 23,
    liked: false,
    imageUrl: 'https://dianasuemi.com/wp-content/uploads/2017/08/QwupPdD.png'
  },
  {
    key: '2',
    title: 'second Item',
    subTitle: 'blabla',
    text: `There are enough articles on this site to fill two books, so it can sometimes be daunting to know where to start. Below are what many consider to be my “greatest hits,” the articles that have been the most popular, the most shared, or had the greatest effect on readers’ lives.
    I’ve listed the best four articles in five different categories below: Understanding Yourself, Emotional Intelligence, Life Purpose, Relationships, and Self-Discipline.`,
    likes: 23,
    liked: true,
    imageUrl: 'https://dianasuemi.com/wp-content/uploads/2017/08/QwupPdD.png'
  },
];

class App extends Component {
  handleLikePress = () => {
    console.log('do some logic for handling like press')
    // this.props.dispatch(actions.updateLike())
  }
  renderItem = ({item}) => {
    return (
      <Post item={item} handleLikePress={this.handleLikePress} />
    )
  }
  render() {
    console.log('App render')
    return (
      <SafeAreaView style={styles.body}>
        <FlatList
          data={DATA}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  };
}
const styles = StyleSheet.create({
body:{
  backgroundColor:"#FDF3FF"
}
});

export default App;
