import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Button,
    Animated,
} from 'react-native';

const INITIAL_NUMBER_OF_LINES = 2;

class ReadMore extends Component {
    constructor() {
        super();
        this.state = {
            isExpended: false,
            animation: new Animated.Value(1)
        }
    }
    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 0,
            timing: 1
        }).start(() => {
            Animated.timing(this.state.animation, {
                toValue: 1,
                duration: 1
            }).start();
        })
    }

    handleReadMore = () => {
        this.setState(prevState => ({ isExpended: !prevState.isExpended }));
    }

    render() {
        const { text } = this.props;
        return (
            <View >
                <Animated.View
                    style={{
                        opacity: this.state.animation,
                    }}>
                    <Text numberOfLines={this.state.isExpended ? 0 : INITIAL_NUMBER_OF_LINES}>{text}</Text>
                </Animated.View>
                <Button onPress={() => { this.startAnimation(); this.handleReadMore(); }} title={this.state.isExpended ? "Read Less" : "Read More"}></Button>
            </View>
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

export default ReadMore;
