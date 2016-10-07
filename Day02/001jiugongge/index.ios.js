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
  View
} from 'react-native';

let Dimensions = require('Dimensions');

let SCREEN_WIDTH = Dimensions.get('window').width;


class JiuGongGe extends Component {
  render() {
    return (
      <View style={{flex: 1,backgroundColor: "green"}}>
          <View style={styles.jiuGongGe}>
              <View style={[styles.base,{justifyContent: 'center'}]}>
                  <Text style={[styles.fontBase]}>酒店</Text>
              </View>
              <View style={[styles.base]}>
                  <View style={styles.middleView}>
                      <View style={[styles.firstView,styles.baseView]}>
                          <Text style={[styles.fontBase]}>海外酒店</Text>
                      </View>
                      <View style={[styles.secondView,styles.baseView]}>
                          <Text style={[styles.fontBase]}>特惠酒店</Text>
                      </View>
                  </View>
              </View>
              <View style={[styles.base]}>
                  <View style={[styles.baseView,{marginRight:3,borderBottomWidth:1,borderBottomColor:'white'}]}>
                      <Text style={[styles.fontBase,{marginLeft:1}]}>团购</Text>
                  </View>
                  <View style={[styles.baseView,{marginRight:3}]}>
                      <Text style={[styles.fontBase,{marginLeft:1}]}>客栈.公寓</Text>
                  </View>
              </View>
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    jiuGongGe: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 50,
        width: SCREEN_WIDTH - 20,
        height: 85,
        backgroundColor: 'rgb(24,24,24)',
        borderRadius: 5,
        flexDirection: 'row'
    },
    base: {
        flex: 1
    },
    fontBase: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    middleView: {
        flex: 1,
        marginTop: 3,
        marginBottom: 3,
        borderLeftWidth: 1,
        borderLeftColor: 'white',
        borderRightWidth: 1,
        borderRightColor: 'white'
    },
    baseView: {
        flex: 1,
        justifyContent: 'center'
    },
    firstView: {
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    }
});


AppRegistry.registerComponent('FlexLogin', () => JiuGongGe);
