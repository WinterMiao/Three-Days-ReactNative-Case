/**
 * Created by lucien on 16/9/24.
 */


import React, {Component} from 'react';

import {
    Text
} from  'react-native';



class MyText extends Component {

    //1  初始化属性值
    static get defaultProps(){
        console.log('MyText -- defaultProps');
        return {

        }
    }


    // 2 构造,初始化状态机变量
    constructor(props) {
        console.log('MyText -- constructor');
        super(props);
        // 初始状态
        this.state = {

        };
    }
    //3. 将要加载组件
    componentWillMount() {
        console.log('MyText -- componentWillMount');
    }


    //5.组件加载完成,从下面的方法中去获取数据
    componentDidMount() {
        console.log('MyText -- componentDidMount');
    }

    componentDidUnMount() {
        console.log('MyText -- componentDidUnMount');
    }

    //组件对象属性值发生变化时调用
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('MyText -- componentWillReceiveProps');
    }


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('MyText -- shouldComponentUpdate');
        //判断是否允许更新
        return true;
    }

    //将要重新渲染
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('MyText -- componentWillUpdate');
    }

    //渲染完成
    componentDidUpdate() {
        console.log('MyText -- componentDidUpdate');
    }


    render() {

        console.log('MyText -- render');
        return (

            <Text style={{
                position: 'absolute',
                left: 100,
                top: 100,
                width: 200,
                height: 100,
                backgroundColor: '#ECECEC'
            }}>{this.props.text}</Text>
        )
    }
}

export default MyText;










