import React, { Component } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

const images = {
    like: require('../images/like.png'),
    likeFilled: require('../images/like-filled.png')
}

class Like extends Component {


    constructor() {
        super();
        this.state = {
            liked: false,
        }
    }

    handleLikePress = () => {
        this.setState(prevState => ({ liked: !prevState.liked }));
    }



    render() {
        const { likes} = this.props;
        return (

            <View style={styles.like}>
                <Text style={{color:this.state.liked ? 'aqua' : "black"}}>{this.state.liked ? likes+1 : likes}</Text>
                <TouchableOpacity onPress={this.handleLikePress}>
                    <Image
                        style={{ width: 20, height: 20 , marginLeft:10}}
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
        alignItems: "center",
        margin: 20
    }
});
export default Like;