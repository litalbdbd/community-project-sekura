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
import Post from './components/Post';
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

import {API} from './mocks/server';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      posts: []
    }
  }
  async componentDidMount() {
    API.resetData(); //reset data for hot-reloading 
    const posts = await API.getPosts();
    this.setState({posts, isLoading: false});
  }
  handleLikePress = () => {
    console.log('do some logic for handling like press')
    // this.props.dispatch(actions.updateLike())
  }
  renderItem = ({ item }) => {
    return (
      <Post item={item} handleLikePress={this.handleLikePress} />
    )
  }

  renderLoader = () => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 25}}>Loading...</Text>
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
body:{
  flex: 1,
  backgroundColor:"#FDF3FF"
}
});

export default App;
