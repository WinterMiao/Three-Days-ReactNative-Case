import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    TextInput,
    Text
} from 'react-native';

import ShowText from './ShowText';

class LifeCycle extends Component {

    //给props设置默认值
    static get defaultProps() {
        console.log('LifeCycle+ defaultProps');
        return {
            title: 'title默认值'
        }
    }

    // 构造
    constructor(props) {
        super(props);
        console.log('LifeCycle+ constructor');
        // 初始状态
        this.state = {
            textInputValue: '请输入内容...'
        };
    }

    //组件将要加载
    componentWillMount() {
        console.log('LifeCycle+ componentWillMount');
    }

    updateTextInputValue(text) {
        console.log('LifeCycle+ updateTextInputValue');
        this.setState({textInputValue: text});
    }

    render() {
        console.log('LifeCycle+ render');
        return (
            <View style={{flex: 1, backgroundColor: 'yellow'}}>
                <TextInput
                    onChangeText={(text) => this.updateTextInputValue(text)}
                    placeholder={this.state.textInputValue}
                    style={{
                        width: 300,
                        height: 100,
                        borderColor: 'green',
                        borderWidth: 2,
                        margin: 20
                    }}
                />

                <ShowText content={this.state.textInputValue}/>
            </View>
        )

    }

    //组件加载完成
    componentDidMount() {
        console.log('LifeCycle+ componentDidMount');
    }

    //props属性值发生变化时,下面的方法会被调用
    componentWillReceiveProps(nextProps) {
        console.log('LifeCycle+ componentWillReceiveProps');
    }

    //状态机变量值发生变化时会被调用,返回true,代表允许调用render刷新,返回false,不会调用render函数刷新,默认值true
    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifeCycle+ shouldComponentUpdate');
        return true;
    }

    //dealloc 销毁时会被调用
    componentWillUnmount() {
        console.log('LifeCycle+ componentWillUnmount');
    }

}


AppRegistry.registerComponent('yz_demo', () => LifeCycle);
