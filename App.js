/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import ReadMore from 'react-native-read-more-text';
import React, { Component } from 'react';
import Post from './components/Post';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
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
    let text = `There are enough articles on this site to fill two books, so it can sometimes be daunting to know where to start. Below are what many consider to be my “greatest hits,” the articles that have been the most popular, the most shared, or had the greatest effect on readers’ lives.

    I’ve listed the best four articles in five different categories below: Understanding Yourself, Emotional Intelligence, Life Purpose, Relationships, and Self-Discipline.`
    return (
      <>
        <SafeAreaView>
          <Post text={text} />
        </SafeAreaView>
      </>
    );
  };
}

export default App;
