/**
 * Created by tfn on 16-12-26.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Header from './Header';
import HomePage from './home/HomePage';

const HOME = 'home';
const HOME_NORMAL = require('./images/tabs/home_normal.png');
const HOME_FOCUS = require('./images/tabs/home_focus.png');
const CATEGORY = 'category';
const CATEGORY_NORMAL = require('./images/tabs/category_normal.png');
const CATEGORY_FOCUS = require('./images/tabs/category_focus.png');
const FAXIAN = 'faxian';
const FAXIAN_NORMAL = require('./images/tabs/faxian_normal.png');
const FAXIAN_FOCUS = require('./images/tabs/faxian_focus.png');
const CART = 'cart';
const CART_NORMAL = require('./images/tabs/cart_normal.png');
const CART_FOCUS = require('./images/tabs/cart_focus.png');
const PERSONAL = 'personal';
const PERSONAL_NORMAL = require('./images/tabs/personal_normal.png');
const PERSONAL_FOCUS = require('./images/tabs/personal_focus.png');

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this._renderTabItem = this._renderTabItem.bind(this);
        this._createChildView = this._createChildView.bind(this);
        this.state = {
            selectedTab: HOME,
        };
    }

    render() {
        return (<View style={styles.container}>
            <Header/>
            <TabNavigator hidesTabTouch={false} tabBarStyle={styles.tab}>
                {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, this._createChildView(HOME))}
                {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY, this._createChildView(CATEGORY))}
                {this._renderTabItem(FAXIAN_NORMAL, FAXIAN_FOCUS, FAXIAN, this._createChildView(FAXIAN))}
                {this._renderTabItem(CART_NORMAL, CART_FOCUS, CART, this._createChildView(CART))}
                {this._renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL, this._createChildView(PERSONAL))}
            </TabNavigator>
        </View>);
    }

    _renderTabItem(defaultImg, selectedImg, tag, childView) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                renderIcon={() => <Image style={styles.tabIcon} source={defaultImg}/>}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={() => this.setState({ selectedTab: tag })}>
                {childView}
            </TabNavigator.Item>
        );
    }

    _createChildView(tag) {

        let color = '#00baff';
        switch (tag) {
            case HOME:
                color = '#00baff';
                break;
            case CATEGORY:
                color = '#0Fb1ff';
                break;
            case FAXIAN:
                color = '#F01aff';
                break;
            case CART:
                color = '#C0bD1f';
                break;
            case PERSONAL:
                color = '#A5b8f2';
                break;
        }

        if (tag !== HOME) {
            return (
                <View style={{flex:1,backgroundColor:color,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:22}}>{tag}</Text>
                </View>
            );
        } else {
            let {navigator} = this.props;
            return (<HomePage navigator={navigator}/>);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tab: {
        height: 52,
        backgroundColor: '#333333',
        alignItems: 'center'
    },
    tabIcon: {
        width: 30,
        height: 35,
        resizeMode: 'stretch',
        marginTop: 10
    },
});