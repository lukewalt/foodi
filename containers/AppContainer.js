import React, { Component } from 'react';
import ReactNative, { Text, View, TouchableHighlight } from 'react-native';
import styles from '../styles/styles';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions'
import { bindActionCreators } from 'redux';

class AppContainer extends Component {

  _addRecipe() {
    this.props.addRecipe();
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>FOODIE</Text>
        <Text style={styles.subTitle}>Recipe Count: {this.props.recipeCount}</Text>
        <TouchableHighlight underlayColor='pink' style={styles.button} onPress={() => { this._addRecipe() }}>
          <Text style={styles.colorTwo}>ADD RECIPE</Text>
        </TouchableHighlight>
      </View>
    )
  }

}

// sends actions to entire application
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

// passes in global state of app to map portions of state to mapDispatchToProps
export default connect( state => {
    return {
      recipeCount: state.recipeCount
    }
  }, mapDispatchToProps)(AppContainer);
