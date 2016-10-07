import React, {Component} from 'react';

import {
    View,
    Image,
    Text
} from 'react-native';

import Utils from './Utils';
export default class PersonInfoCell extends Component {

    render() {
        return (
            <View style={{
                width: Utils.SCREEN_WIDTH - 20,
                height: 70,
                marginLeft: 10,
                marginRight: 10,
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
                flexDirection: 'row'
            }}>
                <Image
                    source={{uri:this.props.rowData.owner.avatar_url}}
                    style={{
                        width: 50,
                        height: 50,
                        margin: 10,
                        backgroundColor: 'gray'
                    }}
                />
                <View style={{
                    flex: 1,
                    justifyContent: 'space-around'
                }}>
                    <Text style={{fontSize: 20,fontWeight: 'bold'}}>{this.props.rowData.owner.login}</Text>
                    <Text style={{fontSize: 16}}>{this.props.rowData.owner.type}</Text>
                </View>
            </View>
        )
    }
}