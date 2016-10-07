/**
 * Created by lucien on 16/10/6.
 */

import React, {Component} from 'react';
import  {
    View,
    StyleSheet,
    Text
} from 'react-native';

let Dimensions = require('Dimensions');
let SCREEN_WIDTH = Dimensions.get('window').width;

export default class TopView extends Component {
    render() {
        return (
            <View style={styles.topView}>
                <Text style={[styles.base, {color: 'red'}]}>網易</Text>
                <Text style={[styles.base,{color: 'white',backgroundColor:"red"}]}>新闻</Text>
                <Text style={[styles.base, {fontWeight: 'bold'}]}>有态度</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topView: {
        width: SCREEN_WIDTH,
        height: 80,
        backgroundColor:'white',
        borderBottomColor: 'red',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    base: {
        fontSize: 30,
        textAlign: 'center'
    }
});

// export default TopView;s