import React, { Component } from 'react';
import ReactNative, { Text, View, TouchableHighlight, ScrollView, TextInput, Image } from 'react-native';
import styles from '../styles/styles';
import { connect } from 'react-redux';
import {searchedRecipes} from '../reducers/index';

class Home extends Component {

  _addRecipe() {
    this.props.addRecipe();
  }

  _searchPressed(){
    this.props.fetchRecipes('bacon, cucumber, banana')
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>FOODIE</Text>
        <TextInput></TextInput>
        <Text style={styles.subTitle}>Recipe Count: {this.props.recipeCount}</Text>
        <TouchableHighlight underlayColor='pink' style={styles.button} onPress={() =>  this._searchPressed() }>
          <Text style={styles.colorTwo}>SEARCH</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='pink' style={styles.button} onPress={() => this._addRecipe()}>
          <Text style={styles.colorTwo}>ADD</Text>
        </TouchableHighlight>
        <ScrollView>
        </ScrollView>
      </View>
    )
  }

}

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes
  }
}

export default connect(mapStateToProps)(Home)
