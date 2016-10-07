import React, {Component} from 'react';
import {
    AppRegistry,
    View
} from 'react-native';


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
            stateValue: '状态机变量初始值'
        };
    }
    //组件将要加载
    componentWillMount() {
        console.log('LifeCycle+ componentWillMount');
    }

    render() {
        console.log('LifeCycle+ render');
        return <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
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
    shouldComponentUpdate(nextProps, nextState){
        console.log('LifeCycle+ shouldComponentUpdate');
        return true;
    }
    //dealloc 销毁时会被调用
    componentWillUnmount() {
        console.log('LifeCycle+ componentWillUnmount');
    }

}


AppRegistry.registerComponent('yz_demo', () => LifeCycle);
