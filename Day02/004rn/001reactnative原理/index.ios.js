import React, {Component} from 'react';

import {
    AppRegistry,
    View
} from 'react-native';

import TopView from './TopView';
import List from './List';
import BottomView from './BottomView';

class FirstDemo extends Component {

    static get defaultProps() {
        return {
            data: ['1.育知同创','2.匠心品质','3.YZMobileTalks']
        }
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <TopView />
                <List content="宇航员在太空宣布'三体'获奖"/>
                <List content="宇航员在太空宣布'三体'获奖"/>
                <List content="宇航员在太空宣布'三体'获奖"/>
                <List content="宇航员在太空宣布'三体'获奖"/>
                <BottomView data1={this.props.data}/>
            </View>
        )
    }
}


AppRegistry.registerComponent('YZDemo', () => FirstDemo);
