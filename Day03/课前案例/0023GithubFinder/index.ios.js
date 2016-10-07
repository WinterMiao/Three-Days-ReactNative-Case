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


var BASE_URL = 'https://api.github.com/search/repositories?q=';


class GithubFinder extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        };
    }



    endSearchContent(event) {

        var searchContent = event.nativeEvent.text.toLowerCase();

        var searchURL = BASE_URL + encodeURIComponent(searchContent);

        fetch(searchURL)
            .then((hello) => hello.json())
            .then((responseData) => {
                if (responseData.items) {
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(responseData.items)
                    });
                }
            }).done();
    }


    render() {

        var content = this.state.dataSource.getRowCount() === 0?
                    <View style={{marginTop: 30}}>
                        <Text style={{fontSize: 16,color: 'green'}}>请输入你要搜索的内容以便查看结果</Text>
                    </View> :
                    <ListView
                        showsVerticalScrollIndicator={false}
                        style={styles.listView}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => this.renderRow(rowData)}
                    />;

        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <TextInput
                    style={styles.textInput}
                    placeholder='please search in here'
                    onEndEditing={(event) => this.endSearchContent(event)}
                />
                {content}
            </View>

        )
    }

    //自定义cell
    renderRow(rowData: Object) {
        console.log(rowData);
        return (
            <View style={styles.cellStyle}>
                <View style={styles.infoView}>
                    <View style={{width: 65,height: 65,justifyContent: 'center',alignItems: 'center'}}>
                        <Image
                            style={{width: 40,height: 40}}
                            source={{uri: rowData.owner.avatar_url}}
                        />
                    </View>
                    <View style={{
                        flex: 1,
                        backgroundColor: 'white',
                        marginLeft: 5,
                        justifyContent:'space-around'}}>
                        <Text style={{fontSize: 18,fontWeight: 'bold'}}>
                            {rowData.owner.login}
                        </Text>
                        <Text style={{fontSize: 14}}>
                            {rowData.owner.type}
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
        backgroundColor: 'white',
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
