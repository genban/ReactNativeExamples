// ItemCell.js
// XIAOBIN on 16/8/25.

import React from 'react';
import ReactNative from 'react-native';

import StarStyles from '../StarStyles'

const {Component, PropTypes} = React;
const {Image, Text, View, TouchableHighlight}=ReactNative;

class ItemCell extends Component {

    render() {
        return <TouchableHighlight onPress={this.props.onSelect}>
            <View style={StarStyles.container}>
                <Image source={{uri: this.props.item.owner.avatar_url}} style={StarStyles.thumbnail}/>
                <View style={StarStyles.rightContainer}>
                    <Text style={StarStyles.title}>{this.props.item.name}</Text>
                    <Text style={StarStyles.owner}>{this.props.item.owner.login}</Text>
                    <Text style={StarStyles.stars}>{this.props.item.stargazers_count}</Text>
                </View>
            </View>
        </TouchableHighlight>
    }

}

export default ItemCell; 