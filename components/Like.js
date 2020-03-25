import React, { Component } from 'react';

import {
    View,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';

class Like extends Component {
    constructor() {
        super();
        this.state = {
            liked: false,
            count:0
        }
    }

    _ifLiked = () => {
        this.setState(prevState => ({ liked: !prevState.liked ,count:   this.state.liked? this.state.count-1:this.state.count+1}));
        this.state.liked? this.state.count+1:this.state.count-1

    }
      
    render() {
        const images = {
            like: require('../images/like.png'),
            likeFilled: require('../images/like-filled.png')
        }
        return (
            <View>
                <TouchableOpacity onPress={this._ifLiked}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={images[this.state.liked ? "likeFilled": "like"]}
                    />
                </TouchableOpacity>
                <Text>{this.state.count}</Text>
            </View>
        );
    };
}

export default Like;
