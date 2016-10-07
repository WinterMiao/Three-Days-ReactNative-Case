/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

let Dimensions = require('Dimensions');
let screenWidth = Dimensions.get('window').width;
let leftPoint = screenWidth * 0.1;
let componentWidth = screenWidth * 0.8;

class rn_state_demo extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {textInputValue: '你可以在这里输入文字'};
    }

    updateTextInputValue(newText){
        console.log(newText);
        this.setState({textInputValue: newText});
    }

    render() {
        console.log("又渲染一次");
        return (
            <View style={styles.container}>

                <TextInput
                    style={styles.textInputStyle}
                    placeholder={'你可以在这里输入文字'}
                    onChangeText={(newText) => this.updateTextInputValue(newText)}
                />
                <Text style={styles.textShow}>
                    {this.state.textInputValue}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    textInputStyle: {
        position: 'absolute',
        left: leftPoint,
        top: 100,
        width: componentWidth,
        height: 60,
        borderColor: 'green',
        borderWidth: 1,
    },
    textShow: {
        position: 'absolute',
        left: leftPoint,
        top: 250,
        width: componentWidth,
        height: 60,
        backgroundColor: 'steelblue',
        color: 'lightseagreen',
        fontSize: 25

    }
});

AppRegistry.registerComponent('rn_state_demo', () => rn_state_demo);
