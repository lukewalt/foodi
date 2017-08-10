import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import store from './store';

export default class foodi extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }

}

AppRegistry.registerComponent('foodi', () => foodi);
