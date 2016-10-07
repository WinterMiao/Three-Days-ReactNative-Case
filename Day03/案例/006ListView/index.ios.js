/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ListView,
    View
} from 'react-native';

class YZListView extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['章子怡', '萨贝玲', '汪峰'])
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(text) => this.renderRow(text)}
                />
            </View>
        );
    }
    //自定义cell
    renderRow(rowData) {
        return (
            <View style={{
                height: 80,
                borderBottomColor: 'red',
                borderBottomWidth: 2,
                justifyContent: 'center'
            }}>
                <Text style={{fontSize: 35}}>{rowData}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#654321',
    }
});

AppRegistry.registerComponent('yz_demo', () => YZListView);
