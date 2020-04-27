import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const INITIAL_NUMBER_OF_LINES = 2;

class ReadMore extends Component {
    constructor() {
        super();
        this.state = {
            isExpended: false,
        }
    }


    handleReadMore = () => {
        this.setState(prevState => ({ isExpended: !prevState.isExpended }));
    }

    render() {
        const { text } = this.props;
        return (
            <View style={{marginBottom:10}}>

                <Text style={{lineHeight: 20,color:'#595959',fontStyle:'normal'}} onPress={() => { this.handleReadMore(); }} numberOfLines={this.state.isExpended ? 0 : INITIAL_NUMBER_OF_LINES} >{text}</Text>
                <Text style= {{color:'#00b3b3'}} onPress={() => { this.handleReadMore(); }} >{this.state.isExpended ? "" : "Continue Reading"}</Text>
                
            </View>
        );
    };
}

export default ReadMore;
