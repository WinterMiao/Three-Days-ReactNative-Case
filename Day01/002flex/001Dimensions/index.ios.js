/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';

let Dimensions = require('Dimensions');
//获取屏幕的宽度
let SCREEN_WIDTH = Dimensions.get('window').width;
//获取屏幕的高度
let SCREEN_HEIGHT = Dimensions.get('window').height;

class yz_demo extends Component {
    render() {
        return (

            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: "green"
    }
});

AppRegistry.registerComponent('yz_demo', () => yz_demo);
