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

class yz_demo extends Component {
    render() {
        return (

            <View style={styles.container}>
                <View style={{backgroundColor:'yellow',flex: 1}}></View>
                <View style={{backgroundColor:'blue',flex: 2}}></View>
                <View style={{backgroundColor:'#123456',flex:2}}></View>
                <View style={{backgroundColor:'#666432',flex: 1}}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        // flexDirection: 'column',
        flexDirection: 'row',

    }
});

AppRegistry.registerComponent('yz_demo', () => yz_demo);
