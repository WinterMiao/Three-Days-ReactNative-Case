import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';


export default class BottomView extends Component {

    static get defaultProps() {
        return {
            data1: []
        }
    }

    render() {

        return (
            <View>
                <Text style={{color: 'red',fontSize: 35,margin:15}}>今日要闻</Text>
                {
                    this.props.data1.map(function (name) {
                        return <Text style={{margin: 15,fontSize: 20}}>{name}</Text>
                    })
                }
            </View>
        )
    }
}