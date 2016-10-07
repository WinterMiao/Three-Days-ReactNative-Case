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
                <Text style={styles.text}>1</Text>
                <Text style={[styles.text]}>2</Text>
                <Text style={styles.text}>3</Text>
                <Text style={styles.text}>4</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        flexDirection: 'row',
        // flexWrap: 'nowrap'
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    text: {
        fontSize: 30,
        color: "green",
        width: 60,
        backgroundColor: 'gray',
        margin: 0,
    }
});

AppRegistry.registerComponent('yz_demo', () => yz_demo);
