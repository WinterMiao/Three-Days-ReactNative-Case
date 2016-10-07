/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text
} from 'react-native';


import MyText from './MyText';

class LifeCycle extends Component {


    //1  初始化属性值
    static get defaultProps(){
        console.log('LifeCycle -- defaultProps');
        return {
            title: 'LifeCycle属性值'
        }
    }


    // 2 构造,初始化状态机变量
    constructor(props) {
        console.log('LifeCycle -- constructor');
        super(props);
        // 初始状态
        this.state = {
            text: 'Hello World'
        };
    }
    //3. 将要加载组件
    componentWillMount() {
        console.log('LifeCycle -- componentWillMount');
    }


    //5.组件加载完成,从下面的方法中去获取数据
    componentDidMount() {
        console.log('LifeCycle -- componentDidMount');
    }

    componentDidUnMount() {
        console.log('LifeCycle -- componentDidUnMount');
    }

    //组件对象属性值发生变化时调用
     componentWillReceiveProps(nextProps, nextContext) {
        console.log('LifeCycle -- componentWillReceiveProps');
    }


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('LifeCycle -- shouldComponentUpdate');
        //判断是否允许更新
        return true;
    }

    //将要重新渲染
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('LifeCycle -- componentWillUpdate');
    }

    //渲染完成
    componentDidUpdate() {
        console.log('LifeCycle -- componentDidUpdate');
    }

    // 4.通过render进行渲染
    render() {

        console.log('LifeCycle -- render');

        return (
            <View style={{flex: 1, backgroundColor: 'green'}}>

                <MyText text={this.state.text}/>

                <Text
                    style={{
                        position: 'absolute',
                        left: 100,
                        top: 300,
                        width: 200,
                        height: 100,
                        backgroundColor: '#ECECEC'
                    }}
                    onPress={() => this.textChange()}
                >
                    请点击我
                </Text>

            </View>
        )
    }

    textChange() {
        console.log('textChange');
        this.setState({text: '嗨,你好!'})
    }


}


AppRegistry.registerComponent('YZNodeForReactNative', () => LifeCycle);






