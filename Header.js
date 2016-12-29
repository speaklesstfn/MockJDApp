/**
 * Created by tfn on 16-12-26.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    TextInput,
} from 'react-native';

export default class Header extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./images/header/header_logo.png')} style={styles.logo}/>
                <View style={styles.searchBox}>
                    <Image source={require('./images/header/icon_search.png')} style={styles.searchIcon}/>

                    <TextInput
                        style={styles.inputText}
                        placeholder={'搜索京东商品/店铺'}
                        underlineColorAndroid={'transparent'}
                    />
                    <Image source={require('./images/header/icon_voice.png')} style={styles.voiceIcon}/>
                </View>
                <Image source={require('./images/header/icon_qr.png')} style={styles.scanIcon}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        height: 48,
        backgroundColor: '#D74047',
        alignItems: 'center',
    },
    logo: {
        width: 64,
        height: 24,
        resizeMode: 'stretch',
    },
    searchBox: {
        flex: 1,//设置为1则自动拉伸
        flexDirection: 'row',
        height: 30,
        borderRadius: 5,
        backgroundColor: 'white',
        marginLeft: 8,
        marginRight: 12,
        alignItems: 'center',
    },
    searchIcon: {
        marginLeft: 6,
        marginRight: 6,
        width: 16.7,
        height: 16.7,
        resizeMode: 'stretch',
    },
    touchable: {
        flex: 1,
    },
    inputText: {
        flex: 1,
        backgroundColor: 'transparent',
        fontSize: 14,
        paddingTop: 1,
        paddingBottom: 1,
    },
    voiceIcon: {
        marginLeft: 5,
        marginRight: 8,
        width: 15,
        height: 20,
        resizeMode: 'stretch',
    },
    scanIcon: {
        width: 26.7,
        height: 26.7,
        resizeMode: 'stretch',
    },
});