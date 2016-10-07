
import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    TextInput,
    Text
} from 'react-native';

class RN_State extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            textInputValue: '请输入相关内容...',
            test: 'test'
        };
      }

    // setTextInputValue(text) {
    //     this.setState(function () {
    //         return {
    //             textInputValue: text
    //         }
    //     });
    // }

    // setTextInputValue(text) {
    //     this.setState(() => {
    //         return {
    //             textInputValue: text
    //         }
    //     });
    // }

    // setTextInputValue(textInputValue) {
    //     this.setState(() => {
    //         return textInputValue;
    //     })
    // }

    // setTextInputValue(textInputValue) {
    //     this.setState({textInputValue});
    // }
    //修改状态机变量的值
    setTextInputValue(text) {
        console.log(text);
        this.setState({textInputValue: text});
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(nextState.test);
        return nextState.textInputValue.length == 3;
    }

    render() {
        console.log('渲染了一次');
        return (
            <View style={{flex: 1, backgroundColor: 'green'}}>
                <TextInput
                    returnKeyType="done"
                    keyboardType="numeric"
                    onChangeText={(text) => this.setTextInputValue(text)}
                    defaultValue={this.state.textInputValue}
                    style={{
                        width: 250,
                        height: 60,
                        borderColor: 'yellow',
                        borderWidth: 2,
                        margin: 50,
                        fontSize: 25,
                        color: 'blue'
                    }}
                />
                <Text style={{fontSize: 25,color: 'blue'}}>{this.state.textInputValue}</Text>
            </View>
        )
    }
}




AppRegistry.registerComponent('yz_demo', () => RN_State);
