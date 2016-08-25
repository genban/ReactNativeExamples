import React from 'react';
import ReactNative from 'react-native';

const {Component, PropTypes} = React;
const {NavigatorIOS}  = ReactNative;

import ItemList from './component/ItemList';
import  StarStyles from './StarStyles'

class ReactNativeStars extends Component {

    render() {

        const defaultRouteConfig = {
            title: "React Native Stars",
            component: ItemList,
            backButtonTitle: "Back",
        };

        return <NavigatorIOS style={StarStyles.navigator} initialRoute={defaultRouteConfig}/>
    }

}

export default ReactNativeStars;