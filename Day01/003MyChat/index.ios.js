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
    Image,
    Text
} from 'react-native';

let Dimensions = require('Dimensions');
let SCREEN_WIDTH = Dimensions.get('window').width;

class yz_demo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topViewController}>
                    <Image
                        style={{width: SCREEN_WIDTH/2.0,height: SCREEN_WIDTH/2.0}}
                        source={require('./images/login/login_large_ic.png')}/>
                </View>
                <View style={styles.bottomViewController}>
                    <View style={[styles.phoneLoginView,styles.loginBase]}>
                        <Text style={{fontSize: 20, color: 'white',textAlign:'center'}}>手机号登录</Text>
                    </View>
                    <View style={[styles.immRegistyView,styles.loginBase]}>
                        <Text style={{fontSize: 20,color: 'red', textAlign: 'center'}}>立即注册</Text>
                    </View>
                    <View style={{
                        position: 'absolute',
                        left: 0,
                        bottom:0,
                        width:SCREEN_WIDTH,
                        height: 120
                    }}>
                        <View style={styles.otherLoginMethod}>
                            <View style={[styles.lineBase, {marginLeft: SCREEN_WIDTH/8.0,marginRight: 15}]}></View>
                            <Text>其他登录方式</Text>
                            <View style={[styles.lineBase, {marginLeft: 15,marginRight: SCREEN_WIDTH/8.0}]}></View>
                        </View>
                        <View style={styles.otherLoginImages}>
                            <Image
                                style={{width: 40,height: 40,margin: 5}}
                                source={require('./images/login/ic_qq_login_normal.png')}/>
                            <Image
                                style={{width: 40,height: 40,margin: 5}}
                                source={require('./images/login/ic_renren_login_normal.png')}/>
                            <Image
                                style={{width: 40,height: 40,margin: 5}}
                                source={require('./images/login/ic_tencent_login_normal.png')}/>
                            <Image
                                style={{width: 40,height: 40,margin: 5}}
                                source={require('./images/login/ic_weibo_login_normal.png')}/>
                            <Image
                                style={{width: 40,height: 40,margin: 5}}
                                source={require('./images/login/ic_weixin_login_normal.png')}/>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topViewController: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomViewController: {
        flex: 2,
        alignItems: 'center'
    },
    loginBase: {
        width: SCREEN_WIDTH/2.0,
        height: 40,
        borderRadius: 5,
        borderColor: 'red',
        borderWidth: 1
    },
    phoneLoginView: {
        backgroundColor: 'red',
        marginBottom: 10,
        justifyContent:'center'
    },
    immRegistyView: {
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    otherLoginMethod: {
        height: 20,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center'
    },
    otherLoginImages: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    lineBase: {
        backgroundColor: 'gray',
        height: 1,
        flex: 1
    }
});

AppRegistry.registerComponent('yz_demo', () => yz_demo);
