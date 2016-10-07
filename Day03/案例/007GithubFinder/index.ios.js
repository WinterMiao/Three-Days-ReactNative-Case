/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    ListView,
    View,
    TextInput
} from 'react-native';

import Utils from './Utils';
import PersonInfoCell from './PersonInfoCell';
import Api from './Api';

class GithubFinder extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    style={{
                        width: Utils.SCREEN_WIDTH,
                        height: 40,
                        marginTop: 30,
                        backgroundColor: 'rgb(226,226,226)'
                    }}
                    onEndEditing={(event) => this.fetchGithubData(event)}
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.rowCell(rowData)}
                />
            </View>
        );
    }

    rowCell(rowData) {
        return (
            <PersonInfoCell rowData={rowData}/>
        )
    }

    fetchGithubData(event) {
        console.log(event.nativeEvent.text);
        var api = Api.searchApi + event.nativeEvent.text;
        console.log(api);
        fetch(api)
            .then((data) => data.json())
            .then((jsonData)=> {
                console.log(jsonData);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(jsonData.items)
                });
            }).done();
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

AppRegistry.registerComponent('yz_demo', () => GithubFinder);
