import React from 'react';
import {BackHandler, Text} from 'react-native';

import {Root, StyleProvider} from 'native-base';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import {Provider, connect} from 'react-redux';
import {search} from './states/search';
import {toast} from './states/toast';
import {post, postForm, postItem} from './states/post-reducers';

import {createStackNavigator, StackNavigator, NavigationActions} from 'react-navigation';
import {createReactNavigationReduxMiddleware, createReduxContainer, createNavigationReducer} from 'react-navigation-redux-helpers';
import TodayScreen from './components/TodayScreen';
import PostFormScreen from './components/PostFormScreen';
import ForecastScreen from './components/ForecastScreen';

const AppNavigator = createStackNavigator({
    Today: {screen: TodayScreen},
    Forecast: {screen: ForecastScreen},
    PostForm: {screen: PostFormScreen}
}, {
    headerMode: 'none'
});

const navReducer = createNavigationReducer(AppNavigator);
const appReducer = {
    nav: navReducer,
    search, toast, post, postForm, postItem
};

const navigationMiddleware = createReactNavigationReduxMiddleware(
    state => state.nav,
);

const store = createStore(combineReducers(appReducer), 
    compose(applyMiddleware(thunkMiddleware, loggerMiddleware, navigationMiddleware)));

const AppNavigatorContainer = createReduxContainer(AppNavigator);

class AppWithStyleAndNavigator extends React.Component {
    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                <AppNavigatorContainer navigation={{
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                }}/>
            </StyleProvider>
        );
    }

    // componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress', () => {
    //         const {dispatch, nav} = this.props;
    //         if (nav.index === 0)
    //             return false;
    //         dispatch(NavigationActions.back())
    //         return true;
    //     });
    // }

    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress');
    // }
}

const AppWithNavState = connect(state => ({
    //nav: state.nav
    state: state.nav
}))(/*AppWithStyleAndNavigator*/AppNavigatorContainer);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
            {/* <Text>Welcome to React Native QQ!</Text>
            <Text>To get started, edit App.js</Text> */}
                <Root>
                <AppWithNavState/>
                </Root>
            </Provider>
        );
    }
}
