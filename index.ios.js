import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import AppContainer from './containers/AppContainer';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware,),
  );
  return createStore(reducer, initialState, enhancer);
}

// create the store
const store = configureStore({});

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
