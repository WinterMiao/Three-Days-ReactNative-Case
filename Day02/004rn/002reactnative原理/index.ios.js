import React, {Component} from 'react';

import {
    AppRegistry,
    View
} from 'react-native';



class FirstDemo extends Component {

    render() {
        return (
            <View style={{flex: 1,backgroundColor: 'green'}}/>
        )
    }
}


AppRegistry.registerComponent('YZDemo', () => FirstDemo);
