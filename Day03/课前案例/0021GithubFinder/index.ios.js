/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    TextInput,
    StyleSheet,
    ListView,
    Text
} from 'react-native';


class GithubFinder extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4']),
        };
    }

    render() {

        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <TextInput style={styles.textInput}/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderRow(rowData)}/>
            </View>

        )
    }

    //自定义cell
    renderRow(rowData) {
        return (
            <Text>{rowData}</Text>
        )
    }
}

const styles = StyleSheet.create({

    textInput: {
        marginTop: 30,
        fontSize: 14,
        height: 30,
        backgroundColor: '#EAEAEA'
    }
});


AppRegistry.registerComponent('YZNodeForReactNative', () => GithubFinder);






