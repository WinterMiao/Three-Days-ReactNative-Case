/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet
} from 'react-native';

import yzStyle from './styles';


//对象样式
var viewStyle = {
    backgroundColor: '#123456',
    width: 300,
    height: 400
};




class YZ_CSS extends Component {

    render() {
        return (
            <View style={viewStyle}>
                <Text style={{
                    backgroundColor: "yellow",
                    fontSize: 40
                }}>育知同创</Text>
                <Text style={yzMobileStyle.yzMobile}>YZMobileTalks</Text>
                <Text style={[yzMobileStyle.guolaoshi,{width: 350,height:200},yzMobileStyle.glsPaul]}>郭老师很淫荡</Text>
                <Text style={yzStyle.yz}>3+3国庆首期班</Text>
            </View>
        )
    }
}

const yzMobileStyle = StyleSheet.create({
    yzMobile: {
        fontSize: 30,
        color: "red"
    },
    guolaoshi: {
        color: "yellow",
        fontSize: 45
    },
    glsPaul: {
        backgroundColor: "green"
    }
});


AppRegistry.registerComponent('yz_demo', () => YZ_CSS);
