/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
} from 'react-native';

import MainScreen from './MainScreen';
import MyWebView from './MyWebView';

export default class MockJDApp extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{id:'main'}}
                renderScene={(route,navigator) => {
                    switch (route.id) {
                        case 'main':
                            return (<MainScreen navigator={navigator}/>);
                        case 'webview':
                            return (<MyWebView url={route.url} navigator={navigator}/>);
                    }
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('MockJDApp', () => MockJDApp);
