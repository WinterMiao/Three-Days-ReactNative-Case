import React, {Component} from 'react';
import {
    Text
} from 'react-native';


export default class ShowText extends Component {

    static get defaultProps() {
        console.log('ShowText defaultProps');
        return {
            content: 'hello'
        }
    }

    // 构造
    constructor(props) {
        console.log('ShowText constructor');
        super(props);
        // 初始状态
        this.state = {};
    }

    componentWillMount() {
        console.log('ShowText componentWillMount');
    }

    render() {
        console.log('ShowText render');
        return (
            <Text
                style={{width: 300, height: 100, backgroundColor: 'blue', fontSize: 40}}>
                {this.props.content}
            </Text>
        )
    }

    componentDidMount() {
        console.log('ShowText componentDidMount');
    }

    //props属性值发生变化时,下面的方法会被调用
    componentWillReceiveProps(nextProps) {
        console.log('ShowText+ componentWillReceiveProps');
    }

    //状态机变量值发生变化时会被调用,返回true,代表允许调用render刷新,返回false,不会调用render函数刷新,默认值true
    shouldComponentUpdate(nextProps, nextState) {
        console.log('ShowText+ shouldComponentUpdate');
        return true;
    }

    //dealloc 销毁时会被调用
    componentWillUnmount() {
        console.log('ShowText+ componentWillUnmount');
    }
}