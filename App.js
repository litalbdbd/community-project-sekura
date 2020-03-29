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

class App extends Component {
  render() {

    const DATA = [
      {
        key: '1',
        title: 'First Item',
        subTitle: 'blabla',
        text: `There are enough articles on this site to fill two books, so it can sometimes be daunting to know where to start. Below are what many consider to be my “greatest hits,” the articles that have been the most popular, the most shared, or had the greatest effect on readers’ lives.
        I’ve listed the best four articles in five different categories below: Understanding Yourself, Emotional Intelligence, Life Purpose, Relationships, and Self-Discipline.`,
        likes: 23,
        liked: false
      },
      {
        key: '2',
        title: 'second Item',
        subTitle: 'blabla',
        text: `There are enough articles on this site to fill two books, so it can sometimes be daunting to know where to start. Below are what many consider to be my “greatest hits,” the articles that have been the most popular, the most shared, or had the greatest effect on readers’ lives.
        I’ve listed the best four articles in five different categories below: Understanding Yourself, Emotional Intelligence, Life Purpose, Relationships, and Self-Discipline.`,
        likes: 23,
        liked: true
      },
    ];


    return (
      <>
        <SafeAreaView style={styles.body}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Post 
              title = {item.title}
              subTitle = {item.subTitle}
              text = {item.text}
              likes = {item.likes}
              liked = {item.liked}
              />
            )}
          />

        </SafeAreaView>
      </>
    );
  };
}
const styles = StyleSheet.create({
body:{
  backgroundColor:"#FDF3FF"
}
});

export default App;
