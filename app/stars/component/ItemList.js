// ItemList.js
// XIAOBIN on 16/8/25.

import React from 'react';
import ReactNative from 'react-native';

import ItemCell from './ItemCell'
import StarStyles from '../StarStyles';

const {Component, PropTypes} = React;
const {ListView, Text, View, WebView}=ReactNative;

const REQUEST_URL = 'https://api.github.com/search/repositories?q=react+native&sort=stars&order=desc';

class ItemList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 != row2})
        }
    }

    componentDidMount() {
        this.fetchReactNativeStars()
    }


    fetchReactNativeStars() {
        fetch(REQUEST_URL).then(response => response.json())
            .then(data => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(data.items),
                    loaded: true,
                });
            }).done()
    }

    renderLoadingView() {
        return <View style={StarStyles.container}><Text>Loading ...</Text></View>
    }


    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView()
        }
        return <ListView style={StarStyles.listView} dataSource={this.state.dataSource}
                         renderRow={item => this.handleRenderItemView(item)}/>
    }

    handleRenderItemView(item) {
        return <ItemCell item={item} onSelect={() => this.handleSelectItem(item)}/>
    }

    handleSelectItem(item) {
        this.props.navigator.push({
            title: item.full_name,
            component: WebView,
            passProps: {source: {uri: item.html_url}},
        });
    }

}

export default ItemList; 