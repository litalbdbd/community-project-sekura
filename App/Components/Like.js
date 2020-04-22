import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

const images = {
    like: require('../images/like.png'),
    likeFilled: require('../images/like-filled.png')
}

// const Like = ({likes, liked, handleLikePress}) => {
//     return (
//         <View style={styles.like}>
//             <Text>{likes}</Text>
//             <TouchableOpacity onPress={handleLikePress}>
//                 <Image 
//                     style={{ width: 20, height: 20, marginLeft:10 }}
//                     source={images[liked ? "likeFilled" : "like"]}
//                 />
//             </TouchableOpacity>
//         </View>
//     );
// }
// Like.propTypes = {
//     likes: PropTypes.number,
//     liked: PropTypes.bool,
//     handleLikePress: PropTypes.func
// }

class Like extends Component {
    // static propTypes = {
    //     likes: PropTypes.number,
    //     liked: PropTypes.bool,
    //     handleLikePress: PropTypes.func
    // }

    constructor() {
        super();
        this.state = {
            liked: false,
            // count: 0
        }
    }

    handleLikePress = () => {
        this.setState(prevState => ({ liked: !prevState.liked }));
        // this.state.liked=!this.state.liked;
    }



    render() {
        const { likes, liked } = this.props;
        return (
            <View style={styles.like}>
                <Text>{likes}</Text>
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