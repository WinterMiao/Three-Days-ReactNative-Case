import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

let Dimensions = require('Dimensions');
let SCREEN_WIDTH = Dimensions.get('window').width;

export default class List extends Component {
    render() {
        return (
            <View style={styles.list}>
                <Text style={{fontSize: 18}}>{this.props.content}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        width: SCREEN_WIDTH - 30,
        marginLeft: 15,
        marginRight: 15,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        height: 35,
        justifyContent:'center'
    }
});