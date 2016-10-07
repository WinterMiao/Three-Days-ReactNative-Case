/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text
} from 'react-native';

class yz_demo extends Component {
    render() {
        return (

            <View style={styles.container}>
                <View style={[styles.view1, styles.base]}></View>
                <View style={[styles.view2, styles.base]}></View>
                <View style={[styles.view3, styles.base]}></View>
                <View style={[styles.view4, styles.base, {backgroundColor: "yellow"}]}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
    },
    base: {
        width: 150,
        height: 150,
        backgroundColor: 'green',
    },
    view1: {
        position: 'absolute',
        left: 20,
        top: 20
    },
    view2: {
        position: 'absolute',
        right: 20,
        top: 20
    },
    view3: {
        position: 'absolute',
        left: 20,
        bottom: 20
    },
    view4: {
        position: 'absolute',
        right: 20,
        bottom: 20
    }

});

AppRegistry.registerComponent('yz_demo', () => yz_demo);
