import React, { Component } from 'react';

import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

class Like extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: this.props.liked,
            likes: this.props.likes
        }
    }

    _ifLiked = () => {
        this.setState(prevState => ({ liked: !prevState.liked, likes: this.state.liked ? this.state.likes - 1 : this.state.likes + 1 }));
    }

    render() {
        const images = {
            like: require('../images/like.png'),
            likeFilled: require('../images/like-filled.png')
        }
        return (
            <View style={styles.like}>
                <Text>{this.state.likes}</Text>
                <TouchableOpacity onPress={this._ifLiked}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={images[this.state.liked ? "likeFilled" : "like"]}
                    />
                </TouchableOpacity>
            </View>
        );
    };
}
const styles = StyleSheet.create({
    like: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
});
export default Like;
