import React, { Component } from 'react';
import Home from '../components/Home'
import { connect } from 'react-redux';
import { ActionCreators } from '../actions'
import { bindActionCreators } from 'redux';

class AppContainer extends Component {

  render(){
    return ( <Home {...this.props} /> )
  }

}

// sends actions to entire application
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

// passes in global state of app to map portions of state to mapDispatchToProps
export default connect( state => { return {} }, mapDispatchToProps)(AppContainer);
