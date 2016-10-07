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
                <Text style={styles.text}>2</Text>
                <Text style={styles.text}>3</Text>
                <Text style={styles.text}>4</Text>
                <Text style={styles.text}>5</Text>
                <Text style={styles.text}>6</Text>
                <Text style={styles.text}>7</Text>
                <Text style={styles.text}>8</Text>
                <Text style={styles.text}>9</Text>
                <Text style={styles.text}>10</Text>
                <Text style={styles.text}>11</Text>
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
        flexWrap: 'wrap'
    },
    text: {
        fontSize: 30,
        color: "green",
        width: 100,
        height: 100,
        backgroundColor: 'gray',
        margin: 10,

    }
});

AppRegistry.registerComponent('yz_demo', () => yz_demo);
