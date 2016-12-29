/**
 * Created by tfn on 16-12-27.
 */

import React, {
    Component,
    PropTypes
} from 'react';

import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';

export default class MenuButton extends Component {

    static propTypes = {
        renderIcon: PropTypes.number.isRequired,  // 图片,isRequired即为必填项
        showText: PropTypes.string,  // 显示标题\文字
        tag: PropTypes.string,  // Tag
        onClick: PropTypes.func,  // 回调函数
    };

    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);
    }

    _onClick() {
        if (this.props.onClick) {
            this.props.onClick(this.props.showText, this.props.tag);  // 回调Title和Tag
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._onClick}>
                <View style={{alignItems:'center',flex:1}}>
                    <Image style={styles.iconImg} source={this.props.renderIcon}/>
                    <Text style={styles.showText}>{this.props.showText}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    iconImg: {
        width: 38,
        height: 38,
        marginBottom: 2
    },
    showText: {
        fontSize: 12
    },
});
