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
    Text,
    Image
} from 'react-native';


class GithubFinder extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4','row 1', 'row 2', 'row 3', 'row 4','row 1', 'row 2', 'row 3', 'row 4']),
        };
    }

    render() {

        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <TextInput style={styles.textInput}/>
                <ListView
                    showsVerticalScrollIndicator={false}
                    style={styles.listView}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderRow(rowData)}/>
            </View>

        )
    }

    //自定义cell
    renderRow(rowData) {
        return (
            <View style={styles.cellStyle}>
                <View style={styles.infoView}>
                    <View style={{width: 65,height: 65,justifyContent: 'center',alignItems: 'center'}}>
                        <Image
                            style={{width: 40,height: 40}}
                            source={require('./Images/touxiang.jpg')}
                        />
                    </View>
                    <View style={{
                        flex: 1,
                        backgroundColor: 'yellow',
                        marginLeft: 5,
                        justifyContent:'space-around'}}>
                        <Text style={{fontSize: 18,fontWeight: 'bold'}}>
                            育知同创
                        </Text>
                        <Text style={{fontSize: 14}}>
                            匠心品质
                        </Text>
                    </View>
                </View>
                <View style={styles.line}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    textInput: {
        marginTop: 30,
        fontSize: 14,
        height: 30,
        backgroundColor: '#EAEAEA',
        marginBottom: 5
    },
    listView: {
        flex: 1,
        backgroundColor: 'white'
    },
    cellStyle: {
        height: 65,
        backgroundColor: 'white'
    },
    infoView: {
        flex: 1,
        backgroundColor: '#333333',
        flexDirection: 'row'
    },
    line: {
        marginLeft: 10,
        marginRight: 10,
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.1)'
    }
});


AppRegistry.registerComponent('YZNodeForReactNative', () => GithubFinder);






