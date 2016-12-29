/**
 * Created by tfn on 16-12-27.
 */

import React, {Component} from 'react';
import {
    View,
    WebView,
    Platform,
    BackAndroid,
} from 'react-native';

export default class MyWebView extends Component {

    componentDidMount() {
        let {navigator} = this.props;
        BackAndroid.addEventListener('hardwareBackPress', function () {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        });
    }

    componentDidUnMount() {
        BackAndroid.removeEventListener('hardwareBackPress');
    }

    render() {
        return (
            <View style={{flex:1,paddingTop:Platform.OS==='ios'?20:0}}>
                <WebView startInLoadingState={true}
                         javaScriptEnabled={true}
                         source={{uri:this.props.url,method:'GET'}}/>
            </View>
        );
    }
}