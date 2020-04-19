/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { connect } from 'react-redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import Post from '../Components/Post';
import {
  SafeAreaView, FlatList, StyleSheet, View, Text
} from 'react-native';

// const ConnectedLoginGate = connect(state => ({
//   username: state.auth.username
// }))(App)

// const rootReducer = (state = {}, action) => {
//   return state
// }

// const store = createStore(rootReducer)

/*
redux should have two reducers (combineReducers)
reducer1 = user
  userId, name, profileImage
reducer2 = posts
  ids: ['1', '2'],
  map: {
    1: {
		id: '1',
		title: 'First Item',
		subTitle: 'blabla',
		text: `There are enough articles on this site to fill two books, so it can sometimes be daunting to know where to start. Below are what many consider to be my “greatest hits,” the articles that have been the most popular, the most shared, or had the greatest effect on readers’ lives.
		I’ve listed the best four articles in five different categories below: Understanding Yourself, Emotional Intelligence, Life Purpose, Relationships, and Self-Discipline.`,
		likes: 0,
		imageUrl: 'https://dianasuemi.com/wp-content/uploads/2017/08/QwupPdD.png'
	},
	2: {
		id: '2',
		title: 'Second Item',
		subTitle: 'blabla',
		text: `There are enough articles on this site to fill two books, so it can sometimes be daunting to know where to start. Below are what many consider to be my “greatest hits,” the articles that have been the most popular, the most shared, or had the greatest effect on readers’ lives.
		I’ve listed the best four articles in five different categories below: Understanding Yourself, Emotional Intelligence, Life Purpose, Relationships, and Self-Discipline.`,
		likes: 0,
		imageUrl: 'https://dianasuemi.com/wp-content/uploads/2017/08/QwupPdD.png'
	}
  }
*/

import { API } from '../../mocks/server';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      // posts: []
    }
  }
  async componentDidMount() {
    API.resetData(); //reset data for hot-reloading 
    await API.updatePostLikes('1', '1', 'like')
    const posts = await API.getPosts();
    this.setState({ posts, isLoading: false });
  }
  handleLikePress = async () => {
    // console.log('do some logic for handling like press')
    // this.props.dispatch(actions.updateLike(postId))

    // await API.updatePostLikes('1', '1', 'unlike')
    // const posts = await API.getPosts();
    // this.setState({posts, isLoading: false});
  }
  renderItem = ({ item }) => {
    return (
      <Post item={item} handleLikePress={this.handleLikePress} />
    )
  }

  renderLoader = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 25 }}>Loading...</Text>
      </View>
    )
  }

  renderContent = () => {
    return (
      <FlatList
        data={this.state.posts}
        renderItem={this.renderItem}
      />
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.body}>
        {this.state.isLoading ? this.renderLoader() : this.renderContent()}
      </SafeAreaView>
    );
  };
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#FDF3FF"
  }
});

export default App;
